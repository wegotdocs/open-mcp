import { z } from "zod"

export const inputParams = {
  "schemeId": z.number().int().describe("The ID of the permission scheme being deleted.")
}