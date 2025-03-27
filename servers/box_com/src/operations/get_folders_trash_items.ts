import { z } from "zod"

export const toolName = `get_folders_trash_items`
export const toolDescription = `List trashed items`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/trash/items`
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

export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional(), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional(), "offset": z.number().int().describe("The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response."), "usemarker": z.boolean().describe("Specifies whether to use marker-based pagination instead of\noffset-based pagination. Only one pagination method can\nbe used at a time.\n\nBy setting this value to true, the API will return a `marker` field\nthat can be passed as a parameter to this endpoint to get the next\npage of the response.").optional(), "marker": z.string().describe("Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.").optional(), "direction": z.enum(["ASC","DESC"]).describe("The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.").optional(), "sort": z.enum(["id","name","date","size"]).describe("Defines the **second** attribute by which items\nare sorted.\n\nItems are always sorted by their `type` first, with\nfolders listed before files, and files listed\nbefore web links.\n\nThis parameter is not supported when using marker-based pagination.").optional() }).optional() }).shape