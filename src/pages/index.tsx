/* eslint-disable require-jsdoc */
import Head from 'next/head';

export default function Home() {
	console.log('hello');

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<p className='text-5xl'>Hello</p>
			</main>
		</>
	);
}
