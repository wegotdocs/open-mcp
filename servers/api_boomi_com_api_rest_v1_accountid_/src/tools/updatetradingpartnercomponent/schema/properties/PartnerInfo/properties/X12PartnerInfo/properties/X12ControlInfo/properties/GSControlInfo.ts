import { z } from "zod"

export const inputParamsSchema = {
  "applicationcode": z.string().optional(),
  "gsVersion": z.string().optional(),
  "respagencycode": z.enum(["T","X"]).optional()
}