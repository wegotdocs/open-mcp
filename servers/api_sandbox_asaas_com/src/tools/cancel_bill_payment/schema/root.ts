import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the bill payment to be cancelled")
}