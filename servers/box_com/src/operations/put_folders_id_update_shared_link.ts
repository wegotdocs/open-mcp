import { z } from "zod"

export const toolName = `put_folders_id_update_shared_link`
export const toolDescription = `Update shared link on folder`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/folders/{folder_id}#update_shared_link`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "folder_id": z.string().describe("The unique identifier that represent a folder.\n\nThe ID for any folder can be determined\nby visiting this folder in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/folder/123`\nthe `folder_id` is `123`.\n\nThe root folder of a Box account is\nalways represented by the ID `0`.") }).optional(), "query": z.object({ "fields": z.string().describe("Explicitly request the `shared_link` fields\nto be returned for this item.") }).optional(), "body": z.object({ "shared_link": z.object({ "access": z.enum(["open","company","collaborators"]).describe("The level of access for the shared link. This can be\nrestricted to anyone with the link (`open`), only people\nwithin the company (`company`) and only those who\nhave been invited to the folder (`collaborators`).\n\nIf not set, this field defaults to the access level specified\nby the enterprise admin. To create a shared link with this\ndefault setting pass the `shared_link` object with\nno `access` field, for example `{ \"shared_link\": {} }`.\n\nThe `company` access level is only available to paid\naccounts.").optional(), "password": z.string().describe("The password required to access the shared link. Set the\npassword to `null` to remove it.\n\nA password can only be set when `access` is set to `open`.").optional(), "permissions": z.object({ "can_download": z.boolean().describe("If the shared link allows for downloading of files.\nThis can only be set when `access` is set to\n`open` or `company`.").optional(), "can_edit": z.boolean().describe("This value can only be `false` for items\nwith a `type` of `folder`.").optional(), "can_preview": z.boolean().describe("If the shared link allows for previewing of files.\nThis value is always `true`. For shared links on folders\nthis also applies to any items in the folder.").optional() }).optional(), "unshared_at": z.string().datetime({ offset: true }).describe("The timestamp at which this shared link will\nexpire. This field can only be set by\nusers with paid accounts. The value must be greater than the\ncurrent date and time.").optional(), "vanity_name": z.string().min(12).describe("Defines a custom vanity name to use in the shared link URL,\nfor example `https://app.box.com/v/my-shared-link`.\n\nCustom URLs should not be used when sharing sensitive content\nas vanity URLs are a lot easier to guess than regular shared\nlinks.").optional() }).describe("The settings for the shared link to update.").optional() }).optional() }).shape