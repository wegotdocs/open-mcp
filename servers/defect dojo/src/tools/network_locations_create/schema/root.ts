import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().min(1).max(500).describe("Location of network testing: Examples: VPN, Internet or Internal.")
}