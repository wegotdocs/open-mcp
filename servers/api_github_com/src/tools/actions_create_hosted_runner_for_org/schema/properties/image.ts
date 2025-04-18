import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier of the runner image.").optional(),
  "source": z.enum(["github","partner","custom"]).describe("The source of the runner image.").optional()
}