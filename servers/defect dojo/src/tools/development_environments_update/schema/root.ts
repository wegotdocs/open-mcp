import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this development_ environment."),
  "name": z.string().min(1).max(200)
}