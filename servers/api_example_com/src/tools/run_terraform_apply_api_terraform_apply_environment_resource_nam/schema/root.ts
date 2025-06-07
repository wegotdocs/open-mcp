import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string(),
  "resource_name": z.string()
}