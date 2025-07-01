import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of chargeback for which the dispute will be created.")
}