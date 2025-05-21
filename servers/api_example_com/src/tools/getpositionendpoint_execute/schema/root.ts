import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Position ID")
}