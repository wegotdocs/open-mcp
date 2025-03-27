import { z } from "zod"

export const toolName = `customeventsanalytics`
export const toolDescription = `Custom Events Analytics`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/events/data_series`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "event": z.string().describe("(Required) String\n\nThe name of the custom event for which to return analytics ").optional(), "length": z.string().describe("(Required) Integer\n\nMax number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive").optional(), "unit": z.string().describe("(Optional) String\n\nUnit of time between data points - can be \"day\" or \"hour\" (defaults to \"day\")").optional(), "ending_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nPoint in time when the data series should end - defaults to time of the request").optional(), "app_id": z.string().describe("(Optional) String\n\nApp API identifier retrieved from the Developer Console to limit analytics to a specific app").optional(), "segment_id": z.string().describe("(Optional) String\n\nSegment API identifier indicating the analytics enabled segment for which event analytics should be returned").optional() }).optional() }).shape