import { z } from "zod"

export const toolName = `searchcustomobjectrecords`
export const toolDescription = `Search Custom Object Records`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/records/search`
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

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object") }).optional(), "query": z.object({ "query": z.string().describe("The query parameter is used to search text-based fields for records that match specific query terms.\nThe query can be multiple words or numbers. Every record that matches the beginning of any word or number in the query string is returned.<br/><br/>\n\nFuzzy search is supported for the following text-based field types: : Text fields, Multi Line Text fields, and RegExp fields.<br/><br/>\n\nFor example, you might want to search for records related to Tesla vehicles: `query=Tesla`. In this example the API would return every record for the given custom object where any of the supported text fields contain the word 'Tesla'.<br/><br/>\n\nYou can include multiple words or numbers in your search. For example: `query=Tesla Honda 2020`. This search phrase would be URL encoded as `query=Tesla%20Honda%202020` and return every record for the custom object for which any of the supported text fields contained 'Tesla', 'Honda', or '2020'.\n").optional(), "sort": z.string().describe("One of `name`, `created_at`, `updated_at`, `-name`, `-created_at`, or `-updated_at`. The `-` denotes the sort will be descending. Defaults to sorting by relevance.\n").optional(), "page[before]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[after]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[size]": z.number().int().describe("Specifies how many records should be returned in the response. You can specify up to 100 records per page.\n").optional() }).optional() }).shape