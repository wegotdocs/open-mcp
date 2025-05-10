import { z } from "zod"

export const inputParams = {
  "allow_list": z.array(z.string().regex(new RegExp("^([0-9]{1,3}\\.){3}[0-9]{1,3}(\\/([0-9]|[1-2][0-9]|3[0-2]))?$"))).describe("Controls access to the Managed Database.\n\n- Individually included IP addresses or CIDR ranges can access the Managed Database while all other sources are blocked.\n\n- A standalone value of `0.0.0.0/0` allows all IP addresses access to the Managed Database.\n\n- An empty array (`[]`) blocks all public and private connections to the Managed Database.").optional(),
  "cluster_size": z.union([z.literal(1), z.literal(2), z.literal(3)]).describe("The number of Linode instance nodes deployed to the Managed Database.\n\n - Choose `3` nodes to create a high availability cluster that consists of one primary node and two replica nodes.\n\n- A `2` node cluster is only available with a dedicated plan. It consists of one primary node and one replica node.").optional(),
  "engine": z.string().describe("The Managed Database engine in engine/version format."),
  "fork": z.string().optional(),
  "label": z.string().min(3).max(32).describe("__Filterable__ A unique, user-defined string referring to the Managed Database. This string needs to be unique per Managed Database engine type."),
  "region": z.string().describe("__Filterable__ The [Region](https://techdocs.akamai.com/linode-api/reference/get-regions) ID for the Managed Database."),
  "ssl_connection": z.boolean().describe("Currently required to be `true`. Whether to require SSL credentials to establish a connection to the Managed Database.\n\nRun the [Get managed MySQL database credentials](https://techdocs.akamai.com/linode-api/reference/get-databases-mysql-instance-credentials) operation for access information.").optional(),
  "type": z.string().describe("__Filterable__ The Linode Instance type used by the Managed Database for its nodes.")
}