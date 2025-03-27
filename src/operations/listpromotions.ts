import { z } from "zod"

export const toolName = `listpromotions`
export const toolDescription = `Discover metadata for content promotions`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/promotions`
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

export const inputParams = z.object({ "query": z.object({ "mixin": z.array(z.literal("related_links")).describe("Mixins:\n* related_links: mixin to return information about related links to a promotion\n").optional(), "context": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for subset of promotions belonging to a given context").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for promotions by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for promotions by partner PID").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of promotions having given PID").optional(), "promoted_by": z.array(z.string()).describe("filter for subset of promotions having given promoted by").optional(), "promoted_for": z.array(z.string()).describe("filter for subset of promotions having given promoted for").optional(), "q": z.string().describe("filter for subset of promotions matching supplied keyword/phrase (boolean operators permitted)").optional(), "status": z.array(z.literal("current")).describe("filter for subset of promotions with status").optional() }).optional() }).shape