import { NextPage, InferGetStaticPropsType } from 'next'
import Link from 'next/link'

import { getAllEssays } from '@/utils/index'

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ essays }) => {
	return (
		<div className="wrapper">
			<h1 className="text-4xl">All Essays</h1>
			<ul>
				{essays.map((essay, index) => (
					<li key={index}>
						<Link href={`/essay/${essay.slug}`}>{essay.title}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export const getStaticProps = async () => {
	const essays = getAllEssays()

	return {
		props: { essays },
	}
}

export default Home
