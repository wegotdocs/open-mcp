import { z } from "zod"

export const inputParamsSchema = {
  "equipId": z.string().uuid().describe("Unique identifier of the Equipment")
}