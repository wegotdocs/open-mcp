import { z } from "zod"

export const inputParamsSchema = {
  "codespace_name": z.string().describe("The name of the codespace.")
}