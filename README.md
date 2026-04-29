# Graham Financial Group — Landing Page

Multi-page marketing site for **Graham Financial Group, Inc.** — a family-owned Medicare insurance brokerage in Lake Worth Beach, FL.

Built for a 65+ audience: calm, legible, accessible, and conversion-focused (phone call + contact form).

## Stack

- **Next.js 16** (App Router, **static export** for GitHub Pages)
- **TypeScript** (strict)
- **Tailwind CSS 4** (CSS-first config via `@theme` in `app/globals.css`)
- **Radix UI** primitives (accordion, select, checkbox, label, slot)
- **Lucide React** icons
- **react-hook-form** + **zod** for form validation
- Contact form posts to a third-party endpoint (Formspree / Web3Forms / Getform), since GitHub Pages serves only static files. Honeypot anti-spam stays on our side.

## Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero with family photo, services preview, about, testimonials, FAQ, contact form |
| `/about` | Then & Now photos, our story, why Graham is the right choice, team teaser |
| `/services` | Medicare, Medigap, Part D, Advantage breakdown + FAQ |
| `/staff` | Six licensed brokers with phone + email |
| `/reviews` | Client testimonials |
| `/resources` | CMS guides (PDFs) + CMS explainer videos + helpful links |
| `/forms` | CMS-40B, CMS-L564, SSA-44 + carrier forms |
| `/contact` | Office info, hours, map link, full contact form |
| `/privacy-policy` | Privacy policy |
| `/accessibility` | Accessibility statement + how to reach us |

## Local development

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_CONTACT_ENDPOINT to your form provider URL.
npm run dev
```

Open <http://localhost:3000>.

## Editing content

All copy, business data, FAQ items, team members, forms, resources, etc. live in **`lib/content.ts`**. Items flagged with `todo: true` are placeholders pending real data:

```bash
grep -nR "todo: true" lib/
```

Replace before launch (testimonial copy, BBB rating, geo coordinates, Medicare disclaimer numbers).

## Images

Images live in `public/images/`:

- `family.png` — hero family portrait
- `1992.jpg` — black-and-white "Then" photo on `/about`
- `today.jpg` — color "Now" photo on `/about`

Static export disables `next/image` optimization (`images.unoptimized: true`), so files are served as-is. Compress them with [Squoosh](https://squoosh.app) before committing if size matters.

## Deploying to GitHub Pages

The repo includes a workflow at `.github/workflows/deploy.yml` that builds and deploys on every push to `main`.

**One-time setup:**

1. **Create the repo** on GitHub and push this code.
2. **Pick a form provider** — sign up at [Formspree](https://formspree.io), [Web3Forms](https://web3forms.com), or [Getform](https://getform.io). Get your endpoint URL.
3. **Add a repo secret** at *Settings → Secrets and variables → Actions → New repository secret*:
   - Name: `CONTACT_ENDPOINT`
   - Value: the endpoint URL from step 2 (e.g. `https://formspree.io/f/abc123`)
4. **Enable Pages** at *Settings → Pages → Build and deployment → Source: **GitHub Actions***.
5. Push to `main` (or trigger the workflow manually under the *Actions* tab). The workflow builds the site, drops a `.nojekyll` marker, and publishes the `out/` directory.

After the first successful run, the deployment URL appears under *Settings → Pages*.

### Hosting modes

- **User/org page** (`<user>.github.io`): leave `NEXT_PUBLIC_BASE_PATH` empty. ✓ Works out of the box.
- **Project page** (`<user>.github.io/<repo>/`): the workflow auto-injects the right base path via `actions/configure-pages`. ✓ Works out of the box.
- **Custom domain**: add a `CNAME` file at `public/CNAME` containing the domain (e.g. `grahamfinancial.org`), and configure DNS as documented at [GitHub's custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). Leave `NEXT_PUBLIC_BASE_PATH` empty.

## Local production preview

```bash
npm run build
npx serve out
```

Browse <http://localhost:3000>.

## Accessibility

- WCAG 2.1 AA target — verify with [axe DevTools](https://www.deque.com/axe/devtools/) before launch.
- Body text minimum 16px mobile / 18px desktop.
- All interactive elements keyboard-reachable; focus is always visible.
- Escape closes the mobile menu; arrow keys navigate the FAQ accordion (Radix default).
- `prefers-reduced-motion` respected.
- Skip-to-content link is the first focusable element.
- All form fields have associated labels and `aria-describedby` for errors.

## SEO

- `Metadata` API in each `app/<route>/page.tsx` (title, description, Open Graph, Twitter, robots).
- `LocalBusiness` + `InsuranceAgency` JSON-LD in the layout.
- `FAQPage` JSON-LD on the FAQ section.
- `sitemap.xml` and `robots.txt` generated via Next route handlers (statically rendered into `out/`).

## Out of scope (pre-launch)

- CMS (next phase)
- Blog
- i18n (en-US only)
- CRM integration
- Dark mode

## License

Proprietary — © 2026 Graham Financial Group, Inc.
