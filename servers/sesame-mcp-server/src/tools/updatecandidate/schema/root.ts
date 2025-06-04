import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Candidate ID"),
  "firstName": z.string().describe("The first name of the candidate"),
  "lastName": z.string().describe("The last name of the candidate"),
  "email": z.string().email(),
  "phone": z.string().describe("The phone number of the candidate"),
  "linkedinURL": z.string().describe("The LinkedIn URL of the candidate").optional(),
  "desiredSalary": z.string().describe("The desired salary of the candidate").optional(),
  "startWorkDate": z.string().describe("The start work date of the candidate").optional(),
  "web": z.string().describe("The web of the candidate").optional(),
  "location": z.string().describe("The location of the candidate").optional(),
  "vacancyId": z.string().uuid().describe("The identifier of the vacancy where the candidate will be added"),
  "statusId": z.string().uuid().describe("The identifier of the status of the candidate").optional()
}