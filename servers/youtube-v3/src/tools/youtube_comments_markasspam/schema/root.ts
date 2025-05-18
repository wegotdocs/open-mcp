import { z } from "zod"

export const inputParamsSchema = {
  "id": z.array(z.string()).describe("Flags the comments with the given IDs as spam in the caller's opinion.")
}