import { z } from "zod"

export const toolName = `enterprise_admin_get_pages_stats`
export const toolDescription = `Get pages statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise/stats/pages`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape