const fs = require('fs');
const path = require('path');

// This script creates placeholder Open Graph images
// For production, use design tools like Canva or Figma to create proper OG images

const createOGImageHTML = (title, subtitle, filename) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 630px;
      background: linear-gradient(135deg, #1e3a5f 0%, #397397 100%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      color: white;
    }
    .logo {
      width: 120px;
      height: 120px;
      background: white;
      border-radius: 20px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    }
    .logo img {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }
    h1 {
      font-size: 64px;
      font-weight: bold;
      margin: 0 0 20px 0;
      text-align: center;
      max-width: 900px;
      line-height: 1.2;
    }
    p {
      font-size: 32px;
      margin: 0;
      opacity: 0.9;
      text-align: center;
      max-width: 800px;
    }
    .badge {
      position: absolute;
      bottom: 40px;
      right: 40px;
      background: rgba(255,255,255,0.15);
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 20px;
      backdrop-filter: blur(10px);
    }
  </style>
</head>
<body>
  <div class="logo">
    <img src="medgen.png" alt="Med-Gen Insurance" />
  </div>
  <h1>${title}</h1>
  <p>${subtitle}</p>
  <div class="badge">Med-Gen Insurance Agency</div>
</body>
</html>
  `;
};

// Create OG images data
const ogImages = [
  {
    filename: 'og-image-template.html',
    title: 'Protecting What Matters Most',
    subtitle: 'Comprehensive Medical & General Insurance in Kenya'
  },
  {
    filename: 'og-medical-template.html',
    title: 'Medical Insurance',
    subtitle: 'Quality Healthcare Coverage for You & Your Family'
  },
  {
    filename: 'og-general-template.html',
    title: 'General Insurance',
    subtitle: 'Motor, Property & Business Protection'
  },
  {
    filename: 'og-about-template.html',
    title: 'About Med-Gen Insurance',
    subtitle: 'Your Trusted Insurance Partner Since 2014'
  }
];

const publicDir = path.join(__dirname, 'public');

ogImages.forEach(({ filename, title, subtitle }) => {
  const html = createOGImageHTML(title, subtitle, filename);
  fs.writeFileSync(path.join(publicDir, filename), html);
});

console.log('✅ Open Graph image templates created!');
console.log('\n📋 Next steps:');
console.log('1. Open each HTML file in a browser (1200x630 viewport)');
console.log('2. Take a screenshot');
console.log('3. Save as PNG with the correct name:');
console.log('   - og-image-template.html → og-image.png');
console.log('   - og-medical-template.html → og-medical.png');
console.log('   - og-general-template.html → og-general.png');
console.log('   - og-about-template.html → og-about.png');
console.log('\nOr use online tools like Canva for better designs!');
