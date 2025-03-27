import { z } from "zod"

export const toolName = `get_device_associations_v2_version`
export const toolDescription = `Gets service version`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/device-associations/v2/version`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape