import { z } from "zod"

export const inputParamsSchema = {
  "contract_id": z.string().uuid()
}