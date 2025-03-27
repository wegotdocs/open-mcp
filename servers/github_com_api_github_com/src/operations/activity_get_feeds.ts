import { z } from "zod"

export const toolName = `activity_get_feeds`
export const toolDescription = `Get feeds`
export const baseUrl = `https://api.github.com`
export const path = `/feeds`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape