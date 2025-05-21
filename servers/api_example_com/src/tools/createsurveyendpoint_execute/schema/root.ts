import { z } from "zod"

export const inputParamsSchema = {
  "title": z.string().describe("Title of the survey"),
  "description": z.string().describe("Description of the survey"),
  "type": z.enum(["ONE_TIME","RECURRING","CONDITIONAL"]).describe("Type of the survey"),
  "condition": z.literal("WORK_JOINED_DATE").describe("Condition type of the survey").optional(),
  "conditionData": z.string().optional(),
  "recurringType": z.enum(["MONTHLY","QUARTERLY","HALF_YEARLY","YEARLY"]).describe("Recurring type of the survey").optional(),
  "scheduledDate": z.string().datetime({ offset: true }).describe("Scheduled date of the survey").optional(),
  "surveyTarget": z.string(),
  "clientId": z.string().describe("Client ID"),
  "groupId": z.number().describe("Group ID"),
  "isActive": z.boolean().describe("Is the survey active"),
  "isDraft": z.boolean().describe("Is the survey a draft"),
  "createdByUserId": z.string().describe("Created by User ID"),
  "questions": z.array(z.string()).describe("Questions of the survey")
}