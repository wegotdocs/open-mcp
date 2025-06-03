import { z } from "zod"

export const inputParamsSchema = {
  "sns_key": z.string().describe("AWS SNS access key").optional(),
  "sns_secret": z.string().describe("AWS SNS key secret").optional(),
  "sns_topic_arn": z.string().describe("AWS SNS topic ARN").optional()
}