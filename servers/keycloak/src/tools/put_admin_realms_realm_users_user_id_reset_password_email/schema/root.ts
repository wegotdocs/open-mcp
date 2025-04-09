import { z } from "zod"

export const inputParams = {
  "client_id": z.string().describe("client id").optional(),
  "redirect_uri": z.string().describe("redirect uri").optional()
}