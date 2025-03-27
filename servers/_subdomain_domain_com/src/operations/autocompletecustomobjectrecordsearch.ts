import { z } from "zod"

export const toolName = `autocompletecustomobjectrecordsearch`
export const toolDescription = `Autocomplete Custom Object Record Search`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/custom_objects/{custom_object_key}/records/autocomplete`
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

export const inputParams = z.object({ "path": z.object({ "custom_object_key": z.string().describe("The key of a custom object") }).optional(), "query": z.object({ "name": z.string().describe("Part of a name of the record you are searching for").optional(), "page[before]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.before_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[after]": z.string().describe("A [pagination cursor](/documentation/api-basics/pagination/paginating-through-lists-using-cursor-pagination) that tells the endpoint which page to start on. It should be a `meta.after_cursor` value from a previous request. Note: `page[before]` and `page[after]` can't be used together in the same request.\n").optional(), "page[size]": z.number().int().describe("The number of records to return in the response. You can specify up to 100 records per page.\n").optional(), "field_id": z.string().describe("The id of the lookup field. If the field has a relationship filter, the filter is applied to the results. Must be used with `source` param.\n").optional(), "source": z.string().describe("One of \"zen:user\", \"zen:ticket\", \"zen:organization\", or \"zen:custom_object:CUSTOM_OBJECT_KEY\". Represents the object `field_id` belongs to. Must be used with field_id param.\n").optional(), "requester_id": z.number().int().describe("The id of the requester. For use with dynamic filters.\n").optional(), "assignee_id": z.number().int().describe("The id of the selected assignee. For use with dynamic filters.\n").optional(), "organization_id": z.number().int().describe("The id of the organization the requester belongs to. For use with dynamic filters.\n").optional() }).optional() }).shape