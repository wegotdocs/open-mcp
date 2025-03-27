import { z } from "zod"

export const toolName = `gists_update_comment`
export const toolDescription = `Update a gist comment`
export const baseUrl = `https://github.com`
export const path = `/gists/{gist_id}/comments/{comment_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist."), "comment_id": z.number().int().describe("The unique identifier of the comment.") }).optional(), "body": z.object({ "body": z.string().max(65535).describe("The comment text.") }).optional() }).shape