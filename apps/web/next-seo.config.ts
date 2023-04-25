import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: 'SleepySwap | SLOTH',
  defaultTitle: 'SleepySwap',
  description:
    'SleepySwap is a decentralized exchange (DEX) built on the Binance Smart Chain (BSC). It is designed to provide users with a secure, fast, and low-cost platform for trading cryptocurrencies. SleepySwap allows users to trade a wide range of tokens with each other without the need for a centralized intermediary.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@SlothMeme.BSC',
    site: '@SlothMeme.com',
  },
  openGraph: {
    title: 'SleepySwap',
    description:
      'SleepySwap is a decentralized exchange (DEX) built on the Binance Smart Chain (BSC). It is designed to provide users with a secure, fast, and low-cost platform for trading cryptocurrencies. SleepySwap allows users to trade a wide range of tokens with each other without the need for a centralized intermediary.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
