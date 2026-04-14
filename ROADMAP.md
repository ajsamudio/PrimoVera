# PrimoVera — Project Roadmap

**Role:** Project Manager  
**Date:** April 2026  
**Repository:** ajsamudio/PrimoVera  
**Live Site:** primovera.net

---

## Overview

PrimoVera is a Philippine-based Architecture, Engineering, and Construction (AEC) firm offering full-service solutions in architectural design, engineering, construction, and property management. This roadmap outlines a phased plan to evolve the current portfolio website into a high-performing digital presence that generates qualified leads and supports business growth.

---

## Current State Summary

| Area | Status |
|---|---|
| Core website (HTML/CSS/JS) | Complete |
| Project gallery (17 projects, 85 images) | Complete |
| Contact form (FormSubmit.co) | Functional |
| Mobile responsiveness | Complete |
| Instagram integration | Incomplete (Coming Soon) |
| Form success/error feedback | Incomplete |
| SEO / analytics | Missing |
| Content management | None (manual edits) |
| Testimonials / social proof | Missing |
| Team profiles | Missing |

---

## Phase 1 — Quick Wins
**Target: April – May 2026**

Focus: Fix existing gaps, improve trust signals, and set up tracking — all without major structural changes.

### 1.1 Complete Instagram Integration
- Create and publish an official PrimoVera Instagram account (`@primoverainc`)
- Activate the Instagram social link in both the FAB and footer
- Update `index.html` — remove `social-disabled` class from Instagram links

### 1.2 Fix Contact Form Feedback
- Add client-side success and error state to the contact form
- Replace the `target="_blank"` FormSubmit workaround with the AJAX submission method
- Display a visible success message on the page after form submission
- Add proper client-side validation feedback (inline field errors)

### 1.3 SEO Foundation
- Add `<meta>` description, keywords, and Open Graph tags to `index.html`
- Add JSON-LD structured data (LocalBusiness schema) for Google search visibility
- Create a `sitemap.xml` and `robots.txt`
- Optimize all `<img>` tags with meaningful `alt` text for accessibility and SEO

### 1.4 Google Analytics / Tracking
- Set up a Google Analytics 4 (GA4) property
- Add the GA4 tracking snippet to `index.html`
- Configure conversion events: form submissions, social link clicks, phone taps
- Set up Google Search Console and link it to GA4

### 1.5 Image Performance
- Compress and convert all 85 project images to WebP format
- Add explicit `width` and `height` attributes to all images to eliminate layout shift
- Audit and improve existing lazy loading coverage

**Deliverables:** Fixed form UX, Instagram live, analytics running, Lighthouse score ≥ 85

---

## Phase 2 — Content & Credibility
**Target: June – August 2026**

Focus: Build social proof and deepen the content that converts visitors into inquiries.

### 2.1 Client Testimonials Section
- Design and build a new testimonials section between Projects and Contact
- Display 4–6 client quotes with name, project type, and star rating
- Add a simple card carousel for mobile
- Source testimonials from existing clients

### 2.2 Team / About Us Expansion
- Add individual team member cards to the About section (name, title, photo, short bio)
- Highlight key credentials, licenses, and affiliations (PRC, PCAB, etc.)
- Add a company timeline / milestone section (founded, first project, expansion, etc.)

### 2.3 Expanded Project Case Studies
- For each of the 17 existing projects, create a dedicated project detail view (modal or page)
- Content per case study: project scope, challenges, solutions, timeline, client outcome
- Add before/after image comparisons where applicable

### 2.4 Blog / News Section
- Set up a simple static blog (Markdown-based or a headless CMS)
- Seed with 3–5 initial articles:
  - "What to expect when building in Metro Manila"
  - "Interior fit-out vs. full construction — which is right for you?"
  - "How to plan a commercial kitchen renovation"
- Blog content supports SEO and positions the firm as a thought leader

### 2.5 FAQ Section
- Add an FAQ accordion near the Contact form
- Cover common questions: project timelines, budget ranges, licensing, coverage areas, payment terms

**Deliverables:** Testimonials live, team profiles complete, 5 case studies, initial blog articles, FAQ section

---

## Phase 3 — Digital Expansion
**Target: September – December 2026**

Focus: Improve reach, accessibility, and operational efficiency for a growing firm.

