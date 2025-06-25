import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Page name of the editable page element.").optional()
}