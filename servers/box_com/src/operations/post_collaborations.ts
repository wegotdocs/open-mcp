import { z } from "zod"

export const toolName = `post_collaborations`
export const toolDescription = `Create collaboration`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/collaborations`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "fields": z.array(z.string()).describe("A comma-separated list of attributes to include in the\nresponse. This can be used to request fields that are\nnot normally returned in a standard response.\n\nBe aware that specifying this parameter will have the\neffect that none of the standard fields are returned in\nthe response unless explicitly specified, instead only\nfields for the mini representation are returned, additional\nto the fields requested.").optional(), "notify": z.boolean().describe("Determines if users should receive email notification\nfor the action performed.").optional() }).optional(), "body": z.object({ "accessible_by": z.object({ "id": z.string().describe("The ID of the user or group.\n\nAlternatively, use `login` to specify a user by email\naddress.").optional(), "login": z.string().describe("The email address of the user to grant access to the item.\n\nAlternatively, use `id` to specify a user by user ID.").optional(), "type": z.enum(["user","group"]).describe("The type of collaborator to invite.") }).describe("The user or group to give access to the item."), "can_view_path": z.boolean().describe("Determines if the invited users can see the entire parent path to\nthe associated folder. The user will not gain privileges in any\nparent folder and therefore can not see content the user is not\ncollaborated on.\n\nBe aware that this meaningfully increases the time required to load the\ninvitee's **All Files** page. We recommend you limit the number of\ncollaborations with `can_view_path` enabled to 1,000 per user.\n\nOnly owner or co-owners can invite collaborators with a `can_view_path` of\n`true`.\n\n`can_view_path` can only be used for folder collaborations.").optional(), "expires_at": z.string().datetime({ offset: true }).describe("Set the expiration date for the collaboration. At this date, the\ncollaboration will be automatically removed from the item.\n\nThis feature will only work if the **Automatically remove invited\ncollaborators: Allow folder owners to extend the expiry date**\nsetting has been enabled in the **Enterprise Settings**\nof the **Admin Console**. When the setting is not enabled,\ncollaborations can not have an expiry date and a value for this\nfield will be result in an error.").optional(), "item": z.object({ "id": z.string().describe("The ID of the item that will be granted access to"), "type": z.enum(["file","folder"]).describe("The type of the item that this collaboration will be\ngranted access to") }).describe("The item to attach the comment to."), "role": z.enum(["editor","viewer","previewer","uploader","previewer uploader","viewer uploader","co-owner"]).describe("The level of access granted.") }).optional() }).shape