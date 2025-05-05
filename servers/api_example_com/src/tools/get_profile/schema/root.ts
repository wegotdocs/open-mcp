import { z } from "zod"

export const inputParamsSchema = {
  "profileId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)")
}