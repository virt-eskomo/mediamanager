import { Metadata } from 'next'
import brandConfig from '@/brand.config.json'
import pressConfig from '@/press.config.json'

export const metadata: Metadata = {
  title: 'Press Kit - Media Manager',
  description: 'Media Manager press kit with brand assets, screenshots, and product information',
  openGraph: {
    title: 'Media Manager Press Kit',
    description: 'Download brand assets, screenshots, and product information',
    images: [pressConfig.assets.ogImage],
  },
}

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <a href="/" className="text-sm opacity-80 hover:opacity-100 mb-4 inline-block">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold mb-2">Press Kit</h1>
          <p className="text-xl opacity-90">{brandConfig.tagline}</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Quick Download */}
        <section className="mb-16 text-center">
          <a
            href="/api/press-kit/download"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
            download="media-manager-press-kit.zip"
          >
            Download Complete Press Kit (.zip)
          </a>
          <p className="mt-4 text-gray-600">
            Includes all brand assets, screenshots, and fact sheet
          </p>
        </section>

        {/* Fact Sheet */}
        <section className="mb-16" id="fact-sheet">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Fact Sheet</h2>
          <div className="bg-gray-50 rounded-lg p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Product Name</h3>
              <p className="text-gray-900">{brandConfig.name}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Overview</h3>
              <p className="text-gray-900 mb-3">{brandConfig.shortDescription}</p>
              <p className="text-gray-700">{brandConfig.longDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {brandConfig.features.map((feature) => (
                  <li key={feature.title} className="bg-white p-4 rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Platforms</h3>
              <p className="text-gray-900">{brandConfig.platforms.join(', ')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Release Information</h3>
              <p className="text-gray-900">Version {pressConfig.version} • Launching {pressConfig.releaseDate}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact</h3>
              <p className="text-gray-900">
                Press inquiries: <a href={`mailto:${pressConfig.pressContactEmail}`} className="text-blue-600 hover:underline">{pressConfig.pressContactEmail}</a>
              </p>
              <p className="text-gray-900 mt-1">
                Website: <a href={pressConfig.siteUrl} className="text-blue-600 hover:underline">{pressConfig.siteUrl}</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href={brandConfig.links.website} className="text-blue-600 hover:underline">Website</a>
                </li>
                <li>
                  <a href={brandConfig.links.demo} className="text-blue-600 hover:underline">Request Demo</a>
                </li>
                <li>
                  <a href={brandConfig.links.docs} className="text-blue-600 hover:underline">Documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="mb-16" id="brand-assets">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Brand Assets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Logo</h3>
              <div className="bg-white p-8 rounded border border-gray-200 mb-4 flex items-center justify-center min-h-[200px]">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-3"></div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MM
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="/press/assets/logo.svg" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  SVG
                </a>
                <a href="/press/assets/logo-1024.png" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  PNG 1024px
                </a>
                <a href="/press/assets/logo-512.png" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  PNG 512px
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Wordmark</h3>
              <div className="bg-white p-8 rounded border border-gray-200 mb-4 flex items-center justify-center min-h-[200px]">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Media Manager
                </h1>
              </div>
              <div className="flex gap-2">
                <a href="/press/assets/wordmark.svg" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  SVG
                </a>
                <a href="/press/assets/wordmark-2048x512.png" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  PNG 2048x512
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Social Card / OG Image</h3>
              <div className="bg-white p-4 rounded border border-gray-200 mb-4">
                <div className="aspect-[1.91/1] bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white">
                  <div className="text-center">
                    <h2 className="text-4xl font-bold mb-2">Media Manager</h2>
                    <p className="text-xl opacity-90">{brandConfig.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="/press/assets/og-card-1200x630.png" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  1200x630 (OG)
                </a>
                <a href="/press/assets/og-card-1920x1080.png" download className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition text-sm">
                  1920x1080 (HD)
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Brand Colors</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: brandConfig.colors.primary }}></div>
                <div>
                  <p className="text-sm font-medium">Primary</p>
                  <p className="text-xs text-gray-600">{brandConfig.colors.primary}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: brandConfig.colors.secondary }}></div>
                <div>
                  <p className="text-sm font-medium">Secondary</p>
                  <p className="text-xs text-gray-600">{brandConfig.colors.secondary}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded" style={{ backgroundColor: brandConfig.colors.accent }}></div>
                <div>
                  <p className="text-sm font-medium">Accent</p>
                  <p className="text-xs text-gray-600">{brandConfig.colors.accent}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-16" id="screenshots">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Screenshots</h2>
          <p className="text-gray-600 mb-6">
            High-resolution screenshots showcasing key features (demo data only, SFW)
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(pressConfig.screenshots).map(([key, screenshot]) => (
              <div key={key} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 border-b border-gray-300">
                  <div className="text-center p-8">
                    <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm font-medium">Screenshot Placeholder</p>
                    <p className="text-xs mt-1">{screenshot.title}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{screenshot.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{screenshot.description}</p>
                  <a
                    href={screenshot.file}
                    download
                    className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                  >
                    Download (PNG)
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> Screenshot placeholders are configured in <code className="bg-yellow-100 px-1 rounded">press.config.json</code>. 
              Replace with actual screenshots by running the app locally with demo data and capturing screens, then updating the files in <code className="bg-yellow-100 px-1 rounded">public/press/assets/screenshots/</code>.
            </p>
          </div>
        </section>

        {/* Video Trailer */}
        <section className="mb-16" id="trailer">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Launch Trailer</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            {pressConfig.trailerVideo.placeholder ? (
              <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">{pressConfig.trailerVideo.title}</h3>
                  <p className="text-sm mb-1">{pressConfig.trailerVideo.description}</p>
                  <p className="text-xs opacity-75">{pressConfig.trailerVideo.note}</p>
                </div>
              </div>
            ) : (
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={pressConfig.trailerVideo.embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">{pressConfig.trailerVideo.title}</h3>
              <p className="text-gray-600 text-sm">{pressConfig.trailerVideo.description}</p>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-16" id="guidelines">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Brand Guidelines</h2>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Logo Usage</h3>
              <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                <li>Maintain clear space around the logo equal to the height of the icon</li>
                <li>Do not modify colors, stretch, or distort the logo</li>
                <li>Use the wordmark for horizontal layouts, icon for square/app contexts</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Color Palette</h3>
              <p className="text-sm text-gray-600">
                Our brand uses a gradient from blue to purple, representing the connection between planning (blue) and creativity (purple). 
                Use the primary color for main CTAs, secondary for accents, and the gradient for hero sections.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Typography</h3>
              <p className="text-sm text-gray-600">
                Headlines use bold sans-serif fonts. Body text should be clear and readable with good contrast.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Media Inquiries</h2>
          <p className="text-gray-600 mb-4">
            For press inquiries, interviews, or additional materials, please contact:
          </p>
          <a
            href={`mailto:${pressConfig.pressContactEmail}`}
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {pressConfig.pressContactEmail}
          </a>
        </section>
      </div>
    </main>
  )
}
