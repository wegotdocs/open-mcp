import { z } from "zod"

export const inputParamsSchema = {
  "status_id": z.number().int().describe("The status's id")
}