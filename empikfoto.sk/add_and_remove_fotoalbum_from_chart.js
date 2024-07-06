Identifier: UVX013
Title: Add panoramic photo into cart
Type: Functional / Automatic
Priority: High
Assigned to: Me
Estimate: 15 min

Precondicions:
Open web: https://www.empikfoto.sk/
Web is functional
Tested on PC browser
Selenium IDE installed

Steps:

// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('IDE_TEST_002', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('IDE_TEST_002', async function() {

// 1. step open web empikfoto.sk
    await driver.get("https://www.empikfoto.sk/")
    await driver.manage().window().setRect({ width: 1382, height: 744 })

// 2. step select "Fotoalbumy" from top menu
    await driver.findElement(By.css(".menu-items > li:nth-child(3) > .link-menu")).click()
   
// 3. step Select "Fotoalbum Zelené perie - 300 fotografií, 20x25 cm"
    await driver.findElement(By.id("body > section > div > div.span-3-of-4.boxes > div:nth-child(2) > div > div:nth-child(5) > div > div.box_photo > a > img")).click()

// 4. step add it into cart
    await driver.findElement(By.id("js-generator-add > span")).click()

// 5. step chcek if contains text "Odstrániť"
    assert(await driver.findElement(By.linkText("Odstrániť")).getText() == "Odstrániť")

// 6. step click on "Odstrániť"
    await driver.findElement(By.linkText("Odstrániť")).click()

// 7. step chcek if contains text "Tvoj košík je prázdny."
    assert(await driver.findElement(By.css(".cart-empty > div")).getText() == "Tvoj košík je prázdny.\\\\nPrejsť na domovskú stránku")
   
// 8. step click on text "Prejsť na domovskú stránku" and redirect to homepage
    await driver.findElement(By.linkText("Prejsť na domovskú stránku")).click()
  })
})

Expected Results:
Add photo album into cart and check if the page contains the text "Odstrániť". 
Remove it from the cart and redirect to the homepage.
