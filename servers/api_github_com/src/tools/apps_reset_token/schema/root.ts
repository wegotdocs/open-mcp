import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The access_token of the OAuth or GitHub application.")
}