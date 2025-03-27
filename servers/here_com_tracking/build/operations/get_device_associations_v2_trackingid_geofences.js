import { z } from "zod";
export const toolName = `get_device_associations_v2_trackingid_geofences`;
export const toolDescription = `Gets geofences associated with a device`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/device-associations/v2/{trackingId}/geofences`;
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
export const inputParams = z.object({ "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "path": z.object({ "trackingId": z.string().min(1).max(50).describe("This is a unique ID associated with the device data in HERE Tracking. For physical devices the `trackingId` gets assigned to a device when the device is claimed by a user, and for virtual devices it is an external device ID along with the device project `appId`.") }).optional(), "query": z.object({ "pageToken": z.string().describe("A token from the previously returned response to retrieve the specified page.").optional(), "count": z.number().int().gte(1).lte(100).describe("The number of items to return per page."), "appId": z.string().min(8).describe("Application identifier. Used together with an external ID to identify a virtual device.").optional() }).optional() }).shape;
