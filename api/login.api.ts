import { APIRequestContext } from "@playwright/test";

export class LoginAPI {

    constructor(private request: APIRequestContext) {}

    async login(data:Record<string, string>) {
        const response = await this.request.post('/web/index.php/auth/validate', {
            data: {
                ...data,
            },
            timeout: 5000
        });
        return response;
    }

}