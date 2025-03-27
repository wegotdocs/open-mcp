import { z } from "zod";
export const toolName = `get_spaces_id_persons_all`;
export const toolDescription = `Returns list of persons even persons archived`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/persons/all`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "Name": z.string().describe("Name of the person").optional(), "Function": z.string().describe("Function of the person").optional(), "Range": z.string().describe("index range of the results").optional(), "Validated": z.enum(["true", "false"]).describe("Status of the person").optional(), "Email": z.string().describe("Email of the person").optional() }).optional() }).shape;
