import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The runtime (container) id for the applicable runtime (accepts only Runtime cloud cluster and regular runtime cluster types, no basic runtimes or cloud attachments).")
}