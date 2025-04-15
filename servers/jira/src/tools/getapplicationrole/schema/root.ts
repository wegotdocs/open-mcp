import { z } from "zod"

export const inputParamsSchema = {
  "key": z.string().describe("The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.")
}