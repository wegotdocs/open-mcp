import { z } from "zod"

export const toolName = `newsfeedcardslist`
export const toolDescription = `News Feed Cards List`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/feed/list`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "page": z.string().describe("(Optional) Integer\n\nThe page of cards to return, defaults to 0 (returns the first set of up to 100)").optional(), "include_archived": z.string().describe("(Optional) Boolean\n\nWhether or not to include archived cards, defaults to false").optional(), "sort_direction": z.string().describe("(Optional) String\n\nPass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.").optional() }).optional() }).shape