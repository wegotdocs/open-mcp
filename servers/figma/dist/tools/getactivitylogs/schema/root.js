import { z } from "zod";
export const inputParams = {
    "events": z.string().describe("Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default.").optional(),
    "start_time": z.number().describe("Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified.").optional(),
    "end_time": z.number().describe("Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified.").optional(),
    "limit": z.number().describe("Maximum number of events to return. This param defaults to 1000 if unspecified.").optional(),
    "order": z.enum(["asc", "desc"]).describe("Event order by timestamp. This param can be either \"asc\" (default) or \"desc\".").optional()
};
