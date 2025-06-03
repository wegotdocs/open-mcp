import { z } from "zod"

export const inputParamsSchema = {
  "organization_id": z.number().int()
}