import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "itemId": z.string().describe("The object id of the inbox item."),
  "action": z.string().describe("Specifies what action to perform on the work queue task. The following actions are supported. * HOLD, Sets the work item a_held_by to indicate if the task is being worked on. * REASSIGN, Reassigns this task to the specified user, user-name is required, and pulled is optional. This action will unsuspend a suspended task. * SUSPEND, Suspends this task with the specified expected unsuspend date and time, unsuspend-time is optional. * UNSUSPEND, Unsuspends or resumes this task. * UNHOLD, Releases the task."),
  "user-name": z.string().describe("Specifies the login name of the user to whom the task will be reassigned.").optional(),
  "pulled": z.string().describe("Set to true to indicate that it's an end user's action, or false if a supervisor or administrator assigns the task. Defaults to false.").optional(),
  "unsuspend-time": z.string().describe("Specifies the absolute date and time when the task must be unsuspended automatically. Used when performing a SUSPEND action. Pass in NULL if the timer is not used for suspending the task. The date format should comply with ISO 8601.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}