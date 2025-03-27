import { z } from "zod"

export const toolName = `parameters_account_events_eventid_`
export const toolDescription = ``
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/events/{eventId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape