/* Lightweight nav header for investor briefs (uses localStorage session too) */
document.addEventListener("DOMContentLoaded", function(){

const BRIEFS = [
{slug:"chair-letter", title:"Letter to the Chairperson", path:"/investors/briefs/chair-letter.html"},
{slug:"milestones", title:"The 7 Milestones", path:"/investors/briefs/milestones.html"},
{slug:"positioning-brief", title:"Investor Positioning Brief", path:"/investors/briefs/positioning-brief.html"},
{slug:"filling-the-gap", title:"“Filling the Gap” — Flagship", path:"/investors/briefs/filling-the-gap.html"},
{slug:"chair-prospectus", title:"Chair Prospectus — Role & OKRs", path:"/investors/briefs/chair-prospectus.html"},
{slug:"css-strategic-brief", title:"CSS Strategic Brief", path:"/investors/briefs/css-strategic-brief.html"},
{slug:"first-light-plan", title:"First Light — Activation Note", path:"/investors/briefs/first-light-plan.html"},
{slug:"replication-outline", title:"Replication Outline", path:"/investors/briefs/replication-outline.html"},
{slug:"privacy-compact", title:"Governance & Privacy Compact", path:"/investors/briefs/privacy-compact.html"},
{slug:"revenue-and-spa", title:"Deeper Revenue Streams & SPA", path:"/investors/briefs/revenue-and-spa.html"},
];

const current = (window.BAC_CURRENT || "").trim();
const idx = BRIEFS.findIndex(b => b.slug === current);
if (idx === -1) return; // not a brief page

try { localStorage.setItem("bac_last_brief", BRIEFS[idx].path); } catch(e){}

const prev = idx > 0 ? BRIEFS[idx-1] : null;
const next = idx < BRIEFS.length-1 ? BRIEFS[idx+1] : null;

const css = `
.bac-nav{position:sticky; top:0; z-index:999; background:#fff9ef; border-bottom:1px solid #e7e2ce;}
.bac-nav .in{max-width:860px; margin:0 auto; padding:10px 20px; display:flex; gap:10px; align-items:center; justify-content:space-between; font:14px/1.2 system-ui,Segoe UI,Arial}
.bac-nav a{color:#7a6511; text-decoration:none; border:1px solid rgba(202,162,27,.5); padding:.4rem .6rem; border-radius:7px; background:#fff; display:inline-flex; align-items:center; gap:.35rem}
.bac-nav a.logo{font-weight:bold; border:none; background:none; font-size:15px}
.bac-nav a:hover{background:#fff6dd}
.bac-nav .title{flex:1; text-align:center; color:#6a5b14}
.bac-nav .sub{font-size:12px; color:#8b7b2b}
.bac-nav .disabled{opacity:.45; pointer-events:none}
@media (prefers-color-scheme:dark){
.bac-nav{background:#17150f; border-color:#2a261a}
.bac-nav a{background:#141312; color:#d9c063; border-color:#4d3f13}
.bac-nav a:hover{background:#1a1916}
.bac-nav .title{color:#d1bd64}
.bac-nav .sub{color:#a79349}
}main.container { margin-top: 40px; }
`;
const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

const bar = document.createElement("div");
bar.className = "bac-nav";
bar.innerHTML = `
<div class="in">
<div class="left">
<a href="/" class="logo">Bridge Across Community</a>
<a href="/investors/" aria-label="Back to library">← Library</a>
</div>
<div class="title">
${BRIEFS[idx].title}<div class="sub">${idx+1} of ${BRIEFS.length}</div>
</div>
<div class="right">
<a ${prev?`href="${prev.path}"`:'class="disabled"'} aria-label="Previous brief">← Prev</a>
<a ${next?`href="${next.path}"`:'class="disabled"'} aria-label="Next brief">Next →</a>
</div>
</div>`;

document.body.prepend(bar);

// keyboard arrows
window.addEventListener("keydown", (e)=>{
if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
if (e.key === "ArrowLeft" && prev){ location.href = prev.path; }
if (e.key === "ArrowRight" && next){ location.href = next.path; }
});
});
