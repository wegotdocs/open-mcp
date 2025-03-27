import { z } from "zod";
export const toolName = `post_geofences_v2_trainingtest`;
export const toolDescription = `Checks if a POI geofence training is possible with the given parameters`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/geofences/v2/trainingTest`;
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
export const inputParams = z.object({ "body": z.object({ "after": z.number().int().describe("Milliseconds elapsed since 1 January 1970 00:00:00 UTC.\n\nThe value must be within the past 24 hours from the current timestamp\n"), "before": z.number().int().describe("Milliseconds elapsed since 1 January 1970 00:00:00 UTC.\n\nThe value must not be greater than current timestamp\n"), "id": z.string().min(1).max(50).describe("This is a unique ID associated with the device data in HERE Tracking. For physical devices the `trackingId` gets assigned to a device when the device is claimed by a user, and for virtual devices it is an external device ID along with the device project `appId`.") }).strict().optional() }).shape;
