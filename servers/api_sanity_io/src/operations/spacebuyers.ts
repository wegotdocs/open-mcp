import { z } from "zod"

export const toolName = `spacebuyers`
export const toolDescription = `Retrieve the list of Users who purchased a ticket to the given space`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/spaces/{id}/buyers`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[a-zA-Z0-9]{1,13}$")).describe("The unique identifier of this Space.") }).optional(), "query": z.object({ "pagination_token": z.string().min(16).describe("A base32 pagination token.").optional(), "max_results": z.number().int().gte(1).lte(100).describe("The maximum number of results."), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional(), "expansions": z.array(z.literal("pinned_tweet_id")).min(1).describe("The list of fields you can expand for a [User](#User) object. If the field has an ID, it can be expanded into a full object.").optional(), "tweet.fields": z.array(z.enum(["attachments","author_id","context_annotations","conversation_id","created_at","edit_controls","edit_history_tweet_ids","entities","geo","id","in_reply_to_user_id","lang","non_public_metrics","organic_metrics","possibly_sensitive","promoted_metrics","public_metrics","referenced_tweets","reply_settings","source","text","withheld"])).min(1).describe("The fields available for a Tweet object.").optional() }).optional() }).shape