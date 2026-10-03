/* =====================================================================
   YOUR CONTENT LIVES HERE. This is the only file you ever need to change.

   Easiest way to edit (no coding):
   1. Open your website with  ?edit  at the end, e.g.
      https://YOUR-NAME.github.io/portfolio/?edit
   2. Change text, add drawings, reorder them.
   3. Click "Download content.js" and upload that file to GitHub
      (see README.md, step by step).

   Or edit by hand: change the text inside the quotes. Keep the quotes,
   commas and brackets in place.
   ===================================================================== */
const PROFILE = {
  "name": "Manu Vishwakarma",
  "role": "Civil Engineer | Construction Technology & Management",
  "university": "RGPV Bhopal",
  "year": "M.Tech (pursuing)",
  "location": "Bhopal, Madhya Pradesh",
  "lead": "Civil engineer with hands-on site execution experience, now pursuing an M.Tech in Construction Technology & Management. I draw and model in AutoCAD, Revit, Tekla and Navisworks.",
  "bio": "I am a detail-oriented civil engineer with experience in site execution, structural analysis and project coordination. I focus on quality control, safety compliance and efficient project delivery, and I enjoy using engineering and data-driven decision-making to improve construction processes. I am especially interested in sustainable construction and BIM workflows. My published research looks at soil stabilization using waste fibres and crushed tyre rubber.",
  "software": [
    "AutoCAD 2D & 3D",
    "Revit Architecture",
    "Revit Structure",
    "Revit MEP",
    "Tekla",
    "Navisworks",
    "3ds Max",
    "BIM 360",
    "MS Office"
  ],
  "skills": [
    "Site execution & supervision",
    "Structural analysis & design",
    "Project planning & coordination",
    "Quantity estimation & cost analysis",
    "Technical drawing interpretation",
    "Quality & safety compliance",
    "BOQ analysis & site reports",
    "Labour & material management",
    "Concreting, reinforcement, shuttering & finishing"
  ],
  "experience": [
    {
      "role": "Site Engineer",
      "org": "IES Group, Bhopal",
      "dates": "Aug 2025 – Jan 2026",
      "desc": "Six months on building construction projects in Bhopal: site supervision, structural analysis, material management and project execution."
    },
    {
      "role": "Civil Engineering Intern",
      "org": "M/S Patel Construction",
      "dates": "Internship",
      "desc": "Construction of an office building at Sharda Open Mine, Junnardeo."
    },
    {
      "role": "Civil Engineering Intern",
      "org": "Siddique Construction, Chhindwara",
      "dates": "Internship",
      "desc": "Construction of a cement concrete (CC) road for a housing society."
    }
  ],
  "education": [
    {
      "degree": "M.Tech, Construction Technology & Management",
      "school": "RGPV Bhopal",
      "year": "Pursuing (2024)",
      "score": "CGPA 8.1 (1st year)"
    },
    {
      "degree": "B.Tech, Civil Engineering",
      "school": "RGPV Bhopal",
      "year": "2023",
      "score": "CGPA 7.74"
    },
    {
      "degree": "ITI, Surveyor",
      "school": "NCVT",
      "year": "2018",
      "score": "76.1%"
    },
    {
      "degree": "DCA, Diploma in Computer Applications",
      "school": "MCU Bhopal",
      "year": "2019",
      "score": "65.71%"
    },
    {
      "degree": "Class 12",
      "school": "MP Board",
      "year": "2017",
      "score": "63.4%"
    },
    {
      "degree": "Class 10",
      "school": "MP Board",
      "year": "2015",
      "score": "71.16%"
    }
  ],
  "publications": [
    {
      "title": "Soil Stabilization Using Waste Fiber Materials and Waste Crushed Tyre Rubber",
      "venue": "IJRAR (International Journal of Research and Analytical Reviews)"
    }
  ],
  "email": "manuvishwakarma03@gmail.com",
  "phone": "7415320200",
  "links": [],
  "resume": "assets/resume.pdf"
};

