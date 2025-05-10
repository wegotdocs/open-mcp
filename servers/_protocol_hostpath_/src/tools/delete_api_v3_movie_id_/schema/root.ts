import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "deleteFiles": z.boolean().optional(),
  "addImportExclusion": z.boolean().optional()
}