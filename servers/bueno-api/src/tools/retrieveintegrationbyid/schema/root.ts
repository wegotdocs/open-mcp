import { z } from "zod"

export const inputParamsSchema = {
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration")
}