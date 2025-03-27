import { z } from "zod"

export const toolName = `markdown_render`
export const toolDescription = `Render a Markdown document`
export const baseUrl = `https://api.github.com`
export const path = `/markdown`
export const method = `post`
export const security = []

export const inputParams = z.object({ "body": z.object({ "context": z.string().describe("The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.").optional(), "mode": z.enum(["markdown","gfm"]).describe("The rendering mode."), "text": z.string().describe("The Markdown text to render in HTML.") }).optional() }).shape