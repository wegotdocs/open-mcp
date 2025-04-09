import { z } from "zod"

export const inputParams = {
  "client_id": z.string().describe("Client id").optional(),
  "lifespan": z.number().int().describe("Number of seconds after which the generated token expires").optional(),
  "redirect_uri": z.string().describe("Redirect uri").optional()
}