import { z } from "zod";
export const inputParams = {
    "planId": z.number().int().describe("The ID of the plan."),
    "capacity": z.number().describe("The capacity for the Atlassian team.").optional(),
    "id": z.string().describe("The Atlassian team ID."),
    "issueSourceId": z.number().int().describe("The ID of the issue source for the Atlassian team.").optional(),
    "planningStyle": z.enum(["Scrum", "Kanban"]).describe("The planning style for the Atlassian team. This must be \"Scrum\" or \"Kanban\"."),
    "sprintLength": z.number().int().describe("The sprint length for the Atlassian team.").optional()
};
