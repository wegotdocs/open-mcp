import { z } from "zod"

export const toolName = `parameters_events_v3_statuses_devicecounts`
export const toolDescription = ``
export const baseUrl = `https://tracking.api.here.com`
export const path = `/events/v3/statuses/deviceCounts`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape