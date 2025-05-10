import { z } from "zod"

export const inputParamsSchema = {
  "users": z.array(z.string()).describe("The list of user `login`s allowed to bypass pull request requirements.").optional(),
  "teams": z.array(z.string()).describe("The list of team `slug`s allowed to bypass pull request requirements.").optional(),
  "apps": z.array(z.string()).describe("The list of app `slug`s allowed to bypass pull request requirements.").optional()
}