import { z } from "zod"

export const toolName = `campaignlist`
export const toolDescription = `Campaign List`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/campaigns/list`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "page": z.string().describe("(Optional) Integer\n\nThe page of campaigns to return, defaults to 0 (returns the first set of up to 100)").optional(), "include_archived": z.string().describe("(Optional) Boolean\n\nWhether or not to include archived campaigns, defaults to false").optional(), "sort_direction": z.string().describe("(Optional) String\n\nPass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.").optional(), "last_edit.time[gt]": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nFilters the results and only returns campaigns that were edited greater than the time provided till now. ").optional() }).optional() }).shape