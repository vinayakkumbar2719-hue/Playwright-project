import { APIRequestContext } from "@playwright/test"; 

export class LoginAPI {
    constructor(private request: APIRequestContext) { }  
    
    async login(username: string, password: string) {
        const response = await this.request.post('/api/auth/login', {
            data: {
                username,
                password
            }
        });
        return response;
    }




}