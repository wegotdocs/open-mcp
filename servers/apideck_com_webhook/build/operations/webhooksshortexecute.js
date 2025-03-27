import { z } from "zod";
export const toolName = `webhooksshortexecute`;
export const toolDescription = `Execute a webhook`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/webhook/webhooks/{id}/x/{serviceId}`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("JWT Webhook token that represents the unifiedApi and applicationId associated to the event source."), "serviceId": z.string().describe("Service provider ID.") }).optional(), "query": z.object({ "l_id": z.string().describe("Unique identifier to used to look up consumer/connection when receiving connector events from downstream.").optional(), "e": z.string().describe("The name of downstream event when connector does not supply in body or header").optional() }).optional(), "body": z.record(z.any()).optional() }).shape;
