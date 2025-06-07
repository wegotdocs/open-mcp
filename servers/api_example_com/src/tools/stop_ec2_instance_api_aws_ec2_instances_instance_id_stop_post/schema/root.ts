import { z } from "zod"

export const inputParamsSchema = {
  "instance_id": z.string(),
  "force": z.boolean().describe("Force stop the instance").optional()
}