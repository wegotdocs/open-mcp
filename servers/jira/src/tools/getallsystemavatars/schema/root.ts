import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["issuetype","project","user","priority"]).describe("The avatar type.")
}