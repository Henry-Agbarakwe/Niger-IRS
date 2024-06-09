import { faker } from '@faker-js/faker'
class userMgt{

    clickUsers(){
        cy.get('div:nth-of-type(6) > .flex.h-full.items-center.w-full > span:nth-of-type(2)').click()
        cy.get('[class] button:nth-child(4)').click()
        cy.get('input[name="firstName"]').type(faker.name.firstName())
        cy.get('input[name="lastName"]').type(faker.name.lastName())
        cy.get('input[name="email"]').type(faker.internet.email())
        cy.get('input[name="phoneNumber"]').type('09088997788')
        cy.get('.select__value-container').click()
        cy.get('#react-select-2-option-0').click({force:true})
        cy.get('[type="submit"]').should('be.visible').click()
        cy.get('[type="submit"]').click()
    }
} 
   
export default userMgt