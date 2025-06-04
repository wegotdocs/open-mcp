import { z } from "zod"

export const inputParamsSchema = {
  "userId": z.string().describe("The user's email address. The special value `me` can be used to indicate the authenticated user."),
  "labelFilterAction": z.enum(["include","exclude"]).describe("Filtering behavior of labelIds list specified.").optional(),
  "labelIds": z.array(z.string()).describe("List of label_ids to restrict notifications about. By default, if unspecified, all changes are pushed out. If specified then dictates which labels are required for a push notification to be generated.").optional(),
  "topicName": z.string().describe("A fully qualified Google Cloud Pub/Sub API topic name to publish the events to. This topic name **must** already exist in Cloud Pub/Sub and you **must** have already granted gmail \"publish\" permission on it. For example, \"projects/my-project-identifier/topics/my-topic-name\" (using the Cloud Pub/Sub \"v1\" topic naming format). Note that the \"my-project-identifier\" portion must exactly match your Google developer project id (the one executing this watch request).").optional()
}