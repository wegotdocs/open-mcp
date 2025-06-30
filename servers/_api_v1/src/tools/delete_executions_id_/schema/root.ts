import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("The ID of the execution.")
}