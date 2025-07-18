import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().min(1).describe("Name-key of setting"),
  "useCaseId": z.string().uuid().nullable().describe("Id of UseCase.").optional()
}