import { z } from "zod"

export const toolName = `points`
export const toolDescription = `Point-to-multipoint path profile analysis (Many Tx, one Rx)`
export const baseUrl = `https://api.cloudrf.com`
export const path = `/points`
export const method = `post`
export const security = [
  {
    "key": "key",
    "value": "<mcp-env-var>KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "KEY",
    "schemeType": "apiKey",
    "schemeName": "key"
  }
]

export const inputParams = z.object({ "body": z.object({ "antenna": z.object({ "ant": z.number().int().describe("Antenna pattern code. 1=Vertical dipole (Omni-directional)"), "azi": z.number().int().gte(0).lte(360).describe("Antenna azimuth in degrees north"), "hbw": z.number().int().gte(0).lte(360).describe("Custom antenna horizontal beamwidth in degrees. For use only with ant=0"), "pol": z.enum(["h","v"]).describe("Antenna polarization as either h or v"), "tlt": z.number().gte(-10).lte(90).describe("Antenna tilt in degrees below the horizon (inverted)"), "txg": z.number().gte(-10).lte(60).describe("Transmitter antenna gain in dBi"), "txl": z.number().gte(0).lte(60).describe("Feeder loss in dB"), "vbw": z.number().int().gte(0).lte(360).describe("Custom antenna vertical beamwidth in degrees. For use only with ant=0") }).optional(), "environment": z.object({ "cll": z.number().int().gte(1).lte(2).describe("Clutter loss. 0=None/DSM only, 1=Hard / LOS mode, 2=Soft / NLOS mode"), "clm": z.number().int().gte(1).lte(2).describe("Clutter mode. 0=None/DSM only, 1=System & custom clutter, 2=Custom clutter only"), "mat": z.number().gte(0.1).lte(9).describe("Clutter attenuation override in dB/m based on a tree block OR hollow building. Light foliage=0.1dB/m, brick=1.0dB/m, concrete=5dB/m") }).optional(), "model": z.object({ "cli": z.number().int().gte(1).lte(7).describe("Radio climate for ITM model (1). 1: Equatorial (Congo) 2: Continental Subtropical (Sudan) 3: Maritime Subtropical (West coast of Africa) 4: Desert (Sahara) 5: Continental Temperate 6: Maritime Temperate, over land (UK and west coasts of US & EU) 7: Maritime Temperate, over sea"), "ked": z.number().int().gte(0).lte(1).describe("Knife edge diffraction for enhancing basic empirical models (Already in ITM)"), "pe": z.number().int().gte(1).lte(3).describe("Propagation model subtype/environment. 1=Conservative/Urban,2=Average/Suburban,3=Optimistic/rural"), "pm": z.number().int().gte(1).lte(20).describe("Propagation model. 1=Irregular Terrain Model, 2=Line of Sight (LOS), 3=Hata, 4=ECC33, 5=SUI Microwave, 6=COST231, 7=Free space path loss, 9=Ericsson9999, 10=Plane earth loss, 11=Egli."), "rel": z.number().int().gte(50).lte(99).describe("ITM model required reliability as %"), "ter": z.number().int().gte(1).lte(6).describe("Terrain code for ITM model (1). 1=Water,2=Wet ground,3=Farmland,4=Forest/Average,5=Mountain/Sand,6=City/Poor ground") }).optional(), "network": z.string().min(1).max(24).describe("Network name/group"), "output": z.object({ "ber": z.number().int().gte(0).lte(10).describe("Bit error rate. 1=0.1, 2=0.01, 3=0.001, 4=0.0001,5=0.00001,6=0.000001. >6=Lora: 7=SF7,8=SF8,9=SF9,10=SF10,11=SF11,12=SF12"), "col": z.string().describe("Colour schema code OR filename. 1 = Cellular (5), 2=Red, 3=Green, 4=Blue, 5=Microwave(7), 7=Custom RGB, 8=Automatic by frequency, 9=Greyscale / GIS, 10=Rainbow(24), 11=Green/Blue/Red, 13=Sub noise floor (10), 14=TV broadcasting (4), 15=Red threshold, 16=Green threshold, 17=Blue threshold. RAINBOW.dBm, CUSTOMSCHEMA.dBm.."), "mod": z.number().int().gte(1).lte(11).describe("Modulation. 1=4QAM,2=16QAM,3=64QAM,4=256QAM,5=1024QAM,6=BPSK,7=QPSK,8=8PSK,9=16PSK,10=32PSK,11=LoRa"), "nf": z.number().int().gte(-120).lte(-90).describe("Noise floor in dBm for use with out=4 / SNR"), "out": z.number().int().gte(1).lte(4).describe("Measured units. 1=dB,2=dBm,3=dBuV,4=SNR"), "rad": z.number().gte(0.03).lte(300).describe("Radius in kilometres for output"), "res": z.number().int().gte(2).lte(200).describe("Resolution in metres for output"), "units": z.enum(["metric","imperial"]).describe("Distance units in either metres/kilometres (metric) or feet/miles (imperial)") }).optional(), "points": z.array(z.object({ "alt": z.number().gte(0.1).lte(60000).describe("Altitude above ground level in metres OR feet"), "lat": z.number().gte(-89).lte(89).describe("Latitude in decimal degrees"), "lon": z.number().gte(-180).lte(180).describe("Longitude in decimal degrees") })).optional(), "receiver": z.object({ "alt": z.number().gte(0.1).lte(60000).describe("Altitude above ground level in metres OR feet"), "lat": z.number().gte(-89).lte(89).describe("Latitude in decimal degrees"), "lon": z.number().gte(-180).lte(180).describe("Longitude in decimal degrees"), "rxg": z.number().gte(-10).lte(60).describe("Receiver antenna gain in dBi"), "rxs": z.number().gte(-140).lte(200).describe("Receiver sensitivity/threshold in measured units defined by 'out' param") }).optional(), "site": z.string().min(1).max(24).describe("Site name"), "transmitter": z.object({ "alt": z.number().gte(0.1).lte(60000).describe("Altitude above ground level in metres OR feet"), "bwi": z.number().gte(0.1).lte(100).describe("Bandwidth in MHz. 1MHz has a noise floor of -114dBm. 10MHz = -104dBm, 20MHz = -101dBm"), "frq": z.number().gte(1).lte(100000).describe("Centre frequency in megahertz"), "lat": z.number().gte(-89).lte(89).describe("Latitude in decimal degrees"), "lon": z.number().gte(-180).lte(180).describe("Longitude in decimal degrees"), "txw": z.number().gte(0.001).lte(2000000).describe("Transmitter power in watts before the antenna") }).optional() }).optional() }).shape