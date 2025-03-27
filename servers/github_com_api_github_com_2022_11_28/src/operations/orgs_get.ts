import { z } from "zod"

export const toolName = `orgs_get`
export const toolDescription = `Get an organization`
export const baseUrl = `https://github.com`
export const path = `/orgs/{org}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "org": z.string().describe("The organization name. The name is not case sensitive.") }).optional() }).shape