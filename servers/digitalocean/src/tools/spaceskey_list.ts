import { z } from "zod"

export const toolName = `spaceskey_list`
export const toolDescription = `List Spaces Access Keys`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys`
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
    "sort",
    "sort_direction",
    "name",
    "bucket",
    "permission"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return."), "sort": z.string().describe("The field to sort by."), "sort_direction": z.string().describe("The direction to sort by. Possible values are `asc` or `desc`."), "name": z.string().describe("The access key's name.").optional(), "bucket": z.string().describe("The bucket's name.").optional(), "permission": z.string().describe("The permission of the access key. Possible values are `read`, `readwrite`, `fullaccess`, or an empty string.").optional() }).shape