import { z } from "zod"

export const toolName = `listcustomobjectrecords`
export const toolDescription = `List Custom Object Records`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/records`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object") }).optional(), "query": z.object({ "filter[ids]": z.string().describe("Optional comma-separated list of ids to filter records by. If one or more ids are specified, only matching records are returned. The ids must be unique and are case sensitive.").optional(), "filter[external_ids]": z.string().describe("Optional comma-separated list of external ids to filter records by. If one or more ids are specified, only matching records are returned. The ids must be unique and are case sensitive.").optional(), "sort": z.string().describe("One of `id`, `updated_at`, `-id`, or `-updated_at`. The `-` denotes the sort will be descending.\n").optional(), "page[before]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[after]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[size]": z.number().int().describe("Specifies how many records should be returned in the response. You can specify up to 100 records per page.\n").optional() }).optional() }).shape