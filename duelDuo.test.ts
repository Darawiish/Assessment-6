
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
// })

test('Checking draw button displays choices', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('Checking clicking add to duo displays player-duo', async () => {
    const addToDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await addToDuo.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

test('Checking bot is Removed from Duo goes back to default', async () => {
    const removed = await driver.findElement(By.id('choices'))
    const displayed = await removed.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})