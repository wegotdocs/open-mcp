import { z } from "zod"

export const inputParamsSchema = {
  "formId": z.string(),
  "tableId": z.string(),
  "formType": z.string()
}