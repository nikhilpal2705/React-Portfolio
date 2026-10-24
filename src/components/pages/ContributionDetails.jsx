import PropTypes from 'prop-types';
import { Link, useSearchParams } from 'react-router-dom';
import { contributionsData, contributionsDetailData } from '@/constants';

const getContributionMeta = (contributionId) =>
  contributionsData.contributions.find((item) => item.id === contributionId);

// Subcomponent for Status Badge
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

// Subcomponent for Hero Card (spec/content focused without image thumbnail)
const ContributionHero = ({ meta, details }) => (
  <div className="project-hero-card">
    <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-2">
      <span className="project-hero-eyebrow mb-0">
        <i className={`bi ${details.platform === 'GitLab' ? 'bi-gitlab' : 'bi-github'} me-1`}></i>
        {details.org} • {details.platform}
      </span>
      <StatusBadge status={details.status} statusType={details.statusType} />
    </div>

    <div className="project-hero-copy mt-2">
      <h2>{meta?.title ?? details.org}</h2>
      <p>{meta?.description ?? details.contributionDescription[0]}</p>
    </div>

    <div className="project-hero-actions mt-3">
      {details.contributionURL && (
        <a
          href={details.contributionURL}
          className="btn-visit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Contribution</span>
          <i className="bi bi-arrow-up-right ms-2"></i>
        </a>
      )}
      {details.upstreamURL && (
        <a
          href={details.upstreamURL}
          className="btn-source"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Upstream Organization</span>
          <i className="bi bi-box-arrow-up-right ms-2"></i>
        </a>
      )}
    </div>
  </div>
);

ContributionHero.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  details: PropTypes.shape({
    org: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    statusType: PropTypes.string.isRequired,
    contributionURL: PropTypes.string,
    upstreamURL: PropTypes.string,
    contributionDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

ContributionHero.defaultProps = {
  meta: null,
};

// Subcomponent for Contribution Metadata Panel
const ContributionInfo = ({ details }) => (
  <div className="portfolio-info project-info-panel">
    <h3>Contribution Information</h3>
    <ul className="project-info-list">
      <li>
        <strong>Technologies & Tools:</strong>
        <div className="tech-used">
          {details.techUsed.map((tech) => (
            <span key={tech.name} className="tech-tag">
              <i className={`${tech.icon} tech-icon`}></i>
              {tech.name}
            </span>
          ))}
        </div>
      </li>
      <li>
        <strong>Role / Position:</strong>
        <span>{details.role}</span>
      </li>
      <li>
        <strong>Timeline / Period:</strong>
        <span>{details.contributionDate}</span>
      </li>
      <li>
        <strong>Scope & Repositories:</strong>
        <span>{details.refText}</span>
      </li>
      {details.upstreamURL && (
        <li className="text-wrap">
          <strong>Upstream Target:</strong>
          <a href={details.upstreamURL} target="_blank" rel="noopener noreferrer">
            {details.upstreamURL}
          </a>
        </li>
      )}
      {details.contributionURL && (
        <li className="text-wrap">
          <strong>Direct Resource URL:</strong>
          <a href={details.contributionURL} target="_blank" rel="noopener noreferrer">
            {details.contributionURL}
          </a>
        </li>
      )}
    </ul>
  </div>
);

ContributionInfo.propTypes = {
  details: PropTypes.shape({
    role: PropTypes.string.isRequired,
    contributionDate: PropTypes.string.isRequired,
    refText: PropTypes.string.isRequired,
    upstreamURL: PropTypes.string,
    contributionURL: PropTypes.string,
    techUsed: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

// Subcomponent for Detailed Scope & Impact
const ContributionDescription = ({ details }) => (
  <div className="portfolio-description">
    <div>
      <h2 className="mb-3">Overview & Context</h2>
      {details.contributionDescription.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>

    {details.keyContributions && (
      <div className="mt-4">
        <h2 className="mb-3">Key Responsibilities & Deliverables</h2>
        <ul>
          {Object.entries(details.keyContributions).map(([item, desc]) => (
            <li key={item}>
              <i className="bi bi-check-circle"></i>
              <span>
                <strong>{item}:</strong>
                <span className="ms-1">{desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {details.upstreamImpact && (
      <div className="mt-4 p-3 rounded-4 contribution-impact-panel">
        <h3 className="h5 mb-2 d-flex align-items-center gap-2">
          <i className="bi bi-award text-accent"></i>
          <span>Upstream Ecosystem Impact</span>
        </h3>
        <p className="mb-0">{details.upstreamImpact}</p>
      </div>
    )}
  </div>
);

ContributionDescription.propTypes = {
  details: PropTypes.shape({
    contributionDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
    keyContributions: PropTypes.objectOf(PropTypes.string),
    upstreamImpact: PropTypes.string,
  }).isRequired,
};

// Page Title Layout Component
const PageTitle = ({ children }) => (
  <main className="detail">
    <div className="page-title" data-aos="fade">
      <div className="container">
        <nav className="breadcrumbs">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#contributions">Contributions</Link>
            </li>
            <li className="current">Contribution Details</li>
          </ol>
        </nav>
        <h1>Contribution Details</h1>
      </div>
    </div>
    <section id="contribution-details" className="portfolio-details section">
      {children}
    </section>
  </main>
);

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

// Fallback Component when contribution ID is not found
const ContributionNotFound = () => (
  <PageTitle>
    <div
      className="container d-flex flex-column align-items-center justify-content-center"
      data-aos="fade"
    >
      <h4>Contribution Not Found</h4>
      <Link to="/#contributions" className="btn-visit mt-3">
        Back to Contributions
      </Link>
    </div>
  </PageTitle>
);

const ContributionDetails = () => {
  const [searchParams] = useSearchParams();
  const contributionId = searchParams.get('id');

  const contributionInfo = contributionsDetailData[contributionId];
  const contributionMeta = getContributionMeta(contributionId);

  if (!contributionInfo) {
    return <ContributionNotFound />;
  }

  return (
    <PageTitle>
      <div className="container project-details-wrap" data-aos="fade-up">
        {/* Spec / Content-First Hero (No Image Thumbnail) */}
        <ContributionHero meta={contributionMeta} details={contributionInfo} />

        {/* Metadata Specs Panel */}
        <div className="mt-4" data-aos="fade-up" data-aos-delay="50">
          <ContributionInfo details={contributionInfo} />
        </div>

        {/* Technical Description & Impact */}
        <div className="mt-4 project-detail-layout" data-aos="fade-up" data-aos-delay="100">
          <ContributionDescription details={contributionInfo} />
        </div>
      </div>
    </PageTitle>
  );
};

export default ContributionDetails;
