import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The alias or deployment ID")
}