# My Civil Engineering Portfolio

No coding needed. Everything is done in your browser.

```
index.html      the website (never needs changing)
content.js      your name, text and list of drawings  <- the only file you edit
assets/works/   your drawing images
```

## 1. Put it online (one time, about 5 minutes)
1. Create a free account at https://github.com and sign in.
2. Click **+** (top right) > **New repository**. Name it `portfolio`, keep it **Public**, click **Create repository**.
3. Unzip this folder on your computer. On the new repo page click **uploading an existing file**.
4. Open the unzipped folder, select **everything inside it** (`index.html`, `content.js`, `README.md`, `.nojekyll` and the `assets` folder) and drag it into the browser. Wait for the upload, then click **Commit changes**.
   - If `.nojekyll` or the `assets` folder will not drag in, upload `assets/works` images separately (step 3 below does this).
5. Go to **Settings > Pages**. Under **Branch** choose `main` and `/ (root)`, then **Save**.
6. After about a minute your site is live at `https://YOUR-USERNAME.github.io/portfolio/`.

## 2. Change your name, text or drawings (easy way)
1. Open your site and add `?edit` to the address:
   `https://YOUR-USERNAME.github.io/portfolio/?edit`
2. A **Site editor** panel opens. Change anything and watch the page update live.
3. Click **Download content.js**.
4. On GitHub open your repo, click **Add file > Upload files**, drop in the downloaded `content.js`, and click **Commit changes**. It replaces the old one.
5. Wait a minute, then refresh your site.

## 3. Add a new drawing
1. Save your drawing as a JPG or PNG (about 1500 pixels on the long side is plenty). Give it a simple name with no spaces, like `bridge-plan.jpg`.
2. On GitHub open `assets` > `works`, click **Add file > Upload files**, drop the image in, **Commit changes**.
3. Open your site with `?edit`, click **+ Add drawing images**, pick the same image, then fill in the title, category and description.
4. Download `content.js` and upload it as in section 2.

Typing a new category name creates a new filter button automatically. The order of drawings in the editor is the order on the site.

## 4. Other useful things
- **Resume:** upload a PDF to `assets`, then type `assets/resume.pdf` in the editor's resume box.
- **Link previews:** edit the `<title>` and `og:` lines near the top of `index.html` (pencil icon on GitHub) to show your name.
- **Mistake?** In `content.js` use the history button on GitHub to restore an older version.
- **Preview before uploading:** double-click `index.html` on your computer. Add `?edit` the same way.
