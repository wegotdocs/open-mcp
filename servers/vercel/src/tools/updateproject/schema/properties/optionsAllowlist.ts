import { z } from "zod"

export const inputParamsSchema = {
  "paths": z.array(z.object({ "value": z.string().regex(new RegExp("^/.*")).describe("The regex path that should not be protected by Deployment Protection") }).strict()).min(1).max(5)
}