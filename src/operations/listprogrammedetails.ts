import { z } from "zod"

export const toolName = `listprogrammedetails`
export const toolDescription = `Exposes programme information for a single pid`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/programme_details`
export const method = `get`
export const security = [
  {
    "key": "api_key",
    "value": "<mcp-env-var>API_KEY</mcp-env-var>",
    "in": "query",
    "envVarName": "API_KEY",
    "schemeType": "apiKey",
    "schemeName": "api_key"
  }
]

export const inputParams = z.object({ "query": z.object({ "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_pid": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("Filter for programme information by partner PID").optional(), "pid": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("Filter for programme information for the provided PID").optional() }).optional() }).shape