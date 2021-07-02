import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

import { useHasMounted } from '@/hooks/index'

export const DarkMode = () => {
	const { resolvedTheme, setTheme } = useTheme()
	const hasMounted = useHasMounted()

	const label = resolvedTheme === 'dark' ? 'Activate light mode' : 'Activate dark mode'

	if (!hasMounted) return null

	const toggleTheme = () => {
		console.log({ resolvedTheme })
		setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
	}

	return (
		<>
			<button
				className="fixed bottom-12 right-12 focus:outline-none"
				type="button"
				title={label}
				aria-label={label}
				onClick={toggleTheme}
			>
				{resolvedTheme === 'light' ? (
					<MoonIcon className="w-8 h-8" />
				) : (
					<SunIcon className="w-8 h-8" />
				)}
			</button>
		</>
	)
}
