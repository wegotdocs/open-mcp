import { z } from "zod"

export const inputParamsSchema = {
  "model": z.string().describe("Filter hardware configurations by model compatibility. When provided,  the response includes availability status for each compatible configuration.\n").optional()
}