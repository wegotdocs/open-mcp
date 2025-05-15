import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().optional(),
  "componentType": z.string().optional(),
  "id": z.string().optional(),
  "processId": z.string().optional()
}