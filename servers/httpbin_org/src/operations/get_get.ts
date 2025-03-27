import { z } from "zod"

export const toolName = `get_get`
export const toolDescription = `The request's query parameters.`
export const baseUrl = `https://httpbin.org`
export const path = `/get`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape