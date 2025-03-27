import { z } from "zod";
export const toolName = `get_spaces_id_collective_decision`;
export const toolDescription = `Returns list of collective decisions for the space {id}`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/collective-decision`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space") }).optional(), "query": z.object({ "Date": z.string().describe("Date of the collective decision YYYMMDD").optional(), "Event": z.string().describe("Event of the collective decision (see post for the list of events)").optional(), "Range": z.string().describe("index range of the results").optional(), "HasCompanyRegistrationCertificate": z.enum(["true", "false"]).describe("If true returns only invoices with a CompanyRegistrationCertificate").optional(), "HasStatus": z.enum(["true", "false"]).describe("If true returns only invoices with a Status").optional(), "HasSireneRegister": z.enum(["true", "false"]).describe("If true returns only invoices with a SireneRegister").optional(), "HasMinutes": z.enum(["true", "false"]).describe("If true returns only invoices with Minutes").optional() }).optional() }).shape;
