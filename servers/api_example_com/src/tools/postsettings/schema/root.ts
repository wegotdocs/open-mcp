import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().min(1).describe("Name of setting"),
  "value": z.any().describe("Value of setting"),
  "visible": z.boolean().describe("If is visible to user. By default is true.").optional(),
  "useCaseId": z.string().uuid().nullable().describe("Id of UseCase").optional()
}