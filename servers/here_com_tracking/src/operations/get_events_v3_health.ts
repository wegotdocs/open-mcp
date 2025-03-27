import { z } from "zod"

export const toolName = `get_events_v3_health`
export const toolDescription = `Gets service health`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/events/v3/health`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape