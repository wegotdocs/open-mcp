import { z } from "zod"

export const toolName = `listcollectionscores`
export const toolDescription = `List the scores contained in a collection`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/collections/{collection}/scores`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "sort": z.enum(["creationDate","modificationDate","title"]).describe("Sort").optional(), "direction": z.enum(["asc","desc"]).describe("Sort direction").optional(), "limit": z.number().int().gte(1).lte(100).describe("This is the maximum number of objects that may be returned"), "next": z.string().describe("An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional(), "previous": z.string().describe("An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional() }).optional() }).shape