import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "type": z.enum(["VAULT_ACCOUNT","EXCHANGE_ACCOUNT","FIAT_ACCOUNT"])
}