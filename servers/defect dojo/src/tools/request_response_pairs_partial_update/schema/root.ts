import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this burp raw request response."),
  "burpRequestBase64": z.string().min(1).optional(),
  "burpResponseBase64": z.string().min(1).optional(),
  "finding": z.number().int().nullable().optional()
}