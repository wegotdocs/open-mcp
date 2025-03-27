import { z } from "zod"

export const toolName = `parameters_aliases_v2_trackingid_`
export const toolDescription = ``
export const baseUrl = `https://tracking.api.here.com`
export const path = `/aliases/v2/{trackingId}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape