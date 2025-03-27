import { z } from "zod";
export const toolName = `patch_spaces_id_portfolios_portfolioid_persons_memberid_`;
export const toolDescription = `Add/Modify/Delete a person in a portfolio (except manager)`;
export const baseUrl = `https://sandbox.gerermesaffaires.com/api/v1`;
export const path = `/spaces/{id}/portfolios/{portfolioId}/persons/{memberId}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the space"), "memberId": z.string().describe("memberId of the person"), "portfolioId": z.string().describe("id of the portfolio") }).optional(), "body": z.string().optional() }).shape;
