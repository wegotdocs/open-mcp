import { z } from "zod"

export const toolName = `certificates_list`
export const toolDescription = `List All Certificates`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/certificates`
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

export const inputParams = z.object({ "query": z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "name": z.string().describe("Name of expected certificate") }).optional() }).shape