import { z } from "zod"

export const inputParamsSchema = {
  "career": z.array(z.string()).describe("职业，可以多次出现。多值之间为 `且` 关系。").optional()
}