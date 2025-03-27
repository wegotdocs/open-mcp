import { z } from "zod"

export const toolName = `postgpx`
export const toolDescription = `Map-match a GPX file`
export const baseUrl = `https://graphhopper.com/api/1`
export const path = `/match`
export const method = `post`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "query": z.object({ "gps_accuracy": z.number().int().describe("Specify the precision of a point, in meter").optional(), "vehicle": z.string().describe("Specify the vehicle profile like car").optional() }).optional() }).shape