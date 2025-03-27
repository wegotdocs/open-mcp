import { z } from "zod"

export const toolName = `get_`
export const toolDescription = `Get all colors of the default color name list`
export const baseUrl = `https://api.color.pizza/v1`
export const path = `/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape