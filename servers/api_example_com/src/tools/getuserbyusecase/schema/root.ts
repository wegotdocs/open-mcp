import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Id in Guid format for identify useCase")
}