import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.string().describe("The ID of the issue security scheme.")
}