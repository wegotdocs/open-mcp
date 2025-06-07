import { z } from "zod"

export const inputParamsSchema = {
  "architecture": z.string().describe("CPU architecture (x86_64 or arm64)").optional()
}