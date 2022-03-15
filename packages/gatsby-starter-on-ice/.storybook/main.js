module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-gatsby',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
