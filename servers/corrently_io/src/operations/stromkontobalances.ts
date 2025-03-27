import { z } from "zod"

export const toolName = `stromkontobalances`
export const toolDescription = `Balances`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/stromkonto/balances`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Ethereum style address referencing a valid account (AKA Stromkonto).").optional() }).optional() }).shape