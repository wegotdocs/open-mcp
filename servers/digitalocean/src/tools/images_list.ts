import { z } from "zod"

export const toolName = `images_list`
export const toolDescription = `List All Images`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/images`
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
    "type",
    "private",
    "tag_name",
    "per_page",
    "page"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "type": z.enum(["application","distribution"]).describe("Filters results based on image type which can be either `application` or `distribution`.").optional(), "private": z.boolean().describe("Used to filter only user images.").optional(), "tag_name": z.string().describe("Used to filter images by a specific tag.").optional(), "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page"), "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.") }).shape