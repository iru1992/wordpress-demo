
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, PanelBody, RangeControl } from '@wordpress/components';


export default function Edit( { attributes, setAttributes }  ) {

	const { 
			contentFirst, 
			contentSecond, 
			contentThird, 
			contentFourth, 
			contentFifth, 
			contentSixth,
			amount,
			color
		} = attributes

	const colors = [
		{ name: 'Red', color: '#D58A51'},
		{ name: 'Grey', color: '#ECECEC'},
		{ name: 'Black', color: '#313131'}
	];

	const blockprops = useBlockProps({
		className: "homey-horizontal-list-block"
	})

	return (

		<>

			<InspectorControls>
				<PanelBody
					title={ __('Text color', 'homey') }
				>
					<ColorPalette
						value={ color }
						colors={ colors }
						onChange={ newColor => setAttributes( { color : newColor} )}
					/>
				</PanelBody>
				<PanelBody
					title={ __('Amount of items', 'homey') }
				>
					<RangeControl
						initialPosition={ 3 }
						min={ 1 }
						max={ 6 }
						onChange={ newAmount => setAttributes( { amount : newAmount } )}
					/>
				</PanelBody>
			</InspectorControls>


			<ul {...blockprops}>
				<RichText 
					tagName='li'
					placeholder='Enter here...'
					value={ contentFirst }
					onChange={ newValue => setAttributes( { contentFirst : newValue } )}
					style={{ color: `${color}`}}
				/>
				{ amount >= 2 &&
					<RichText 
						tagName='li'
						placeholder='Enter here...'
						value={ contentSecond }
						onChange={ newValue => setAttributes( { contentSecond : newValue } )}
						style={{ color: `${color}`}}
					/>
				}
				{ amount >= 3 &&
					<RichText 
						tagName='li'
						placeholder='Enter here...'
						value={ contentThird }
						onChange={ newValue => setAttributes( { contentThird : newValue } )}
						style={{ color: `${color}`}}
					/>
				}
				{ amount >= 4 &&
					<RichText 
						tagName='li'
						placeholder='Enter here...'
						value={ contentFourth }
						onChange={ newValue => setAttributes( { contentFourth : newValue } )}
						style={{ color: `${color}`}}
					/>
				}
				{amount >= 5 &&
					<RichText 
						tagName='li'
						placeholder='Enter here...'
						value={ contentFifth }
						onChange={ newValue => setAttributes( { contentFifth : newValue } )}
						style={{ color: `${color}`}}
					/>
				}
				{amount >= 6 &&
					<RichText 
						tagName='li'
						placeholder='Enter here...'
						value={ contentSixth }
						onChange={ newValue => setAttributes( { contentSixth : newValue } )}
						style={{ color: `${color}`}}
					/>
				}
			</ul>
		</>
	);
}
