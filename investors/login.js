// Approved users list — ONLY these emails can log in
const approvedUsers = [
"tgmurphyb.sc@gmail.com"
// We'll add John later when ready
];

// Landing pages for each user — NEW BLOCK
const landingPageByEmail = {
"tgmurphyb.sc@gmail.com": "/investors/index.html"
};

document.getElementById("requestCode").addEventListener("click", async () => {
const email = document.getElementById("email").value.trim();
const status = document.getElementById("status");

if (!email) {
status.textContent = "Please enter your email.";
return;
}

if (!approvedUsers.includes(email)) {
status.textContent = "This email is not authorised.";
return;
}

// Generate a one-time 6-digit code
const otp = Math.floor(100000 + Math.random() * 900000).toString();
sessionStorage.setItem("otp", otp);
sessionStorage.setItem("email", email);

// Simulate sending email — TEMP: show code on-screen (replace later with real email)
alert(`Your one-time access code is: ${otp}`);

// Build OTP entry UI dynamically
status.innerHTML = `
A one-time code has been sent to <strong>${email}</strong>.<br>
Enter it below to access the portal:
<br><br>
<input id="otpInput" placeholder="Enter code" style="padding: 8px; width: 60%; border: 1px solid #ccc; border-radius: 6px; margin-top: 5px;">
<button id="verifyOtp" style="padding: 8px 14px; background: #caa21b; color: white; border: none; border-radius: 6px; margin-left: 6px;">Verify</button>
`;

// Handle OTP verification
document.getElementById("verifyOtp").addEventListener("click", () => {
const enteredOtp = document.getElementById("otpInput").value.trim();
if (enteredOtp === otp) {
status.textContent = "Success! Redirecting…";
const landing = landingPageByEmail[email] || "/investors/index.html";
window.location.href = landing;
} else {
status.textContent = "Invalid code. Please try again.";
}
});
});
