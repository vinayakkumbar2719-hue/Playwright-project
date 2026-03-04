import {Page,Locator} from '@playwright/test';


export class LoginPage{
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;  

    constructor(page: Page){
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });    
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });

    }

    async enterUsername(username: string){
        await this.username.fill(username);
    }

    async enterPassword(password: string){
        await this.password.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }


    async login(username: string, password: string){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}