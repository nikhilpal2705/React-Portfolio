export const contributionsData = {
    mainSummary: "Active contributor and organization maintainer across Android custom ROM ecosystems, Linux kernel trees, desktop infrastructure, and open-source utilities.",
    defaultStats: [
        { key: "stars", value: "22+", label: "GitHub Stars Earned", icon: "bi-star-fill" },
        { key: "prs", value: "8+", label: "Pull Requests", icon: "bi-patch-check-fill" },
        { key: "commits", value: "500+", label: "Commits Authored", icon: "bi-git" },
        { key: "repos", value: "13+", label: "Public Repositories", icon: "bi-journal-code" },
        { key: "orgs", value: "3", label: "Open Source Orgs", icon: "bi-people-fill" }
    ],
    contributions: [
        {
            id: "realmeatoll",
            org: "realme-atoll",
            project: "realme-atoll / sm7125",
            title: "Unified Qualcomm SM7125 Android Trees & Linux 4.14 Kernel",
            description: "Maintained 18 repositories across unified device trees, hardware HAL overlays, Linux 4.14 kernel sources, and Crave cloud build scripts for Realme 6 Pro, 7 Pro, and 8 Pro.",
            status: "Org Maintainer",
            statusType: "primary",
            url: "https://github.com/realme-atoll",
            platform: "GitHub",
            icon: "bi-motherboard",
            tech: ["Android OS", "Linux Kernel", "C / C++", "Bash", "AOSP"],
            refText: "Organization Maintainer • 18 Repositories"
        },
        {
            id: "motorolamotog3",
            org: "motorolamotog3",
            project: "motorolamotog3 / osprey",
            title: "Motorola Moto G3 (Osprey) Custom ROM & Kernel Trees",
            description: "Maintained device trees, MSM8916 common HAL, proprietary vendor blobs, and Linux kernel sources for Moto G3, supporting AOSiP and XenonHD custom Android distributions.",
            status: "Org Maintainer",
            statusType: "primary",
            url: "https://github.com/motorolamotog3",
            platform: "GitHub",
            icon: "bi-cpu",
            tech: ["AOSP", "Linux Kernel", "Qualcomm MSM8916", "Makefile", "C"],
            refText: "Organization Maintainer • 5 Repositories"
        },
        {
            id: "samsungsduos2",
            org: "samsungsduos2",
            project: "samsungsduos2 / kyleproxx",
            title: "Samsung Galaxy S Duos 2 (GT-S7582) AOSP Bringup",
            description: "Contributed device tree configurations, proprietary Broadcom vendor files, and kernel patches for GT-S7582 (kyleprods/kyleproxx), enabling modern custom Android ROM builds on legacy hardware.",
            status: "Core Contributor",
            statusType: "success",
            url: "https://github.com/samsungsduos2",
            platform: "GitHub",
            icon: "bi-phone",
            tech: ["Android OS", "Broadcom HAL", "Linux Kernel", "Device Tree"],
            refText: "Organization Maintainer • 3 Repositories"
        },
        {
            id: "uad",
            org: "0x192",
            project: "universal-android-debloater",
            title: "Oppo & Realme ColorOS/RealmeUI Safe Debloat Definitions",
            description: "Contributed PR #359 defining safe bloatware removal lists and safety ratings for ColorOS and RealmeUI packages in one of GitHub's most popular Android debloating utilities (14k+ stars).",
            status: "Merged",
            statusType: "success",
            url: "https://github.com/0x192/universal-android-debloater/pull/359",
            platform: "GitHub",
            icon: "bi-shield-check",
            tech: ["Android OS", "JSON", "Package Manager", "Bash"],
            refText: "Pull Request #359 • Merged Upstream"
        },
        {
            id: "gnome",
            org: "GNOME Foundation",
            project: "GNOME / libgweather",
            title: "Indian Cities Weather Mapping & METAR Station Support",
            description: "Authored GitLab MR !347 adding missing Indian cities and METAR aviation weather stations to GNOME's core desktop weather library, resolving 4 upstream bug tracker issues (#281, #253, #203, #284).",
            status: "Upstream MR",
            statusType: "info",
            url: "https://gitlab.gnome.org/GNOME/libgweather/-/merge_requests/347",
            platform: "GitLab",
            icon: "bi-cloud-sun",
            tech: ["C", "XML", "METAR", "GitLab CI"],
            refText: "GitLab Merge Request !347"
        },
        {
            id: "userge",
            org: "UsergeTeam",
            project: "Userge / Plugins",
            title: "Asynchronous Modular Userbot Plugins & Automation",
            description: "Developed custom modular plugins, asynchronous background workers, and workflow automation extensions for the Python-based Userge modular userbot platform.",
            status: "Contributor",
            statusType: "secondary",
            url: "https://github.com/nikhilpal2705/Userge",
            platform: "GitHub",
            icon: "bi-robot",
            tech: ["Python", "AsyncIO", "Telethon", "Telegram API"],
            refText: "Modular Python Plugin Extensions"
        }
    ]
};

