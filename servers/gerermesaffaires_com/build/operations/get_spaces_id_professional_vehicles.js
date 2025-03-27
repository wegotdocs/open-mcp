import { z } from "zod";
export const toolName = `get_spaces_id_professional_vehicles`;
export const toolDescription = `Returns list of professionalvehicles for the space {id}`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/professional-vehicles`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "Designation": z.string().describe("designation of the vehicle").optional() }).optional() }).shape;
