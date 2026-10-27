// In-Memory Project Data Array
const PROJECT_COLLECTION = [
    {
        id: "case-01",
        title: "High-Performance Data Matrix Engine",
        description: "Built custom asynchronous streaming modules over vanilla Web APIs, optimization handling for dense UI coordinate parsing frameworks without layout blocks.",
        tags: ["TypeScript", "Vanilla JS", "CSS Grid"],
        imagePath: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&auto=format&fit=crop&q=80",
        liveUrl: "https://vercel.app",
        sourceUrl: "https://github.com"
    },
    {
        id: "case-02",
        title: "Fluid Layout Engine Architecture",
        description: "An isolated UI structural sandbox executing native CSS custom property layers and strict runtime asset caching mechanics.",
        tags: ["CSS Architecture", "TypeScript", "ESModules"],
        imagePath: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=640&auto=format&fit=crop&q=80",
        liveUrl: "https://vercel.app",
        sourceUrl: "https://github.com"
    }
];
export class PortfolioController {
    displayGrid;
    constructor(targetGridSelector) {
        const foundElement = document.querySelector(targetGridSelector);
        // Defensive type assertion safety gate
        if (!(foundElement instanceof HTMLElement)) {
            throw new Error(`The initialization component selector "${targetGridSelector}" is invalid.`);
        }
        this.displayGrid = foundElement;
    }
    initializeShowcase(projects) {
        // Clear out hardcoded HTML fallbacks safely
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
    generateSecureCard(data) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        card.setAttribute('data-project-id', data.id);
        // Image Element Construction with explicit dimension anchors
        const banner = document.createElement('img');
        banner.className = 'portfolio-card__banner';
        banner.src = data.imagePath;
        banner.alt = `Production layout preview for ${data.title}`;
        banner.loading = 'lazy';
        banner.width = 640;
        banner.height = 360;
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'portfolio-card__content';
        const headerTitle = document.createElement('h3');
        headerTitle.className = 'portfolio-card__title';
        headerTitle.textContent = data.title; // Safe text context insertion prevents runtime injection mutations
        const summaryPara = document.createElement('p');
        summaryPara.className = 'portfolio-card__description';
        summaryPara.textContent = data.description;
        // Build Tag Chips Array
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
        const liveAnchor = this.createExternalLink(data.liveUrl, 'Live Execution');
        const sourceAnchor = this.createExternalLink(data.sourceUrl, 'Source Base');
        actionsFooter.appendChild(liveAnchor);
        actionsFooter.appendChild(sourceAnchor);
        // Structural Assembly Node Mapping
        contentWrapper.appendChild(headerTitle);
        contentWrapper.appendChild(summaryPara);
        contentWrapper.appendChild(tagTray);
        contentWrapper.appendChild(actionsFooter);
        card.appendChild(banner);
        card.appendChild(contentWrapper);
        return card;
    }
    createExternalLink(endpointUrl, displayLabel) {
        const link = document.createElement('a');
        link.className = 'portfolio-card__link';
        link.href = endpointUrl;
        link.textContent = displayLabel;
        link.target = '_blank';
        link.rel = 'noopener noreferrer'; // Strict cross-origin window orchestration sandbox
        return link;
    }
}
// Global Core Orchestration Entry Trigger
document.addEventListener('DOMContentLoaded', () => {
    try {
        const activeApp = new PortfolioController('#project-showcase-grid');
        activeApp.initializeShowcase(PROJECT_COLLECTION);
    }
    catch (runtimeContextError) {
        console.error("Critical execution structural exception handled:", runtimeContextError);
    }
});
