import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("(Required) A unique integer value identifying this admin service desk hour."),
  "Accept": z.string().optional()
}