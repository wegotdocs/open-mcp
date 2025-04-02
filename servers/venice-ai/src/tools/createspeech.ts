import { z } from "zod"

export const toolName = `createspeech`
export const toolDescription = `/api/v1/audio/speech`
export const baseUrl = `https://api.venice.ai/api/v1`
export const path = `/audio/speech`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "model",
    "input",
    "voice",
    "response_format",
    "speed",
    "streaming"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "model": z.literal("tts-kokoro").describe("The model ID of a Venice TTS model."), "input": z.string().min(1).max(4096).describe("The text to generate audio for. The maximum length is 4096 characters."), "voice": z.enum(["af_alloy","af_aoede","af_bella","af_heart","af_jadzia","af_jessica","af_kore","af_nicole","af_nova","af_river","af_sarah","af_sky","am_adam","am_echo","am_eric","am_fenrir","am_liam","am_michael","am_onyx","am_puck","am_santa","bf_alice","bf_emma","bf_lily","bm_daniel","bm_fable","bm_george","bm_lewis","ef_dora","em_alex","em_santa","ff_siwis","hf_alpha","hf_beta","hm_omega","hm_psi","if_sara","im_nicola","jf_alpha","jf_gongitsune","jf_nezumi","jf_tebukuro","jm_kumo","pf_dora","pm_alex","pm_santa","zf_xiaobei","zf_xiaoni","zf_xiaoxiao","zf_xiaoyi","zm_yunjian","zm_yunxi","zm_yunxia","zm_yunyang"]).describe("The voice to use when generating the audio."), "response_format": z.enum(["mp3","opus","aac","flac","wav","pcm"]).describe("The format to audio in."), "speed": z.number().gte(0.25).lte(4).describe("The speed of the generated audio. Select a value from 0.25 to 4.0. 1.0 is the default."), "streaming": z.boolean().describe("Should the content stream back sentence by sentence or be processed and returned as a complete audio file.") }).shape