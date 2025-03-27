import { z } from "zod"

export const toolName = `quittungcomit`
export const toolDescription = `Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/quittung/commit`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "account": z.string().optional() }).optional() }).shape