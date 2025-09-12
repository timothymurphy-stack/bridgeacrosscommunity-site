// --- TEMPORARY FRONT-END GATE (not real security) ---
// Add approved emails here (lowercase). All land on /investors/index.html
const ALLOW = {
"tgmurphyb.sc@gmail.com": "/investors/index.html",
"christophersswain@googlemail.com": "/investors/index.html",
// add more like:
// "john.doerr@example.com": "/investors/index.html",
// "tim.smit@example.com": "/investors/index.html"
};

// --- SESSION HANDLING ---
// session length (hours)
const SESSION_HOURS = 12;

function setSession(email){
const until = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
// write to BOTH localStorage and sessionStorage
localStorage.setItem("bac_user", email);
localStorage.setItem("bac_until", String(until));
sessionStorage.setItem("bac_user", email);
sessionStorage.setItem("bac_until", String(until));
}

// --- LOGIN FORM HANDLER ---
(function wire(){
const form = document.getElementById("loginForm");
const status = document.getElementById("status");
if(!form) return;

form.addEventListener("submit", function(e){
e.preventDefault();
const email = String(document.getElementById("email").value || "").trim().toLowerCase();
const landing = ALLOW[email];
if(landing){
setSession(email);
window.location.href = landing;
}else{
status.textContent = "This email is not on the invite list.";
}
});
})();
