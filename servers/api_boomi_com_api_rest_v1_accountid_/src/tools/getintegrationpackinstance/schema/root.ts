import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The integration pack instance ID.")
}