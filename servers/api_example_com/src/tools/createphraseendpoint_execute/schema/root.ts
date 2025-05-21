import { z } from "zod"

export const inputParamsSchema = {
  "phrase": z.string().describe("The phrase to be scheduled"),
  "scheduleStringDate": z.string().describe("Scheduled date in string format"),
  "clientId": z.string().describe("Client ID"),
  "createdByUserId": z.string().describe("ID of the user who created the phrase"),
  "groupIds": z.array(z.number()).describe("List of group IDs associated with the phrase")
}