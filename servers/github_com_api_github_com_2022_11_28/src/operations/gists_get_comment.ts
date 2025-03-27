import { z } from "zod"

export const toolName = `gists_get_comment`
export const toolDescription = `Get a gist comment`
export const baseUrl = `https://github.com`
export const path = `/gists/{gist_id}/comments/{comment_id}`
export const method = `get`
export const security = []

export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist."), "comment_id": z.number().int().describe("The unique identifier of the comment.") }).optional() }).shape