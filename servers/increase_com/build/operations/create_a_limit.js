import { z } from "zod";
export const toolName = `create_a_limit`;
export const toolDescription = `Create a Limit`;
export const baseUrl = `https://api.increase.com`;
export const path = `/limits`;
export const method = `post`;
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
export const inputParams = z.object({ "body": z.object({ "interval": z.enum(["transaction", "day", "week", "month", "year", "all_time"]).describe("The interval for the metric. Required if `metric` is `count` or `volume`.").optional(), "metric": z.enum(["count", "volume"]).describe("The metric for the limit."), "model_id": z.string().min(1).max(200).describe("The identifier of the Account or Account Number you wish to associate the limit with."), "value": z.number().int().gte(0).describe("The value to test the limit against.") }).optional() }).shape;
