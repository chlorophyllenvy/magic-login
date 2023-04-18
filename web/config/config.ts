import { environments } from './environments'

const defaultConfig = {
  // Application
  env: process.env.NODE_ENV || environments.development,
  blockchain: process.env.NEXT_PUBLIC_CHAIN || 'mumbai',

  // Chain
  chainId: process.env.NEXT_PUBLIC_CHAIN === 'ethereum' ? 1 : 80001,

  // Magic Link
  magicLinkApiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY || '',
  magicLinkRpcUrl: process.env.NEXT_PUBLIC_MAGIC_LINK_RPC_URL || 'https://polygon-rpc.com',
  magicLinkChainId: process.env.NEXT_PUBLIC_MAGIC_LINK_CHAIN_ID || '137',
}

export const config: typeof defaultConfig = defaultConfig
