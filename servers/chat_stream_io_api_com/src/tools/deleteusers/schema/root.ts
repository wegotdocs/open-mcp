import { z } from "zod"

export const inputParamsSchema = {
  "calls": z.enum(["soft","hard"]).describe("Calls delete mode.\nAffected calls are those that include exactly two members, one of whom is the user being deleted.\n\n* null or empty string - doesn't delete any calls\n* soft - marks user's calls and their related data as deleted (soft-delete)\n* hard - deletes user's calls and their data completely (hard-delete)\n").optional(),
  "conversations": z.enum(["soft","hard"]).describe("Conversation channels delete mode.\nConversation channel is any channel which only has two members one of which is the user being deleted.\n\n* null or empty string - doesn't delete any conversation channels\n* soft - marks all conversation channels as deleted (same effect as Delete Channels with 'hard' option disabled)\n* hard - deletes channel and all its data completely including messages (same effect as Delete Channels with 'hard' option enabled)\n").optional(),
  "messages": z.enum(["soft","pruning","hard"]).describe("Message delete mode.\n\n* null or empty string - doesn't delete user messages\n* soft - marks all user messages as deleted without removing any related message data\n* pruning - marks all user messages as deleted, nullifies message information and removes some message data such as reactions and flags\n* hard - deletes messages completely with all related information\n").optional(),
  "new_call_owner_id": z.string().optional(),
  "new_channel_owner_id": z.string().optional(),
  "user": z.enum(["soft","pruning","hard"]).describe("User delete mode.\n\n* soft - marks user as deleted and retains all user data\n* pruning - marks user as deleted and nullifies user information\n* hard - deletes user completely. Requires 'hard' option for messages and conversations as well\n").optional(),
  "user_ids": z.array(z.string()).describe("IDs of users to delete")
}