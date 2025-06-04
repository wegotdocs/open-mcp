import { z } from "zod"

export const inputParamsSchema = {
  "employeeCBOType": z.string().regex(new RegExp("^\\d{4}(-\\d{2})?$")).optional()
}