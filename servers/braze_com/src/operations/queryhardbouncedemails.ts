import { z } from "zod"

export const toolName = `queryhardbouncedemails`
export const toolDescription = `Query Hard Bounced Emails`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/email/hard_bounces`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "start_date": z.string().describe("(Optional*) String in YYYY-MM-DD format \n\nStart date of the range to retrieve hard bounces, must be earlier than `end_date`. This is treated as midnight in UTC time by the API.\n\n*You must provide either an `email` or a `start_date`, and an `end_date`.\n").optional(), "end_date": z.string().describe("(Optional*) String in YYYY-MM-DD format\n\nString in YYYY-MM-DD format. End date of the range to retrieve hard bounces. This is treated as midnight in UTC time by the API.\n\n*You must provide either an `email` or a `start_date`, and an `end_date`.").optional(), "limit": z.string().describe("(Optional) Integer\n\nOptional field to limit the number of results returned. Defaults to 100, maximum is 500.").optional(), "offset": z.string().describe("(Optional) Integer\n\nOptional beginning point in the list to retrieve from.").optional(), "email": z.string().describe("(Optional*) String\n\nIf provided, we will return whether or not the user has hard bounced.\n\n*You must provide either an `email` or a `start_date`, and an `end_date`.").optional() }).optional() }).shape