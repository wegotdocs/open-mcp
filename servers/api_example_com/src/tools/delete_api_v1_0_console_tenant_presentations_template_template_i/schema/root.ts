import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "template_id": z.string().describe("template_id")
}