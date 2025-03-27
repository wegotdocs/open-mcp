import { z } from "zod"

export const toolName = `listcollections`
export const toolDescription = `List the collections`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/collections`
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

export const inputParams = z.object({ "query": z.object({ "parent": z.string().describe("List the collection contained in this `parent` collection.\n\nThis option doesn't provide a complete multi-level collection support.\nWhen sharing a collection with someone, this one will have as `parent` `sharedWithMe`.\n"), "sort": z.enum(["creationDate","title"]).describe("Sort").optional(), "direction": z.enum(["asc","desc"]).describe("Sort direction").optional(), "limit": z.number().int().gte(1).lte(100).describe("This is the maximum number of objects that may be returned"), "next": z.string().describe("An opaque string cursor to fetch the next page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional(), "previous": z.string().describe("An opaque string cursor to fetch the previous page of data.\nThe paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.\n").optional() }).optional() }).shape