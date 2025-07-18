import { z } from "zod"

export const inputParamsSchema = {
  "userADId": z.string().uuid().describe("The Active Directory (AD) identifier for the user.").optional(),
  "userName": z.string().nullable().describe("The name of the user.").optional(),
  "rolId": z.string().uuid().describe("The unique identifier for the role.").optional(),
  "useCaseId": z.string().uuid().describe("The unique identifier for the use case.").optional()
}