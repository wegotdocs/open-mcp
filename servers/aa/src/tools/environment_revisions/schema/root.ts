import { z } from "zod"

export const inputParamsSchema = {
  "app_id": z.string(),
  "environment_name": z.any()
}