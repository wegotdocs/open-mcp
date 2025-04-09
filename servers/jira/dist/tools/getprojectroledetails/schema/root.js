import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "currentMember": z.boolean().describe("Whether the roles should be filtered to include only those the user is assigned to.").optional(),
    "excludeConnectAddons": z.boolean().optional()
};
