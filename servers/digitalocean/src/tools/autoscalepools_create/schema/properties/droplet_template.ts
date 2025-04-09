import { z } from "zod"

export const inputParams = {
  "name": z.string().describe("The name(s) to be applied to all Droplets in the autoscale pool.").optional(),
  "region": z.enum(["nyc1","nyc2","nyc3","ams2","ams3","sfo1","sfo2","sfo3","sgp1","lon1","fra1","tor1","blr1","syd1"]).describe("The datacenter in which all of the Droplets will be created."),
  "size": z.string().describe("The Droplet size to be used for all Droplets in the autoscale pool."),
  "image": z.string().describe("The Droplet image to be used for all Droplets in the autoscale pool. You may specify the slug or the image ID."),
  "ssh_keys": z.array(z.string()).describe("The SSH keys to be installed on the Droplets in the autoscale pool. You can either specify the key ID or the fingerprint."),
  "tags": z.array(z.string()).describe("The tags to apply to each of the Droplets in the autoscale pool.").optional(),
  "vpc_uuid": z.string().describe("The VPC where the Droplets in the autoscale pool will be created. The VPC must be in the region where you want to create the Droplets.").optional(),
  "with_droplet_agent": z.boolean().describe("Installs the Droplet agent. This must be set to true to monitor Droplets for resource utilization scaling.").optional(),
  "project_id": z.string().describe("The project that the Droplets in the autoscale pool will belong to.").optional(),
  "ipv6": z.boolean().describe("Assigns a unique IPv6 address to each of the Droplets in the autoscale pool.").optional(),
  "user_data": z.string().describe("A string containing user data that cloud-init consumes to configure a Droplet on first boot. User data is often a cloud-config file or Bash script. It must be plain text and may not exceed 64 KiB in size.").optional()
}