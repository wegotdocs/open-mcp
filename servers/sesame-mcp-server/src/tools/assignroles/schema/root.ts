import { z } from "zod"

export const inputParamsSchema = {
  "roleId": z.string().uuid().describe("Role Id"),
  "employeeId": z.string().uuid().describe("The id of the employee to assign the role"),
  "entityAffectedId": z.string().uuid().describe("The id of the entity to manage")
}