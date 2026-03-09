import { APIRequestContext } from "@playwright/test";

export class LoginAPI {

    constructor(private request: APIRequestContext) {}

   async getCSRFToken() {
    const response = await this.request.get('/login');
    const body = await response.text();

    const match = body.match(/name="_token"[^>]*value="([^"]+)"/);

    if (!match) {
        throw new Error("CSRF token not found");
    }

    return match[1];
}
}