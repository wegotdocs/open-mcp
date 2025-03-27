import { z } from "zod"

export const toolName = `stromkontologin`
export const toolDescription = `Login (via Mail)`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/stromkonto/login`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "email": z.string().optional() }).optional() }).shape