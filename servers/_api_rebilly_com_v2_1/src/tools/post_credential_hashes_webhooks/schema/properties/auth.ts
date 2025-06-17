import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["none","basic","digest","oauth1"]).describe("The authorization type")
}