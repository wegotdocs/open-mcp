import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "file_id": z.string()
}