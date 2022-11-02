import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
// using require here because of bug: https://github.com/FortAwesome/Font-Awesome/issues/19348
const { library, config } = require('@fortawesome/fontawesome-svg-core');

// font awesome icons setup
config.autoAddCss = false;
library.add(fas, fab);

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
