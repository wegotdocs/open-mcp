import { z } from "zod";
export const toolName = `post_associations_v3_devices_trackingid_batchdelete`;
export const toolDescription = `Disassociates rules from a device`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/associations/v3/devices/{trackingId}/batchDelete`;
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
export const inputParams = z.object({ "body": z.object({ "geofenceIds": z.array(z.string().uuid().describe("Geofence ID")).max(15).describe("Array of geofence IDs"), "ruleIds": z.array(z.string().uuid().describe("Must be a valid UUIDv4.\n")).max(15).describe("Array of rule IDs") }).strict().describe("Body containing arrays of ruleIds and geofenceIds to disassociate from the shipment or device.").optional() }).shape;
