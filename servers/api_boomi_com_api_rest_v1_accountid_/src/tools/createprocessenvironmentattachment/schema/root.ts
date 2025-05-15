import { z } from "zod"

export const inputParamsSchema = {
  "componentType": z.string().optional(),
  "environmentId": z.string().optional(),
  "id": z.string().optional(),
  "processId": z.string().optional()
}