import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "selected_usernames": z.array(z.string()).max(100).describe("The usernames of the organization members whose codespaces be billed to the organization.")
}