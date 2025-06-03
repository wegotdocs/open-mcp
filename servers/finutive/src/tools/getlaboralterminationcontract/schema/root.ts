import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "termination_contract_id": z.string()
}