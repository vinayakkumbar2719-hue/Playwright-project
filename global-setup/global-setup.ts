import globalsetupapi from "./global-setup-api";
import globalsetupui from "./global-setup-ui";

async function globalsetup(){
    await globalsetupapi();
    await globalsetupui();
}

export default globalsetup;