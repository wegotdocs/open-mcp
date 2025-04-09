import { z } from "zod";
export const inputParams = {
    "applicationKey": z.enum(["jira-core", "jira-product-discovery", "jira-software", "jira-servicedesk"]).describe("The ID of the application, represents a specific version of Jira.")
};