/* One entry per drawing. Newest first. */
const PROJECTS = [
  { "img": "assets/works/slotted-circular-plate.jpg", "title": "Slotted Circular Plate", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "A circular plate with four cross-shaped cut-outs and four curved slots on a bolt circle. Dimensioned with diameters of 200, 160, 120, 48 and 16 mm and a 35° angle." },
  { "img": "assets/works/teapot-profile.jpg", "title": "Teapot Profile with Fillets", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "Side profile of a teapot built from lines, arcs and fillets (R1 to R20). The body is 40 wide on a 45 wide base and 40 tall, with a handle and an angled spout." },
  { "img": "assets/works/ornamental-oval-motif.jpg", "title": "Ornamental Oval Motif & Plates", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "A decorative oval frame with star details, a small rosette made with polar arrays (R10 and R20), and a plate with a rounded notch and a circular hole." },
  { "img": "assets/works/scalloped-disc-chamfered-plate.jpg", "title": "Scalloped Disc & Chamfered Plate", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "A disc with six R10 scallops, and a chamfered plate with a hexagon holding three circles, a notched base and angled corners." },
  { "img": "assets/works/residential-plans-section.jpg", "title": "Residential Plans, Elevation & Section A-A", "cat": "Building Plans", "tool": "AutoCAD", "desc": "Ground floor and first floor plans with a front elevation and a section through the house, dimensioned in feet and inches." },
  { "img": "assets/works/floor-plan-arched-bay.jpg", "title": "Residential Floor Plan with Arched Bay", "cat": "Building Plans", "tool": "AutoCAD", "desc": "Dimensioned floor plan with a curved bay, staircase, room labels and a door and window schedule." },
  { "img": "assets/works/house-iso-ortho.jpg", "title": "House: Isometric & Orthographic Views", "cat": "Building Plans", "tool": "AutoCAD", "desc": "A hipped-roof house drawn in isometric, with front and side orthographic elevations. Door size 4' x 7'." },
  { "img": "assets/works/arch-bridge-elevation.jpg", "title": "Arch Bridge Elevation", "cat": "Structures", "tool": "AutoCAD", "desc": "Elevation of a through-arch bridge with railings, plus enlarged details of the abutment and parapet." },
  { "img": "assets/works/portico-door-elevation.jpg", "title": "Classical Portico Door Elevation", "cat": "Architectural Details", "tool": "AutoCAD", "desc": "A columned entrance with a triangular pediment, a panelled door with a fanlight, and a stepped base." },
  { "img": "assets/works/panel-door-details.jpg", "title": "Panel Door Elevations & Sections", "cat": "Architectural Details", "tool": "AutoCAD", "desc": "A panelled double door shown in elevation, with plan and section details of the frame." },
  { "img": "assets/works/ornamental-grille-panels.jpg", "title": "Ornamental Grille & Lattice Panels", "cat": "Architectural Details", "tool": "AutoCAD", "desc": "Repeating decorative grille panels with hatching and enlarged detail callouts." },
  { "img": "assets/works/solid-models.jpg", "title": "3D Solid Models: Slotted Block & Bracket", "cat": "3D & Isometric", "tool": "AutoCAD", "desc": "Shaded 3D solids: a block with a slotted cylinder, and a bracket with a half-round cradle and bored holes." },
  { "img": "assets/works/isometric-brackets.jpg", "title": "Isometric Brackets & Angle Supports", "cat": "3D & Isometric", "tool": "AutoCAD", "desc": "Isometric views of angled supports with slots, a large bore and circular cut-outs." },
  { "img": "assets/works/pedestal-and-steps.jpg", "title": "Pedestal Columns & Stepped Platform", "cat": "3D & Isometric", "tool": "AutoCAD", "desc": "Isometric drawings of a stepped octagonal pedestal with lamp posts, and a small step stool." },
  { "img": "assets/works/radial-plate-linkage.jpg", "title": "Radial Plate & Linkage Layout", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "A star-shaped plate (Ø206, R36) and a linkage with bolt circle, four Ø8 nuts, radii R5 to R40 and a 158 mm centre distance." },
  { "img": "assets/works/orthographic-profiles.jpg", "title": "Orthographic Profiles: T, I & L Sections", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "Fully dimensioned T, I and L section profiles and two square base plates, one with four Ø15 holes." },
  { "img": "assets/works/stepped-profiles.jpg", "title": "Dimensioned Stepped Profiles", "cat": "2D Drafting", "tool": "AutoCAD", "desc": "Stepped and octagonal profiles with linear, radial and angular dimensions." }
];
