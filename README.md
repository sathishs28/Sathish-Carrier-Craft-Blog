# 🚀 Sathish S — Resume Blog Website

A modern, responsive portfolio and blog website built with pure HTML, CSS, and JavaScript. No frameworks, no build steps — just three files you can edit directly.

---

## 📂 File Structure

```
sathish-portfolio/
├── index.html          ← All content, sections, text
├── style.css           ← All colors, layouts, animations
├── script.js           ← All interactivity and effects
└── README.md           ← This file
```

> **Important:** All three files must be in the **same folder** for the website to work.

---

## 🖥️ How to Run Locally

### Option 1: Direct Open (Quickest)
1. Download all 3 files to a folder on your computer
2. Double-click `index.html`
3. It opens in your browser instantly — no internet required

### Option 2: VS Code + Live Server (Recommended for editing)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **"Live Server"** extension
3. Right-click `index.html` → **"Open with Live Server"**
4. Edit files and see changes instantly in your browser

---

## 🎨 Website Sections Explained

| Section | File | What It Shows |
|---------|------|---------------|
| **Navigation** | `index.html` (lines 20-60) | Fixed top menu with smooth scroll links |
| **Hero** | `index.html` (lines 63-90) | Your name, animated typing effect, CTA buttons |
| **Journey** | `index.html` (lines 93-140) | Your career story + animated stat counters |
| **Experience** | `index.html` (lines 143-200) | Timeline of your 3 jobs with responsibilities |
| **Skills** | `index.html` (lines 203-320) | 4 skill cards with animated progress bars |
| **Projects** | `index.html` (lines 323-420) | Featured projects with tech tags |
| **Blog** | `index.html` (lines 423-520) | Article cards with category, read time, preview |
| **Contact** | `index.html` (lines 523-570) | Clickable email, phone, Skype, location |
| **Footer** | `index.html` (lines 573-585) | Social links and copyright |

---

## ✏️ How to Customize Content

### 1. Change Your Name / Brand
**File:** `index.html`  
**Look for:**
```html
<div class="logo">Sathish.S</div>
```
Replace `Sathish.S` with your preferred name.

---

### 2. Update the Hero Description
**File:** `index.html`  
**Look for:**
```html
<p class="hero-description">
    Senior QA Engineer with 9+ years...
</p>
```
Write your own short bio here.

---

### 3. Change Typewriter Animation Words
**File:** `script.js`  
**Look for:**
```javascript
const roles = [
    "Sr. QA Engineer",
    "Automation Specialist",
    "CI/CD Enthusiast",
    "DVB & OTT Expert",
    "Python + Selenium Developer"
];
```
Add, remove, or edit any text in this list. The animation will cycle through them automatically.

---

### 4. Update Experience / Jobs
**File:** `index.html`  
**Look for:** `<div class="timeline">` (around line 155)

Each job is wrapped in a `.timeline-item` block:
```html
<div class="timeline-item">
    <span class="timeline-date">Nov 2021 — Present</span>
    <div class="timeline-content">
        <h3>Sr. QC/QA Engineer <span class="current-tag">Current</span></h3>
        <span class="company">OVT India Pvt. Ltd., Bangalore</span>
        <ul>
            <li>Your responsibility 1</li>
            <li>Your responsibility 2</li>
        </ul>
    </div>
</div>
```

**To add a new job:** Copy one `.timeline-item` block and paste it above or below existing ones.  
**To mark as current job:** Keep `<span class="current-tag">Current</span>`  
**To mark as past job:** Remove the `current-tag` span.

---

### 5. Update Skill Bars
**File:** `index.html`  
**Look for:** `<div class="skills-grid">` (around line 215)

Each skill bar looks like this:
```html
<div class="skill-item">
    <div class="skill-header">
        <span>Python + Selenium</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85"></div>
    </div>
</div>
```

**Important:** The `data-width="85"` controls the animation.  
Make sure the number matches the percentage text (`<span>85%</span>`).

**To add a new skill:** Copy a `.skill-item` block inside any `.skill-category`.  
**To add a new category:** Copy an entire `.skill-category` block.

---

### 6. Update Projects
**File:** `index.html`  
**Look for:** `<div class="projects-grid">` (around line 340)

The first project has `class="project-card featured"` which makes it span the full width.  
Regular projects use `class="project-card"` only.

```html
<div class="project-card">  <!-- or "project-card featured" -->
    <div class="project-header">
        <span class="project-badge">🏆 Current Focus</span>
        <h3>Your Project Title</h3>
        <p>Project description...</p>
    </div>
    <div class="project-body">
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Selenium</span>
        </div>
    </div>
    <div class="project-footer">
        <div class="project-status">
            <span class="status-dot"></span>      <!-- Green = Active -->
            <!-- <span class="status-dot completed"></span>  Yellow = Done -->
            <span>Active Development</span>
        </div>
        <span class="project-company">Company Name</span>
    </div>
</div>
```

---

### 7. Update Contact Information
**File:** `index.html`  
**Look for:** `<div class="contact-grid">` (around line 540)

```html
<a href="mailto:sathishgesh28@gmail.com" class="contact-item">
    <div class="contact-icon">✉️</div>
    <div class="contact-label">Email</div>
    <div class="contact-value">sathishgesh28@gmail.com</div>
</a>
```

**Change email:** Update both `href="mailto:..."` and the text inside `.contact-value`  
**Change phone:** Update both `href="tel:..."` and the text  
**Change Skype:** Update `href="skype:..."` — use your Skype username  
**Change location:** Just update the text (no link needed)

