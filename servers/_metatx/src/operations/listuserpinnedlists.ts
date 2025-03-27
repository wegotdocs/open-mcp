import { z } from "zod"

export const toolName = `listuserpinnedlists`
export const toolDescription = `Get a User's Pinned Lists`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/users/{id}/pinned_lists`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "OAuth <mcp-env-var>OAUTH_CREDENTIALS</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH_CREDENTIALS",
    "schemeType": "http",
    "schemeScheme": "OAuth"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Unique identifier of this User. The value must be the same as the authenticated user.") }).optional(), "query": z.object({ "list.fields": z.array(z.enum(["created_at","description","follower_count","id","member_count","name","owner_id","private"])).min(1).describe("The fields available for a List object.").optional(), "expansions": z.array(z.literal("owner_id")).min(1).describe("The list of fields you can expand for a [List](#List) object. If the field has an ID, it can be expanded into a full object.").optional(), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional() }).optional() }).shape