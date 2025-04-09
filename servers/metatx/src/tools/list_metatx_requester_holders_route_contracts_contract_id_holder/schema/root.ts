import { z } from "zod"

export const inputParams = {
  "contract_id": z.string().uuid(),
  "extended": z.boolean().optional()
}