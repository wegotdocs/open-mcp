import { z } from "zod"

export const toolName = `gists_update`
export const toolDescription = `Update a gist`
export const baseUrl = `https://api.github.com`
export const path = `/gists/{gist_id}`
export const method = `patch`
export const security = []

export const inputParams = z.object({ "path": z.object({ "gist_id": z.string().describe("The unique identifier of the gist.") }).optional(), "body": z.object({ "description": z.string().describe("The description of the gist.").optional(), "files": z.record(z.object({ "content": z.string().describe("The new content of the file.").optional(), "filename": z.string().nullable().describe("The new filename for the file.").optional() }).nullable()).describe("The gist files to be updated, renamed, or deleted. Each `key` must match the current filename\n(including extension) of the targeted gist file. For example: `hello.py`.\n\nTo delete a file, set the whole file to null. For example: `hello.py : null`.").optional() }).nullable().optional() }).shape