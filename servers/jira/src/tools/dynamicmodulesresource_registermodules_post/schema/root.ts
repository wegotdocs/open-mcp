import { z } from "zod"

export const inputParamsSchema = {
  "modules": z.array(z.record(z.any()).describe("A [Connect module](https://developer.atlassian.com/cloud/jira/platform/about-jira-modules/) in the same format as in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).")).describe("A list of app modules in the same format as the `modules` property in the\n[app descriptor](https://developer.atlassian.com/cloud/jira/platform/app-descriptor/).")
}