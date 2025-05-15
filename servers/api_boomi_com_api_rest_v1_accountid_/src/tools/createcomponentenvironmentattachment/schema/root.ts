import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string().optional(),
  "componentType": z.string().optional(),
  "environmentId": z.string().optional(),
  "id": z.string().optional()
}