import { z } from "zod"

export const inputParams = {
  "request_id": z.string().uuid(),
  "tx_hash": z.string(),
  "authorization": z.string().optional()
}