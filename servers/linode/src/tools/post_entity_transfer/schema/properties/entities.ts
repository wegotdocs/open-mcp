import { z } from "zod"

export const inputParams = {
  "linodes": z.array(z.number().int()).describe("An array containing the IDs of each of the Linodes included in this transfer.").optional()
}