import { z } from "zod";
export const toolName = `parameters_conversations_conversation_id_`;
export const toolDescription = ``;
export const baseUrl = `https://api.nexmo.com/v0.1`;
export const path = `/conversations/{conversation_id}`;
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
