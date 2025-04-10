import { z } from "zod"

export const inputParams = {
  "podcast": z.string().describe("The ID of the podcast*")
}