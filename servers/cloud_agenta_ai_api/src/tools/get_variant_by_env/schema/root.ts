import { z } from "zod"

export const inputParams = {
  "app_id": z.string(),
  "environment": z.string()
}