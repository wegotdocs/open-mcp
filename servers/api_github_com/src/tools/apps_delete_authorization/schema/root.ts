import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("The client ID of the GitHub app."),
  "access_token": z.string().describe("The OAuth access token used to authenticate to the GitHub API.")
}