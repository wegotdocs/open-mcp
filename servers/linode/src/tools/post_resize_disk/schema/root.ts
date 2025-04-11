import { z } from "zod"

export const inputParams = {
  "size": z.number().int().gte(1).describe("The desired size, in MB, of the disk.")
}