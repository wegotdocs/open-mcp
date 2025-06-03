import { z } from "zod"

export const inputParamsSchema = {
  "apn_template": z.string().describe("Push message template for APN").optional(),
  "firebase_data_template": z.string().describe("Push message data template for Firebase").optional(),
  "firebase_template": z.string().describe("Push message template for Firebase").optional(),
  "message_id": z.string().describe("Message ID to send push notification for").optional(),
  "push_provider_name": z.string().describe("Name of push provider").optional(),
  "push_provider_type": z.enum(["firebase","apn","huawei","xiaomi"]).describe("Push provider type").optional(),
  "skip_devices": z.boolean().describe("Don't require existing devices to render templates").optional(),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User request object</property-description>").optional(),
  "user_id": z.string().optional()
}