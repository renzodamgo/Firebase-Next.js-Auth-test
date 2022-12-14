import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {AuthContextProvider} from '../context/authContext'
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<Component {...pageProps} />
		</AuthContextProvider>
	)
}

export default MyApp
