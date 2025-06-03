import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "stakeholderId": z.string()
}