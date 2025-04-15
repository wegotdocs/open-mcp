import { z } from "zod"

export const inputParamsSchema = {
  "host": z.string().describe("The custom Git host if using a custom Git provider, like GitHub Enterprise Server").optional(),
  "provider": z.enum(["github","github-custom-host","gitlab","bitbucket"]).optional()
}