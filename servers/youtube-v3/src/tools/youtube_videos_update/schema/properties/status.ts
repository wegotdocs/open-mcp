import { z } from "zod"

export const inputParamsSchema = {
  "embeddable": z.boolean().describe("This value indicates if the video can be embedded on another website. @mutable youtube.videos.insert youtube.videos.update").optional(),
  "failureReason": z.enum(["conversion","invalidFile","emptyFile","tooSmall","codec","uploadAborted"]).describe("This value explains why a video failed to upload. This property is only present if the uploadStatus property indicates that the upload failed.").optional(),
  "license": z.enum(["youtube","creativeCommon"]).describe("The video's license. @mutable youtube.videos.insert youtube.videos.update").optional(),
  "madeForKids": z.boolean().optional(),
  "privacyStatus": z.enum(["public","unlisted","private"]).describe("The video's privacy status.").optional(),
  "publicStatsViewable": z.boolean().describe("This value indicates if the extended video statistics on the watch page can be viewed by everyone. Note that the view count, likes, etc will still be visible if this is disabled. @mutable youtube.videos.insert youtube.videos.update").optional(),
  "publishAt": z.string().datetime({ offset: true }).describe("The date and time when the video is scheduled to publish. It can be set only if the privacy status of the video is private..").optional(),
  "rejectionReason": z.enum(["copyright","inappropriate","duplicate","termsOfUse","uploaderAccountSuspended","length","claim","uploaderAccountClosed","trademark","legal"]).describe("This value explains why YouTube rejected an uploaded video. This property is only present if the uploadStatus property indicates that the upload was rejected.").optional(),
  "selfDeclaredMadeForKids": z.boolean().optional(),
  "uploadStatus": z.enum(["uploaded","processed","failed","rejected","deleted"]).describe("The status of the uploaded video.").optional()
}