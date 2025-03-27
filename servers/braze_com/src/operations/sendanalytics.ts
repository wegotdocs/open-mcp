import { z } from "zod"

export const toolName = `sendanalytics`
export const toolDescription = `Send Analytics`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/sends/data_series`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "campaign_id": z.string().describe("(Required) String\n\nCampaign API identifier.").optional(), "send_id": z.string().describe("(Required) String\n\nSend API identifier.").optional(), "length": z.string().describe("(Required) Integer\n\nMaximum number of days before `ending_at` to include in the returned series. Must be between 1 and 100 inclusive.").optional(), "ending_at": z.string().describe("(Optional) Datetime ISO 8601 string\n\nDate on which the data series should end. Defaults to time of the request.").optional() }).optional() }).shape