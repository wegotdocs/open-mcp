import { z } from "zod"

export const inputParams = {
  "login_datetime": z.string().datetime({ offset: true }).describe("__Read-only__ The date and time of this user's most recent login attempt.").readonly().optional(),
  "status": z.enum(["successful","failed"]).describe("__Read-only__ The result of this user's most recent login attempt.").readonly().optional()
}