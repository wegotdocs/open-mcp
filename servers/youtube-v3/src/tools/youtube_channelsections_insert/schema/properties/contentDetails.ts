import { z } from "zod"

export const inputParamsSchema = {
  "channels": z.array(z.string()).describe("The channel ids for type multiple_channels.").optional(),
  "playlists": z.array(z.string()).describe("The playlist ids for type single_playlist and multiple_playlists. For singlePlaylist, only one playlistId is allowed.").optional()
}