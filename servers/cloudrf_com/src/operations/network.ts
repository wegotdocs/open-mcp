import { z } from "zod"

export const toolName = `network`
export const toolDescription = `Find the best server for somewhere`
export const baseUrl = `https://api.cloudrf.com`
export const path = `/network`
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

export const inputParams = z.object({ "query": z.object({ "net": z.string().describe("Network name"), "nam": z.string().describe("Super layer name"), "lat": z.number().describe("Latitude in decimal degrees"), "lon": z.number().describe("Longitude in decimal degrees"), "alt": z.number().int().describe("Height above ground level in metres"), "rxg": z.number().describe("Receiver gain in dBi").optional() }).optional() }).shape