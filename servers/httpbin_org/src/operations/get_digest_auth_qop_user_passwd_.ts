import { z } from "zod"

export const toolName = `get_digest_auth_qop_user_passwd_`
export const toolDescription = `Prompts the user for authorization using Digest Auth.`
export const baseUrl = `https://httpbin.org`
export const path = `/digest-auth/{qop}/{user}/{passwd}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "qop": z.string().describe("auth or auth-int"), "user": z.string(), "passwd": z.string() }).optional() }).shape