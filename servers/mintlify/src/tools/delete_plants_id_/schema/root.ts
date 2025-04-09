import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("ID of plant to delete")
}