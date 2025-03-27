import { z } from "zod";
export const toolName = `getisochrone`;
export const toolDescription = `Isochrone Endpoint`;
export const baseUrl = `https://graphhopper.com/api/1`;
export const path = `/isochrone`;
export const method = `get`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({ "query": z.object({ "point": z.string().describe("Specify the start coordinate"), "time_limit": z.number().int().describe("Specify which time the vehicle should travel. In seconds."), "distance_limit": z.number().int().describe("Specify which distance the vehicle should travel. In meters.").optional(), "vehicle": z.enum(["car", "bike", "foot", "hike", "mtb", "racingbike", "scooter", "truck", "small_truck"]).describe("The vehicle profile for which the route should be calculated.\n"), "buckets": z.number().int().describe("Number by which to divide the given `time_limit` to create `buckets` nested isochrones of time intervals `time_limit-n*time_limit/buckets`. Applies analogously to `distance_limit`."), "reverse_flow": z.boolean().describe("If `false` the flow goes from point to the polygon, if `true` the flow goes from the polygon \"inside\" to the point.\nExample use case for `false`&#58; *How many potential customer can be reached within 30min travel time from your store* vs. `true`&#58; *How many customers can reach your store within 30min travel time.*\n"), "weighting": z.enum(["fastest", "shortest"]).describe("Use `\"shortest\"` to get an isodistance line instead of an isochrone.") }).optional() }).shape;
