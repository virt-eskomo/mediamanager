const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'public', 'press', 'assets');
const screenshotsDir = path.join(assetsDir, 'screenshots');

const placeholderImages = {
  'logo-512.png': { width: 512, height: 512, type: 'logo' },
  'logo-1024.png': { width: 1024, height: 1024, type: 'logo' },
  'wordmark-2048x512.png': { width: 2048, height: 512, type: 'wordmark' },
  'og-card-1200x630.png': { width: 1200, height: 630, type: 'og' },
  'og-card-1920x1080.png': { width: 1920, height: 1080, type: 'og' },
};

const screenshots = {
  'campaign.png': { width: 1920, height: 1080, label: 'Campaign Planning' },
  'composer.png': { width: 1920, height: 1080, label: 'Multi-Platform Composer' },
  'scheduler.png': { width: 1920, height: 1080, label: 'Content Scheduler' },
  'vault.png': { width: 1920, height: 1080, label: 'Media Vault' },
  'analytics.png': { width: 1920, height: 1080, label: 'Performance Analytics' },
};

function createSVGPlaceholder(width, height, label, type = 'screenshot') {
  const gradients = {
    logo: { start: '#3b82f6', end: '#8b5cf6' },
    wordmark: { start: '#3b82f6', end: '#8b5cf6' },
    og: { start: '#3b82f6', end: '#8b5cf6' },
    screenshot: { start: '#e5e7eb', end: '#d1d5db' }
  };
  
  const gradient = gradients[type] || gradients.screenshot;
  
  let content = '';
  if (type === 'logo') {
    content = `<text x="${width/2}" y="${height/2 + height/8}" font-family="system-ui, -apple-system, sans-serif" font-size="${height/2}" font-weight="bold" fill="white" text-anchor="middle">MM</text>`;
  } else if (type === 'wordmark') {
    content = `<text x="50" y="${height/2 + 60}" font-family="system-ui, -apple-system, sans-serif" font-size="${height * 0.35}" font-weight="bold" fill="white">Media Manager</text>`;
  } else if (type === 'og') {
    content = `
      <text x="${width/2}" y="${height/2 - 40}" font-family="system-ui, -apple-system, sans-serif" font-size="120" font-weight="bold" fill="white" text-anchor="middle">Media Manager</text>
      <text x="${width/2}" y="${height/2 + 60}" font-family="system-ui, -apple-system, sans-serif" font-size="42" fill="white" fill-opacity="0.9" text-anchor="middle">Plan, create, and publish across all your social platforms</text>
    `;
  } else {
    content = `
      <rect x="${width/2 - 80}" y="${height/2 - 80}" width="160" height="160" rx="20" fill="white" opacity="0.3"/>
      <text x="${width/2}" y="${height/2 + 100}" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="600" fill="#6b7280" text-anchor="middle">${label}</text>
      <text x="${width/2}" y="${height/2 + 140}" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#9ca3af" text-anchor="middle">Demo Screenshot Placeholder</text>
    `;
  }
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${gradient.start};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${gradient.end};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grad)"/>
  ${content}
</svg>`;
}

console.log('Generating placeholder images...\n');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

for (const [filename, specs] of Object.entries(placeholderImages)) {
  const svg = createSVGPlaceholder(specs.width, specs.height, filename, specs.type);
  const filepath = path.join(assetsDir, filename);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created ${filename} (${specs.width}x${specs.height})`);
}

for (const [filename, specs] of Object.entries(screenshots)) {
  const svg = createSVGPlaceholder(specs.width, specs.height, specs.label, 'screenshot');
  const filepath = path.join(screenshotsDir, filename);
  fs.writeFileSync(filepath, svg);
  console.log(`✓ Created screenshots/${filename} (${specs.width}x${specs.height})`);
}

console.log('\n✓ All placeholder images generated successfully!');
console.log('\nNote: These are SVG placeholders. Replace with actual PNG/JPG screenshots');
console.log('by running the app with demo data and capturing real screens.');
