import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Indicates whether the issuing of invoices through the national portal should be enabled or not.")
}