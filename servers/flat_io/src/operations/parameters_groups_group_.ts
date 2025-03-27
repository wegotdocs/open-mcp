import { z } from "zod"

export const toolName = `parameters_groups_group_`
export const toolDescription = ``
export const baseUrl = `https://api.flat.io/v2`
export const path = `/groups/{group}`
export const method = `parameters`
export const security = []

export const inputParams = z.object({}).shape