import { z } from "zod"

export const inputParamsSchema = {
  "DLQ": z.boolean().describe("(Required) true, or false. Allows the user to choose the regular or dead letter queue for deleting messages. The default is `false`, which deletes messages from the regular queue."),
  "QueueName": z.string().describe("(Required) The name of the queue or topic. You can find this in the [List Queues](/api/platformapi#tag/ListQueues) action or in Queue Management."),
  "SubscriberName": z.string().describe("(Optional. Use only for topic subscribers.) The name of the subscriber as it exists on the Runtime. You can find this by using the [List Queues](/api/platformapi#tag/ListQueues) action or by looking up the Component ID of the process associated with the subscriber.\n\n >**Note:** This field is not only the subscriber name shown on the Queue Management screen of the user interface.").optional()
}