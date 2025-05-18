import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the caption track to download, required for One Platform."),
  "onBehalfOf": z.string().describe("ID of the Google+ Page for the channel that the request is be on behalf of").optional(),
  "onBehalfOfContentOwner": z.string().describe("*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.").optional(),
  "tfmt": z.string().describe("Convert the captions into this format. Supported options are sbv, srt, and vtt.").optional(),
  "tlang": z.string().describe("tlang is the language code; machine translate the captions into this language.").optional()
}