import { z } from "zod"

export const toolName = `gitignore_get_all_templates`
export const toolDescription = `Get all gitignore templates`
export const baseUrl = `https://api.github.com`
export const path = `/gitignore/templates`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape