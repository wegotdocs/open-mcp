import { z } from "zod"

export const inputParams = {
  "client": z.string().describe("Client id")
}