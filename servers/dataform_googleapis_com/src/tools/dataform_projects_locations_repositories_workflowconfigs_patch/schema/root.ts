import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Output only. The workflow config's name."),
  "updateMask": z.string().describe("Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.").optional(),
  "cronSchedule": z.string().describe("Optional. Optional schedule (in cron format) for automatic execution of this workflow config.").optional(),
  "invocationConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `invocationConfig` to the tool, first call the tool `expandSchema` with \"/properties/invocationConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional. If left unset, a default InvocationConfig will be used.</property-description>").optional(),
  "b_name": z.string().describe("Output only. The workflow config's name.").readonly().optional(),
  "recentScheduledExecutionRecords": z.array(z.object({ "errorStatus": z.object({ "code": z.number().int().describe("The status code, which should be an enum value of google.rpc.Code.").optional(), "details": z.array(z.record(z.any().describe("Properties of the object. Contains field @type with type URL."))).describe("A list of messages that carry the error details. There is a common set of message types for APIs to use.").optional(), "message": z.string().describe("A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.").optional() }).describe("The error status encountered upon this attempt to create the workflow invocation, if the attempt was unsuccessful.").optional(), "executionTime": z.string().describe("The timestamp of this execution attempt.").optional(), "workflowInvocation": z.string().describe("The name of the created workflow invocation, if one was successfully created. Must be in the format `projects/*/locations/*/repositories/*/workflowInvocations/*`.").optional() }).describe("A record of an attempt to create a workflow invocation for this workflow config.")).describe("Output only. Records of the 10 most recent scheduled execution attempts, ordered in in descending order of `execution_time`. Updated whenever automatic creation of a workflow invocation is triggered by cron_schedule.").readonly().optional(),
  "releaseConfig": z.string().describe("Required. The name of the release config whose release_compilation_result should be executed. Must be in the format `projects/*/locations/*/repositories/*/releaseConfigs/*`.").optional(),
  "timeZone": z.string().describe("Optional. Specifies the time zone to be used when interpreting cron_schedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.").optional()
}