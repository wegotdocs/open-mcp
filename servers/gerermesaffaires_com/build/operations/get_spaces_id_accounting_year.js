import { z } from "zod";
export const toolName = `get_spaces_id_accounting_year`;
export const toolDescription = `Returns list of accounting years for the space {id}`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/accounting-year`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "End": z.string().describe("End date of the accounting year (YYYYMM or YYYYMMDD) (range not available)").optional(), "EffectiveDate": z.string().describe("Effective date inside  the accounting year  (range not available)").optional() }).optional() }).shape;
