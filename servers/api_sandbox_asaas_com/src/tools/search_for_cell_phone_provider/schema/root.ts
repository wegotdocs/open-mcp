import { z } from "zod"

export const inputParamsSchema = {
  "phoneNumber": z.string().describe("Cell phone number that will be consulted.")
}