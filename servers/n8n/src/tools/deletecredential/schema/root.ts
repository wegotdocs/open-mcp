import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The credential ID that needs to be deleted")
}