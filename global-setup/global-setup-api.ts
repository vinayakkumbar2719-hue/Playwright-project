import { request,FullConfig } from "@playwright/test";
import * as dotenv from 'dotenv';

dotenv.config();


async function globalsetup() {
    console.log("Global setup is running");
    const apicontext = await request.newContext({
        baseURL: process.env.BASEURL
    });

    const response = await apicontext.post('/web/index.php/auth/validate',{
        data:{
            "username":process.env.USERNAME,
            "password":process.env.PASSWORD
        },
        timeout:60000
    })

    if(response.status()==200){
        console.log("Login successful");
        await apicontext.storageState({path:'storageState-api.json'});
    }
}

export default globalsetup;