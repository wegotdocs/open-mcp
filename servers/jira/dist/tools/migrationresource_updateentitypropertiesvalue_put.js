import { z } from "zod";
export const toolName = `migrationresource_updateentitypropertiesvalue_put`;
export const toolDescription = `Bulk update entity properties`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/atlassian-connect/1/migration/properties/{entityType}`;
export const method = `put`;
export const security = [];
export const keys = {
    "query": [],
    "header": [
        "Atlassian-Transfer-Id"
    ],
    "path": [
        "entityType"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "entityType": z.enum(["IssueProperty", "CommentProperty", "DashboardItemProperty", "IssueTypeProperty", "ProjectProperty", "UserProperty", "WorklogProperty", "BoardProperty", "SprintProperty"]).describe("The type indicating the object that contains the entity properties."), "Atlassian-Transfer-Id": z.string().uuid().describe("The app migration transfer ID.") }).shape;
