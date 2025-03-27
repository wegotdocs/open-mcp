import { z } from "zod";
export const toolName = `post_credit_transfer`;
export const toolDescription = `Transfer credits to another account`;
export const baseUrl = `https://api.bulksms.com/v1`;
export const path = `/credit/transfer`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "body": z.object({ "commentOnFrom": z.string().describe("An optional note that will be shown on the credit history of your account.\nThe maximum length of the comment is 100.\n").optional(), "commentOnTo": z.string().describe("An optional note that will be shown on the credit history of the recipient's account.\nThe maximum length of the comment is 100.\n").optional(), "credits": z.number().describe("The amount of credits to transfer.\n"), "toUserId": z.number().describe("The numeric user ID of the account that will receive the credits.\nThe ID must match the username.\n"), "toUsername": z.string().describe("The username of the account that will receive the credits.\n") }).optional() }).shape;
