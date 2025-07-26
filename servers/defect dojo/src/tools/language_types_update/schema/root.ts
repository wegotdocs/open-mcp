import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this language_ type."),
  "language": z.string().min(1).max(100),
  "color": z.string().max(7).nullable().optional()
}