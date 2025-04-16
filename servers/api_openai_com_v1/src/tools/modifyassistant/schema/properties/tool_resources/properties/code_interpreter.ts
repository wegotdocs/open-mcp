import { z } from "zod"

export const inputParamsSchema = {
  "file_ids": z.array(z.string()).max(20).describe("Overrides the list of [file](/docs/api-reference/files) IDs made available to the `code_interpreter` tool. There can be a maximum of 20 files associated with the tool.\n").optional()
}