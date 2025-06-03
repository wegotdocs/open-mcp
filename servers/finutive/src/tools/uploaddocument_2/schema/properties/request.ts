import { z } from "zod"

export const inputParamsSchema = {
  "folder_id": z.string().optional(),
  "temp": z.boolean().optional(),
  "type": z.enum(["CLIENT","PROVIDER"]).optional()
}