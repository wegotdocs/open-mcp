import { z } from "zod"

export const inputParamsSchema = {
  "domain_name": z.string().describe("The name of the domain itself.")
}