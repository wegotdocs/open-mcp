import { z } from "zod";
export const toolName = `put_associations_v3_trackingid_rules_ruleid_`;
export const toolDescription = `Associates a device to a rule`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/associations/v3/{trackingId}/rules/{ruleId}`;
export const method = `put`;
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
