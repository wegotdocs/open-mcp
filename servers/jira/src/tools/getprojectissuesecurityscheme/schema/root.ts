import { z } from "zod"

export const inputParamsSchema = {
  "projectKeyOrId": z.string().describe("The project ID or project key (case sensitive).")
}