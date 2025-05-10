import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "security_product": z.enum(["dependency_graph","dependabot_alerts","dependabot_security_updates","advanced_security","code_scanning_default_setup","secret_scanning","secret_scanning_push_protection"]).describe("The security feature to enable or disable."),
  "enablement": z.enum(["enable_all","disable_all"]).describe("The action to take.\n\n`enable_all` means to enable the specified security feature for all repositories in the organization.\n`disable_all` means to disable the specified security feature for all repositories in the organization."),
  "query_suite": z.enum(["default","extended"]).describe("CodeQL query suite to be used. If you specify the `query_suite` parameter, the default setup will be configured with this query suite only on all repositories that didn't have default setup already configured. It will not change the query suite on repositories that already have default setup configured.\nIf you don't specify any `query_suite` in your request, the preferred query suite of the organization will be applied.").optional()
}