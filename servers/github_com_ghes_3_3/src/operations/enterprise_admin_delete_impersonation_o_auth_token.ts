import { z } from "zod"

export const toolName = `enterprise_admin_delete_impersonation_o_auth_token`
export const toolDescription = `Delete an impersonation OAuth token`
export const baseUrl = `https://github.com`
export const path = `/admin/users/{username}/authorizations`
export const method = `delete`
export const security = []

export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional() }).shape