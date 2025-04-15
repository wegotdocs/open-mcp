import { z } from "zod"

export const inputParams = {
  "batch_size": z.number().int(),
  "max_retries": z.number().int(),
  "retry_delay": z.number().int(),
  "delay_between_batches": z.number().int()
}