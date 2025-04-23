import { z } from "zod"

export const inputParamsSchema = {
  "version_id": z.string().describe("A specific Version ID of the Tool to log to.").optional(),
  "environment": z.string().describe("Name of the Environment identifying a deployed version to log to.").optional(),
  "path": z.string().describe("Path of the Tool, including the name. This locates the Tool in the Humanloop filesystem and is used as as a unique identifier. For example: `folder/name` or just `name`.").optional(),
  "id": z.string().describe("ID for an existing Tool.").optional(),
  "start_time": z.string().datetime({ offset: true }).describe("When the logged event started.").optional(),
  "end_time": z.string().datetime({ offset: true }).describe("When the logged event ended.").optional(),
  "output": z.string().describe("Generated output from your model for the provided inputs. Can be `None` if logging an error, or if creating a parent Log with the intention to populate it later.").optional(),
  "created_at": z.string().datetime({ offset: true }).describe("User defined timestamp for when the log was created. ").optional(),
  "error": z.string().describe("Error message if the log is an error.").optional(),
  "provider_latency": z.number().describe("Duration of the logged event in seconds.").optional(),
  "stdout": z.string().describe("Captured log and debug statements.").optional(),
  "provider_request": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `provider_request` to the tool, first call the tool `expandSchema` with \"/properties/provider_request\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Raw request sent to provider.</property-description>").optional(),
  "provider_response": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `provider_response` to the tool, first call the tool `expandSchema` with \"/properties/provider_response\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Raw response received the provider.</property-description>").optional(),
  "inputs": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `inputs` to the tool, first call the tool `expandSchema` with \"/properties/inputs\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The inputs passed to the prompt template.</property-description>").optional(),
  "source": z.string().describe("Identifies where the model was called from.").optional(),
  "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Any additional metadata to record.</property-description>").optional(),
  "log_status": z.string().optional(),
  "source_datapoint_id": z.string().describe("Unique identifier for the Datapoint that this Log is derived from. This can be used by Humanloop to associate Logs to Evaluations. If provided, Humanloop will automatically associate this Log to Evaluations that require a Log for this Datapoint-Version pair.").optional(),
  "trace_parent_id": z.string().describe("The ID of the parent Log to nest this Log under in a Trace.").optional(),
  "user": z.string().describe("End-user ID related to the Log.").optional(),
  "b_environment": z.string().describe("The name of the Environment the Log is associated to.").optional(),
  "save": z.boolean().describe("Whether the request/response payloads will be stored on Humanloop.").optional(),
  "log_id": z.string().describe("This will identify a Log. If you don't provide a Log ID, Humanloop will generate one for you.").optional(),
  "tool": z.string().optional()
}