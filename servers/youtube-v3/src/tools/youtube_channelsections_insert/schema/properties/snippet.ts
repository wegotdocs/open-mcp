import { z } from "zod"

export const inputParamsSchema = {
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the channel that published the channel section.").optional(),
  "position": z.number().int().describe("The position of the channel section in the channel.").optional(),
  "title": z.string().describe("The channel section's title for multiple_playlists and multiple_channels.").optional(),
  "type": z.enum(["channelsectionTypeUndefined","singlePlaylist","multiplePlaylists","popularUploads","recentUploads","likes","allPlaylists","likedPlaylists","recentPosts","recentActivity","liveEvents","upcomingEvents","completedEvents","multipleChannels","postedVideos","postedPlaylists","subscriptions"]).describe("The type of the channel section.").optional()
}