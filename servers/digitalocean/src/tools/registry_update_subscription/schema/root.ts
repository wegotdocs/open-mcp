import { z } from "zod"

export const inputParams = {
  "tier_slug": z.enum(["starter","basic","professional"]).describe("The slug of the subscription tier to sign up for.").optional()
}