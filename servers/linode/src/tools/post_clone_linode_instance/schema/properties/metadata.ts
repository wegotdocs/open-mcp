import { z } from "zod"

export const inputParams = {
  "user_data": z.string().describe("Base64-encoded [cloud-config](https://www.linode.com/docs/products/compute/compute-instances/guides/metadata-cloud-config/) data.\n\nCannot be modified after provisioning. To update, use either the [Clone a Linode](https://techdocs.akamai.com/linode-api/reference/post-clone-linode-instance) or [Rebuild a Linode](https://techdocs.akamai.com/linode-api/reference/post-rebuild-linode-instance) operations.\n\nMust not be included when cloning to an existing Linode.\n\nUnencoded data must not exceed 65535 bytes, or about 16kb encoded.").optional()
}