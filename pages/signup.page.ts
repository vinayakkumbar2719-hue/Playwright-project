import { Page, Locator } from '@playwright/test';

export class Signuppage {

  readonly gender: Locator
  readonly name: Locator
  readonly email: Locator
  readonly password: Locator
  readonly day: Locator
  readonly month: Locator
  readonly year: Locator
  readonly newsletter: Locator
  readonly offers: Locator
  readonly signupemail: Locator
  readonly signupname: Locator

  readonly firstname:Locator
  readonly lastname:Locator
  readonly companyName:Locator
  readonly address:Locator
  readonly country:Locator
  readonly state:Locator
  readonly city:Locator
  readonly zipcode:Locator
  readonly mobileNumber:Locator
  readonly CreateButton:Locator
  readonly ContinueButton:Locator

  constructor(private page: Page){

    this.gender = page.getByRole('radio', { name: 'Mr.' })

    this.name = page.getByTestId('name')
    this.email = page.getByTestId('email')
    this.password = page.getByRole('textbox', { name: 'Password' })

    this.day = page.locator('#days')
    this.month = page.locator('#months')
    this.year = page.locator('#years')

    this.newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
    this.offers = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' })

    this.signupemail = page.getByTestId('signup-email')
    this.signupname = page.getByTestId('signup-name')

    this.firstname=page.getByTestId('first_name')
    this.lastname=page.getByTestId('last_name')
    this.companyName=page.getByTestId('company')
    this.address=page.getByTestId('address')
    this.country=page.getByTestId('country')
    this.state=page.getByTestId('state')
    this.city=page.getByTestId('city')
    this.zipcode=page.getByTestId('zipcode')
    this.mobileNumber=page.getByTestId('mobile_number')
    this.CreateButton=page.getByRole('button',{name:'Create Account'})
    this.ContinueButton=page.getByTestId('continue-button')
  }





  async goto(){
    await this.page.goto('/signup');
  }

  async navigateToSignup(name: string, email: string){
    await this.signupname.fill(name);
    await this.signupemail.fill(email);
    await this.page.getByRole('button', { name: 'Signup' }).click();
  }

  async enterAccountInfo(data: Record<string,string>){
    await this.gender.check();
    await this.name.fill(data.name);
    // await this.email.fill(data.email);
    await this.password.fill(data.password);

    await this.day.selectOption(data.day);
    await this.month.selectOption(data.month);
    await this.year.selectOption(data.year);

    await this.newsletter.check();
    await this.offers.check();
  }

  async enterOtherInfo(data:Record<string,string>){
    console.log('entering other info')
    await this.firstname.fill(data.firstName)
    await this.lastname.fill(data.lastName)
    await this.companyName.fill(data.company)
    await this.address.fill(data.address)
    await this.country.selectOption(data.country)
    await this.state.fill(data.state)
    await this.city.fill(data.city)
    await this.zipcode.fill(data.zipcode)
    await this.mobileNumber.fill(data.mobileNumber)
    await this.CreateButton.click()

  }

  async clickContinue(){
    await this.ContinueButton.click()
  }

  async createAccount(data: Record<string,string>){
    await this.enterAccountInfo(data);
    await this.enterOtherInfo(data)
    

  }
}