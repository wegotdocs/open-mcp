import { z } from "zod"

export const inputParamsSchema = {
  "fromGatewayAccountId": z.string(),
  "toGatewayAccountId": z.string(),
  "paymentCardIds": z.array(z.string()).min(1)
}