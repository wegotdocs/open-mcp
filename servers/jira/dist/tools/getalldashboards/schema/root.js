import { z } from "zod";
export const inputParams = {
    "filter": z.enum(["my", "favourite"]).describe("The filter applied to the list of dashboards. Valid values are:\n\n *  `favourite` Returns dashboards the user has marked as favorite.\n *  `my` Returns dashboards owned by the user.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
