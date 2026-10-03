/* Builds the page from content.js. You normally never need to edit this file. */
(function () {
  var S = SITE;
  var $ = function (id) { return document.getElementById(id); };

  // Small helper: make an element safely (text is never treated as HTML)
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  // ---- Header / hero ----
  $("brand").textContent = S.name;
  $("hero-title").textContent = S.title + "  /  " + S.subtitle;
  $("hero-name").textContent = S.name;
  $("hero-summary").textContent = S.summary;
  $("cv-btn").href = S.cvFile;
  document.title = S.name + " | " + S.title;

  S.highlights.forEach(function (h) {
    var li = el("li");
    li.appendChild(el("strong", "", h.number));
    li.appendChild(el("span", "", h.label));
    $("stats").appendChild(li);
  });

  // ---- Experience ----
  S.experience.forEach(function (j) {
    var item = el("article", "job");
    var head = el("div", "job-head");
    var left = el("div");
    left.appendChild(el("h3", "", j.role));
    left.appendChild(el("p", "company", j.company));
    head.appendChild(left);
    head.appendChild(el("span", "dates", j.dates));
    item.appendChild(head);
    var ul = el("ul");
    j.points.forEach(function (p) { ul.appendChild(el("li", "", p)); });
    item.appendChild(ul);
    $("experience-list").appendChild(item);
  });

  // ---- Projects ----
  S.projects.forEach(function (p) {
    var card = el("article", "card");
    card.appendChild(el("span", "tag", p.tag));
    card.appendChild(el("h3", "", p.name));
    card.appendChild(el("p", "", p.description));
    if (p.link) {
      var a = el("a", "more", "View →");
      a.href = p.link;
      card.appendChild(a);
    }
    $("projects-list").appendChild(card);
  });

  // ---- Skills ----
  S.skills.forEach(function (g) {
    var box = el("div", "skill-group");
    box.appendChild(el("h3", "", g.group));
    var ul = el("ul", "chips");
    g.items.forEach(function (i) { ul.appendChild(el("li", "", i)); });
    box.appendChild(ul);
    $("skills-list").appendChild(box);
  });

  // ---- Education ----
  S.education.forEach(function (e) {
    var row = el("div", "edu-row");
    var left = el("div");
    left.appendChild(el("h3", "", e.degree));
    left.appendChild(el("p", "company", e.school));
    row.appendChild(left);
    var right = el("div", "edu-meta");
    right.appendChild(el("span", "", e.year));
    right.appendChild(el("span", "", e.score));
    row.appendChild(right);
    $("education-list").appendChild(row);
  });

  // ---- Gallery ----
  $("drawings-intro").textContent = S.drawingsIntro;
  S.drawings.forEach(function (d, i) {
    var fig = el("figure", "tile");
    var btn = el("button", "tile-img");
    btn.type = "button";
    btn.setAttribute("aria-label", "Enlarge: " + d.title);
    var img = el("img");
    img.src = "images/drawings/" + d.file;
    img.alt = d.title + ": " + d.caption;
    img.loading = "lazy";
    btn.appendChild(img);
    btn.addEventListener("click", function () { openLightbox(i); });
    fig.appendChild(btn);
    var cap = el("figcaption");
    cap.appendChild(el("strong", "", d.title));
    cap.appendChild(el("span", "", d.caption));
    fig.appendChild(cap);
    $("gallery").appendChild(fig);
  });

  if (S.cadFiles && S.cadFiles.length) {
    $("cad").appendChild(document.createTextNode("Original AutoCAD files: "));
    S.cadFiles.forEach(function (f, i) {
      var a = el("a", "", f.label);
      a.href = f.file;
      a.download = "";
      if (i) $("cad").appendChild(document.createTextNode(" · "));
      $("cad").appendChild(a);
    });
  }

  // ---- Lightbox ----
  var current = 0, lb = $("lightbox");
  function show(i) {
    var n = S.drawings.length;
    current = (i + n) % n;
    var d = S.drawings[current];
    $("lb-img").src = "images/drawings/" + d.file;
    $("lb-img").alt = d.title;
    $("lb-cap").textContent = d.title + " — " + d.caption;
  }
  function openLightbox(i) { show(i); lb.hidden = false; document.body.style.overflow = "hidden"; $("lb-close").focus(); }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }
  $("lb-close").addEventListener("click", closeLightbox);
  $("lb-prev").addEventListener("click", function () { show(current - 1); });
  $("lb-next").addEventListener("click", function () { show(current + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });

  // ---- Contact & footer ----
  var c = $("contact-list");
  function line(label, value, href) {
    var li = el("li");
    li.appendChild(el("span", "", label));
    if (href) { var a = el("a", "", value); a.href = href; li.appendChild(a); }
    else li.appendChild(el("b", "", value));
    c.appendChild(li);
  }
  line("Email", S.email, "mailto:" + S.email);
  line("Phone", S.phone, "tel:" + S.phone.replace(/\s/g, ""));
  line("Location", S.location);
  $("footer-text").textContent = "© " + new Date().getFullYear() + " " + S.name;
})();
