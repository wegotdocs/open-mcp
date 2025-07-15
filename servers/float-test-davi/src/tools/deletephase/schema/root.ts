import { z } from "zod"

export const inputParamsSchema = {
  "phase_id": z.number().int().describe("The phase's ID")
}