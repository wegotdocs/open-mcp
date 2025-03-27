import { z } from "zod"

export const toolName = `emojis_get`
export const toolDescription = `Get emojis`
export const baseUrl = `https://github.com`
export const path = `/emojis`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape