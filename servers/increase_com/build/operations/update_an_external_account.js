import { z } from "zod";
export const toolName = `update_an_external_account`;
export const toolDescription = `Update an External Account`;
export const baseUrl = `https://api.increase.com`;
export const path = `/external_accounts/{external_account_id}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "path": z.object({ "external_account_id": z.string().describe("The external account identifier.") }).optional(), "body": z.object({ "description": z.string().min(1).max(200).describe("The description you choose to give the external account.").optional(), "status": z.enum(["active", "archived"]).describe("The status of the External Account.").optional() }).optional() }).shape;
