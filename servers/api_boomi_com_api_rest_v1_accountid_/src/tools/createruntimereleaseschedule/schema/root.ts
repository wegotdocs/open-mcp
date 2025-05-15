import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("The ID of the container for which you want to set a schedule."),
  "dayOfWeek": z.string().describe("The day of the week that you want to receive updates on the Runtime, Runtime cluster, or Runtime cloud. <br /> 1. Required if scheduleType is set to FIRST or LAST"),
  "hourOfDay": z.number().int().describe("The hour of the day that you want to receive updates on the Runtime, Runtime cluster, or Runtime cloud. 1. Must be between 0-23<br /> 2. Required if scheduleType is set to FIRST or LAST").optional(),
  "scheduleType": z.enum(["NEVER","FIRST","LAST"]).describe("Required. Determines whether you want to receive the updates when available, and if so, whether you receive them in the first or second \\(last\\) week they are available prior to the .-   FIRST - Update within the first week that updates are available<br /> 1. LAST - Update within the second week that updates are available<br />2. NEVER - Update with the"),
  "timeZone": z.string().describe("The time zone of your set schedule. <br />1. Must be a [valid time zone](/api/platformapi#section/Introduction/Valid-time-zones) <br />2. Required if scheduleType is set to FIRST or LAST")
}