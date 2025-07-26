import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this network_ locations."),
  "location": z.string().min(1).max(500).describe("Location of network testing: Examples: VPN, Internet or Internal.").optional()
}