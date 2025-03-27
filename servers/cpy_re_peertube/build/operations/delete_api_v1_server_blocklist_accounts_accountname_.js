import { z } from "zod";
export const toolName = `delete_api_v1_server_blocklist_accounts_accountname_`;
export const toolDescription = `Unblock an account by its handle`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/server/blocklist/accounts/{accountName}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "accountName": z.string().describe("account to unblock, in the form `username@domain`") }).optional() }).shape;
