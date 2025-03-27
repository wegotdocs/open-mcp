import { z } from "zod";
export const toolName = `retrieve_an_event_subscription`;
export const toolDescription = `Retrieve an Event Subscription`;
export const baseUrl = `https://api.increase.com`;
export const path = `/event_subscriptions/{event_subscription_id}`;
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
export const inputParams = z.object({ "path": z.object({ "event_subscription_id": z.string().describe("The identifier of the Event Subscription.") }).optional() }).shape;
