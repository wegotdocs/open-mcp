import { z } from "zod"

export const inputParams = {
  "model": z.union([z.literal("cartesia/sonic"), z.string()]).describe("The name of the model to query.<br> <br> [See all of Together AI's chat models](https://docs.together.ai/docs/serverless-models#audio-models)\n"),
  "input": z.string().describe("Input text to generate the audio for"),
  "voice": z.union([z.enum(["laidback woman","polite man","storyteller lady","friendly sidekick"]), z.string()]).describe("The voice to use for generating the audio. [View all supported voices here](https://docs.together.ai/docs/text-to-speech#voices-available)."),
  "response_format": z.enum(["mp3","wav","raw"]).describe("The format of audio output").optional(),
  "language": z.enum(["en","de","fr","es","hi","it","ja","ko","nl","pl","pt","ru","sv","tr","zh"]).describe("Language of input text").optional(),
  "response_encoding": z.enum(["pcm_f32le","pcm_s16le","pcm_mulaw","pcm_alaw"]).describe("Audio encoding of response").optional(),
  "sample_rate": z.number().describe("Sampling rate to use for the output audio").optional(),
  "stream": z.boolean().describe("If true, output is streamed for several characters at a time instead of waiting for the full response. The stream terminates with `data: [DONE]`. If false, return the encoded audio as octet stream").optional()
}