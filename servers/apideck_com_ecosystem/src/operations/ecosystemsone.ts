import { z } from "zod"

export const toolName = `ecosystemsone`
export const toolDescription = `Get ecosystem`
export const baseUrl = `https://api.apideck.com`
export const path = `/ecosystems/{ecosystem_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "ecosystem_id": z.string() }).optional() }).shape