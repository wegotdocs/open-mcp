import { z } from "zod"

export const toolName = `get_digest_auth_qop_user_passwd_algorithm_`
export const toolDescription = `Prompts the user for authorization using Digest Auth + Algorithm.`
export const baseUrl = `https://httpbin.org`
export const path = `/digest-auth/{qop}/{user}/{passwd}/{algorithm}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "qop": z.string().describe("auth or auth-int"), "user": z.string(), "passwd": z.string(), "algorithm": z.string().describe("MD5, SHA-256, SHA-512") }).optional() }).shape