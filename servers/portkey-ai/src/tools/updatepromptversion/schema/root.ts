import { z } from "zod"

export const inputParamsSchema = {
  "promptId": z.string(),
  "versionId": z.string().uuid(),
  "label_id": z.string().uuid().optional()
}