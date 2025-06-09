import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "draftId": z.string(),
  "ntx-draft-name": z.string().optional()
}