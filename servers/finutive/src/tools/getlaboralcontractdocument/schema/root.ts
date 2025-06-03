import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "contract_id": z.string()
}