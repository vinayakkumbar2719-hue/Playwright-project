import {Page,Locator} from '@playwright/test'
import {loginData} from '../types/login.type'


export class LoginPage{
    readonly email:Locator
    readonly password:Locator
    readonly loginButton:Locator

    constructor(private page:Page){
        this.email = page.getByTestId('login-email')
        this.password = page.getByTestId('login-password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }




    async goto(){
        await this.page.goto('/login');
    }

    async enterEmailAndPassword(data: loginData){
        console.log('Entering the credentials ')
        await this.email.fill(data.email)
        await this.password.fill(data.password)
        await this.loginButton.click()
    }


    async login(data: loginData){
        await this.goto()
        await this.enterEmailAndPassword(data)

    }

    

}