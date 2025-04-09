import { z } from "zod"

export const inputParams = {
  "type": z.enum(["issuetype","project","user","priority"]).describe("The avatar type.")
}