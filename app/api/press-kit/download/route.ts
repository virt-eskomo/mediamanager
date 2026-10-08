import { NextResponse } from 'next/server'
import brandConfig from '@/brand.config.json'
import pressConfig from '@/press.config.json'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const archiver = require('archiver')
    const { Readable } = require('stream')

    const archive = archiver('zip', {
      zlib: { level: 9 }
    })

    const stream = new Readable({
      read() {}
    })

    archive.on('data', (chunk: Buffer) => stream.push(chunk))
    archive.on('end', () => stream.push(null))
    archive.on('error', (err: Error) => {
      console.error('Archive error:', err)
      stream.destroy(err)
    })

    const publicDir = path.join(process.cwd(), 'public', 'press', 'assets')
    
    if (fs.existsSync(publicDir)) {
      archive.directory(publicDir, 'assets')
    }

    const factSheet = generateFactSheet()
    archive.append(factSheet, { name: 'FACT_SHEET.txt' })

    const readme = generateReadme()
    archive.append(readme, { name: 'README.txt' })

    archive.append(JSON.stringify(brandConfig, null, 2), { name: 'brand-config.json' })

    archive.finalize()

    const chunks: Buffer[] = []
    for await (const chunk of stream) {
      chunks.push(chunk)
    }
    const buffer = Buffer.concat(chunks)

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="media-manager-press-kit.zip"',
      },
    })
  } catch (error) {
    console.error('Error generating press kit:', error)
    return NextResponse.json(
      { error: 'Failed to generate press kit' },
      { status: 500 }
    )
  }
}

function generateFactSheet(): string {
  return `MEDIA MANAGER PRESS KIT - FACT SHEET
${'='.repeat(60)}

PRODUCT NAME
${brandConfig.name}

TAGLINE
${brandConfig.tagline}

OVERVIEW
${brandConfig.shortDescription}

${brandConfig.longDescription}

KEY FEATURES
${brandConfig.features.map((f, i) => `${i + 1}. ${f.title}\n   ${f.description}`).join('\n\n')}

PLATFORMS
${brandConfig.platforms.join(', ')}

RELEASE INFORMATION
Version ${pressConfig.version}
Release Date: ${pressConfig.releaseDate}

LINKS
Website: ${brandConfig.links.website}
Press Kit: ${brandConfig.links.press}
Demo: ${brandConfig.links.demo}
Documentation: ${brandConfig.links.docs}

SOCIAL MEDIA
Twitter: ${brandConfig.social.twitter}
LinkedIn: ${brandConfig.social.linkedin}
GitHub: ${brandConfig.social.github}

CONTACT
Press Inquiries: ${pressConfig.pressContactEmail}
Website: ${pressConfig.siteUrl}

BRAND COLORS
Primary: ${brandConfig.colors.primary}
Secondary: ${brandConfig.colors.secondary}
Accent: ${brandConfig.colors.accent}

${'='.repeat(60)}
Generated: ${new Date().toISOString()}
`
}

function generateReadme(): string {
  return `MEDIA MANAGER PRESS KIT
${'='.repeat(60)}

Thank you for your interest in Media Manager!

This press kit contains:

BRAND ASSETS
- Logo files (SVG and PNG in multiple sizes)
- Wordmark files (SVG and PNG)
- Social/OG card images (1200x630, 1920x1080)
- Brand color palette

SCREENSHOTS
- Campaign planning interface
- Multi-platform composer
- Content scheduler
- Media vault
- Analytics dashboard

DOCUMENTATION
- FACT_SHEET.txt - Complete product information
- brand-config.json - Brand configuration and metadata

USAGE
All assets are provided for press and media use. Please follow
the brand guidelines available at ${pressConfig.pressUrl}

For interviews, additional materials, or questions:
${pressConfig.pressContactEmail}

Visit ${pressConfig.siteUrl} for more information.

${'='.repeat(60)}
© ${new Date().getFullYear()} Media Manager. All rights reserved.
`
}
