import { z } from "zod"

export const inputParamsSchema = {
  "formId": z.string(),
  "datasourceId": z.string(),
  "formType": z.string()
}