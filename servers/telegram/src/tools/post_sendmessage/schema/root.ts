import { z } from "zod"

export const inputParamsSchema = {
  "Parameters": z.string().optional(),
  "chat_id": z.union([z.number().int(), z.string()]),
  "text": z.string(),
  "parse_mode": z.string().optional(),
  "disable_web_page_preview": z.boolean().optional(),
  "disable_notification": z.boolean().optional(),
  "reply_to_message_id": z.number().int().optional(),
  "reply_markup": z.union([z.object({ "Field": z.string(), "keyboard": z.array(z.array(z.string())), "resize_keyboard": z.boolean().optional(), "one_time_keyboard": z.boolean().optional(), "selective": z.boolean().optional() }).describe("This object represents a custom keyboard with reply options (see Introduction to bots for details and examples)."), z.object({ "Field": z.string(), "hide_keyboard": z.boolean(), "selective": z.boolean().optional() }).describe("Upon receiving a message with this object, Telegram clients will hide the current custom keyboard and display the default letter-keyboard. By default, custom keyboards are displayed until a new keyboard is sent by a bot. An exception is made for one-time keyboards that are hidden immediately after the user presses a button (see ReplyKeyboardMarkup)."), z.object({ "Field": z.string(), "force_reply": z.boolean(), "selective": z.boolean().optional() }).describe("Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot‘s message and tapped ’Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.")]).optional()
}