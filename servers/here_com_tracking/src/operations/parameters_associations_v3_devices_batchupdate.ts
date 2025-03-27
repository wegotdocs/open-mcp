import { z } from "zod"

export const toolName = `parameters_associations_v3_devices_batchupdate`
export const toolDescription = ``
export const baseUrl = `https://tracking.api.here.com`
export const path = `/associations/v3/devices/batchUpdate`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape