import { z } from "zod"

export const inputParamsSchema = {
  "idsList": z.array(z.string()).describe("List of business IDs to retrieve")
}