import { defineConfig } from 'vite'

const staticPages = new Set([
  '/about/',
  '/proof/',
  '/proof/enterprise-ai-in-practice/',
  '/proof/datacuse-open-data-platform/',
  '/proof/predictive-water-main-analytics/',
  '/proof/behavioral-analytics-tax-collections/',
  '/proof/data-driven-city-operations/',
  '/proof/civic-data-experiments/',
  '/writing/',
  '/resume/',
  '/contact/',
])

function serveDirectoryIndexes() {
  return {
    name: 'serve-directory-indexes',
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const [pathname, query] = request.url.split('?')

        if (staticPages.has(pathname)) {
          request.url = `${pathname}index.html${query ? `?${query}` : ''}`
        }

        next()
      })
    },
  }
}

export default defineConfig({
  base: '/',
  plugins: [serveDirectoryIndexes()],
})
