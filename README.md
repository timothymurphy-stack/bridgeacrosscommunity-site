
# Bridge Across Community — Static Site

A clean, multi-page static site ready for GitHub Pages.

## Deploy (GitHub Pages)
1. Create a new public repo (e.g., `bridgeacrosscommunity-site`).
2. Upload all files/folders from this zip (keep the `assets` folder).
3. In **Settings → Pages**:
   - **Build and deployment**: *Deploy from a branch*
   - Branch: `main` and folder: `/ (root)`
4. Wait for Pages to build. Your site will appear at `https://<your-username>.github.io/bridgeacrosscommunity-site/`.

## Custom Domain
- Add your domain in **Settings → Pages → Custom domain**: `bridgeacrosscommunity.com`
- Commit a file named `CNAME` at repo root containing just: `bridgeacrosscommunity.com`
- In your domain DNS:
  - For apex: `bridgeacrosscommunity.com` → A records to GitHub Pages IPs:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
  - (Optional) IPv6 AAAA records:
    - 2606:50c0:8000::153
    - 2606:50c0:8001::153
    - 2606:50c0:8002::153
    - 2606:50c0:8003::153
  - For `www.bridgeacrosscommunity.com`: CNAME → `<your-username>.github.io`
- Back in GitHub, tick **Enforce HTTPS** once the certificate is issued.

## .co.uk Redirect
At Namecheap, set `bridgeacrosscommunity.co.uk` to URL redirect (301) → `https://bridgeacrosscommunity.com`.

— Built for Timothy by CGPT.
