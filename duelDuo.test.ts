
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('see all bots button shows', async () => {
    const bots = await driver.findElement(By.id('see-all'))
    const displayed = await bots.isDisplayed()
    expect(displayed).toBe(true)
})


test('wins is displayed', async () => {
    const wins = await driver.findElement(By.id('wins'))
    const displayed = await wins.isDisplayed()
    expect(displayed).toBe(true)
})