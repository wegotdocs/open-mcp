import { z } from "zod";
export const toolName = `post_geofences_v2`;
export const toolDescription = `Creates a geofence`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/geofences/v2`;
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
export const inputParams = z.object({ "body": z.object({ "definition": z.object({ "center": z.object({ "lat": z.number().gte(-90).lte(90).describe("Latitude in WGS-84 format, decimal representation ranging from -90 to 90."), "lng": z.number().gte(-180).lte(180).describe("Longitude in WGS-84 format, decimal representation ranging from -180 to 180.") }).describe("The coordinates of the center point of the circle."), "floor": z.object({ "id": z.string().min(1).max(100).describe("The building ID"), "level": z.number().gte(-999).lte(999).describe("The floor of the geofence in integer format").optional(), "name": z.string().min(1).max(255).describe("The building name") }).describe("The building associated with the geofence").optional(), "radius": z.number().gte(0).describe("The radius of the circle in meters.") }).describe("An object that defines the area of a circular geofence"), "description": z.string().max(1000).describe("A description of the area that the geofence encloses and the purpose of the geofence.").optional(), "name": z.string().max(50).describe("A human-readable name of the geofence.").optional(), "type": z.literal("circle").describe("The geofence type.") }).optional() }).shape;
