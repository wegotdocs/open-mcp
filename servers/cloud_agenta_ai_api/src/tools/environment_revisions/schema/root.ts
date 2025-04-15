import { z } from "zod"

export const inputParams = {
  "app_id": z.string(),
  "environment_name": z.any()
}