describe('Register, Login  submit a campaign', () => {
    it('can navigate to http://localhost:3000', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })

    //register
    it('clicks the registerBtn', () => {
        cy.get('#registerBtn').click()
    })
    it('enters username', () =>{
        cy.get('#username').type('UserName')
    })
    it('enters password', () =>{
        cy.get('#password').type('guest123')
    })
    it('submits the registration', () =>{
        cy.get('#submitBtn').click()
    })

    //login
    it('clicks the loginBtn', () => {
        cy.get('#loginBtn').click()
    })
    it('enters username', () =>{
        cy.get('#username').type('UserName')
    })
    it('enters password', () =>{
        cy.get('#password').type('guest123')
    })
    it('submits the login', () =>{
        cy.get('#submitBtn').click()
    })


    //enter a campaign
    it('clicks the homeBtn', () => {
        cy.get('#dashboardBtn').click()
    })
    it('enters title', () =>{
        cy.get('#title').type('Test')
    })
    it('enters a goal', () =>{
        cy.get('#monetary_goal').type('1000')
    })

    it('enters start date', () =>{
        cy.get('#launch_date').type('2021-01-01')
    })
    it('enters finish date', () =>{
        cy.get('#finish_date').type('2021-06-01')
    })
    it('selects a category', () =>{
        cy.get('#category').select('Other')
    })
    it('enters description', () =>{
        cy.get('#description').type('Test')
    })

    it('submits the form', () =>{
        cy.get('#submitBtn').click()
    })

})
