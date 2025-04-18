import { z } from "zod"

export const inputParamsSchema = {
  "text": z.string().describe("The Markdown text to render in HTML."),
  "mode": z.enum(["markdown","gfm"]).describe("The rendering mode.").optional(),
  "context": z.string().describe("The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.").optional()
}