import { z } from "zod"

export const toolName = `createtweet`
export const toolDescription = `Creation of a Tweet`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "card_uri": z.string().describe("Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.").optional(), "direct_message_deep_link": z.string().describe("Link to take the conversation from the public timeline to a private Direct Message.").optional(), "for_super_followers_only": z.boolean().describe("Exclusive Tweet for super followers."), "geo": z.object({ "place_id": z.string().optional() }).strict().describe("Place ID being attached to the Tweet for geo location.").optional(), "media": z.object({ "media_ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this Media.")).min(1).max(4).describe("A list of Media Ids to be attached to a created Tweet."), "tagged_user_ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.")).min(0).max(10).describe("A list of User Ids to be tagged in the media for created Tweet.").optional() }).strict().describe("Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.").optional(), "nullcast": z.boolean().describe("Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers."), "poll": z.object({ "duration_minutes": z.number().int().gte(5).lte(10080).describe("Duration of the poll in minutes."), "options": z.array(z.string().min(1).max(25).describe("The text of a poll choice.")).min(2).max(4), "reply_settings": z.enum(["following","mentionedUsers"]).describe("Settings to indicate who can reply to the Tweet.").optional() }).strict().describe("Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.").optional(), "quote_tweet_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.").optional(), "reply": z.object({ "exclude_reply_user_ids": z.array(z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.")).describe("A list of User Ids to be excluded from the reply Tweet.").optional(), "in_reply_to_tweet_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.") }).strict().describe("Tweet information of the Tweet being replied to.").optional(), "reply_settings": z.enum(["following","mentionedUsers"]).describe("Settings to indicate who can reply to the Tweet.").optional(), "text": z.string().describe("The content of the Tweet.").optional() }).strict().optional() }).shape