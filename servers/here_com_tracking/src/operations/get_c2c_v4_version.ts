import { z } from "zod"

export const toolName = `get_c2c_v4_version`
export const toolDescription = `Gets service version`
export const baseUrl = `https://tracking.api.here.com`
export const path = `/c2c/v4/version`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape