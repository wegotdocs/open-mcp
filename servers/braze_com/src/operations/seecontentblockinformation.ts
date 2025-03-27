import { z } from "zod"

export const toolName = `seecontentblockinformation`
export const toolDescription = `See Content Block Information`
export const baseUrl = `https://rest.iad-01.braze.com`
export const path = `/content_blocks/info`
export const method = `get`
export const security = []

export const inputParams = z.object({ "query": z.object({ "content_block_id": z.string().describe("(Required) String\n\nThe Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier.").optional(), "include_inclusion_data": z.string().describe("(Optional) Boolean\n\nWhen set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases.").optional() }).optional() }).shape