import { z } from "zod"

export const toolName = `get_uuid`
export const toolDescription = `Return a UUID4.`
export const baseUrl = `https://httpbin.org`
export const path = `/uuid`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape