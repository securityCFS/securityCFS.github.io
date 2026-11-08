# Maintaining the academic website

The public site uses Jekyll and GitHub Pages. Main pages use `_layouts/academic.html`; individual papers use `_layouts/paper.html`. No external JavaScript libraries or remote fonts are needed by these pages.

## Add a paper once

Create `_publications/YYYY-venue-short-name.md`, using an existing record as a reference. Required fields are `title`, `short_name`, `authors` (a YAML list in publication order), `authors_display`, `date` (for sorting), `publication_year`, `category`, `venue`, `venue_short`, `status`, `topic`, `excerpt`, `verified_on`, `layout: paper`, and `permalink`. Add `paperurl`, `sourceurl`, and `bibtex` when a public paper and complete citation are available; omit them for pending manuscripts.

- Categories: `conferences`, `preprints`, `reports`, `ongoing` (Work in Progress).
- Topics: `Humanoid control`, `Offline RL`, `Embodied agents`, `World action models`, `UAV control`. If adding a topic, also add a filter button in `_pages/publications.html`.
- The homepage lists every publication in reverse date order. `selected` and `selected_order` still control the separate legacy project listing.
- Use `projecturl`, `codeurl`, `docsurl`, `slidesurl`, and `publisherurl` only for verified, available resources. Unreleased code should not have a dead Code button.
- Keep preprint and conference versions in one record, linking both versions and using the final published title and year.
- For long author lists, shorten only `authors_display`; preserve every author in `authors` and BibTeX. Use `equal_contributors` (a list of exact author names) for verified shared first authorship. Cards and paper detail pages render stars, an equal-contribution legend, and a co-first-author badge for Yifei Yao. Keep BibTeX names free of presentation markers. Do not infer equal contribution.
- Month-only dates use the first day for sorting (InfCoiL: September 2026; UAV preprint: January 2026). The UI displays the verified year or month, not these sorting days.
- Use `personal_contribution` only for an owner-confirmed account of their role. The same text appears on the homepage, Publications, CV, and paper detail page; the field is optional and absent fields produce no placeholder.
- Set `show_status: true` to display a pending manuscript's exact status on cards. When a full author list is not settled, use `authors_note` to make this explicit. Do not export a citation with an incomplete author list.

New records automatically appear on the homepage, Publications, CV, and the downloadable `/files/publications.bib`. Selected records also appear in the legacy project listing.

Records without a BibTeX entry do not contribute a citation to the download. A pending manuscript can appear on the site before a public paper URL exists.

## News and personal information

Add dated entries at the top of `_data/news.yml`. Use `YYYY-MM` when only the month is verified. Update `_data/profile.yml` after reviewing the content. The homepage shows the five latest entries in file order.

Identity and contact links live in `_config.yml`. The introduction is `_pages/about.md`; education and experience are `_pages/cv.md`. The custom profile sidebar is `_layouts/academic.html`.

The CV supports browser Print / Save as PDF. It is not a pre-generated PDF file.

## Sources checked on October 27, 2026

