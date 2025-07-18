import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("The ID of the use case"),
  "email": z.string().min(1)
}