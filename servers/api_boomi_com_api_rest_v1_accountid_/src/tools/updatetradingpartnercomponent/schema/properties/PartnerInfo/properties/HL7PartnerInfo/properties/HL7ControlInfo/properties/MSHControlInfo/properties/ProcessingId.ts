import { z } from "zod"

export const inputParamsSchema = {
  "processingId": z.enum(["D","P","T"]).optional(),
  "processingMode": z.enum(["A","R","I","T","NOT_PRESENT"]).optional()
}