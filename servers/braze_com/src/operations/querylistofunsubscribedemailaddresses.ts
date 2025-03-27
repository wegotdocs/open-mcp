import { z } from "zod"

export const toolName = `querylistofunsubscribedemailaddresses`
export const toolDescription = `Query List of Unsubscribed Email Addresses`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/email/unsubscribes`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "start_date": z.string().describe("(Optional*) String in YYYY-MM-DD format\n\nStart date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API.").optional(), "end_date": z.string().describe("(Optional*)  String in YYYY-MM-DD format\n\nEnd date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API.").optional(), "limit": z.string().describe("(Optional) Integer\n\nOptional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500.").optional(), "offset": z.string().describe("(Optional) Integer \n\nOptional beginning point in the list to retrieve from").optional(), "sort_direction": z.string().describe("(Optional) String\n\nPass in the value `asc` to sort unsubscribes from oldest to newest. Pass in `desc` to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest.").optional(), "email": z.string().describe("(Optional*) String\n\nIf provided, we will return whether or not the user has unsubscribed").optional() }).optional() }).shape