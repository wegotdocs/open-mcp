import { z } from "zod"

export const inputParamsSchema = {
  "webId": z.string().uuid().describe("Web Id as Guid")
}