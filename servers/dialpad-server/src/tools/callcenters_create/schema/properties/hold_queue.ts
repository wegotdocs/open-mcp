import { z } from "zod"

export const inputParamsSchema = {
  "allow_queue_callback": z.boolean().nullable().describe("Whether or not to allow callers to request a callback. Default is False.").optional(),
  "announce_position": z.boolean().nullable().describe("Whether or not to let callers know their place in the queue. This option is not available when a maximum queue wait time of less than 2 minutes is selected. Default is True.").optional(),
  "announcement_interval_seconds": z.number().int().nullable().describe("Hold announcement interval wait time. Default is 2 min.").optional(),
  "max_hold_count": z.number().int().nullable().describe("If all operators are busy on other calls, send callers to a hold queue. This is to specify your queue size. Choose from 1-1000. Default is 50.").optional(),
  "max_hold_seconds": z.number().int().nullable().describe("Maximum queue wait time in seconds. Choose from 30s to 18000s (3 hours). Default is 900s (15 min).").optional(),
  "queue_callback_dtmf": z.string().nullable().describe("Allow callers to request a callback when the queue has more than queue_callback_threshold number of calls by pressing one of the followings: [0,1,2,3,4,5,6,7,8,9,*,#]. Default is 9.").optional(),
  "queue_callback_threshold": z.number().int().nullable().describe("Allow callers to request a callback when the queue has more than this number of calls. Default is 5.").optional(),
  "queue_escape_dtmf": z.string().nullable().describe("Allow callers to exit the hold queue to voicemail by pressing one of the followings:\n[0,1,2,3,4,5,6,7,8,9,*,#]. Default is *.").optional(),
  "stay_in_queue_after_closing": z.boolean().nullable().describe("Whether or not to allow existing calls to stay in queue after the call center has closed. Default is False.").optional(),
  "unattended_queue": z.boolean().nullable().describe("Whether or not to allow callers to be placed in your hold queue when no agents are available. Default is False.").optional()
}