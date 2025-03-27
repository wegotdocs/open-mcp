import { z } from "zod"

export const toolName = `put_files_id`
export const toolDescription = `Update file`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/files/{file_id}`
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

export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional(), "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional() }).optional(), "header": z.object({ "if-match": z.string().describe("Ensures this item hasn't recently changed before\nmaking changes.\n\nPass in the item's last observed `etag` value\ninto this header and the endpoint will fail\nwith a `412 Precondition Failed` if it\nhas changed since.").optional() }).optional(), "body": z.object({ "description": z.string().max(256).describe("The description for a file. This can be seen in the right-hand sidebar panel\nwhen viewing a file in the Box web app. Additionally, this index is used in\nthe search index of the file, allowing users to find the file by the content\nin the description.").optional(), "disposition_at": z.string().datetime({ offset: true }).describe("The retention expiration timestamp for the given file. This\ndate cannot be shortened once set on a file.").optional(), "lock": z.object({ "access": z.literal("lock").describe("The type of this object.").optional(), "expires_at": z.string().datetime({ offset: true }).describe("Defines the time at which the lock expires.").optional(), "is_download_prevented": z.boolean().describe("Defines if the file can be downloaded while it is locked.").optional() }).describe("Defines a lock on an item. This prevents the item from being\nmoved, renamed, or otherwise changed by anyone other than the user\nwho created the lock.\n\nSet this to `null` to remove the lock.").optional(), "name": z.string().describe("An optional different name for the file. This can be used to\nrename the file.").optional(), "parent": z.string().optional(), "permissions": z.object({ "can_download": z.enum(["open","company"]).describe("Defines who is allowed to download this file. The possible\nvalues are either `open` for everyone or `company` for\nthe other members of the user's enterprise.\n\nThis setting overrides the download permissions that are\nnormally part of the `role` of a collaboration. When set to\n`company`, this essentially removes the download option for\nexternal users with `viewer` or `editor` a roles.").optional() }).describe("Defines who can download a file.").optional(), "shared_link": z.string().optional(), "tags": z.array(z.string()).min(1).max(100).describe("The tags for this item. These tags are shown in\nthe Box web app and mobile apps next to an item.\n\nTo add or remove a tag, retrieve the item's current tags,\nmodify them, and then update this field.\n\nThere is a limit of 100 tags per item, and 10,000\nunique tags per enterprise.").optional() }).optional() }).shape