import { z } from "zod"

export const toolName = `get_basic_auth_user_passwd_`
export const toolDescription = `Prompts the user for authorization using HTTP Basic Auth.`
export const baseUrl = `https://httpbin.org`
export const path = `/basic-auth/{user}/{passwd}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "user": z.string(), "passwd": z.string() }).optional() }).shape