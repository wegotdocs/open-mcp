import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive).")
}