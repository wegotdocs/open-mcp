import { z } from "zod"

export const inputParamsSchema = {
  "users": z.array(z.string()).describe("The list of user `login`s with dismissal access").optional(),
  "teams": z.array(z.string()).describe("The list of team `slug`s with dismissal access").optional(),
  "apps": z.array(z.string()).describe("The list of app `slug`s with dismissal access").optional()
}