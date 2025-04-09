import { z } from "zod";
export const inputParams = {
    "defaultUnit": z.enum(["minute", "hour", "day", "week"]).describe("The default unit of time applied to logged time."),
    "timeFormat": z.enum(["pretty", "days", "hours"]).describe("The format that will appear on an issue's *Time Spent* field."),
    "workingDaysPerWeek": z.number().describe("The number of days in a working week."),
    "workingHoursPerDay": z.number().describe("The number of hours in a working day.")
};
