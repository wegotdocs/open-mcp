import { z } from "zod";
export const inputParams = {
    "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Expanded options include:\n\n *  `description` Returns the project description.\n *  `projectKeys` Returns all project keys associated with a project.\n *  `lead` Returns information about the project lead.\n *  `issueTypes` Returns all issue types associated with the project.\n *  `url` Returns the URL associated with the project.\n *  `permissions` Returns the permissions associated with the project.\n *  `insight` EXPERIMENTAL. Returns the insight details of total issue count and last issue update time for the project.\n *  `*` Returns the project with all available expand options.").optional(),
    "properties": z.array(z.record(z.never())).describe("EXPERIMENTAL. A list of project properties to return for the project. This parameter accepts a comma-separated list. Invalid property names are ignored.").optional()
};
