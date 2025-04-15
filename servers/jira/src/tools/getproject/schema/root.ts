import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "expand": z.string().describe("Use [expand](#expansion) to include additional information in the response. This parameter accepts a comma-separated list. Note that the project description, issue types, and project lead are included in all responses by default. Expand options include:\n\n *  `description` The project description.\n *  `issueTypes` The issue types associated with the project.\n *  `lead` The project lead.\n *  `projectKeys` All project keys associated with the project.\n *  `issueTypeHierarchy` The project issue type hierarchy.").optional(),
  "properties": z.array(z.string()).describe("A list of project properties to return for the project. This parameter accepts a comma-separated list.").optional()
}