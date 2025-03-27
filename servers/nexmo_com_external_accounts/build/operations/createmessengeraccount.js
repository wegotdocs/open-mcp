import { z } from "zod";
export const toolName = `createmessengeraccount`;
export const toolDescription = `Create a Messenger account`;
export const baseUrl = `https://api.nexmo.com/beta/chatapp-accounts`;
export const path = `/messenger`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    },
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "body": z.object({ "access_token": z.string().describe("This is the Facebook Business Page token. You can obtain the token using one of the following methods:\n\n* Linking your Facebook Business Page to your account [with our Dashboard tool](https://dashboard.nexmo.com/messages/social-channels/facebook-connect)\n* Requesting a Page Access Token using the steps in the [Facebook token reference](https://developers.facebook.com/docs/pages/access-tokens/)\n"), "applications": z.array(z.string()).min(0).max(1).describe("Contains a list of application IDs which are linked to the account. <ul> <li>There is just one application allowed per an account.</li> <li>The application type must be type \"messages\".</li> </ul> For more information see [Application API spec](https://developer.nexmo.com/api/application.v2)").optional(), "external_id": z.string().describe("This is the unique identifier within the provider's domain. In this case it is the Page ID for your Facebook Page. Go to your Facebook Page, click \"Settings\", click \"Messenger platform \" scroll down to \"Messenger link\" to find your Page ID."), "name": z.string().describe("Custom account name").optional() }).optional() }).shape;
