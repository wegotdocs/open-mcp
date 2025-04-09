import { z } from "zod"

export const inputParams = {
  "type": z.enum(["AUTOASSIGN","DEDICATED_IP"]).optional()
}