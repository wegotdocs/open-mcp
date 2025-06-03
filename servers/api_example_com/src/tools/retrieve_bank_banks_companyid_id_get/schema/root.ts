import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "companyId": z.string()
}