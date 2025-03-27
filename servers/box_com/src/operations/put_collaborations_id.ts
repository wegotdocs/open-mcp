import { z } from "zod"

export const toolName = `put_collaborations_id`
export const toolDescription = `Update collaboration`
export const baseUrl = `https://api.box.com/2.0`
export const path = `/collaborations/{collaboration_id}`
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

export const inputParams = z.object({ "path": z.object({ "collaboration_id": z.string().describe("The ID of the collaboration") }).optional(), "body": z.object({ "can_view_path": z.boolean().describe("Determines if the invited users can see the entire parent path to\nthe associated folder. The user will not gain privileges in any\nparent folder and therefore can not see content the user is not\ncollaborated on.\n\nBe aware that this meaningfully increases the time required to load the\ninvitee's **All Files** page. We recommend you limit the number of\ncollaborations with `can_view_path` enabled to 1,000 per user.\n\nOnly owner or co-owners can invite collaborators with a `can_view_path` of\n`true`.\n\n`can_view_path` can only be used for folder collaborations.").optional(), "expires_at": z.string().datetime({ offset: true }).describe("Update the expiration date for the collaboration. At this date,\nthe collaboration will be automatically removed from the item.\n\nThis feature will only work if the **Automatically remove invited\ncollaborators: Allow folder owners to extend the expiry date**\nsetting has been enabled in the **Enterprise Settings**\nof the **Admin Console**. When the setting is not enabled,\ncollaborations can not have an expiry date and a value for this\nfield will be result in an error.\n\nAdditionally, a collaboration can only be given an\nexpiration if it was created after the **Automatically remove\ninvited collaborator** setting was enabled.").optional(), "role": z.enum(["editor","viewer","previewer","uploader","previewer uploader","viewer uploader","co-owner","owner"]).describe("The level of access granted."), "status": z.enum(["pending","accepted","rejected"]).describe("<!--alex ignore reject-->\nSet the status of a `pending` collaboration invitation,\neffectively accepting, or rejecting the invite.").optional() }).optional() }).shape