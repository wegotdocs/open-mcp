import { z } from "zod"

export const inputParamsSchema = {
  "associatedMembershipGiftingMessageId": z.string().describe("The ID of the membership gifting message that is related to this gift membership. This ID will always refer to a message whose type is 'membershipGiftingEvent'.").optional(),
  "gifterChannelId": z.string().describe("The ID of the user that made the membership gifting purchase. This matches the `snippet.authorChannelId` of the associated membership gifting message.").optional(),
  "memberLevelName": z.string().describe("The name of the Level at which the viewer is a member. This matches the `snippet.membershipGiftingDetails.giftMembershipsLevelName` of the associated membership gifting message. The Level names are defined by the YouTube channel offering the Membership. In some situations this field isn't filled.").optional()
}