import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {

	const { color, width } = attributes

	const colors = [
		{ name: 'Red', color: '#D58A51'},
		{ name: 'Grey', color: '#ECECEC'},
		{ name: 'Black', color: '#313131'}
	]

	const blockProps = useBlockProps({
		className: "homey-line-block"
	})

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __('Line color', 'homey') }
				>
					<ColorPalette 
						colors={ colors }
						value={ color }
						onChange={ newColor => { setAttributes( { color : newColor } ) }}
					/>
				</PanelBody>
				<PanelBody
					title={ __('Line width', 'homey') }
				>
					<RangeControl
						initialPosition={ 3 }
						min={ 0 }
						max={ 20 }
						value={ width }
						onChange={ newWidth => { setAttributes( { width : newWidth } ) }}
					/>
				</PanelBody>
			</InspectorControls>
			<div
				{ ...blockProps }
				style={{
					borderBottom: `${width}px solid ${color}`,
					width: `20%`
				}}
			/>
		</>
	);
}
