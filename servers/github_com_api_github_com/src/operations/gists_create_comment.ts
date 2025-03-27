import { z } from "zod"

export const toolName = `gists_create_comment`
export const toolDescription = `Create a gist comment`
export const baseUrl = `https://api.github.com`
export const path = `/gists/{gist_id}/comments`
export const method = `post`
export const security = []

export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist.") }).optional(), "body": z.object({ "body": z.string().max(65535).describe("The comment text.") }).optional() }).shape