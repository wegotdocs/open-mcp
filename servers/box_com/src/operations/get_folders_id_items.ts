import { z } from "zod"

export const toolName = `get_folders_id_items`
export const toolDescription = `List items in folder`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/{folder_id}/items`
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

export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.\n\nAdditionally this field can be used to query any metadata\napplied to the file by specifying the `metadata` field as well\nas the scope and key of the template to retrieve, for example\n`?field=metadata.enterprise_12345.contractTemplate`.").optional(), "usemarker": z.boolean().describe("Specifies whether to use marker-based pagination instead of\noffset-based pagination. Only one pagination method can\nbe used at a time.\n\nBy setting this value to true, the API will return a `marker` field\nthat can be passed as a parameter to this endpoint to get the next\npage of the response.").optional(), "marker": z.string().describe("Defines the position marker at which to begin returning results. This is\nused when paginating using marker-based pagination.\n\nThis requires `usemarker` to be set to `true`.").optional(), "offset": z.number().int().describe("The offset of the item at which to begin the response.\n\nQueries with offset parameter value\nexceeding 10000 will be rejected\nwith a 400 response."), "limit": z.number().int().lte(1000).describe("The maximum number of items to return per page.").optional(), "sort": z.enum(["id","name","date","size"]).describe("Defines the **second** attribute by which items\nare sorted.\n\nItems are always sorted by their `type` first, with\nfolders listed before files, and files listed\nbefore web links.\n\nThis parameter is not supported for marker-based pagination\non the root folder (the folder with an ID of `0`).").optional(), "direction": z.enum(["ASC","DESC"]).describe("The direction to sort results in. This can be either in alphabetical ascending\n(`ASC`) or descending (`DESC`) order.").optional() }).optional(), "header": z.object({ "boxapi": z.string().describe("The URL, and optional password, for the shared link of this item.\n\nThis header can be used to access items that have not been\nexplicitly shared with a user.\n\nUse the format `shared_link=[link]` or if a password is required then\nuse `shared_link=[link]&shared_link_password=[password]`.\n\nThis header can be used on the file or folder shared, as well as on any files\nor folders nested within the item.").optional() }).optional() }).shape