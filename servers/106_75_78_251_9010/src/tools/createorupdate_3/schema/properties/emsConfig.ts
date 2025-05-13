import { z } from "zod"

export const inputParamsSchema = {
  "allowBatchCreateContainerTasks": z.boolean().optional()
}