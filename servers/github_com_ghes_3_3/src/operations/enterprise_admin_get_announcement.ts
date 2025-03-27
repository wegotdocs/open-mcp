import { z } from "zod"

export const toolName = `enterprise_admin_get_announcement`
export const toolDescription = `Get the global announcement banner`
export const baseUrl = `https://github.com`
export const path = `/enterprise/announcement`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape