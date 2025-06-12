import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "itemId": z.string().describe("The object id of the inbox item."),
  "action": z.string().describe("Specifies what action will be done on the workflow task inbox item, currently, only these actions are supported, ACQUIRE,FORWARD,REJECT,DELEGATE,REPEAT,SIGNOFF."),
  "delegate-user": z.string().describe("Specifies the user to be delegated for a workflow task, this is mandatory when action is DELEGATE, for other actions, the value will be ignored.").optional(),
  "repeat-users": z.string().describe("Specifies the user names and/or group names to repeat the workflow task, and more values are separated by the comma, e.g. userA,userB,groupC. This is mandatory when action is REPEAT, for other actions,this value will be ignored.").optional(),
  "signoff-password": z.string().describe("Specifies the signoff password when the action is SIGNOFF, this value will be ignored for other actions.").optional(),
  "activity": z.string().describe("Specifies the activity name.").optional(),
  "assign-performers": z.string().describe("Specifies URL encoded user names and/or group names to whom the target activity will be assigned. Separated by commas. Mandatory when performing ASSIGN action. Ignored for other actions.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}