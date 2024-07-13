/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import login from '../pageObject/login';
import userMgt from '../pageObject/userMgt';
import taxPayers from '../pageObject/taxPayers';

const Login = new login
const Users = new userMgt
const TaxPay = new taxPayers

describe('Niger IRS', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('valid login user',()=>{
      Login.setlogin()
      Users.clickUsers()
      TaxPay.clickTaxpaya()
    })
})