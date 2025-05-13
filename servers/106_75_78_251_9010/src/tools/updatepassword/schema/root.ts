import { z } from "zod"

export const inputParamsSchema = {
  "oldPassword": z.string(),
  "newPassword": z.string().min(6).max(2147483647),
  "confirmNewPassword": z.string()
}