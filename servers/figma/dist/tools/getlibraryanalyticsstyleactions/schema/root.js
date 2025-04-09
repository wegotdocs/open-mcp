import { z } from "zod";
export const inputParams = {
    "file_key": z.string().describe("File key of the library to fetch analytics data for."),
    "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
    "group_by": z.enum(["style", "team"]).describe("A dimension to group returned analytics data by."),
    "start_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.").optional(),
    "end_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.").optional()
};
