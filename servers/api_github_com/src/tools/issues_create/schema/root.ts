import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "title": z.string().describe("The title of the issue."),
  "body": z.string().describe("The contents of the issue.").optional(),
  "assignee": z.string().nullable().describe("Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is closing down.**_").optional(),
  "milestone": z.string().nullable().optional(),
  "labels": z.array(z.string()).describe("Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._").optional(),
  "assignees": z.array(z.string()).describe("Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._").optional(),
  "type": z.string().nullable().describe("The name of the issue type to associate with this issue. _NOTE: Only users with push access can set the type for new issues. The type is silently dropped otherwise._").optional()
}