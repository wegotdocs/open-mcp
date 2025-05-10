import { z } from "zod"

export const inputParams = {
  "nativeCompanyId": z.string(),
  "code": z.string().optional()
}