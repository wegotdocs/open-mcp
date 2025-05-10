import { z } from "zod"

export const inputParamsSchema = {
  "organisationId": z.string().uuid().describe("Unique identifier of an Organisation")
}