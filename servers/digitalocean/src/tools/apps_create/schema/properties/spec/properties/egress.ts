import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["AUTOASSIGN","DEDICATED_IP"]).optional()
}