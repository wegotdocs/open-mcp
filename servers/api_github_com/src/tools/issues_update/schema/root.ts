import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "issue_number": z.number().int().describe("The number that identifies the issue."),
  "title": z.string().nullable().describe("The title of the issue.").optional(),
  "body": z.string().nullable().describe("The contents of the issue.").optional(),
  "assignee": z.string().nullable().describe("Username to assign to this issue. **This field is closing down.**").optional(),
  "state": z.enum(["open","closed"]).describe("The open or closed state of the issue.").optional(),
  "state_reason": z.enum(["completed","not_planned","reopened"]).nullable().describe("The reason for the state change. Ignored unless `state` is changed.").optional(),
  "milestone": z.string().nullable().optional(),
  "labels": z.array(z.string()).describe("Labels to associate with this issue. Pass one or more labels to _replace_ the set of labels on this issue. Send an empty array (`[]`) to clear all labels from the issue. Only users with push access can set labels for issues. Without push access to the repository, label changes are silently dropped.").optional(),
  "assignees": z.array(z.string()).describe("Usernames to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this issue. Send an empty array (`[]`) to clear all assignees from the issue. Only users with push access can set assignees for new issues. Without push access to the repository, assignee changes are silently dropped.").optional(),
  "type": z.string().nullable().describe("The name of the issue type to associate with this issue or use `null` to remove the current issue type. Only users with push access can set the type for issues. Without push access to the repository, type changes are silently dropped.").optional()
}