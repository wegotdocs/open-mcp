import { z } from "zod"

export const toolName = `apps_get_authenticated`
export const toolDescription = `Get the authenticated app`
export const baseUrl = `https://github.com`
export const path = `/app`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape