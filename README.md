# SyncTwin project website

Static project page for **SyncTwin: Fast Digital Twin Construction and Synchronization for Safe Robotic Manipulation**, accepted to IEEE Robotics and Automation Letters (RA-L), 2026.

Website author affiliations: Ruopeng Huang — UCLA and USC; Boyu Yang, Wenlong Gui, Jeremy Morgan, and Erdem Bıyık — USC; Jiachen Li — Georgia Tech. The TASL link points to https://tasl-lab.github.io/.

## Edit and preview

Open `index.html` in a browser, or serve the repository with a local static server (for example, VS Code Live Server). No build step is required.

- `index.html`: paper content, author affiliations, results, metadata, and citation.
- `static/css/index.css`: responsive layout and page styling.
- `static/js/index.js`: citation copying, scroll button, and video playback.
- `static/images/paper/`: figure exports from the final manuscript, plus a PNG social preview. The page displays the overview and mask expansion / denoising ablation figure; method and experiment demonstrations use videos to avoid duplicate media.
- `static/pdfs/synctwin.pdf`: a byte-for-byte copy of `SyncTwin-Overleaf/RA_L__SyncTwin.pdf`.
- `static/videos/`: existing supplementary demonstrations.

The layout follows the original single-column project page. Detailed experimental tables and discussion are available in expandable sections below the three experiment demonstrations.

The content source is `SyncTwin-Overleaf/main.tex`; `highlight.tex` and `Response_final.tex` are revision materials. The website does not depend on the Overleaf directory at runtime. When the manuscript changes, update the exported assets, PDF, results, abstract, and citation together.

Avoidance scores include edge-contact outcomes with weight 0.8. Tracking FPS, scene-update rate, and planning frequency refer to different configurations and are labeled separately. Publication volume, page numbers, and DOI are omitted until available.

The citation is an accepted RA-L journal article, with the journal name, year, and acceptance note. Boyu Yang and Wenlong Gui retain homepage placeholder links pointing to this project's `index.html`, as in the original page; these are not verified personal websites.

Content has been checked against the final `main.tex`: the abstract is verbatim; method and discussion text are condensed summaries; obstacle-avoidance, pose-accuracy, and runtime values follow Tables I–III. SelfRot has zero translational speed, while EnterTraj is evaluated at 0.2 and 0.5 m/s. Metric scale alignment uses a marker of known dimensions.

## Credits and license

Adapted from the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/).

Website licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
