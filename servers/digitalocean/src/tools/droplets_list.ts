import { z } from "zod"

export const toolName = `droplets_list`
export const toolDescription = `List All Droplets`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets`
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
export const keys = {
  "query": [
    "per_page",
    "page",
    "tag_name",
    "name",
    "type"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "tag_name": z.string().describe("Used to filter Droplets by a specific tag. Can not be combined with `name` or `type`.").optional(), "name": z.string().describe("Used to filter list response by Droplet name returning only exact matches. It is case-insensitive and can not be combined with `tag_name`.").optional(), "type": z.enum(["droplets","gpus"]).describe("When `type` is set to `gpus`, only GPU Droplets will be returned. By default, only non-GPU Droplets are returned. Can not be combined with `tag_name`.").optional() }).shape