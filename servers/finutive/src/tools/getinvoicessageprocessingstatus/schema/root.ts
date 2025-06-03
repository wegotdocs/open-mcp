import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "idProcesoIME": z.string()
}