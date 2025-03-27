import { z } from "zod"

export const toolName = `export`
export const toolDescription = `Export a calculation in a GIS file format`
export const baseUrl = `https://api.cloudrf.com`
export const path = `/archive/export`
export const method = `get`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "query": z.object({ "file": z.string().describe("Calculation file name"), "fmt": z.enum(["kml","kml","kmzppa","shp","tiff"]).describe("Raster/Vector file format: KML, KMZ, SHP, GeoTIFF") }).optional() }).shape