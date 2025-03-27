import { z } from "zod";
export const toolName = `delete_associations_v3_trackingid_geofences_geofenceid_`;
export const toolDescription = `Disassociates a device and a geofence`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/associations/v3/{trackingId}/geofences/{geofenceId}`;
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
