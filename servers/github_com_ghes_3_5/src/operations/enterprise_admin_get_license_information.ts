import { z } from "zod"

export const toolName = `enterprise_admin_get_license_information`
export const toolDescription = `Get license information`
export const baseUrl = `https://github.com`
export const path = `/enterprise/settings/license`
export const method = `get`
export const security = []

export const inputParams = z.object({}).shape