import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("User ID"),
  "username": z.string().describe("Username of the user").optional(),
  "email": z.string().describe("Email of the user").optional(),
  "firstName": z.string().describe("First name of the user").optional(),
  "lastName": z.string().describe("Last name of the user").optional(),
  "birthDate": z.string().describe("Birth date of the user").optional(),
  "workJoinedDate": z.string().describe("Work joined date of the user").optional(),
  "adminType": z.enum(["REPORT","LOCAL","GLOBAL","MONITOR"]).describe("Admin type of the user").optional(),
  "positionId": z.number().describe("Position ID of the user").optional(),
  "groupId": z.number().describe("Group ID of the user").optional(),
  "departmentId": z.number().describe("Department ID of the user").optional()
}