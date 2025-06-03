import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "productId": z.string(),
  "data": z.array(z.object({ "operationDate": z.string().date(), "valueDate": z.string().date(), "concept": z.string(), "amount": z.number() }).describe("Transactions request data schema"))
}