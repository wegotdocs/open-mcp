import { z } from "zod"

export const toolName = `images_get`
export const toolDescription = `Retrieve an Existing Image`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/images/{image_id}`
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
  "query": [],
  "header": [],
  "path": [
    "image_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "image_id": z.union([z.number().int(), z.string()]).describe("A unique number (id) or string (slug) used to identify and reference a\nspecific image.\n\n**Public** images can be identified by image `id` or `slug`.\n\n**Private** images *must* be identified by image `id`.\n")
}