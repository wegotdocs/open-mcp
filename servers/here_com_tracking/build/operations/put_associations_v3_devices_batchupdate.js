import { z } from "zod";
export const toolName = `put_associations_v3_devices_batchupdate`;
export const toolDescription = `Updates rules associations for devices`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/associations/v3/devices/batchUpdate`;
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
export const inputParams = z.object({ "body": z.object({ "newRules": z.object({ "geofenceIds": z.array(z.string().uuid().describe("Geofence ID")).max(15).describe("Array of geofence IDs"), "ruleIds": z.array(z.string().uuid().describe("Must be a valid UUIDv4.\n")).max(15).describe("Array of rule IDs") }).strict().describe("Rules to be associated to the devices"), "oldRules": z.object({ "geofenceIds": z.array(z.string().uuid().describe("Geofence ID")).max(15).describe("Array of geofence IDs"), "ruleIds": z.array(z.string().uuid().describe("Must be a valid UUIDv4.\n")).max(15).describe("Array of rule IDs") }).strict().describe("Rules to be disassociated from the devices"), "trackingIds": z.array(z.string().min(1).max(50).describe("This is a unique ID associated with the device data in HERE Tracking. For physical devices the `trackingId` gets assigned to a device when the device is claimed by a user, and for virtual devices it is an external device ID along with the device project `appId`.")).min(1).max(50).describe("Array of tracking IDs (external IDs are also permitted here)") }).strict().describe("Body containing arrays of ruleIds and geofenceIds to disassociate\n(oldRules) from and associate (newRules) to the devices identified\nin trackingIds array.\n").optional() }).shape;
