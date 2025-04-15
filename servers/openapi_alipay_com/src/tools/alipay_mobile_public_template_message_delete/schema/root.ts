import { z } from "zod"

export const inputParams = {
  "template_id": z.string().describe("模板id").optional()
}