- Identity supplied by the site owner: Research Engineer in Robotics, Shanghai AI Laboratory, since November 2025. M.Sc. graduation: April 2026. Seeking PhD opportunities.
- [Google Scholar](https://scholar.google.com/citations?user=YNu0zv8AAAAJ): read the full list using the browser. Deduplicated the two AnyBipe versions and two InternW0-Delta records. InfCoiL was additionally verified on the conference page.
- [GitHub profile](https://github.com/securityCFS), official paper repositories, and project websites: resource links and release status. The connected GitHub account belongs to another person, so its profile was not used for identity.
- [InfCoiL, NeurIPS](https://neurips.cc/virtual/2026/poster/152598): exact title, author order, acceptance, and summary. [OpenReview](https://openreview.net/forum?id=RvZ2OxrgcE). No arXiv or code URL invented. The September acceptance month is supported by [coauthor Xing Gao’s news](https://william-gx.github.io/).
- [REAL](https://arxiv.org/abs/2607.13653): authors, ECCV 2026 acceptance, abstract, and evaluation; [project](https://internrobotics.github.io/REAL/); [code](https://github.com/InternRobotics/REAL). June acceptance month: coauthor news above.
- [PICA-WAM](https://arxiv.org/abs/2610.26813): first submitted October 19, 2026; [code](https://github.com/YudeZou/PICA-WAM-release).
- [InternW0](https://arxiv.org/abs/2609.27656), [InternW0-Delta](https://arxiv.org/abs/2609.31394): September 23 and 25, 2026; complete author lists from arXiv citation metadata. These are collaborative technical reports.
- [GBC](https://arxiv.org/abs/2508.09960): corrected full title, all five authors, and first submission date August 13, 2025; [release announcement](https://sjtu-mvasl-robotics.github.io/gbc/blog/gbc-open-source-release).
- [AnyBipe, IEEE](https://doi.org/10.1109/IROS60139.2025.11246492): final conference title and 2025 publication year; [bibliographic record](https://dblp.org/rec/conf/iros/YaoHGDTZL25); [arXiv version](https://arxiv.org/abs/2409.08904). Retained the existing local conference slides. The earlier site’s oral designation was not independently verified and is not repeated.
- [UAV RLHF preprint](https://doi.org/10.2139/ssrn.6085506): listed on Scholar; the full given name Xiaodong Han was subsequently verified in the newer local CV. Its journal-publication claim has not been independently matched to a publisher record, so this site retains the verified preprint status.

Figure sources are recorded as `image_source` and `image_caption` in the corresponding paper record. WebP thumbnails are locally optimized from the original project figures.

Removed obsolete student / expected-graduation / industry-current descriptions, duplicate CV sections, dead figure links, and unsupported numerical claims in the old project pages. Inconsistent old competition awards were omitted rather than guessed. Prior local profile edits and images are preserved in the Git stash named `Preserve pre-refresh local profile edits` and in the ignored `local/pre-refresh/` folder; the local engineer role dates and academic email were incorporated in the CV.

## Local verification

Run `bundle install` and `bundle exec jekyll build --strict_front_matter` in a configured Jekyll environment. On Windows, timezone data is required. In the current machine, an ignored `local/Gemfile` pins already installed gems and adds `tzinfo-data`; setting `BUNDLE_GEMFILE` to that file builds the same site without the optional file-watching native dependency. Build output is `_site/` and is ignored. Serve `_site/` with any local static server.

Before publishing, check the homepage, all publication groups, topic + text filtering, empty results, BibTeX, CV print view, legacy redirects, and narrow-screen layout. `local/`, `docs/`, `scripts/`, and unused demo pages are excluded from the public build.

## Authorship correction, October 27, 2026

- REAL: Boyu Mi, Mengchen Ma, and Yifei Yao share first authorship. Verified on the official project page and arXiv PDF first page.
- PICA-WAM: Yude Zou, Yifei Yao, and Guanbo Jiao share first authorship. Verified on the arXiv PDF first page, including its equal-contribution footnote.
- InfCoiL: Yude Zou, Yifei Yao, and Yiwei Hao share first authorship. Explicitly confirmed by the site owner in this chat; the public OpenReview PDF was inaccessible during this check.
- The homepage and inner pages use the profile sidebar for identity. Avoid repeating the name and role as a second body heading on small screens.

## Honors, interests, and web report update, October 27, 2026

The owner requested a broader local CV and award search. Relevant material was found in the local interview-materials CV folder, Downloads, and OneDrive documents. Only award titles and dates were transcribed into `_data/honors.yml`; no source certificate, private CV, identity document, phone number, or personal scan was added to the public site.

- Master's Outstanding Graduate (2026): explicitly confirmed by the owner; also listed in the newer CV.
- Bachelor's Outstanding Graduate (2023): directly verified from the university certificate, resolving the earlier CV's department-only description.
- MCM/ICM Outstanding Winner (2021): consistent across the personal Chinese and English CVs. Removed the old site's contradictory Meritorious Winner wording.
- RoboCup national first prize: newer CVs use 2022; the earlier CV clarifies the 2021 competition edition was awarded in June 2022. The site records both without presenting them as two prizes.
- Mitsubishi Electric Cup Innovative Design third prize (2021): verified from the original certificate.
- Presentation award (2023, 2024), Outstanding Scholarship (2025), and Tier 1 academic scholarships (2024, 2025): newer local CV.
- Zhiyuan honor scholarship, leadership scholarship, Class C academic scholarship, and Excellent Student Cadre: local CVs and corresponding scanned certificates. Scholarship repetition counts differ across old versions and are not asserted. Leadership-scholarship wording is kept generic where old versions differ.
- Undergraduate GPA corrected to 3.69/4.0 and the Automation degree labeled B.Eng. according to the local Chinese CV. No unrelated employment-date changes were made during this award update.

The research-interest framing follows the owner's explicit priorities: reinforcement learning, embodied agents, and robotic manipulation. Humanoid control and world-action models remain descriptions of relevant past and current papers.

Added [How Far Does a Frontier Agent Get as an Embodied Policy?](https://internrobotics.github.io/EBench-Astra-Tech-Report/) as a web technical report with the current official title and all fifteen authors in the published order. The first three authors (Yifei Yao, Yude Zou, Guanbo Jiao) have equal contribution. No arXiv link is invented: the official page currently says it is coming soon. The record's January 1 date is a sorting placeholder with `date_precision: year`; only 2026 is presented to visitors. The code separates its available web report and benchmark links.

## Research presentation

`assets/css/studio.css` provides the shared blue palette. `assets/css/home.css` adjusts the homepage layout, based on the original Academic Pages sidebar and inspired by Minimal Light. The homepage uses `_includes/home-publication.html` for single-column publication entries; the Publications page retains its topic filters and citations. Optional `home_image` overrides only the homepage image.

The retained demo assets in `_data/demos.yml` use short, silent excerpts of the released REAL, AnyBipe, and EBench videos. They are not currently embedded on the homepage. Exact source URLs are recorded in the data. REAL uses seconds 16–28, AnyBipe seconds 65–75, and EBench seconds 0–12. Posters are still frames from those same released videos. These clips do not establish individual author contributions or new evaluation claims.

Do not invent research outcomes, personal contribution statements, or extra sections to increase apparent volume. Add a contribution account only when the author confirms it or a published author-contribution statement supports it.

## Publication update, November 4, 2026

Google Scholar rate-limited automated access during this check, so the current Scholar list could not be independently read in full. The owner's interests now include offline and agentic reinforcement learning, as explicitly requested; they are presented as interests rather than claims of published results.

The EBench project is listed once, with the title, author order, and date of its [arXiv report](https://arxiv.org/abs/2610.35832) (October 26, 2026). Its first three authors share equal contribution. Its [project page](https://internrobotics.github.io/EBench-Astra-Tech-Report/) retains the earlier web report's title and author order; it is linked as a project rather than entered as a second publication. No unrelated same-name authors were added.

## New work and personal contributions, November 8, 2026

ABI and SimplEvo were checked against the owner's latest manuscripts. The owner confirmed ABI is in preparation, with Yifei Yao as first author and the remaining author list unsettled; all work so far is his. SimplEvo is awaiting arXiv release. Its manuscript lists Yifei Yao and Yude Zou as equal contributors; Yifei confirmed his role as experiment design, framework improvement, and results discussion. No roles of other authors are described on the site.

The November 1 dates on these records are month-level sorting dates for their November homepage introduction, not claimed publication dates. No arXiv ID, acceptance, complete ABI author list, or public paper download has been inferred. Figures come from the owner-provided manuscripts; their provenance is retained in ignored local intake notes. Add verified public paper links and complete citations when the papers are released. Recheck ABI authors before creating its citation. Contributions for older papers remain absent until individually confirmed.
