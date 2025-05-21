import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username of the collaborator"),
  "email": z.string().describe("Email of the collaborator"),
  "firstName": z.string().describe("First name of the collaborator"),
  "lastName": z.string().describe("Last name of the collaborator"),
  "birthDate": z.string().describe("Birth date of the collaborator"),
  "workJoinedDate": z.string().describe("Work joined date of the collaborator"),
  "positionId": z.number().describe("Position ID"),
  "groupId": z.number().describe("Group ID"),
  "departmentId": z.number().describe("Department ID"),
  "clientId": z.string().describe("Client ID")
}