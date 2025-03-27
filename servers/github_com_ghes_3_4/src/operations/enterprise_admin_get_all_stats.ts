import { z } from "zod"

export const toolName = `enterprise_admin_get_all_stats`
export const toolDescription = `Get all statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise/stats/all`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape