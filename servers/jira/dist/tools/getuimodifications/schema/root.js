import { z } from "zod";
export const inputParams = {
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional(),
    "expand": z.string().describe("Use expand to include additional information in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `data` Returns UI modification data.\n *  `contexts` Returns UI modification contexts.").optional()
};
