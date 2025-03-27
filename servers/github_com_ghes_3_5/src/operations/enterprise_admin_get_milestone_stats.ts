import { z } from "zod"

export const toolName = `enterprise_admin_get_milestone_stats`
export const toolDescription = `Get milestone statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise/stats/milestones`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape