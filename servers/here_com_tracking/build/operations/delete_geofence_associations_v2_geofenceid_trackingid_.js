import { z } from "zod";
export const toolName = `delete_geofence_associations_v2_geofenceid_trackingid_`;
export const toolDescription = `Disassociates a device and a geofence`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/geofence-associations/v2/{geofenceId}/{trackingId}`;
export const method = `delete`;
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
