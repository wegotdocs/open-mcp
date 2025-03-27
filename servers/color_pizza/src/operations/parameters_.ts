import { z } from "zod"

export const toolName = `parameters_`
export const toolDescription = ``
export const baseUrl = `https://api.color.pizza/v1`
export const path = `/`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape