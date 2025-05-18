import { z } from "zod"

export const inputParamsSchema = {
  "categoryId": z.string().describe("The YouTube video category associated with the video.").optional(),
  "channelId": z.string().describe("The ID that YouTube uses to uniquely identify the channel that the video was uploaded to.").optional(),
  "channelTitle": z.string().describe("Channel title for the channel that the video belongs to.").optional(),
  "defaultAudioLanguage": z.string().describe("The default_audio_language property specifies the language spoken in the video's default audio track.").optional(),
  "defaultLanguage": z.string().describe("The language of the videos's default snippet.").optional(),
  "description": z.string().describe("The video's description. @mutable youtube.videos.insert youtube.videos.update").optional(),
  "liveBroadcastContent": z.enum(["none","upcoming","live","completed"]).describe("Indicates if the video is an upcoming/active live broadcast. Or it's \"none\" if the video is not an upcoming/active live broadcast.").optional(),
  "localized": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `localized` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/localized\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Localized snippet selected with the hl parameter. If no such localization exists, this field is populated with the default snippet. (Read-only)</property-description>").optional(),
  "publishedAt": z.string().datetime({ offset: true }).describe("The date and time when the video was uploaded.").optional(),
  "tags": z.array(z.string()).describe("A list of keyword tags associated with the video. Tags may contain spaces.").optional(),
  "thumbnails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `thumbnails` to the tool, first call the tool `expandSchema` with \"/properties/snippet/properties/thumbnails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>A map of thumbnail images associated with the video. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.</property-description>").optional(),
  "title": z.string().describe("The video's title. @mutable youtube.videos.insert youtube.videos.update").optional()
}