import { z } from "zod"

export const inputParamsSchema = {
  "object_types": z.array(z.string()),
  "name": z.string().min(1).max(150),
  "enabled": z.boolean().optional(),
  "event_types": z.array(z.enum(["object_created","object_updated","object_deleted","job_started","job_completed","job_failed","job_errored"]).describe("* `object_created` - Object created\n* `object_updated` - Object updated\n* `object_deleted` - Object deleted\n* `job_started` - Job started\n* `job_completed` - Job completed\n* `job_failed` - Job failed\n* `job_errored` - Job errored")).describe("The types of event which will trigger this rule."),
  "conditions": z.any().nullable().describe("A set of conditions which determine whether the event will be generated.").optional(),
  "action_type": z.enum(["webhook","script","notification"]).describe("* `webhook` - Webhook\n* `script` - Script\n* `notification` - Notification").optional(),
  "action_object_type": z.string(),
  "action_object_id": z.number().int().gte(0).lte(9223372036854776000).nullable().optional(),
  "description": z.string().max(200).optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional()
}