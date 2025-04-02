import { z } from "zod";
export const toolName = `deleteplanonlyteam`;
export const toolDescription = `Delete plan-only team`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/plans/plan/{planId}/team/planonly/{planOnlyTeamId}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "planId",
        "planOnlyTeamId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "planId": z.number().int().describe("The ID of the plan."), "planOnlyTeamId": z.number().int().describe("The ID of the plan-only team.") }).shape;
