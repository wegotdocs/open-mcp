import { z } from "zod";
export const toolName = `dynamicmodulesresource_registermodules_post`;
export const toolDescription = `Register modules`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/atlassian-connect/1/app/module/dynamic`;
export const method = `post`;
export const security = [];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "modules"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "modules": z.array(z.record(z.any()).describe("A [Connect module](https://developer.atlassian.com/cloud/jira/platform/about-jira-modules/) in the same format as in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).")).describe("A list of app modules in the same format as the `modules` property in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).") }).shape;
