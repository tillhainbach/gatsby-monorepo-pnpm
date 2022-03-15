import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://www.deepfrozenstudios.de',
  },
  plugins: ['gatsby-plugin-pnpm', '@chakra-ui/gatsby-plugin'],
};

export default config;
