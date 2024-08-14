import { colors } from '@/constants/tokens'
import { useEffect, useState } from 'react'
import { getColors } from 'react-native-image-colors'
import { AndroidImageColors, IOSImageColors } from 'react-native-image-colors/build/types'

export const usePlayerBackground = (imageUrl: string) => {
	const [ImageColors, setImageColors] = useState<AndroidImageColors | null>(null)

	useEffect(() => {
		console.log('hii',imageUrl);
		getColors(imageUrl, {
			fallback: colors.background,
			cache: true,
			key: imageUrl,
		}).then((colors) => setImageColors(colors as AndroidImageColors))
		console.log('hii',imageUrl);
	}, [imageUrl])

	return { ImageColors }
}
