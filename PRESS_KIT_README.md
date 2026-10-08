# Media Manager Press Kit

This press kit provides comprehensive brand assets, product information, and media resources for Media Manager - a professional social media planning and publishing platform.

## Quick Start

1. Install dependencies: `npm install`
2. Generate press assets: `npm run generate-press-kit`
3. Start development server: `npm run dev`
4. Visit the press kit: http://localhost:3000/press

## Configuration

The press kit is fully configurable without code changes:

- **`brand.config.json`** - Product name, features, colors, links, and branding
- **`press.config.json`** - Press URLs, contact email, assets, screenshots, and trailer

### Updating Press Contact

Edit `press.config.json`:

```json
{
  "pressContactEmail": "your-press@email.com",
  "siteUrl": "https://your-site.com",
  "pressUrl": "https://your-site.com/press"
}
```

## Press Kit Contents

### 1. Fact Sheet
Complete product information including:
- Product name and description
- Key features (Products, Plans, Composer, Scheduling, Vault, Stats, MCP, TaskJoe)
- Platform availability
- Release information
- Contact details

### 2. Brand Assets
Located in `public/press/assets/`:
- **Logo** - SVG, PNG (512px, 1024px)
- **Wordmark** - SVG, PNG (2048x512)
- **OG/Social Cards** - 1200x630, 1920x1080
- **Favicon** - SVG

### 3. Screenshots
Demo-safe screenshots in `public/press/assets/screenshots/`:
- Campaign planning interface
- Multi-platform composer
- Content scheduler
- Media vault
- Analytics dashboard

**Note:** Current screenshots are placeholders. Replace with actual captures by:
1. Running the app locally with demo/seed data
2. Capturing screenshots of key workflows
3. Saving as PNG files in the screenshots directory
4. Updating filenames in `press.config.json` if needed

### 4. Launch Trailer
Video embed slot configured in `press.config.json`. Currently shows placeholder until launch video (Ticket MM-74) is completed.

### 5. Downloadable Zip
The `/api/press-kit/download` endpoint generates a zip file containing:
- All brand assets
- Screenshots
- Fact sheet (TXT)
- README (TXT)
- Brand configuration (JSON)

## Development

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run test         # Run tests
npm run generate-press-kit  # Generate placeholder assets
```

### Adding Real Screenshots

1. Run the Media Manager app locally with demo data
2. Navigate through the key workflows:
   - Create a product and campaign
   - Use the composer to create platform-optimized posts
   - Schedule posts on the calendar
   - Browse the media vault
   - View analytics dashboard
3. Capture screenshots (recommended: 1920x1080 or 2560x1440)
4. Save as PNG files in `public/press/assets/screenshots/`
5. Ensure screenshots use DEMO DATA ONLY (SFW, no real customer content)

### Brand Consistency

All branding pulls from `brand.config.json`:
- Product name: `brandConfig.name`
- Colors: `brandConfig.colors`
- Features: `brandConfig.features`
- Links: `brandConfig.links`

To maintain consistency across the site, import and use these values rather than hardcoding.

## Press Page URL

- **Development:** http://localhost:3000/press
- **Production:** Update `pressUrl` in `press.config.json`

## Related Tickets

- MM-73: Press Kit (this ticket)
- MM-74: Launch Video (trailer slot prepared)
- MM-64: Support Bot Widget (separate component)
- MM-72: MCP Server (separate component)

## Media Inquiries

For press inquiries, interviews, or additional materials, contact the email specified in `press.config.json` (default: press@mediamanager.example.com).

## License

All brand assets are provided for press and media use. Follow the brand guidelines available on the press page.

---

© 2026 Media Manager. All rights reserved.
