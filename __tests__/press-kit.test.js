const brandConfig = require('../brand.config.json')
const pressConfig = require('../press.config.json')

describe('Press Kit Configuration', () => {
  test('brand config has required fields', () => {
    expect(brandConfig.name).toBe('Media Manager')
    expect(brandConfig.tagline).toBeTruthy()
    expect(brandConfig.shortDescription).toBeTruthy()
    expect(brandConfig.longDescription).toBeTruthy()
    expect(Array.isArray(brandConfig.features)).toBe(true)
    expect(brandConfig.features.length).toBeGreaterThan(0)
  })

  test('brand config features include required items', () => {
    const featureTitles = brandConfig.features.map(f => f.title)
    expect(featureTitles).toContain('Products & Plans')
    expect(featureTitles).toContain('Smart Composer')
    expect(featureTitles).toContain('Scheduling & Publishing')
    expect(featureTitles).toContain('Media Vault')
    expect(featureTitles).toContain('Analytics Dashboard')
    expect(featureTitles).toContain('MCP Integration')
    expect(featureTitles).toContain('TaskJoe Link')
  })

  test('press config has required fields', () => {
    expect(pressConfig.siteUrl).toBeTruthy()
    expect(pressConfig.pressUrl).toBeTruthy()
    expect(pressConfig.pressContactEmail).toBeTruthy()
    expect(pressConfig.assets).toBeTruthy()
    expect(pressConfig.screenshots).toBeTruthy()
    expect(pressConfig.trailerVideo).toBeTruthy()
  })

  test('press config has all required screenshots', () => {
    const requiredScreenshots = ['campaign', 'composer', 'scheduler', 'vault', 'analytics']
    requiredScreenshots.forEach(key => {
      expect(pressConfig.screenshots[key]).toBeTruthy()
      expect(pressConfig.screenshots[key].title).toBeTruthy()
      expect(pressConfig.screenshots[key].description).toBeTruthy()
      expect(pressConfig.screenshots[key].file).toBeTruthy()
    })
  })

  test('press contact email is configurable', () => {
    expect(pressConfig.pressContactEmail).toMatch(/@/)
  })

  test('brand colors are valid hex codes', () => {
    expect(brandConfig.colors.primary).toMatch(/^#[0-9a-fA-F]{6}$/)
    expect(brandConfig.colors.secondary).toMatch(/^#[0-9a-fA-F]{6}$/)
    expect(brandConfig.colors.accent).toMatch(/^#[0-9a-fA-F]{6}$/)
  })
})
