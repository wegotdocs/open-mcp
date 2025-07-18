import { z } from "zod"

export const inputParamsSchema = {
  "useCaseId": z.string().uuid().describe("Id if use case, this parameter is optional.").optional(),
  "showAsArray": z.boolean().describe("If true, it displays the result as a list of key-value pairs \r\n            and if false an object with the key as the variable name and its value.").optional()
}