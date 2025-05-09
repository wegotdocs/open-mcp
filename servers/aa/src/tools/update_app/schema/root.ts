import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string(),
  "app_name": z.string()
}