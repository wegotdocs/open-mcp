import { z } from "zod"

export const inputParams = {
  "schemeId": z.string().describe("The ID of the issue security scheme.")
}