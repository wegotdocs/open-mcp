import { z } from "zod"

export const inputParamsSchema = {
  "frameRate": z.enum(["30fps","60fps","variable"]).describe("The frame rate of the inbound video data.").optional(),
  "ingestionInfo": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ingestionInfo` to the tool, first call the tool `expandSchema` with \"/properties/cdn/properties/ingestionInfo\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The ingestionInfo object contains information that YouTube provides that you need to transmit your RTMP or HTTP stream to YouTube.</property-description>").optional(),
  "ingestionType": z.enum(["rtmp","dash","webrtc","hls"]).describe(" The method or protocol used to transmit the video stream.").optional(),
  "resolution": z.enum(["240p","360p","480p","720p","1080p","1440p","2160p","variable"]).describe("The resolution of the inbound video data.").optional()
}