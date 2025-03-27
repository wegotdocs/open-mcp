import { z } from "zod"

export const toolName = `listuserownedlists`
export const toolDescription = `Get a User's Owned Lists.`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/users/{id}/owned_lists`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.") }).optional(), "query": z.object({ "max_results": z.number().int().gte(1).lte(100).describe("The maximum number of results."), "pagination_token": z.string().min(1).max(19).describe("A 'long' pagination token.").optional(), "list.fields": z.array(z.enum(["created_at","description","follower_count","id","member_count","name","owner_id","private"])).min(1).describe("The fields available for a List object.").optional(), "expansions": z.array(z.literal("owner_id")).min(1).describe("The list of fields you can expand for a [List](#List) object. If the field has an ID, it can be expanded into a full object.").optional(), "user.fields": z.array(z.enum(["created_at","description","entities","id","location","name","pinned_tweet_id","profile_image_url","protected","public_metrics","url","username","verified","verified_type","withheld"])).min(1).describe("The fields available for a User object.").optional() }).optional() }).shape