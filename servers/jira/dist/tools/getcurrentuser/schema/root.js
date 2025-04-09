import { z } from "zod";
export const inputParams = {
    "expand": z.string().describe("Use [expand](#expansion) to include additional information about user in the response. This parameter accepts a comma-separated list. Expand options include:\n\n *  `groups` Returns all groups, including nested groups, the user belongs to.\n *  `applicationRoles` Returns the application roles the user is assigned to.").optional()
};
