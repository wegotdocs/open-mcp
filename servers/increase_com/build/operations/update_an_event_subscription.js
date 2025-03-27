import { z } from "zod";
export const toolName = `update_an_event_subscription`;
export const toolDescription = `Update an Event Subscription`;
export const baseUrl = `https://api.increase.com`;
export const path = `/event_subscriptions/{event_subscription_id}`;
export const method = `patch`;
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
export const inputParams = z.object({ "path": z.object({ "event_subscription_id": z.string().describe("The identifier of the Event Subscription.") }).optional(), "body": z.object({ "status": z.enum(["active", "disabled", "deleted"]).describe("The status to update the Event Subscription with.").optional() }).optional() }).shape;
