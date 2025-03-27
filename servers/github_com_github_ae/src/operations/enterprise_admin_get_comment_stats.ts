import { z } from "zod"

export const toolName = `enterprise_admin_get_comment_stats`
export const toolDescription = `Get comment statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise/stats/comments`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape