import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "check_run_id": z.number().int().describe("The unique identifier of the check run."),
  "name": z.string().describe("The name of the check. For example, \"code-coverage\".").optional(),
  "details_url": z.string().describe("The URL of the integrator's site that has the full details of the check.").optional(),
  "external_id": z.string().describe("A reference for the run on the integrator's system.").optional(),
  "started_at": z.string().datetime({ offset: true }).describe("This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "status": z.enum(["queued","in_progress","completed","waiting","requested","pending"]).describe("The current status of the check run. Only GitHub Actions can set a status of `waiting`, `pending`, or `requested`.").optional(),
  "conclusion": z.enum(["action_required","cancelled","failure","neutral","success","skipped","stale","timed_out"]).describe("**Required if you provide `completed_at` or a `status` of `completed`**. The final conclusion of the check. \n**Note:** Providing `conclusion` will automatically set the `status` parameter to `completed`. You cannot change a check run conclusion to `stale`, only GitHub can set this.").optional(),
  "completed_at": z.string().datetime({ offset: true }).describe("The time the check completed. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.").optional(),
  "output": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `output` to the tool, first call the tool `expandSchema` with \"/properties/output\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Check runs can accept a variety of data in the `output` object, including a `title` and `summary` and can optionally provide descriptive details about the run.</property-description>").optional(),
  "actions": z.array(z.object({ "label": z.string().max(20).describe("The text to be displayed on a button in the web UI. The maximum size is 20 characters."), "description": z.string().max(40).describe("A short explanation of what this action would do. The maximum size is 40 characters."), "identifier": z.string().max(20).describe("A reference for the action on the integrator's system. The maximum size is 20 characters.") })).max(3).describe("Possible further actions the integrator can perform, which a user may trigger. Each action includes a `label`, `identifier` and `description`. A maximum of three actions are accepted. To learn more about check runs and requested actions, see \"[Check runs and requested actions](https://docs.github.com/rest/guides/using-the-rest-api-to-interact-with-checks#check-runs-and-requested-actions).\"").optional()
}