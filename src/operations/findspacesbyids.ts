import { z } from "zod"

export const toolName = `findspacesbyids`
export const toolDescription = `Space lookup up Space IDs`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/spaces`
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

export const inputParams = z.object({ "query": z.object({ "ids": z.array(z.string().regex(new RegExp("^[a-zA-Z0-9]{1,13}$")).describe("The unique identifier of this Space.")).min(1).max(100).describe("The list of Space IDs to return."), "space.fields": z.array(z.enum(["created_at","creator_id","ended_at","host_ids","id","invited_user_ids","is_ticketed","lang","participant_count","scheduled_start","speaker_ids","started_at","state","subscriber_count","title","topic_ids","updated_at"])).min(1).describe("The fields available for a Space object.").optional(), "expansions": z.array(z.enum(["creator_id","host_ids","invited_user_ids","speaker_ids","topic_ids"])).min(1).describe("The list of fields you can expand for a [Space](#Space) object. If the field has an ID, it can be expanded into a full object.").optional(), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional(), "topic.fields": z.array(z.enum(["description","id","name"])).min(1).describe("The fields available for a Topic object.").optional() }).optional() }).shape