### 3.1 Filipino / English Language Toggle
- Add a language toggle (EN / FIL) in the navigation
- Translate key sections: Hero, Services, About, Contact form labels
- Store language preference in `localStorage`

### 3.2 WhatsApp / Viber Quick Contact
- Add WhatsApp and Viber deep-link buttons to the social FAB
- Enables instant direct messaging — the preferred contact method in the Philippines

### 3.3 Lightweight Content Management
- Evaluate headless CMS options (Decap CMS / Netlify CMS on GitHub, Forestry, or Sanity)
- Allow non-technical staff to update project photos, testimonials, and blog posts without touching code
- Migrate project data (titles, categories, images) to a CMS-managed data source

### 3.4 Lead Capture Improvements
- Add a lightweight exit-intent popup: "Schedule a free consultation"
- Embed a Calendly or similar booking widget as an alternative to the form
- Add a sticky bottom CTA bar on mobile: "Request a Quote"

### 3.5 Performance & Reliability
- Move image hosting to a CDN (Cloudflare Images or Bunny CDN)
- Implement Cloudflare for DNS, DDoS protection, and caching
- Set up uptime monitoring (UptimeRobot or Better Uptime)
- Automate image optimization in the deployment workflow

**Deliverables:** Bilingual support, WhatsApp/Viber live, CMS operational, Calendly booking enabled, CDN configured

---

## Phase 4 — Business Platform
**Target: Q1–Q2 2027**

Focus: Evolve from a brochure site into a business platform that supports the full client lifecycle.

### 4.1 Client Portal (Project Tracker)
- Authenticated client login area
- View project status, milestones, and photo updates
- Document sharing: contracts, blueprints, permits, invoices
- Real-time progress updates from the PrimoVera team

### 4.2 Online Quote / Estimate Tool
- Interactive form where prospective clients input project type, size, and location
- Returns a ballpark estimate range based on service type and scope
- Generates a pre-qualified lead with detailed scope information for the sales team

### 4.3 Property / Listing Section
- Showcase completed or in-progress properties available for sale or management
- Filter by type (residential, commercial), location, and price range
- Contact form pre-filled with property details on inquiry

### 4.4 Supplier / Partner Directory
- Internal or public-facing directory of trusted suppliers, subcontractors, and partners
- Supports procurement transparency and positions PrimoVera as an ecosystem hub

### 4.5 Online Deposit / Payment Integration
- Enable initial project retainer payments via GCash, Maya, or bank transfer integration
- Reduces friction in the contract kick-off process
- Integrates with client portal for payment tracking

**Deliverables:** Client portal v1, quote tool live, payment integration, property listings section

---

## Success Metrics

| Metric | Current | Phase 1 Target | Phase 2 Target | Phase 4 Target |
|---|---|---|---|---|
| Lighthouse Performance Score | ~70 | ≥ 85 | ≥ 90 | ≥ 90 |
| Contact form completion rate | Unknown | Tracked | ≥ 15% | ≥ 25% |
| Monthly organic visitors | Unknown | Baseline set | +50% | +300% |
| Monthly qualified inquiries | Unknown | Tracked | +30% | +200% |
| Instagram followers | 0 | 500+ | 2,000+ | 10,000+ |
| Projects in portfolio | 17 | 17 + case studies | 25 | 40+ |

---

## Tech Debt & Maintenance Notes

- **No build system:** The project has no bundler (Webpack, Vite, etc.). As the site grows, introduce a lightweight build step to manage assets.
- **Vanilla JS:** As the codebase grows beyond Phase 2, evaluate migrating interactive components to a lightweight framework (Alpine.js or Vue.js) to improve maintainability.
- **Single HTML file:** `index.html` is currently 728 lines. Splitting into components or templating will be necessary by Phase 2.
- **FormSubmit.co dependency:** Replace with a controlled backend (Resend, SendGrid, or a serverless function) before Phase 3 to gain delivery analytics and anti-spam control.

---

## Immediate Next Actions (This Week)

1. [ ] Create Instagram account for PrimoVera
2. [ ] Switch contact form from `target="_blank"` to AJAX submission
3. [ ] Add inline success/error message to contact form
4. [ ] Add Open Graph and JSON-LD meta tags to `index.html`
5. [ ] Set up Google Analytics 4 and Search Console
6. [ ] Run image compression pass on all 85 images
