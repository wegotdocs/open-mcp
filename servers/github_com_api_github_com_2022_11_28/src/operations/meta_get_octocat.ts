import { z } from "zod"

export const toolName = `meta_get_octocat`
export const toolDescription = `Get Octocat`
export const baseUrl = `https://github.com`
export const path = `/octocat`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "s": z.string().describe("The words to show in Octocat's speech bubble").optional() }).optional() }).shape