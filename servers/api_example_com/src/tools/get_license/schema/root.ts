import { z } from "zod"

export const inputParamsSchema = {
  "licenseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)")
}