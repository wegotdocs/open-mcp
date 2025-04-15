import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["droplet","kubernetes"]).describe("Restrict results to a certain type of 1-Click.").optional()
}