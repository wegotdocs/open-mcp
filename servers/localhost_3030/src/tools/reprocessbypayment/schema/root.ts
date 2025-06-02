import { z } from "zod"

export const inputParamsSchema = {
  "payments": z.array(z.string().uuid()).min(1).describe("Lista de IDs de pagamentos para reprocessar"),
  "reprocessing_description": z.string().max(150).describe("Descrição do motivo do reprocessamento").optional()
}