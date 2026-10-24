import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { contributionsData } from '@/constants';

const StatusBadge = ({ status, statusType }) => {
  const getBadgeClass = () => {
    switch (statusType) {
      case 'success':
        return 'badge-status-merged';
      case 'primary':
        return 'badge-status-maintainer';
      case 'info':
        return 'badge-status-pr';
      default:
        return 'badge-status-contributor';
    }
  };

  return (
    <span className={`contribution-status-badge ${getBadgeClass()}`}>
      <i className="bi bi-patch-check-fill me-1"></i>
      {status}
    </span>
  );
};

StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  statusType: PropTypes.string.isRequired,
};

const ContributionCard = ({ item, index }) => (
  <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay={index * 100}>
    <div className="contribution-card h-100 position-relative d-flex flex-column">
      <div className="contribution-header d-flex align-items-start justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="contribution-icon-box me-3">
            <i className={`bi ${item.icon}`}></i>
          </div>
          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="contribution-org">{item.org}</span>
              <span className="contribution-platform-tag">
                <i className={`bi ${item.platform === 'GitLab' ? 'bi-gitlab' : 'bi-github'} me-1`}></i>
                {item.platform}
              </span>
            </div>
            <h5 className="contribution-project mb-0">{item.project}</h5>
          </div>
        </div>
        <StatusBadge status={item.status} statusType={item.statusType} />
      </div>

      <h4 className="contribution-title">
        <Link to={`/contribution-details?id=${item.id}`} className="contribution-title-link">
          {item.title}
        </Link>
      </h4>
      <p className="contribution-description flex-grow-1">{item.description}</p>

      <div className="contribution-tech-tags d-flex flex-wrap gap-2 mb-3">
        {item.tech.map((tag) => (
          <span key={tag} className="contribution-tech-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="contribution-footer pt-3 d-flex align-items-center justify-content-between flex-wrap gap-2">
        <span className="contribution-ref small">
          <i className="bi bi-diagram-3 me-1"></i>
          {item.refText}
        </span>
        <div className="contribution-card-actions d-flex align-items-center gap-2">
          <Link
            to={`/contribution-details?id=${item.id}`}
            className="btn-contribution-action btn-contribution-details"
            aria-label={`View details for ${item.title}`}
          >
            <span>Details</span>
            <i className="bi bi-arrow-right ms-1"></i>
          </Link>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-contribution-action btn-contribution-upstream"
            aria-label={`View ${item.title} upstream on ${item.platform}`}
          >
            <span>Upstream</span>
            <i className="bi bi-arrow-up-right ms-1"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

ContributionCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    statusType: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    refText: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const Contributions = () => {
  const [stats, setStats] = useState(contributionsData.defaultStats);

  // Fetch real-time GitHub stats dynamically
  useEffect(() => {
    let isMounted = true;

    const fetchGitHubStats = async () => {
      try {
        const [userRes, reposRes, orgsRes, prsRes] = await Promise.allSettled([
          fetch('https://api.github.com/users/nikhilpal2705'),
          fetch('https://api.github.com/users/nikhilpal2705/repos?per_page=100'),
          fetch('https://api.github.com/users/nikhilpal2705/orgs'),
          fetch('https://api.github.com/search/issues?q=author:nikhilpal2705+type:pr'),
        ]);

        let publicRepos = 13;
        let totalStars = 22;
        let orgsCount = 3;
        let prsCount = 8;

        if (userRes.status === 'fulfilled' && userRes.value.ok) {
          const userData = await userRes.value.json();
          if (typeof userData.public_repos === 'number') {
            publicRepos = userData.public_repos;
          }
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const reposData = await reposRes.value.json();
          if (Array.isArray(reposData)) {
            totalStars = reposData.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
          }
        }

        if (orgsRes.status === 'fulfilled' && orgsRes.value.ok) {
          const orgsData = await orgsRes.value.json();
          if (Array.isArray(orgsData)) {
            orgsCount = Math.max(orgsData.length, 3);
          }
        }

        if (prsRes.status === 'fulfilled' && prsRes.value.ok) {
          const prsData = await prsRes.value.json();
          if (typeof prsData.total_count === 'number') {
            prsCount = prsData.total_count;
          }
        }

        if (isMounted) {
          setStats([
            { key: 'stars', value: `${totalStars}+`, label: 'GitHub Stars Earned', icon: 'bi-star-fill' },
            { key: 'prs', value: `${prsCount}+`, label: 'Pull Requests', icon: 'bi-patch-check-fill' },
            { key: 'commits', value: '500+', label: 'Commits Authored', icon: 'bi-git' },
            { key: 'repos', value: `${publicRepos}+`, label: 'Public Repositories', icon: 'bi-journal-code' },
            { key: 'orgs', value: `${orgsCount}`, label: 'Open Source Orgs', icon: 'bi-people-fill' },
          ]);
        }
      } catch {
        // Keep verified default stats on network error or rate limit
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="contributions" className="contributions section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Open Source Contributions</h2>
        <p>{contributionsData.mainSummary}</p>
      </div>

      <div className="container">
        {/* Real-time GitHub Overview Stats */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mb-5 justify-content-center" data-aos="fade-up" data-aos-delay="100">
          {stats.map((stat) => (
            <div key={stat.key} className="col">
              <div className="contribution-stat-card text-center p-3 h-100">
                <div className="contribution-stat-icon mb-2">
                  <i className={`bi ${stat.icon}`}></i>
                </div>
                <h3 className="contribution-stat-val mb-1">{stat.value}</h3>
                <p className="contribution-stat-lbl mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Contributions Cards Grid */}
        <div className="row gy-4">
          {contributionsData.contributions.map((item, index) => (
            <ContributionCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contributions;
