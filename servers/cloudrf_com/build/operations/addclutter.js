import { z } from "zod";
export const toolName = `addclutter`;
export const toolDescription = `Upload clutter data as GeoJSON`;
export const baseUrl = `https://api.cloudrf.com`;
export const path = `/clutter/add`;
export const method = `post`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({ "body": z.object({ "features": z.array(z.object({ "geometry": z.string(), "properties": z.string(), "type": z.string() })).optional(), "name": z.string(), "type": z.string() }).optional() }).shape;
