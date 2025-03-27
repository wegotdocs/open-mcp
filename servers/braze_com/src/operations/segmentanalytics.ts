import { z } from "zod"

export const toolName = `segmentanalytics`
export const toolDescription = `Segment Analytics`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/segments/data_series`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "segment_id": z.string().describe("(Required) String\n\nSegment API identifier.").optional(), "length": z.string().describe("(Required) Integer\n\nMax number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive.").optional(), "ending_at": z.string().describe("(Optional) DateTime (ISO 8601 string)\n\nPoint in time when the data series should end - defaults to time of the request.").optional() }).optional() }).shape