import React from 'react'
import { GetStaticProps } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'

import { getAllEssays, getEssayBySlug } from '@/utils/index'

import type { Post } from '@/types/index'

export const getStaticPaths = () => {
	const essays = getAllEssays()
	const paths = essays.map(({ slug }) => ({
		params: {
			slug,
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<Post> = async ({ params }) => {
	const slug = params?.slug as string
	const essay = await getEssayBySlug(slug)

	return { props: essay }
}

const Essay = ({ meta, code }: Post) => {
	const Component = React.useMemo(() => getMDXComponent(code), [code])

	return (
		<>
			<h2>Essay</h2>
			<Component />
		</>
	)
}

export default Essay
