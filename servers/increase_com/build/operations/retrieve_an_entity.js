import { z } from "zod";
export const toolName = `retrieve_an_entity`;
export const toolDescription = `Retrieve an Entity`;
export const baseUrl = `https://api.increase.com`;
export const path = `/entities/{entity_id}`;
export const method = `get`;
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
export const inputParams = z.object({ "path": z.object({ "entity_id": z.string().describe("The identifier of the Entity to retrieve.") }).optional() }).shape;
