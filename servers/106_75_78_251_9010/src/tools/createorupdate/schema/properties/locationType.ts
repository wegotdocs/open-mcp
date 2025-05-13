import { z } from "zod"

export const inputParamsSchema = {
  "notifyWorkStation": z.boolean().optional(),
  "notifyTransferContainer": z.boolean().optional(),
  "finishContainerTask": z.boolean().optional()
}