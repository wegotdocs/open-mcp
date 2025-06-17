import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("Email"),
  "password": z.string().describe("Password"),
  "expiredTime": z.string().datetime({ offset: true }).describe("Session expired time. Defaults to one hour").optional()
}