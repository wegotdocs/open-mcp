import { z } from "zod"

export const toolName = `getaccount`
export const toolDescription = `Get an account`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/accounts/{name}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "name": z.string().describe("The username or handle of the account") }).optional() }).shape