import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet."),
  "videoId": z.string().describe("Returns the captions for the specified video."),
  "id": z.array(z.string()).describe("Returns the captions with the given IDs for Stubby or Apiary.").optional(),
  "onBehalfOf": z.string().describe("ID of the Google+ Page for the channel that the request is on behalf of.").optional(),
  "onBehalfOfContentOwner": z.string().describe("*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.").optional()
}