import { z } from "zod"

export const toolName = `migrationresource_updateentitypropertiesvalue_put`
export const toolDescription = `Bulk update entity properties`
export const baseUrl = `https://your-domain.atlassian.net`
export const path = `/rest/atlassian-connect/1/migration/properties/{entityType}`
export const method = `put`
export const security = []

export const inputParams = z.object({ "h_Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID."), "p_entityType": z.enum(["IssueProperty","CommentProperty","DashboardItemProperty","IssueTypeProperty","ProjectProperty","UserProperty","WorklogProperty","BoardProperty","SprintProperty"]).describe("The type indicating the object that contains the entity properties.") }).shape