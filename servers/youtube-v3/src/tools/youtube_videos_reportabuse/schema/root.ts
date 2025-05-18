import { z } from "zod"

export const inputParamsSchema = {
  "onBehalfOfContentOwner": z.string().describe("*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.").optional(),
  "comments": z.string().describe("Additional comments regarding the abuse report.").optional(),
  "language": z.string().describe("The language that the content was viewed in.").optional(),
  "reasonId": z.string().describe("The high-level, or primary, reason that the content is abusive. The value is an abuse report reason ID.").optional(),
  "secondaryReasonId": z.string().describe("The specific, or secondary, reason that this content is abusive (if available). The value is an abuse report reason ID that is a valid secondary reason for the primary reason.").optional(),
  "videoId": z.string().describe("The ID that YouTube uses to uniquely identify the video.").optional()
}