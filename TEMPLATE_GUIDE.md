# 🏨 Hotel Website Template - Customization Guide

## 🎯 How to Customize This Template for Different Hotels

### 1. **Visual Edits (No Code Required)**
- **Text Content**: Click on any text to edit hotel name, descriptions, contact info
- **Colors**: Use Visual Edits to change brand colors throughout the site
- **Fonts**: Switch typography to match hotel brand

### 2. **Images & Media**
Replace these key images in `src/assets/`:
- `hero-hotel.jpg` - Main hero background
- `standard-room.jpg` - Standard room showcase
- `deluxe-room.jpg` - Deluxe room showcase  
- `suite-room.jpg` - Suite room showcase

### 3. **Content Customization**
Edit these components for hotel-specific content:

#### Header (`src/components/Header.tsx`)
- Hotel logo and name
- Navigation menu items
- Contact phone number

#### Hero Section (`src/components/Hero.tsx`)
- Main headline and tagline
- Call-to-action button text
- Booking form labels

#### About Section (`src/components/About.tsx`)
- Hotel story and description
- Feature highlights
- Statistics and numbers

#### Rooms Section (`src/components/Rooms.tsx`)
- Room types and names
- Pricing information
- Room descriptions and amenities

#### Testimonials (`src/components/Testimonials.tsx`)
- Guest reviews and ratings
- Customer names and locations
- Trust indicators and statistics

#### Footer (`src/components/Footer.tsx`)
- Contact information
- Address and location
- Social media links
- Service listings

### 4. **Exporting & Deployment**

#### Option A: GitHub Export
1. Click **GitHub** button in top-right
2. Connect your GitHub account
3. Create repository - code automatically syncs
4. Clone locally or deploy to any hosting service

#### Option B: Direct Code Export
- Enable **Dev Mode** in top-left
- Enable **Code Editing** in Account Settings > Labs
- Copy/download all files manually

### 5. **Template Reuse Workflow**

For each new hotel client:

1. **Duplicate Project**: Create new Lovable project or GitHub branch
2. **Content Swap**: Use Visual Edits to change all text content
3. **Image Replacement**: Upload new hotel images to replace existing ones
4. **Color Scheme**: Adjust brand colors in Visual Edits
5. **Contact Info**: Update all contact details and location
6. **Deploy**: Export code and deploy to client's domain

### 6. **Making Elements More Editable**

#### Button Links
Edit in components - change `href` attributes:
```tsx
<Button asChild>
  <a href="/booking">Book Now</a>
</Button>
```

#### Navigation Links
Update in `Header.tsx`:
```tsx
const navItems = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  // Add/edit as needed
];
```

#### Image Sources
Replace in component files:
```tsx
import newHeroImage from "@/assets/new-hero.jpg";
<img src={newHeroImage} alt="Hotel" />
```

### 7. **Advanced Customization**

#### Color Scheme Changes
Edit `src/index.css`:
```css
:root {
  --luxury-gold: [your brand color];
  --premium-navy: [your secondary color];
}
```

#### Layout Modifications
- Add/remove sections by editing `src/pages/Index.tsx`
- Create new components in `src/components/`
- Modify existing component layouts

### 8. **Business Model Tips**

1. **Template Pricing**: Charge $500-2000 per customization
2. **Upsells**: Offer booking system integration, SEO, hosting
3. **Maintenance**: Monthly updates and content management
4. **Packages**: Basic (content only) vs Premium (full customization)

## 🚀 Quick Start Checklist

- [ ] Change hotel name in Header
- [ ] Replace hero image
- [ ] Update about section content
- [ ] Add room images and descriptions
- [ ] Update contact information
- [ ] Customize color scheme
- [ ] Add testimonials
- [ ] Test responsive design
- [ ] Export and deploy

## 📞 Support

This template is built with modern React components, making it easy to maintain and customize. All code follows best practices for scalability and performance.