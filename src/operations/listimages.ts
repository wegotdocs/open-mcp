import { z } from "zod"

export const toolName = `listimages`
export const toolDescription = `Find metadata for images`
export const baseUrl = `https://programmes.api.bbc.com`
export const path = `/images`
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

export const inputParams = z.object({ "query": z.object({ "sort": z.enum(["group_position","pid"]).describe("Sorts:\n* group_position: sort numerically by position, ascending only\n* pid: sort alphabetically by PID\n").optional(), "sort_direction": z.enum(["ascending","descending"]).describe("Sort direction").optional(), "group": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for images belonging to the given group (i.e. Gallery)").optional(), "image_type": z.array(z.enum(["standard","podcast","store","portrait","letterbox"])).describe("filter for images by type").optional(), "is_alternate_image_for": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for alternate images by entity PID").optional(), "is_image_for": z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8).describe("filter for images by entity PID").optional(), "page": z.number().int().gte(1).describe("which page of results to return"), "page_size": z.number().int().lte(300).describe("number of results in each page"), "partner_id": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for images by partner ID").optional(), "partner_pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for images by partner PID").optional(), "pid": z.array(z.string().regex(new RegExp("^([0-9,a-d,f-h,j-n,p-t,v-z]){8,}$")).min(8)).describe("filter for subset of images having given PID").optional(), "q": z.string().describe("filter for subset of images matching supplied keyword/phrase (boolean operators permitted)").optional(), "embargoed": z.enum(["include","exclude","only"]).describe("Control return of embargoed items (undocumented)").optional() }).optional() }).shape