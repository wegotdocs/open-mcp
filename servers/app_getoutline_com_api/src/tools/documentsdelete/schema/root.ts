import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for the document. Either the UUID or the urlId is acceptable."),
  "permanent": z.boolean().describe("If set to true the document will be destroyed with no way to recover rather than moved to the trash.").optional()
}