import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team."),
  "position_levels": z.array(z.number().int())
}