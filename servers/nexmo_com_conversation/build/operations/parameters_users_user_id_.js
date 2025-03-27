import { z } from "zod";
export const toolName = `parameters_users_user_id_`;
export const toolDescription = ``;
export const baseUrl = `https://api.nexmo.com/v0.1`;
export const path = `/users/{user_id}`;
export const method = `parameters`;
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
export const inputParams = z.object({}).shape;
