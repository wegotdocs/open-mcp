import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Id of UseCase")
}