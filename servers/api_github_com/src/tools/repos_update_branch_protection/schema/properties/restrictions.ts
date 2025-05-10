import { z } from "zod"

export const inputParamsSchema = {
  "users": z.array(z.string()).describe("The list of user `login`s with push access"),
  "teams": z.array(z.string()).describe("The list of team `slug`s with push access"),
  "apps": z.array(z.string()).describe("The list of app `slug`s with push access").optional()
}