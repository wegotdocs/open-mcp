import { z } from "zod"

export const inputParamsSchema = {
  "ari": z.string().describe("Compass component's ID. Can't be updated. Not required for creating a Project Component.").readonly().optional(),
  "assignee": z.string().optional(),
  "assigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:\n\n *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.\n *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.\n *  `UNASSIGNED` an assignee is not set for issues created with this component.\n *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.\n\nDefault value: `PROJECT_DEFAULT`.  \nOptional when creating or updating a component.").optional(),
  "description": z.string().describe("The description for the component. Optional when creating or updating a component.").optional(),
  "id": z.string().describe("The unique identifier for the component.").readonly().optional(),
  "isAssigneeTypeValid": z.boolean().describe("Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.").readonly().optional(),
  "lead": z.string().optional(),
  "leadAccountId": z.string().max(128).describe("The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.").optional(),
  "leadUserName": z.string().describe("This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Compass component's metadata. Can't be updated. Not required for creating a Project Component.</property-description>").optional(),
  "name": z.string().describe("The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.").optional(),
  "project": z.string().describe("The key of the project the component is assigned to. Required when creating a component. Can't be updated.").optional(),
  "projectId": z.number().int().describe("The ID of the project the component is assigned to.").readonly().optional(),
  "realAssignee": z.string().optional(),
  "realAssigneeType": z.enum(["PROJECT_DEFAULT","COMPONENT_LEAD","PROJECT_LEAD","UNASSIGNED"]).describe("The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:\n\n *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.\n *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.\n *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.\n *  `PROJECT_DEFAULT` when none of the preceding cases are true.").readonly().optional(),
  "self": z.string().url().describe("The URL of the component.").readonly().optional()
}