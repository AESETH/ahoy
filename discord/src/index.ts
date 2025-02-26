import dotenv from 'dotenv'
import Captain from './captain'
import ahoyIdl from './ahoy.json'
import { version } from '../package.json'

dotenv.config()

const captain = new Captain(version, {
  acceptedGms: process.env.ACCEPTED_GMS!.split(','),
  channelId: process.env.CHANNEL_ID!,
  clusterEndpoint: process.env.CLUSTER_ENDPOINT!,
  idl: ahoyIdl,
  keypairPath: process.env.KEYPAIR_PATH!
})

captain.initialize().then(() => captain.run(process.env.DISCORD_TOKEN!))
