# Adding a weekly diary

The site remains plain HTML, CSS, and JavaScript. Open index.html to use it locally.

Week 1 keeps the original diary. Weeks 2–6 preserve the original summaries and have marked spaces for unwritten stories.

To add a week, copy weekly-template.html to week7.html (or the next number). Replace every {{...}} field: week, date, title, summary, image, alt, caption, previous, and next. The previous and next fields accept navigation links, for example <a class="btn" href="week6.html">← Week 6</a>. Add paragraphs where the HTML comments indicate, replace the draft notices and example image, and duplicate entry-row sections for longer entries. Rows alternate automatically. Update the preceding page’s next link and add a matching diary-card in index.html.

The existing remote photos and Google Fonts require internet access. Replace image addresses with your own local photographs when available.

The original Contact and search controls were empty placeholders. They have been removed; Photos now jumps to the photo cards, and About to the existing footer. No contact information has been invented.
