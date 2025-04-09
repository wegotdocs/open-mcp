import { z } from "zod";
export const inputParams = {
    "accountId": z.string().describe("The account ID of a user.").optional(),
    "globalPermissions": z.array(z.string()).describe("Global permissions to look up.").optional(),
    "projectPermissions": z.array(z.object({ "issues": z.array(z.number().int()).describe("List of issue IDs.").optional(), "permissions": z.array(z.string()).describe("List of project permissions."), "projects": z.array(z.number().int()).describe("List of project IDs.").optional() }).strict().describe("Details of project permissions and associated issues and projects to look up.")).describe("Project permissions with associated projects and issues to look up.").optional()
};
