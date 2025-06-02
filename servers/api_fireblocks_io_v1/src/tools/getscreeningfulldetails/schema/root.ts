import { z } from "zod"

export const inputParamsSchema = {
  "txId": z.string().describe("Fireblocks transaction ID of the screened transaction")
}