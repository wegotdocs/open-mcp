import { z } from "zod"

export const toolName = `root`
export const toolDescription = `root`
export const baseUrl = `https://canada-holidays.ca`
export const path = `/api/v1`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape