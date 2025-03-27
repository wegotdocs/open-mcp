import { z } from "zod"

export const toolName = `createworkflow`
export const toolDescription = `Create a workflow`
export const baseUrl = `https://api.nexmo.com/v0.1/dispatch`
export const path = `/`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "body": z.object({ "template": z.literal("failover").describe("The template that the Dispatch API will execute. For the initial version of the API the only available value will be failover").optional(), "workflow": z.array(z.object({ "failover": z.object({ "condition_status": z.enum(["delivered","read"]).describe("Set the status the message must reach in the expiry_time before failing over. Options are delivered or read.").optional(), "expiry_time": z.number().int().gte(15).lte(86400).describe("In seconds. Minimum value is 15 and maximum value is 86,400 seconds (1 day).").optional() }).describe("Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.").optional(), "from": z.object({ "id": z.string().min(1).max(50).describe("Your ID for the platform that you are sending from.\n\n**Messenger**: This value should be the `to.id` value you received in the inbound messenger event.\n\n**Viber**: This is your Service Message ID given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).\n\n**SMS**: **MMS**: or **WhatsApp** This value is not required.\n").optional(), "number": z.string().min(1).max(50).describe("**SMS**: or **MMS**: The phone number of the message sender in the [E.164](https://en.wikipedia.org/wiki/E.164) format.\n\n**WhatsApp**: This is your WhatsApp Business Number given to you by your Vonage Account Manager. To find out more please visit [vonage.com](https://www.vonage.com/communications-apis/messages/).\n\n**Messenger**: or **Viber**: This value is not required.\n").optional(), "type": z.enum(["sms","viber_service_msg","messenger","whatsapp"]).describe("The type of message that you want to send.") }), "message": z.object({ "content": z.object({ "audio": z.object({ "url": z.string().min(1).max(2000).describe("The URL of the audio attachment. `messenger` supports .mp3. `whatsapp` supports .aac, .m4a, .amr, .mp3 and .opus.").optional() }).optional(), "file": z.object({ "caption": z.string().min(1).max(3000).describe("Additional text to accompany the image. Supported by WhatsApp and MMS.").optional(), "url": z.string().min(1).max(2000).describe("The URL of the file attachment. `messenger` supports a wide range of attachments including .zip, .csv and .pdf. `whatsapp` supports .pdf, .doc(x), .ppt(x) and .xls(x).").optional() }).optional(), "image": z.object({ "caption": z.string().min(1).max(3000).describe("Additional text to accompany the image. Supported by WhatsApp and MMS.").optional(), "url": z.string().min(1).max(2000).describe("The URL of the image attachment. `messenger` and `mms` supports .jpg, .jpeg, .png and .gif. `viber_service_msg` supports .jpg .jpeg, and .png. `whatsapp` supports .jpg .jpeg, and .png.").optional() }).optional(), "template": z.object({ "name": z.string().describe("The name of the template.").optional(), "parameters": z.array(z.object({ "default": z.string().describe("The parameters are an array. The first value being {{1}} in the template.").optional() })).optional() }).optional(), "text": z.string().min(1).max(4096).describe("The text of the message.\n\n**Messenger**: Is limited to 640 characters\n\n**SMS** or **Viber**: Is 1000 characters\n\n**WhatsApp**: is 4096 characters\n").optional(), "type": z.enum(["text","image","audio","video","file","template","custom"]).describe("The type of message that you are sending.\n\n**Messenger**: supports `text`, `image`, `audio`, `video` and `file`.\n\n**Viber Business Messages**: supports `image` and `text`.\n\n**WhatsApp**: supports `template`, `text`, `image`, `audio`, `video` and `file`.\n\n**SMS**: supports `text`.\n"), "video": z.object({ "url": z.string().min(1).max(2000).describe("The URL of the video attachment.\n\n**messenger** supports .mp4\n\n**whatsapp** supports .mp4 and .3gpp. Note, only H.264 video codec and AAC audio codec is supported.\n").optional() }).optional() }), "messenger": z.object({ "category": z.enum(["response","update","message_tag"]).describe("The use of different category tags enables the business to send messages for different use cases. For Facebook Messenger they need to comply with their [Messaging Types policy]( https://developers.facebook.com/docs/messenger-platform/send-messages#messaging_types). Vonage maps our `category` to their `messaging_type`. If `message_tag` is used, then an additional `tag` for that type is mandatory. By default Vonage sends the `response` category to Facebook Messenger.").optional(), "tag": z.string().describe("‘A full list of the possible tags is available on [developers.facebook.com](https://developers.facebook.com/docs/messenger-platform/send-messages/message-tags)'").optional() }).optional(), "viber_service_msg": z.object({ "category": z.enum(["transaction","promotion"]).describe("The use of different category tags enables the business to send messages for different use cases. For Viber Business Messages the first message sent from a business to a user must be personal, informative and a targeted message - not promotional. By default Vonage sends the `transaction` category to Viber Business Messages.").optional(), "ttl": z.number().int().gte(30).lte(86400).describe("Only valid for Viber Business Messages. Set the time-to-live of message to be delivered in seconds. i.e. if the message is not delivered in 600 seconds then delete the message.").optional() }).optional(), "whatsapp": z.object({ "locale": z.string().describe("We are using the industry standard, BCP 47, for locales. So in your API call to the /messages API you will need to put “en-GB” and this will refer to the “en_GB” template for WhatsApp. A full list of the possible locales is available on [developers.facebook.com](https://developers.facebook.com/docs/whatsapp/message-templates/creation#translations).").optional(), "policy": z.enum(["fallback","deterministic"]).describe("Please note that WhatsApp will deprecate `fallback` policy in January 2020. There are two policies that you can specify when sending a Message Template: `deterministic` and `fallback`. `deterministic` — Deliver the Message Template in exactly the language and locale asked for. `fallback` — Deliver the Message Template in the language that matches users language/locale setting on device. If one can not be found, deliver using the specified fallback language.").optional() }).optional() }), "to": z.object({ "id": z.string().min(1).max(50).describe("The ID of the message recipient.\n\n**Messenger**: This value should be the `from.id` value you received in the inbound messenger event.\n\n**SMS**: or **Viber**: or **WhatsApp** This value is not required.\n").optional(), "number": z.string().min(1).max(50).describe("**SMS**: or **MMS**: or **Viber**: or **WhatsApp** The phone number of the message recipient in the [E.164](https://en.wikipedia.org/wiki/E.164) format. Don't use a leading + or 00 when entering a phone number, start with the country code, for example, 447700900000.\n\n**Messenger**: This value is not required.\n").optional(), "type": z.enum(["sms","viber_service_msg","messenger","whatsapp"]).describe("The type of message that you want to send.") }) }).describe("Send With Failover Message")).describe("Contains a message object that must reflect the current /messages resource. All parameters within the content object reflect the /messages docs.").optional() }).optional() }).shape