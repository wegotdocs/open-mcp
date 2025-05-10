import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("Unique identifiers for the Logs to delete.")
}