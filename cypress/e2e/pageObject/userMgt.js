import { faker } from '@faker-js/faker'
class userMgt{

    clickUsers(){
        cy.get('body > div:nth-child(2) > section:nth-child(1) > aside:nth-child(1) > div:nth-child(2) > a:nth-child(6) > span:nth-child(2)').click()
        //cy.get('div:nth-of-type(6) > .flex.h-full.items-center.w-full > span:nth-of-type(2)').click()
        cy.contains ('Add User').click()
        //cy.get('[class] button:nth-child(4)').click()
        cy.get('input[name="firstName"]').type(faker.name.firstName())
        cy.get('input[name="lastName"]').type(faker.name.lastName())
        cy.get('input[name="email"]').type(faker.internet.email())
        cy.get('input[name="phoneNumber"]').type('09088997788')
        cy.get('body > div:nth-child(2) > section:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > form:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)').click()
        cy.get('li:nth-child(1) div:nth-child(1)').click()
        cy.get("button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-colorPrimary !min-w-[6rem] w-full css-4aj8hq']").click()
    }
} 
   
export default userMgt