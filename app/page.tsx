export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Media Manager
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Plan, create, and publish across all your social platforms
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/press"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Press Kit
            </a>
            <a
              href="/demo"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
