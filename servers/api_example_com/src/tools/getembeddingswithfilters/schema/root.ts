import { z } from "zod"

export const inputParamsSchema = {
  "documentId": z.number().int().describe("Document unique id").optional(),
  "useCaseId": z.string().uuid().describe("Use case unique Id").optional()
}