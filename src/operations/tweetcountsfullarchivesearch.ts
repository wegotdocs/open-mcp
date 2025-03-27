import { z } from "zod"

export const toolName = `tweetcountsfullarchivesearch`
export const toolDescription = `Full archive search counts`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/counts/all`
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

export const inputParams = z.object({ "query": z.object({ "query": z.string().min(1).max(4096).describe("One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length."), "start_time": z.string().datetime({ offset: true }).describe("YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).").optional(), "end_time": z.string().datetime({ offset: true }).describe("YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).").optional(), "since_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.").optional(), "until_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.").optional(), "next_token": z.string().min(1).describe("A base36 pagination token.").optional(), "pagination_token": z.string().min(1).describe("A base36 pagination token.").optional(), "granularity": z.enum(["minute","hour","day"]).describe("The granularity for the search counts results."), "search_count.fields": z.array(z.enum(["end","start","tweet_count"])).min(1).describe("The fields available for a SearchCount object.").optional() }).optional() }).shape