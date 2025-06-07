import { z } from "zod"

export const inputParamsSchema = {
  "path": z.string().describe("File path relative to repository root")
}