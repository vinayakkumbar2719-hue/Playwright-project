import {Page,Locator} from '@playwright/test'
import {loginData} from '../types/login.type'


export class LoginPage{
    readonly email:Locator
    readonly password:Locator
    readonly loginButton:Locator
    readonly deletLink:Locator
    readonly logoutlink:Locator

    constructor(private page:Page){
        this.email = page.getByTestId('login-email')
        this.password = page.getByTestId('login-password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.deletLink = page.getByRole('link', { name: ' Delete Account' })
        this.logoutlink=page.getByRole('link',{name:' Logout'})
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

    async deleteAccount(){
        await this.deletLink.click()
    }
    
    async login(data: loginData){
        await this.goto()
        await this.enterEmailAndPassword(data)

    }

    async logout(){
    await this.logoutlink.click()
  }
    

}