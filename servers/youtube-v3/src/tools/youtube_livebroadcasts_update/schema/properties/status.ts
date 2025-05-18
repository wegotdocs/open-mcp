import { z } from "zod"

export const inputParamsSchema = {
  "lifeCycleStatus": z.enum(["lifeCycleStatusUnspecified","created","ready","testing","live","complete","revoked","testStarting","liveStarting"]).describe("The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.").optional(),
  "liveBroadcastPriority": z.enum(["liveBroadcastPriorityUnspecified","low","normal","high"]).describe("Priority of the live broadcast event (internal state).").optional(),
  "madeForKids": z.boolean().describe("Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.").optional(),
  "privacyStatus": z.enum(["public","unlisted","private"]).describe("The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.").optional(),
  "recordingStatus": z.enum(["liveBroadcastRecordingStatusUnspecified","notRecording","recording","recorded"]).describe("The broadcast's recording status.").optional(),
  "selfDeclaredMadeForKids": z.boolean().describe("This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.").optional()
}