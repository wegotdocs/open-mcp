import { z } from "zod"

export const toolName = `enterprise_admin_update_username_for_user`
export const toolDescription = `Update the username for a user`
export const baseUrl = `https://github.com`
export const path = `/admin/users/{username}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "username": z.string().describe("The handle for the GitHub user account.") }).optional(), "body": z.object({ "login": z.string().describe("The user's new username.") }).optional() }).shape