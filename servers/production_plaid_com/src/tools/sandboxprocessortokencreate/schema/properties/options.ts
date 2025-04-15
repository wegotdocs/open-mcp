import { z } from "zod"

export const inputParamsSchema = {
  "override_username": z.string().nullable().describe("Test username to use for the creation of the Sandbox Item. Default value is `user_good`.").optional(),
  "override_password": z.string().nullable().describe("Test password to use for the creation of the Sandbox Item. Default value is `pass_good`.").optional()
}