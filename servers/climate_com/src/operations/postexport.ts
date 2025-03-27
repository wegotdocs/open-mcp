import { z } from "zod"

export const toolName = `postexport`
export const toolDescription = `Initiate a new export request.`
export const baseUrl = `https://platform.climate.com`
export const path = `/v4/exports`
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

export const inputParams = z.object({ "body": z.object({ "contentType": z.enum(["application/vnd.climate.acrsi.geojson","application/vnd.climate.harvest.geojson"]).describe("Content type representing data being exported (e.g. application/vnd.climate.acrsi.geojson)."), "definition": z.record(z.any()).describe("Additional specifications for a client's data export request, dependent on the content type.").optional() }).describe("Client request to export data from a user.").optional() }).shape