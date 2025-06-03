import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string(),
  "id": z.string(),
  "ids": z.array(z.string()).describe("List of comma-separated IDs")
}