import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("Username of the admin user"),
  "email": z.string().describe("Email of the admin user"),
  "firstName": z.string().describe("First name of the admin user"),
  "lastName": z.string().describe("Last name of the admin user"),
  "birthDate": z.string().describe("Birth date of the admin user").optional(),
  "adminType": z.enum(["REPORT","LOCAL","GLOBAL","MONITOR"]).describe("Admin type"),
  "groupId": z.number().describe("Group ID"),
  "departmentId": z.number().describe("Department ID"),
  "clientId": z.string().describe("Client ID")
}