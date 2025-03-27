import { z } from "zod"

export const toolName = `listversions`
export const toolDescription = `Metadata on editorial programme versions: original, signed, audio-described, etc`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/versions`
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

export const inputParams = z.object({ "query": z.object({ "availability": z.array(z.literal("available")).describe("filter for subset of versions that have availability").optional(), "descendants_of": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of versions having given programme PID").optional(), "media_set": z.array(z.string()).describe("filter for subset of versions with availability in the given media set").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for versions by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for versions by partner PID").optional(), "payment_type": z.array(z.enum(["free","bbcstore","uscansvod"])).describe("filter for a subset of versions that are of the given payment_type").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of versions having given PID").optional(), "embargoed": z.enum(["include","exclude","only"]).describe("Control return of embargoed items (undocumented)").optional() }).optional() }).shape