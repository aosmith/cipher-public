# Cipher Public Site

Static marketing site for the Cipher project. Hosted at https://cipher.social. Built with pure HTML and CSS, no external font or script dependencies. The layout relies on semantic markup, modern responsive CSS, and a pure CSS light/dark theme toggle.

## Quick Start

```bash
# from the repository root
python3 -m http.server 4000
# open http://localhost:4000/ in your browser
```

Any static file server works (`npx serve`, `ruby -run -ehttpd . -p 4000`, etc.).

## Structure

```
index.html            # Landing page markup and theme controls
assets/css/           # Theme and layout styles
.github/workflows/    # GitHub Pages deployment workflow
CNAME                 # Custom domain mapping (cipher.social)
```

Edit the content in `index.html` to keep messaging aligned with the main Cipher repo. Update brand links if the GitHub organization changes.


## Deployment

This repository uses GitHub Pages with an Actions workflow and a `CNAME` file for the custom domain.

1. Push or merge to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`, uploads the entire repo as the static artifact, and publishes it to Pages.
3. First-time setup: in repo Settings → Pages, select "GitHub Actions" as the source.

To test locally before pushing, run a static server (e.g., `python3 -m http.server 4000`) and open http://localhost:4000/.

If you maintain a custom domain (e.g., `cipher.social`), add the CNAME in Settings → Pages and create the DNS record (CNAME pointing to `<user>.github.io`).
# cipher-public
