import { z } from "zod"

export const toolName = `listmasterbrands`
export const toolDescription = `List all Master Brands`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/master_brands`
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

export const inputParams = z.object({ "query": z.object({ "sort": z.literal("mid").describe("Sorts:\n* mid: sort by mid, ascending\n").optional(), "sort_direction": z.literal("ascending").describe("Sort direction").optional(), "mixin": z.array(z.literal("images")).describe("Mixins:\n* images: mixin to add image information for a masterbrand\n").optional(), "mid": z.array(z.string()).describe("filter for subset of masterbrands that have given identifier").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for masterbrands by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for masterbrands by partner PID").optional(), "q": z.string().describe("filter for subset of masterbrands matching supplied keyword/phrase (boolean operators permitted)").optional() }).optional() }).shape