import { z } from "zod";
export const toolName = `setissuenavigatordefaultcolumns`;
export const toolDescription = `Set issue navigator default columns`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/settings/columns`;
export const method = `put`;
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
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({}).shape;
