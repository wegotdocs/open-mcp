import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the referred resource, if that resource is a channel. This property is only present if the resourceId.kind value is youtube#channel.").optional(),
  "kind": z.string().describe("The type of the API resource.").optional(),
  "playlistId": z.string().describe("The ID that YouTube uses to uniquely identify the referred resource, if that resource is a playlist. This property is only present if the resourceId.kind value is youtube#playlist.").optional(),
  "videoId": z.string().describe("The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the resourceId.kind value is youtube#video.").optional()
}