import { z } from "zod"

export const inputParamsSchema = {
  "cosignerId": z.string().uuid().describe("The unique identifier of the cosigner")
}