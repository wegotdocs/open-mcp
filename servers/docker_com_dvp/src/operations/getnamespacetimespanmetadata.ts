import { z } from "zod"

export const toolName = `getnamespacetimespanmetadata`
export const toolDescription = `Get namespace metadata for timespan`
export const baseUrl = `https://hub.docker.com/api/publisher/analytics/v1`
export const path = `/namespaces/{namespace}/pulls/exports/years/{year}/{timespantype}/{timespan}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "namespace": z.string().describe("Namespace to fetch data for"), "year": z.number().int().describe("Year to fetch data for"), "timespantype": z.enum(["months","weeks"]).describe("Type of timespan to fetch data for"), "timespan": z.number().int().describe("Timespan to fetch data for") }).optional() }).shape