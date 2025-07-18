import { z } from "zod"

export const inputParamsSchema = {
  "webId": z.string().uuid().describe("Id of web")
}