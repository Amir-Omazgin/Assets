
const { test, request } = require('@playwright/test')
const loginPayLoad = {email: "amir.o@quali.com", password: "KitzaLitza23!"}
let token


test.beforeAll( async  ()=>{
 const apiContext = await request.newContext() 
 const loginResponse =  await apiContext.post("https://review2.qualilabs.net/api/accounts/login",
{    
data:loginPayLoad
})
const loginResponseJson = await loginResponse.json()
console.log(loginResponseJson)
token = loginResponseJson.access_token
console.log(token)
})




test('Visit Torque', async({page}) => {
  page.addInitScript(value => {
    window,localStorage.setItem('token', value)
  },token)

  await page.goto("https://review2.qualilabs.net/Amir")
  await page.locator(".sc-bfmRie iVxSqr").click()
   


})