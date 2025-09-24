# Content Editing Guide for Your Personal Website

## 🎨 **Style Switcher Removed**
✅ The style switcher has been removed and your site is now permanently set to:
- **Color Theme**: Blue
- **Skin**: Dark

## 📝 **Easy Content Editing**

### **1. Personal Information & Bio**
**File**: `/src/components/AboutUs.js`

**What to edit:**
- **Profile Picture**: Replace `images/men.jpg` with your photo (line 303)
- **Bio Text**: Lines 314-320 - Update the description about yourself
- **Personal Info**: Lines 322-368 - Update name, birth date, location, contact info

**Example changes:**
```javascript
// Line 314-320: Update your bio
<p className="second-font">
  I'm a [Your Profession] based in [Your City], with a passion for [your interests]. 
  I have [X] years of experience in [your field].
</p>

// Lines 324-330: Update personal details
<li><span className="font-weight-700">First Name: </span>Your Name</li>
<li><span className="font-weight-700">Last Name: </span>Your Last Name</li>
```

### **2. Experience & Education**
**File**: `/src/components/AboutUs.js`

**Experience Section** (lines 6-64):
- Update job titles, companies, dates, and descriptions
- Add/remove experience entries by copying the pattern

**Education Section** (lines 65-122):
- Update degrees, institutions, dates, and descriptions

### **3. Skills**
**File**: `/src/components/AboutUs.js` (lines 123-269)

**To update skills:**
- Change skill names (e.g., "html" to "React")
- Adjust star ratings by changing `fa-star` to `fa-star-o` or `fa-star-half-empty`
- Add new skills by copying the existing pattern

### **4. Portfolio/Projects**
**File**: `/src/components/Portfolio.js`

**To add/edit projects:**
- Replace project images in `/public/images/projects/`
- Update project titles and descriptions
- Add new projects by copying the existing structure

### **5. Contact Information**
**File**: `/src/components/GetInTouch.js`

**Update contact details:**
- Email, phone, address
- Contact form settings (if using EmailJS)

## 🆕 **Adding New Sections**

### **Step 1: Create a New Component**
Create a new file in `/src/components/` (e.g., `MyNewSection.js`):

```javascript
import { memo } from "react";
import SectionContainer from "./SectionContainer";

const MyNewSection = () => {
  return (
    <SectionContainer
      sectionName="myNewSection"
      title={{ first: "My New", last: "Section" }}
    >
      <div className="bl-content">
        <div className="container page-title center-align">
          <h2>My New Section</h2>
        </div>
        <div className="container">
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-star" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Your content here */}
          <div className="row">
            <div className="col s12">
              <p>Your new section content goes here!</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default memo(MyNewSection);
```

### **Step 2: Add to Main Page**
**File**: `/pages/index.js`

Import and add your new component:
```javascript
import MyNewSection from "../src/components/MyNewSection";

// In the component:
<Layout>
  <div className="main-picture men hide-on-med-and-down"></div>
  <div id="bl-main" className={`bl-main ${nav !== null ? "bl-expand-item" : ""}`}>
    <section className="topleft">
      {/* existing content */}
    </section>
    <AboutUs />
    <Portfolio />
    <MyNewSection /> {/* Add your new section here */}
    <GetInTouch />
    <ProjectDetails />
  </div>
</Layout>
```

## 🖼️ **Adding Images**

### **Profile Picture**
1. Add your photo to `/public/images/`
2. Update the path in `AboutUs.js` line 303:
```javascript
<img src="images/your-photo.jpg" className="responsive-img my-picture" alt="My Photo" />
```

### **Project Images**
1. Add images to `/public/images/projects/`
2. Update paths in `Portfolio.js`

### **Background Images**
- Update CSS files in `/public/css/` for background images

## 🎯 **Quick Start Checklist**

- [ ] Replace profile picture (`images/men.jpg`)
- [ ] Update personal info in `AboutUs.js` (lines 314-368)
- [ ] Update experience section with your work history
- [ ] Update education section with your qualifications
- [ ] Update skills list with your technical skills
- [ ] Replace project images and update portfolio
- [ ] Update contact information
- [ ] Test your changes locally with `npm run dev`

## 🔧 **Technical Notes**

- The site uses Materialize CSS framework
- Font Awesome icons are used throughout
- Images should be optimized for web (recommended: WebP or JPEG)
- The site is responsive and works on mobile devices

## 📱 **Testing Your Changes**

1. Run `npm run dev` to start the development server
2. Open `http://localhost:3000` to see your changes
3. Test on different screen sizes
4. Build and deploy when ready: `npm run build`

---

**Need help?** The component structure is well-organized and follows React best practices. Each section is self-contained, making it easy to customize without affecting other parts of the site.
