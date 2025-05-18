import { z } from "zod"

export const inputParamsSchema = {
  "part": z.array(z.string()).describe("The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties."),
  "categoryId": z.string().describe("Return the channels within the specified guide category ID.").optional(),
  "forHandle": z.string().describe("Return the channel associated with a YouTube handle.").optional(),
  "forUsername": z.string().describe("Return the channel associated with a YouTube username.").optional(),
  "hl": z.string().describe("Stands for \"host language\". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).").optional(),
  "id": z.array(z.string()).describe("Return the channels with the specified IDs.").optional(),
  "managedByMe": z.boolean().describe("Return the channels managed by the authenticated user.").optional(),
  "maxResults": z.number().int().gte(0).lte(50).describe("The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.").optional(),
  "mine": z.boolean().describe("Return the ids of channels owned by the authenticated user.").optional(),
  "mySubscribers": z.boolean().describe("Return the channels subscribed to the authenticated user").optional(),
  "onBehalfOfContentOwner": z.string().describe("*Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.").optional(),
  "pageToken": z.string().describe("The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.").optional()
}