import { z } from "zod"

export const toolName = `postupload`
export const toolDescription = `Initiate a new upload`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/uploads`
export const method = `post`
export const security = [
  {
    "key": "X-Api-Key",
    "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "X-Api-Key"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "header": z.object({ "X-Recipient-Email": z.string().describe("Email address associated with a Climate account, used when to sending to another user.").optional() }).optional(), "body": z.object({ "contentType": z.enum(["image/vnd.climate.thermal.geotiff","image/vnd.climate.ndvi.geotiff","image/vnd.climate.rgb.geotiff","image/vnd.climate.rgb-nir.geotiff","image/vnd.climate.rgb-cir.geotiff","image/vnd.climate.waterstress.geotiff","image/vnd.climate.elevation.geotiff","image/vnd.climate.raw.geotiff","application/vnd.climate.field.geojson","application/vnd.climate.rx.planting.shp","application/vnd.climate.prescription.zones.shp","application/vnd.climate.modus.xml","application/vnd.climate.stand-count.geojson","application/vnd.climate.weed-count.geojson","application/vnd.climate.as-applied.zip","application/vnd.climate.as-planted.zip","application/vnd.climate.as-harvested.zip"]).describe("Content type representing data being uploaded (e.g. image/vnd.climate.rgb.geotiff)"), "length": z.number().int().describe("Content size in bytes"), "md5": z.string().describe("Base64 encoded md5 hash of the content"), "metadata": z.record(z.any()).optional() }).describe("Client request to upload data for a user.").optional() }).shape