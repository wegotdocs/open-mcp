import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the filter."),
  "accountId": z.string().describe("The user account ID that the filter is shared with. For a request, specify the `accountId` property for the user.").optional(),
  "groupId": z.string().describe("The ID of the group, which uniquely identifies the group across all Atlassian products.For example, *952d12c3-5b5b-4d04-bb32-44d383afc4b2*. Cannot be provided with `groupname`.").optional(),
  "groupname": z.string().describe("The name of the group to share the filter with. Set `type` to `group`. Please note that the name of a group is mutable, to reliably identify a group use `groupId`.").optional(),
  "projectId": z.string().describe("The ID of the project to share the filter with. Set `type` to `project`.").optional(),
  "projectRoleId": z.string().describe("The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.").optional(),
  "rights": z.number().int().describe("The rights for the share permission.").optional(),
  "type": z.enum(["user","project","group","projectRole","global","authenticated"]).describe("The type of the share permission.Specify the type as follows:\n\n *  `user` Share with a user.\n *  `group` Share with a group. Specify `groupname` as well.\n *  `project` Share with a project. Specify `projectId` as well.\n *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.\n *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.\n *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.")
}