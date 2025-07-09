import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("ID of the absence period to delete")
}