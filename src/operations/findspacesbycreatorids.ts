import { z } from "zod"

export const toolName = `findspacesbycreatorids`
export const toolDescription = `Space lookup by their creators`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/spaces/by/creator_ids`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "user_ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.")).min(1).max(100).describe("The IDs of Users to search through."), "space.fields": z.array(z.enum(["created_at","creator_id","ended_at","host_ids","id","invited_user_ids","is_ticketed","lang","participant_count","scheduled_start","speaker_ids","started_at","state","subscriber_count","title","topic_ids","updated_at"])).min(1).describe("The fields available for a Space object.").optional(), "expansions": z.array(z.enum(["creator_id","host_ids","invited_user_ids","speaker_ids","topic_ids"])).min(1).describe("The list of fields you can expand for a [Space](#Space) object. If the field has an ID, it can be expanded into a full object.").optional(), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional(), "topic.fields": z.array(z.enum(["description","id","name"])).min(1).describe("The fields available for a Topic object.").optional() }).optional() }).shape