export const contributionsDetailData = {
    realmeatoll: {
        role: "Organization Member & Maintainer",
        org: "realme-atoll",
        platform: "GitHub",
        status: "Org Maintainer",
        statusType: "primary",
        refText: "Organization Maintainer • 18 Repositories",
        techUsed: [
            { name: 'Android OS', icon: 'devicon-android-plain' },
            { name: 'Linux Kernel', icon: 'devicon-linux-plain' },
            { name: 'C / C++', icon: 'devicon-cplusplus-plain' },
            { name: 'Bash', icon: 'devicon-bash-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        contributionDate: '2023 - Present',
        upstreamURL: 'https://github.com/realme-atoll',
        contributionURL: 'https://github.com/realme-atoll/android_device_realme_RMX2170',
        contributionDescription: [
            'realme-atoll is an open-source development organization maintaining unified Android trees, vendor proprietary blobs, and Linux 4.14 kernel sources for Qualcomm Snapdragon 720G (SM7125 / Atoll) devices.',
            'As an active member and lead contributor with 96+ commits, I maintain device repositories, HAL interfaces, and automated cloud compilation pipelines.',
            'The organization unifies codebase configurations across the Realme 6 Pro (RMX2061), Realme 7 Pro (RMX2170), and Realme 8 Pro (RMX3081), enabling clean custom AOSP ROMs and OrangeFox Recovery builds.',
            'Implemented automated Crave cloud CI/CD scripts to build and test unified Android trees on high-performance cloud runners.'
        ],
        keyContributions: {
            "Realme 7 Pro Device Tree": "Authored and maintained comprehensive device tree configs covering display, audio, biometric sensors, and thermal profiles.",
            "Unified Atoll Common Tree": "Engineered common HAL and hardware configurations shared cleanly across the entire Snapdragon 720G lineup.",
            "Linux 4.14 Unified Kernel": "Contributed driver patches, touch firmware fixes, and memory management optimizations to the unified kernel source.",
            "Crave Cloud Automation": "Developed automated shell build pipelines for seamless compilation on remote builder environments."
        },
        upstreamImpact: "Provides reliable, up-to-date custom Android distributions, bug fixes, and continuous recovery support for thousands of Snapdragon 720G device owners worldwide."
    },
    motorolamotog3: {
        role: "Organization Member & Maintainer",
        org: "motorolamotog3",
        platform: "GitHub",
        status: "Org Maintainer",
        statusType: "primary",
        refText: "Organization Maintainer • 5 Repositories",
        techUsed: [
            { name: 'AOSP', icon: 'devicon-android-plain' },
            { name: 'Linux Kernel', icon: 'devicon-linux-plain' },
            { name: 'Qualcomm MSM8916', icon: 'devicon-c-plain' },
            { name: 'Makefile', icon: 'devicon-bash-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        contributionDate: '2017 - Present',
        upstreamURL: 'https://github.com/motorolamotog3',
        contributionURL: 'https://github.com/motorolamotog3/device_motorola_osprey',
        contributionDescription: [
            'motorolamotog3 is an open-source development organization dedicated to custom Android distributions, kernel development, and hardware bringup for the Motorola Moto G3 (Osprey / MSM8916).',
            'Maintained 5 core repositories comprising the device tree, common Qualcomm MSM8916 hardware abstraction layers, proprietary vendor binaries, and the Linux kernel source.',
            'Integrated build configurations for popular custom ROM distributions including AOSiP (Android Open Source illusion Project) and XenonHD, ensuring stable daily-driver operation for community users.'
        ],
        keyContributions: {
            "Osprey Device Tree": "Configured board specifications, display overlays, power profiles, and sensor drivers.",
            "MSM8916 Common HAL": "Maintained common Qualcomm platform drivers shared across Motorola Snapdragon 410 devices.",
            "Kernel Optimization": "Patched CPU frequency governors, thermal thresholds, and memory management in the Linux kernel.",
            "Vendor Blob Integration": "Extracted and structured proprietary camera, radio interface layer, and GPS binaries."
        },
        upstreamImpact: "Extended the lifecycle of Motorola Moto G3 devices by delivering modern, bloat-free Android releases with community-backed security updates."
    },
    samsungsduos2: {
        role: "Organization Member & Maintainer",
        org: "samsungsduos2",
        platform: "GitHub",
        status: "Core Contributor",
        statusType: "success",
        refText: "Organization Maintainer • 3 Repositories",
        techUsed: [
            { name: 'Android OS', icon: 'devicon-android-plain' },
            { name: 'Broadcom HAL', icon: 'devicon-c-plain' },
            { name: 'Linux Kernel', icon: 'devicon-linux-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        contributionDate: '2017 - Present',
        upstreamURL: 'https://github.com/samsungsduos2',
        contributionURL: 'https://github.com/samsungsduos2/android_device_samsung_kyleprods',
        contributionDescription: [
            'samsungsduos2 is an open-source community organization established to bring AOSP and custom Android firmware to the Samsung Galaxy S Duos 2 (GT-S7582 / kyleprods / kyleproxx).',
            'Overcame significant hardware challenges associated with legacy Broadcom chipsets by authoring custom device trees, reverse-engineering proprietary blobs, and patching the Linux kernel.',
            'Enabled smooth bootup, dual-SIM telephony support, Wi-Fi connectivity, and graphics acceleration on custom ROM builds.'
        ],
        keyContributions: {
            "GT-S7582 Device Tree": "Built the complete AOSP device configuration for the dual-SIM Galaxy S Duos 2.",
            "Kernel Source Backports": "Backported critical security patches, binder updates, and low-memory killer adjustments.",
            "Broadcom Vendor Blob Packaging": "Organized and patched proprietary audio, baseband RIL, and sensor libraries."
        },
        upstreamImpact: "Revitalized legacy Samsung hardware, enabling thousands of hobbyists and developers to run modern custom ROMs on low-resource hardware."
    },
    uad: {
        role: "Upstream Contributor",
        org: "0x192 / universal-android-debloater",
        platform: "GitHub",
        status: "Merged",
        statusType: "success",
        refText: "Pull Request #359 • Merged Upstream",
        techUsed: [
            { name: 'Android OS', icon: 'devicon-android-plain' },
            { name: 'JSON', icon: 'devicon-javascript-plain' },
            { name: 'Bash', icon: 'devicon-bash-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        contributionDate: 'November 2022',
        upstreamURL: 'https://github.com/0x192/universal-android-debloater',
        contributionURL: 'https://github.com/0x192/universal-android-debloater/pull/359',
        contributionDescription: [
            'Universal Android Debloater (UAD) is one of GitHub’s most popular open-source Android tools (with over 14,000 stars), designed to safely remove vendor bloatware, telemetry, and unneeded system apps without root access.',
            'Authored Pull Request #359, which added comprehensive debloat definitions and safety ratings for Oppo and Realme system applications running ColorOS and RealmeUI.',
            'The definitions categorize packages based on dependency safety (Recommended vs. Advanced), preventing device bootloops while improving battery life and user privacy.',
            'The PR was reviewed and merged upstream directly into the production UAD package database.'
        ],
        keyContributions: {
            "ColorOS & RealmeUI Coverage": "Identified and cataloged telemetry, analytics, game space, and redundant browser apps specific to ColorOS and RealmeUI.",
            "Safety Classification": "Assigned precise removal levels (Recommended, Advanced, Unsafe) to ensure core telephony and sensor features remain uninterrupted.",
            "Upstream PR #359": "Formally merged into master, shipping to tens of thousands of active UAD desktop application users."
        },
        upstreamImpact: "Directly benefits thousands of Android users by allowing safe, one-click debloating of Oppo and Realme devices without technical risk."
    },
    gnome: {
        role: "Upstream Contributor",
        org: "GNOME Foundation",
        platform: "GitLab",
        status: "Upstream MR",
        statusType: "info",
        refText: "GitLab Merge Request !347",
        techUsed: [
            { name: 'C', icon: 'devicon-c-plain' },
            { name: 'XML', icon: 'devicon-html5-plain' },
            { name: 'Linux', icon: 'devicon-linux-plain' },
            { name: 'GitLab', icon: 'devicon-gitlab-plain' },
        ],
        contributionDate: 'April 2025',
        upstreamURL: 'https://gitlab.gnome.org/GNOME/libgweather',
        contributionURL: 'https://gitlab.gnome.org/GNOME/libgweather/-/merge_requests/347',
        contributionDescription: [
            'LibGWeather is the central weather data and location library utilized by the GNOME desktop environment, powering GNOME Weather, the top-bar clock widget, and regional timezone detection across Linux distributions.',
            'Authored Merge Request !347 on GNOME GitLab to add major Indian cities with their precise geographical coordinates, timezone offsets, and METAR aviation weather station mappings.',
            'Directly addressed and resolved multiple open upstream bug reports (#281, #253, #203, #284) where users in these regions could not access local weather telemetry in GNOME shell.',
            'Ensured full compliance with GNOME’s strict Locations.xml DTD schema validation and automated GitLab CI test pipelines.'
        ],
        keyContributions: {
            "Indian Cities Weather Integration": "Added missing regional cities with verified lat/long coordinates and timezone hints (Asia/Kolkata).",
            "METAR Station Mapping": "Linked nearest active airport weather stations for real-time atmospheric telemetry.",
            "Bug Tracker Resolutions": "Fixed upstream community issue tickets #281, #253, #203, and #284.",
            "CI Schema Validation": "All XML location definitions passed strict automated GNOME CI verification."
        },
        upstreamImpact: "Enables millions of Linux users running Fedora, Ubuntu, Debian, and Arch with GNOME to have instant, accurate native weather and time tracking in their locale."
    },
    userge: {
        role: "Open Source Contributor",
        org: "UsergeTeam",
        platform: "GitHub",
        status: "Contributor",
        statusType: "secondary",
        refText: "Modular Python Plugin Extensions",
        techUsed: [
            { name: 'Python', icon: 'devicon-python-plain' },
            { name: 'AsyncIO', icon: 'devicon-python-plain' },
            { name: 'Telegram API', icon: 'devicon-fastapi-plain' },
            { name: 'Git', icon: 'devicon-git-plain' },
        ],
        contributionDate: '2020 - Present',
        upstreamURL: 'https://github.com/UsergeTeam/Userge',
        contributionURL: 'https://github.com/nikhilpal2705/Userge',
        contributionDescription: [
            'Userge is a powerful, asynchronous modular Telegram userbot written in Python 3 using the Telethon library, designed to automate messaging workflows, data fetching, and channel management.',
            'Contributed modular plugin scripts, command handlers, and asynchronous utility routines that enhance user productivity without blocking the main event loop.',
            'Maintained custom automation extensions for automated backup, system diagnostics, and file management.'
        ],
        keyContributions: {
            "Asynchronous Event Handlers": "Built non-blocking command listeners leveraging Python AsyncIO and Telethon.",
            "Modular Plugin Architecture": "Structured plugins for dynamic on-the-fly loading and hot-reloading.",
            "Automation Pipelines": "Implemented scheduled channel cleanup, media processing, and automated webhook dispatchers."
        },
        upstreamImpact: "Provides flexible, modular task automation for Telegram power users and community managers."
    }
};

