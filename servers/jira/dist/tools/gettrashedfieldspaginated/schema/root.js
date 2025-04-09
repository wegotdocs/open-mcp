import { z } from "zod";
export const inputParams = {
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.string()).optional(),
    "query": z.string().describe("String used to perform a case-insensitive partial match with field names or descriptions.").optional(),
    "expand": z.enum(["name", "-name", "+name", "trashDate", "-trashDate", "+trashDate", "plannedDeletionDate", "-plannedDeletionDate", "+plannedDeletionDate", "projectsCount", "-projectsCount", "+projectsCount"]).optional(),
    "orderBy": z.string().describe("[Order](#ordering) the results by a field:\n\n *  `name` sorts by the field name\n *  `trashDate` sorts by the date the field was moved to the trash\n *  `plannedDeletionDate` sorts by the planned deletion date").optional()
};
