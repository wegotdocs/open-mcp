import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "rule_suite_id": z.number().int().describe("The unique identifier of the rule suite result.\nTo get this ID, you can use [GET /repos/{owner}/{repo}/rulesets/rule-suites](https://docs.github.com/rest/repos/rule-suites#list-repository-rule-suites)\nfor repositories and [GET /orgs/{org}/rulesets/rule-suites](https://docs.github.com/rest/orgs/rule-suites#list-organization-rule-suites)\nfor organizations.")
}