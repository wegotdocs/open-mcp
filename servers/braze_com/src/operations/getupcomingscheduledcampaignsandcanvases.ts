import { z } from "zod"

export const toolName = `getupcomingscheduledcampaignsandcanvases`
export const toolDescription = `Get Upcoming Scheduled Campaigns and Canvases`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/messages/scheduled_broadcasts`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "end_time": z.string().describe("(Required) String in ISO 8601 format\n\nEnd date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API.").optional() }).optional() }).shape