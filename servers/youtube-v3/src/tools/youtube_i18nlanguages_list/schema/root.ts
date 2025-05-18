import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet."),
  "hl": z.string().optional()
}