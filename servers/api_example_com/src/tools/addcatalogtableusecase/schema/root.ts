import { z } from "zod"

export const inputParamsSchema = {
  "catalogId": z.string().uuid().describe("Id of catalog"),
  "useCaseId": z.string().uuid().describe("Id of UseCase"),
  "catalogTableUseCaseIds": z.array(z.string().uuid()).nullable().optional(),
  "active": z.boolean().optional()
}