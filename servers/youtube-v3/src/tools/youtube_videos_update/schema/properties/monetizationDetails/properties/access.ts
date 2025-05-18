import { z } from "zod"

export const inputParamsSchema = {
  "allowed": z.boolean().describe("The value of allowed indicates whether the access to the policy is allowed or denied by default.").optional(),
  "exception": z.array(z.string()).describe("A list of region codes that identify countries where the default policy do not apply.").optional()
}