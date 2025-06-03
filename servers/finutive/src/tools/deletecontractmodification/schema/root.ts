import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string(),
  "contract_modification_id": z.string()
}