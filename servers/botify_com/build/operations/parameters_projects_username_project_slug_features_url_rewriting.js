import { z } from "zod";
export const toolName = `parameters_projects_username_project_slug_features_url_rewriting`;
export const toolDescription = ``;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/projects/{username}/{project_slug}/features/url_rewriting/rules_validator`;
export const method = `parameters`;
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
