import { z } from "zod"

export const toolName = `meta_root`
export const toolDescription = `GitHub API Root`
export const baseUrl = `https://api.github.com`
export const path = `/`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape