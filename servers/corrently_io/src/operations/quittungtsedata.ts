import { z } from "zod"

export const toolName = `quittungtsedata`
export const toolDescription = `Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/quittung/tsedata`
export const method = `post`
export const security = []

export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Quittung Identifier  (serialnumber generated during receipt generation process)").optional() }).optional() }).shape