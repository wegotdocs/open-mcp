import { z } from "zod"

export const inputParamsSchema = {
  "transferContainerReleaseMethod": z.enum(["INTERFACE","AUTOMATED"]).optional(),
  "autoReleaseDelayTimeMin": z.number().int().optional()
}