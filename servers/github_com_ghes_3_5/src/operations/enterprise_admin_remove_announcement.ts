import { z } from "zod"

export const toolName = `enterprise_admin_remove_announcement`
export const toolDescription = `Remove the global announcement banner`
export const baseUrl = `https://github.com`
export const path = `/enterprise/announcement`
export const method = `delete`
export const security = []

export const inputParams = z.object({}).shape