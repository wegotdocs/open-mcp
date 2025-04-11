import { z } from "zod"

export const inputParams = {
  "linodes": z.array(z.number().int()).describe("The `linodeId` values for individual compute instances included in the placement group.").optional()
}