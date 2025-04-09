import { z } from "zod"

export const inputParams = {
  "schemeId": z.number().int().describe("The priority scheme ID.")
}