import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "folder_id": z.string(),
  "new_name": z.string()
}