> **Note:** Also update the same details in the **Footer** (around line 580) and **Navigation** Skype link if you have one.

---

## 📝 How to Add Blog Posts

Currently, blog posts show a preview popup when clicked. Here's how to manage them:

### Step 1: Add the HTML Card
**File:** `index.html`  
**Look for:** `<div class="blog-grid">` (around line 440)

Copy any existing `<article>` block and modify:
```html
<article class="blog-card fade-in" data-blog="my-new-post">
    <div class="blog-image">🚀</div>  <!-- Change emoji -->
    <div class="blog-content">
        <div class="blog-meta">
            <span>Category</span>
            <span>•</span>
            <span>5 min read</span>
        </div>
        <h3>Your Blog Post Title</h3>
        <p>Short preview text...</p>
        <a href="#" class="read-more">Read Article →</a>
    </div>
</article>
```

**Important:** The `data-blog="my-new-post"` must be a unique ID. Use lowercase, no spaces (use hyphens).

### Step 2: Add the Article Content
**File:** `script.js`  
**Look for:** `const blogArticles = {` (around line 90)

Add your new article:
```javascript
myNewPost: {  // Must match data-blog attribute (camelCase here)
    title: "Your Blog Post Title",
    preview: `Full article coming soon!

Topics covered:
• Point 1
• Point 2
• Point 3`
},
```

> **For full articles:** Replace the `alert()` in `showBlogDetail()` function with a link to a separate blog page, or build a modal popup.

---

## 🎨 How to Customize Colors & Theme

**File:** `style.css`  
**Look for:** `:root {` at the very top (line 15)

### Dark Mode Colors (Default)
```css
:root {
    --primary: #6366f1;        /* Main purple */
    --secondary: #06b6d4;      /* Cyan accent */
    --accent: #8b5cf6;         /* Violet */
    --bg: #0f172a;             /* Dark background */
    --bg-card: #1e293b;        /* Card background */
    --text: #f1f5f9;           /* White text */
    --text-muted: #94a3b8;     /* Gray text */
    --border: #334155;         /* Borders */
    --success: #10b981;        /* Green */
    --warning: #f59e0b;        /* Orange/Yellow */
}
```

### Change the Gradient
```css
--gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
```
Replace the color codes with your preferred colors.

### Light Mode Colors
**Look for:** `[data-theme="light"] {` (around line 40)

```css
[data-theme="light"] {
    --bg: #ffffff;
    --bg-card: #f8fafc;
    --text: #0f172a;
    --text-muted: #64748b;
    --border: #e2e8f0;
}
```

---

## 📱 Responsive Behavior

The website automatically adapts to mobile screens:
- **Desktop (>768px):** Full navigation, side-by-side layouts
- **Mobile (≤768px):** Hamburger menu, stacked sections, smaller fonts

**To test mobile view:** In Chrome/Edge, press `F12` → Click the **device toggle icon** (📱) → Select a phone model.

---

## 🌐 How to Deploy Online (Free)

### Option 1: GitHub Pages (Best for Developers)
1. Create a GitHub account
2. Create a new repository named `sathish-portfolio`
3. Upload your 3 files to the repository
4. Go to **Settings → Pages**
5. Under "Source", select **Deploy from a branch** → **main** → **/ (root)**
6. Click Save. Your site will be live at `https://yourusername.github.io/sathish-portfolio/`

### Option 2: Netlify Drop (Easiest)
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag and drop your folder containing the 3 files
3. Get an instant live URL

### Option 3: Vercel
1. Push files to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **Page looks plain (no styling)** | Make sure `style.css` is in the **same folder** as `index.html` |
| **Animations not working** | Check that `script.js` is in the same folder. Open browser console (F12) for errors |
| **Images not showing** | This template uses emojis (🚀 📡 🎥) instead of images. Replace emoji with `<img src="your-image.jpg">` if needed |
| **Mobile menu won't open** | Check that `script.js` is loading. Verify element IDs match (`mobileNav`, `mobileMenuBtn`) |
| **Theme won't save** | Local storage might be disabled in private/incognito mode. Try normal browsing |
| **Skill bars not animating** | Scroll down to the Skills section. Bars animate only when visible on screen |

---

## 📋 Checklist Before Publishing

- [ ] Updated your name in the logo
- [ ] Updated hero description with your current role
- [ ] Updated all 3 job experiences in the timeline
- [ ] Updated skill percentages to match your actual skills
- [ ] Updated all 4 project cards with your real projects
- [ ] Updated contact email, phone, Skype, location
- [ ] Updated footer social links
- [ ] Added/removed blog posts as needed
- [ ] Tested on mobile view (Chrome DevTools)
- [ ] Tested dark/light theme toggle
- [ ] Verified all navigation links scroll smoothly

---

## 💡 Pro Tips

1. **Backup before editing:** Copy the original files before making big changes
2. **Use VS Code:** It has color previews, auto-complete, and error highlighting for CSS
3. **Comment your changes:** Add `<!-- -->` in HTML and `/* */` in CSS to remember what you modified
4. **Test incrementally:** Make one change, refresh browser, then make the next
5. **Google Fonts:** The template uses "Inter" and "JetBrains Mono". To change fonts, edit the `<link>` in `index.html` `<head>` section

---

## 📧 Need Help?

If something breaks while editing:
1. Check the **browser console** (F12 → Console tab) for red error messages
2. Compare your file with the original download
3. Common mistakes: missing closing tags `</div>`, typos in class names, extra/missing quotes

---

**Built with ❤️ for Sathish S**  
*Sr. QA Engineer | Automation | CI/CD | DVB/OTT*
