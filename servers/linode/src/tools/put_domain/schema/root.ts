import { z } from "zod"

export const inputParams = {
  "axfr_ips": z.array(z.string().ip()).describe("The list of IPs that may perform a zone transfer for this domain. The total combined length of all data within this array cannot exceed 1000 characters.\n\n> 📘\n>\n> This is potentially dangerous, and should be set to an empty list unless you intend to use it.").optional(),
  "description": z.string().min(1).max(253).nullable().describe("A description for this domain. This is for display purposes only.").optional(),
  "domain": z.string().regex(new RegExp("^(\\*\\.)?([a-zA-Z0-9-_]{1,63}\\.)+([a-zA-Z]{2,3}\\.)?([a-zA-Z]{2,16}|xn--[a-zA-Z0-9]+)$")).min(1).max(253).describe("__Filterable__ The domain this domain represents. domain labels cannot be longer than 63 characters and must conform to [RFC1035](https://tools.ietf.org/html/rfc1035). domains must be unique on Linode's platform, including across different Linode accounts; there cannot be two domains representing the same domain.").optional(),
  "expire_sec": z.number().int().describe("The amount of time in seconds that may pass before this domain is no longer authoritative.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 1209600.").optional(),
  "id": z.number().int().describe("__Read-only__ This domain's unique ID.").readonly().optional(),
  "master_ips": z.array(z.string().ip()).describe("The IP addresses representing the master DNS for this domain. At least one value is required for `type` slave domains. The total combined length of all data within this array cannot exceed 1000 characters.").optional(),
  "refresh_sec": z.number().int().describe("The amount of time in seconds before this domain should be refreshed.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 14400.").optional(),
  "retry_sec": z.number().int().describe("The interval, in seconds, at which a failed refresh should be retried.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 14400.").optional(),
  "soa_email": z.string().email().describe("Start of Authority email address. This is required for `type` master domains.").optional(),
  "status": z.enum(["disabled","active"]).describe("Used to control whether this domain is currently being rendered.").optional(),
  "tags": z.array(z.string()).describe("__Filterable__ An array of tags applied to this object.  Tags are for organizational purposes only.").optional(),
  "ttl_sec": z.number().int().describe("\"Time to Live\" - the amount of time in seconds that this domain's records may be cached by resolvers or other domain servers.\n\n- Valid values are 0, 30, 120, 300, 3600, 7200, 14400, 28800, 57600, 86400, 172800, 345600, 604800, 1209600, and 2419200.\n\n- Any other value is rounded up to the nearest valid value.\n\n- A value of 0 is equivalent to the default value of 86400.").optional(),
  "type": z.enum(["master","slave"]).describe("Whether this domain represents the authoritative source of information for the domain it describes (`master`), or whether it is a read-only copy of a master (`slave`).").optional()
}