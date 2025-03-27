import { z } from "zod"

export const toolName = `quittungprepare`
export const toolDescription = `Allows to collect data with several requests (or a single) for a receipt.`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/quittung/prepare`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "account": z.string().optional() }).optional() }).shape