// Explicit Project Interface Model 
interface ProjectItem {
  id: string;
  title: string;
  kicker: string;
  description: string;
  impactMetrics: string;
  tags: string[];
  imagePath: string;
  liveUrl: string;
  sourceUrl: string;
  liveLabel?: string;
  sourceLabel?: string;
}

// Production-Grade Curated Flagship Projects
const PROJECT_COLLECTION: ProjectItem[] = [
  {
    id: "ketari-ai",
    title: "KETARI AI — Intelligent Recruitment Platform",
    kicker: "Government Agency Production Experience",
    description: "Engineered an enterprise recruitment automation engine at Sidama Technology & Innovation Agency. Replaced multi-week manual screening backlogs with an automated candidate-job matching pipeline, 4-tier Role-Based Access Control, and containerized deployment.",
    impactMetrics: "Sub-100ms query latency on candidate filtering • 4-tier RBAC security • Full Docker & CI workflow",
    tags: ["Node.js / Express", "MongoDB", "React", "JWT & RBAC", "AI Semantic Matching", "Docker", "REST API"],
    imagePath: "public/docs/ketari.jpg",
    liveUrl: "https://gudina.vercel.app",
    sourceUrl: "https://github.com/gware26/portfolio",
    liveLabel: "Case Overview ↗",
    sourceLabel: "View Codebase ‹/›"
  },
  {
    id: "ethiopath-ai",
    title: "EthioPath AI — Academic & Career Pathfinder",
    kicker: "Privacy-First Client-Side AI",
    description: "Architected a privacy-first academic orientation pathfinder for 100k+ Ethiopian university freshmen, mapping student competencies to 37 national university departments across 8 faculties with 100% on-device client inference.",
    impactMetrics: "Zero server egress costs • 0ms server network roundtrip • Installable offline PWA",
    tags: ["Next.js", "TypeScript", "On-Device AI", "PWA Offline", "Modern CSS", "Deterministic Scoring"],
    imagePath: "public/docs/ethiopath.jpg",
    liveUrl: "https://ethiopath.vercel.app",
    sourceUrl: "https://github.com/gware26/portfolio",
    liveLabel: "Live Application ↗",
    sourceLabel: "Source Code ‹/›"
  },
  {
    id: "student-voting-system",
    title: "Campus Union Electronic Voting System",
    kicker: "Defensive Security & Relational Architecture",
    description: "Engineered a tamper-resistant electronic voting platform for university elections. Enforced atomic database transactions to guarantee zero duplicate ballots per voter, parameterized PDO queries for 100% SQLi immunity, and synchronized cryptographic CSRF defenses.",
    impactMetrics: "100% SQLi & CSRF immunity • Zero duplicate ballots via atomic constraints • bcrypt work factor 12",
    tags: ["PHP PDO", "MySQL", "Atomic Transactions", "bcrypt", "CSRF Protection", "Vanilla JS"],
    imagePath: "public/docs/voting.png",
    liveUrl: "https://github.com/gware26/Online_Student_Voting_sytem",
    sourceUrl: "https://github.com/gware26/Online_Student_Voting_sytem",
    liveLabel: "Repository Demo ↗",
    sourceLabel: "Source Code ‹/›"
  }
];

export class PortfolioController {
  private displayGrid: HTMLElement;

  constructor(targetGridSelector: string) {
    const foundElement = document.querySelector(targetGridSelector);
    
    // Defensive type assertion safety gate
    if (!(foundElement instanceof HTMLElement)) {
      throw new Error(`The initialization component selector "${targetGridSelector}" is invalid.`);
    }
    this.displayGrid = foundElement;
  }

  public initializeShowcase(projects: ProjectItem[]): void {
    // Clear out fallback placeholders safely
    this.displayGrid.innerHTML = '';

    if (projects.length === 0) {
      this.displayGrid.innerHTML = '<div class="portfolio-grid__fallback">No Active Engineering Cases Documented.</div>';
      return;
    }

    // Build fragment cache to minimize DOM reflow costs
    const DOMFragment = document.createDocumentFragment();

    projects.forEach((project) => {
      const cardContainer = this.generateSecureCard(project);
      DOMFragment.appendChild(cardContainer);
    });

    this.displayGrid.appendChild(DOMFragment);
  }

  private generateSecureCard(data: ProjectItem): HTMLDivElement {
    const card = document.createElement('div');
    card.className = 'portfolio-card';
    card.setAttribute('data-project-id', data.id);

    // Image Element Construction with explicit dimension anchors
    const banner = document.createElement('img');
    banner.className = 'portfolio-card__banner';
    banner.src = data.imagePath;
    banner.alt = `Architecture preview for ${data.title}`;
    banner.loading = 'lazy';
    banner.width = 640;
    banner.height = 360;
    // Fallback handler if image fails to load
    banner.onerror = () => {
      banner.style.display = 'none';
    };

    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'portfolio-card__content';

    // Kicker / Category tag
    const kickerEl = document.createElement('span');
    kickerEl.className = 'portfolio-card__kicker';
    kickerEl.textContent = data.kicker;

    const headerTitle = document.createElement('h3');
    headerTitle.className = 'portfolio-card__title';
    headerTitle.textContent = data.title;

    const summaryPara = document.createElement('p');
    summaryPara.className = 'portfolio-card__description';
    summaryPara.textContent = data.description;

    // Metrics Pill
    const metricsBox = document.createElement('div');
    metricsBox.className = 'portfolio-card__metrics';
    metricsBox.innerHTML = `<strong>Technical Impact:</strong> ${data.impactMetrics}`;

    // Tag Tray
    const tagTray = document.createElement('div');
    tagTray.className = 'portfolio-card__tags';
    data.tags.forEach((tagText) => {
      const tagChip = document.createElement('span');
      tagChip.className = 'portfolio-card__tag';
      tagChip.textContent = tagText;
      tagTray.appendChild(tagChip);
    });

    // Action CTA Tray Link Builders
    const actionsFooter = document.createElement('div');
    actionsFooter.className = 'portfolio-card__footer';

    const liveAnchor = this.createExternalLink(data.liveUrl, data.liveLabel || 'Live Application ↗', 'btn btn--card btn--card-primary');
    const sourceAnchor = this.createExternalLink(data.sourceUrl, data.sourceLabel || 'Source Code ‹/›', 'btn btn--card btn--card-secondary');

    actionsFooter.appendChild(liveAnchor);
    actionsFooter.appendChild(sourceAnchor);

    // Structural Assembly Node Mapping
    contentWrapper.appendChild(kickerEl);
    contentWrapper.appendChild(headerTitle);
    contentWrapper.appendChild(summaryPara);
    contentWrapper.appendChild(metricsBox);
    contentWrapper.appendChild(tagTray);
    contentWrapper.appendChild(actionsFooter);

    card.appendChild(banner);
    card.appendChild(contentWrapper);

    return card;
  }

  private createExternalLink(endpointUrl: string, displayLabel: string, customClass: string): HTMLAnchorElement {
    const link = document.createElement('a');
    link.className = customClass;
    link.href = endpointUrl;
    link.textContent = displayLabel;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    return link;
  }
}

// Global Core Orchestration Entry Trigger
document.addEventListener('DOMContentLoaded', () => {
  try {
    const activeApp = new PortfolioController('#project-showcase-grid');
    activeApp.initializeShowcase(PROJECT_COLLECTION);
  } catch (runtimeContextError) {
    console.error("Critical execution structural exception handled:", runtimeContextError);
  }
});
