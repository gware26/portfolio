module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/data/site.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aboutContent",
    ()=>aboutContent,
    "contactContent",
    ()=>contactContent,
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    name: "Gudina",
    fullName: "Gudina",
    initials: "G",
    title: "Information Science Student & Software Engineer",
    tagline: "I design and build fast, accessible web products with a focus on clarity, strong systems, and thoughtful interaction.",
    description: "A dark-first portfolio for Gudina, an Information Science student at Jimma University focused on software engineering, full-stack web development, and practical product craft.",
    location: "Jimma, Ethiopia",
    university: "Jimma University",
    email: "your.email@example.com",
    resumeUrl: "/resume.pdf",
    url: "https://yourdomain.com",
    availability: "Open to internships, graduate roles, freelance work, and software engineering opportunities.",
    heroMetrics: [
        {
            label: "Projects shipped",
            value: "12+"
        },
        {
            label: "Core focus",
            value: "Full-stack"
        },
        {
            label: "Graduation",
            value: "2026"
        }
    ]
};
const aboutContent = {
    eyebrow: "About",
    title: "A builder shaped by curiosity, discipline, and product thinking.",
    summary: "I am an Information Science student at Jimma University who cares about building software that feels precise, useful, and reliable. My current focus is modern web engineering with React, Next.js, TypeScript, databases, and the habits that make teams move faster.",
    paragraphs: [
        "My learning journey started with small interfaces and experiments, then grew into full-stack projects where product decisions, data models, accessibility, and performance all mattered at the same time.",
        "I am working toward becoming the kind of engineer who can own a feature end to end: understand the user, shape the experience, build the system, test the edge cases, and communicate the tradeoffs clearly."
    ],
    principles: [
        "Design interfaces that are calm, fast, and easy to scan.",
        "Prefer simple systems with strong boundaries over clever code.",
        "Learn in public by building practical tools and documenting decisions."
    ],
    goals: [
        "Join an engineering team where I can learn from strong product builders.",
        "Contribute to open-source projects that improve developer experience.",
        "Build polished software for real users, not just demos."
    ]
};
const contactContent = {
    title: "Let us build something useful.",
    description: "Send a project idea, role opportunity, collaboration note, or feedback. I usually respond with context, next steps, and a few clarifying questions.",
    responseTime: "Usually responds within 24-48 hours"
};
}),
"[project]/src/app/manifest.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>manifest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-route] (ecmascript)");
;
function manifest() {
    return {
        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].fullName} Portfolio`,
        short_name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].fullName,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["siteConfig"].description,
        start_url: "/",
        display: "standalone",
        background_color: "#05070d",
        theme_color: "#05070d"
    };
}
}),
"[project]/src/app/manifest--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/manifest.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/manifest+json";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "manifest";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./manifest.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/src/app/manifest--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/manifest--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$manifest$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/manifest.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__014330fb._.js.map