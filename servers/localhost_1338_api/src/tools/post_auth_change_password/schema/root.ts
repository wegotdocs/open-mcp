import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string(),
  "currentPassword": z.string(),
  "passwordConfirmation": z.string()
}