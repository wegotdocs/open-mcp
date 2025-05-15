import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.enum(["AWS","AZURE"]).optional()
}