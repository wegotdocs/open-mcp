import { z } from "zod"

export const toolName = `description_select`
export const toolDescription = ``
export const baseUrl = `https://api.ideaconsult.net/enanomapper`
export const path = `/select`
export const method = `description`
export const security = []

export const inputParams = z.object({}).shape