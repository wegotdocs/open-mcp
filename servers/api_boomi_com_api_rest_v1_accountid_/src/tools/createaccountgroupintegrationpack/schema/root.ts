import { z } from "zod"

export const inputParamsSchema = {
  "accountGroupId": z.string().describe("The ID of the account group.").optional(),
  "id": z.string().describe("A unique ID assigned by the system to the integration pack. This field populates only if you add the integration pack to an account group.").optional(),
  "installationType": z.enum(["SINGLE","MULTI"]).describe("The type of integration pack. Possible values:\n \n - SINGLE — single attachment\n - MULTI — multiple attachment").optional(),
  "integrationPackId": z.string().describe("A unique ID assigned by the system to the integration pack.").optional(),
  "integrationPackName": z.string().describe("The name of the integration pack.").optional()
}