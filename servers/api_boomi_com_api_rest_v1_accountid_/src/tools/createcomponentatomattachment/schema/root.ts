import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().optional(),
  "componentId": z.string().optional(),
  "componentType": z.string().optional(),
  "id": z.string().optional()
}