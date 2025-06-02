import { z } from "zod"

export const inputParamsSchema = {
  "reprocessing_date": z.string().date().describe("Data para reprocessamento (formato YYYY-MM-DD)"),
  "application_id": z.string().describe("ID da aplicação no formato ULID"),
  "reprocessing_description": z.string().describe("Descrição do motivo do reprocessamento").optional()
}