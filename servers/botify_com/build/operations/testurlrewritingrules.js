import { z } from "zod";
export const toolName = `testurlrewritingrules`;
export const toolDescription = `Match and replace parts of a URL based on rules passed in POST data`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/projects/{username}/{project_slug}/features/url_rewriting/rules_validator`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({}).shape;
