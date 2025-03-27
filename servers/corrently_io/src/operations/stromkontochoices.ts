import { z } from "zod"

export const toolName = `stromkontochoices`
export const toolDescription = `Selectable Choices for customer`
export const baseUrl = `https://api.corrently.io/v2.0`
export const path = `/stromkonto/choices`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "account": z.string().describe("Ethereum style address referencing a valid account alias (never use Stromkonto directly!).").optional() }).optional() }).shape