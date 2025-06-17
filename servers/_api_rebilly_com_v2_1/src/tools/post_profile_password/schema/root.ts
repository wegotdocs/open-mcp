import { z } from "zod"

export const inputParamsSchema = {
  "currentPassword": z.string().describe("Current user's password - used when requesting password change").optional(),
  "newPassword": z.string().describe("New user's password - used when requesting password change").optional()
}