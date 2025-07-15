import { z } from "zod"

export const inputParamsSchema = {
  "for": z.string().describe("Seleciona os campos personalizados da entidade fornecida. Os valores permitidos são: deal, contact e organization").optional()
}