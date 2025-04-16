import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "audioBitrate": z.number().int().optional(),
  "audioChannels": z.number().optional(),
  "audioCodec": z.string().nullable().optional(),
  "audioLanguages": z.string().nullable().optional(),
  "audioStreamCount": z.number().int().optional(),
  "videoBitDepth": z.number().int().optional(),
  "videoBitrate": z.number().int().optional(),
  "videoCodec": z.string().nullable().optional(),
  "videoFps": z.number().optional(),
  "videoDynamicRange": z.string().nullable().optional(),
  "videoDynamicRangeType": z.string().nullable().optional(),
  "resolution": z.string().nullable().optional(),
  "runTime": z.string().nullable().optional(),
  "scanType": z.string().nullable().optional(),
  "subtitles": z.string().nullable().optional()
}