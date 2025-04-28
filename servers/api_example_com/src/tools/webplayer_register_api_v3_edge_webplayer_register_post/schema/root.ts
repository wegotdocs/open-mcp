import { z } from "zod"

export const inputParamsSchema = {
  "org_access_code": z.string(),
  "dev_access_code": z.string()
}