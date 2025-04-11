import { z } from "zod"

export const inputParams = {
  "control_plane": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `control_plane` to the tool, first call the tool `expandSchema` with \"/properties/control_plane\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Defines settings for the Kubernetes control plane, including High Availability (HA) and an IP-based Access Control List (ACL) for the control plane components.\n\nWhen upgrading pre-existing LKE clusters to use the HA Control Plane, the following changes will additionally occur:\n\n- All nodes will be deleted and new nodes will be created to replace them.\n\n- Any local storage (such as `hostPath` volumes) will be erased.\n\n- The upgrade process may take several minutes to complete, as nodes will be replaced on a rolling basis.\n\nWhen upgrading pre-existing LKE clusters to use the control plane ACL for the first time, it may take several hours for external clients to respect the access control settings. This is partly due to delays from DNS propagation.</property-description>").optional(),
  "k8s_version": z.string().describe("The desired Kubernetes version for this Kubernetes cluster in the format of &lt;major&gt;.&lt;minor&gt;. New and recycled Nodes in this cluster will be installed with the latest available patch for the Cluster's Kubernetes version.\n\nWhen upgrading the Kubernetes version, only the next latest minor version following the current version can be deployed. For example, a cluster with Kubernetes version 1.29 can be upgraded to version 1.30, but not directly to 1.31.\n\nThe Kubernetes version of a cluster can not be downgraded.").optional(),
  "label": z.string().min(1).max(32).describe("__Filterable__ This Kubernetes cluster's unique label for display purposes only. Labels have the following constraints:\n\n  - UTF-8 characters will be returned by the API using escape sequences of their Unicode code points. For example, the Japanese character _か_ is 3 bytes in UTF-8 (`0xE382AB`). Its Unicode code point is 2 bytes (`0x30AB`). APIv4 supports this character and the API will return it as the escape sequence using six 1 byte characters which represent 2 bytes of Unicode code point (`\"\\u30ab\"`).\n\n  - 4 byte UTF-8 characters are not supported.\n\n  - If the label is entirely composed of UTF-8 characters, the API response will return the code points using up to 193 1 byte characters.").optional(),
  "tags": z.array(z.string()).describe("An array of tags applied to the Kubernetes cluster. Tags are for organizational purposes only. To delete a tag, exclude it from your `tags` array.").optional()
}