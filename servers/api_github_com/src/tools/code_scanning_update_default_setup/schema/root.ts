import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "state": z.enum(["configured","not-configured"]).describe("The desired state of code scanning default setup.").optional(),
  "runner_type": z.enum(["standard","labeled"]).describe("Runner type to be used.").optional(),
  "runner_label": z.string().nullable().describe("Runner label to be used if the runner type is labeled.").optional(),
  "query_suite": z.enum(["default","extended"]).describe("CodeQL query suite to be used.").optional(),
  "languages": z.array(z.enum(["actions","c-cpp","csharp","go","java-kotlin","javascript-typescript","python","ruby","swift"])).describe("CodeQL languages to be analyzed.").optional()
}