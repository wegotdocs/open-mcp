import { z } from "zod"

export const inputParamsSchema = {
  "namespace_id": z.string().describe("The ID of the namespace to be managed.")
}