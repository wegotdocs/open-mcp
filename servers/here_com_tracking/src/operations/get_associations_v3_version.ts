import { z } from "zod"

export const toolName = `get_associations_v3_version`
export const toolDescription = `Gets service version`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/associations/v3/version`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape