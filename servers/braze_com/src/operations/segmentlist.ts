import { z } from "zod"

export const toolName = `segmentlist`
export const toolDescription = `Segment List`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/segments/list`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "page": z.string().describe("(Optional) Integer\n\nThe page of segments to return, defaults to 0 (returns the first set of up to 100)").optional(), "sort_direction": z.string().describe("(Optional) String\n\nPass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If `sort_direction` is not included, the default order is oldest to newest.").optional() }).optional() }).shape