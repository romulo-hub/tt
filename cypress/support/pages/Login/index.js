const el = require('./elements').ELEMENTS


class Login{
acessarconta(){

cy.visit(el.visit)
cy.get(el.entrar).type('admin.sistema')
cy.get(el.senha).type('123Aa321@')
cy.get(el.botao).click()
cy.wait(3000)
cy.get(el.botao2).click()
cy.wait(3000)
cy.get(el.botao3).click()
cy.get(el.botao4).click()
cy.get(el.botao5).click()
cy.get(el.botao6).type('12:00')
cy.get(el.botao7).type('13:00')
cy.get(el.botao8).type('escola')


}


}


export default new Login()