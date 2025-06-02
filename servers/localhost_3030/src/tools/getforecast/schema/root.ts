import { z } from "zod"

export const inputParamsSchema = {
  "payment_id": z.string().uuid().describe("ID do pagamento para previsão (opcional)").optional()
}