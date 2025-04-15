import { z } from "zod"

export const inputParams = {
  "deploymentType": z.enum(["all","preview","production","prod_deployment_urls_and_all_previews"]).describe("Specify if the Trusted IPs will apply to every Deployment Target or just Preview"),
  "addresses": z.array(z.object({ "value": z.string().describe("The IP addresses that are allowlisted. Supports IPv4 addresses and CIDR notations. IPv6 is not supported"), "note": z.string().max(20).describe("An optional note explaining what the IP address or subnet is used for").optional() }).strict()).min(1),
  "protectionMode": z.enum(["exclusive","additional"]).describe("exclusive: ip match is enough to bypass deployment protection (regardless of other settings). additional: ip must match + any other protection should be also provided (password, vercel auth, shareable link, automation bypass header, automation bypass query param)")
}