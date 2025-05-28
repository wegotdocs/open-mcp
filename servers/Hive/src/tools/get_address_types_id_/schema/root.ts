import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("(Required) A unique integer value identifying this address type."),
  "Accept": z.string().optional()
}