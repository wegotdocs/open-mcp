import { z } from "zod"

export const inputParams = {
  "entityType": z.enum(["IssueProperty","CommentProperty","DashboardItemProperty","IssueTypeProperty","ProjectProperty","UserProperty","WorklogProperty","BoardProperty","SprintProperty"]).describe("The type indicating the object that contains the entity properties."),
  "Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID.")
}