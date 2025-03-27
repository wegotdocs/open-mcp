import { z } from "zod"

export const toolName = `enterprise_admin_update_org_name`
export const toolDescription = `Update an organization name`
export const baseUrl = `https://github.com`
export const path = `/admin/organizations/{org}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional(), "body": z.object({ "login": z.string().describe("The organization's new name.") }).optional() }).shape