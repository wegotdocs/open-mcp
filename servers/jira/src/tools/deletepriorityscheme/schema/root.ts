import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.number().int().describe("The priority scheme ID.")
}