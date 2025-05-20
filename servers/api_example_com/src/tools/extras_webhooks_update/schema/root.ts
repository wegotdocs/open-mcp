import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this webhook."),
  "name": z.string().min(1).max(150),
  "description": z.string().max(200).optional(),
  "payload_url": z.string().min(1).max(500).describe("This URL will be called using the HTTP method defined when the webhook is called. Jinja2 template processing is supported with the same context as the request body."),
  "http_method": z.enum(["GET","POST","PUT","PATCH","DELETE"]).describe("* `GET` - GET\n* `POST` - POST\n* `PUT` - PUT\n* `PATCH` - PATCH\n* `DELETE` - DELETE").optional(),
  "http_content_type": z.string().min(1).max(100).describe("The complete list of official content types is available <a href=\"https://www.iana.org/assignments/media-types/media-types.xhtml\">here</a>.").optional(),
  "additional_headers": z.string().describe("User-supplied HTTP headers to be sent with the request in addition to the HTTP content type. Headers should be defined in the format <code>Name: Value</code>. Jinja2 template processing is supported with the same context as the request body (below).").optional(),
  "body_template": z.string().describe("Jinja2 template for a custom request body. If blank, a JSON object representing the change will be included. Available context data includes: <code>event</code>, <code>model</code>, <code>timestamp</code>, <code>username</code>, <code>request_id</code>, and <code>data</code>.").optional(),
  "secret": z.string().max(255).describe("When provided, the request will include a <code>X-Hook-Signature</code> header containing a HMAC hex digest of the payload body using the secret as the key. The secret is not transmitted in the request.").optional(),
  "ssl_verification": z.boolean().describe("Enable SSL certificate verification. Disable with caution!").optional(),
  "ca_file_path": z.string().max(4096).nullable().describe("The specific CA certificate file to use for SSL verification. Leave blank to use the system defaults.").optional(),
  "custom_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_fields` to the tool, first call the tool `expandSchema` with \"/properties/custom_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "tags": z.array(z.object({ "name": z.string().min(1).max(100), "slug": z.string().regex(new RegExp("^[-\\w]+$")).min(1).max(100), "color": z.string().regex(new RegExp("^[0-9a-f]{6}$")).min(1).max(6).optional() }).describe("Represents an object related through a ForeignKey field. On write, it accepts a primary key (PK) value or a\ndictionary of attributes which can be used to uniquely identify the related object. This class should be\nsubclassed to return a full representation of the related object on read.")).optional()
}