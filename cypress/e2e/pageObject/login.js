import { faker } from '@faker-js/faker'
class login{
        setlogin(){
            cy.get('input[name="email"]').type('omoadseleke@mailinator.com')
            cy.get('input[name="password"]').type ('P@ssw0rd12345')
            cy.get('button').click()
            cy.contains('NIGER STATE INTERNAL REVENUE SERVICE').should('be.visible')
    }
    setInvalidlogin(){
        cy.get('input[name="email"]').type('omoadseleke123@mailinator.com')
        cy.get('input[name="password"]').should('be.visible').and ('exist').type ('P@ssw0rd@qqw')
        cy.get('button').should('be.visible').and ('contain','LOG IN').click()
    }
}
export default login
