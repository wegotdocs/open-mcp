import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("The name of a specific object to get its access control list (ACL) details. Run the [List Object Storage bucket contents](https://techdocs.akamai.com/linode-api/reference/get-object-storage-bucket-content) operation to access all object names in a bucket.")
}