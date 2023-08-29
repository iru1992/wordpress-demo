import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {

	const { color, width } = attributes

	const blockprops = useBlockProps.save({
		className : "homey-line-block"
	})

	return (
		<div
			{ ...blockprops }
			style={{
				borderBottom: `${width}px solid ${color}`,
				width: `20%`
			}}
		/>
	);
}
