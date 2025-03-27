import { z } from "zod"

export const toolName = `samplestream`
export const toolDescription = `Sample stream`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/sample/stream`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "query": z.object({ "backfill_minutes": z.number().int().gte(0).lte(5).describe("The number of minutes of backfill requested.").optional(), "tweet.fields": z.array(z.enum(["attachments","author_id","context_annotations","conversation_id","created_at","edit_controls","edit_history_tweet_ids","entities","geo","id","in_reply_to_user_id","lang","non_public_metrics","organic_metrics","possibly_sensitive","promoted_metrics","public_metrics","referenced_tweets","reply_settings","source","text","withheld"])).min(1).describe("The fields available for a Tweet object.").optional(), "expansions": z.array(z.enum(["attachments.media_keys","attachments.poll_ids","author_id","edit_history_tweet_ids","entities.mentions.username","geo.place_id","in_reply_to_user_id","referenced_tweets.id","referenced_tweets.id.author_id"])).min(1).describe("The list of fields you can expand for a [Tweet](#Tweet) object. If the field has an ID, it can be expanded into a full object.").optional(), "media.fields": z.array(z.enum(["alt_text","duration_ms","height","media_key","non_public_metrics","organic_metrics","preview_image_url","promoted_metrics","public_metrics","type","url","variants","width"])).min(1).describe("The fields available for a Media object.").optional(), "poll.fields": z.array(z.enum(["duration_minutes","end_datetime","id","options","voting_status"])).min(1).describe("The fields available for a Poll object.").optional(), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional(), "place.fields": z.array(z.enum(["contained_within","country","country_code","full_name","geo","id","name","place_type"])).min(1).describe("The fields available for a Place object.").optional() }).optional() }).shape