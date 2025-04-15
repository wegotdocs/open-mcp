import { z } from "zod"

export const inputParamsSchema = {
  "permissions": z.array(z.string()).describe("A list of permission keys.")
}