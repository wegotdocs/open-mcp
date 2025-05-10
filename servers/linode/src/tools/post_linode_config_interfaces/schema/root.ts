import { z } from "zod"

export const inputParams = {
  "ids": z.array(z.number().int().describe("__Read-only__ The unique ID representing this interface.").readonly()).describe("An ordered array of existing Configuration Profile Interface `id`s.\n\n- All current Interface `id`s must be present in the array.\n- If the Configuration Profile contains Interfaces and is active on the Linode, the Linode must first be shut down prior to running this operation.\n- Reordering takes effect after rebooting the Linode with this Configuration Profile.\n\nThe position in the array determines which of the Linode's network Interfaces is configured:\n\n- First [0]:  eth0\n- Second [1]: eth1\n- Third [2]:  eth2")
}