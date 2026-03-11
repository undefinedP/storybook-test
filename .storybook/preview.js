import '../src/styles/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    // a11y 검사는 Chromatic 빌드에서 수행 (베이스라인 기준 회귀 추적)
    // 로컬에서는 Storybook Accessibility 탭에서 확인
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      },
    },
  },
};

export default preview;