import { z } from "zod"

export const inputParamsSchema = {
  "activeLiveChatId": z.string().describe("The ID of the currently active live chat attached to this video. This field is filled only if the video is a currently live broadcast that has live chat. Once the broadcast transitions to complete this field will be removed and the live chat closed down. For persistent broadcasts that live chat id will no longer be tied to this video but rather to the new video being displayed at the persistent page.").optional(),
  "actualEndTime": z.string().datetime({ offset: true }).describe("The time that the broadcast actually ended. This value will not be available until the broadcast is over.").optional(),
  "actualStartTime": z.string().datetime({ offset: true }).describe("The time that the broadcast actually started. This value will not be available until the broadcast begins.").optional(),
  "concurrentViewers": z.string().describe("The number of viewers currently watching the broadcast. The property and its value will be present if the broadcast has current viewers and the broadcast owner has not hidden the viewcount for the video. Note that YouTube stops tracking the number of concurrent viewers for a broadcast when the broadcast ends. So, this property would not identify the number of viewers watching an archived video of a live broadcast that already ended.").optional(),
  "scheduledEndTime": z.string().datetime({ offset: true }).describe("The time that the broadcast is scheduled to end. If the value is empty or the property is not present, then the broadcast is scheduled to contiue indefinitely.").optional(),
  "scheduledStartTime": z.string().datetime({ offset: true }).describe("The time that the broadcast is scheduled to begin.").optional()
}