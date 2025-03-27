import { z } from "zod"

export const toolName = `enterprise_admin_get_pull_request_stats`
export const toolDescription = `Get pull request statistics`
export const baseUrl = `https://github.com`
export const path = `/enterprise/stats/pulls`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape