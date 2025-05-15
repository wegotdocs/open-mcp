import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The Environment Role object you are attempting to delete.")
}