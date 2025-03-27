import { z } from "zod"

export const toolName = `enterprise_admin_create_org`
export const toolDescription = `Create an organization`
export const baseUrl = `https://github.com`
export const path = `/admin/organizations`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "admin": z.string().describe("The login of the user who will manage this organization."), "login": z.string().describe("The organization's username."), "profile_name": z.string().describe("The organization's display name.").optional() }).optional() }).shape