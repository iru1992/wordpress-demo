import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette, RangeControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {


	const { 
			amount, 
			textColor, 
			backgroundColor, 
			titleOne, 
			titleTwo, 
			titleThree, 
			titleFour, 
			titleFive, 
			contentOne, 
			contentTwo, 
			contentThree, 
			contentFour, 
			contentFive 
		} = attributes;

	const colors = [
		{ name: 'Red', color: '#D58A51'},
		{ name: 'Grey', color: '#ECECEC'},
		{ name: 'Black', color: '#313131'}
	];

	const blockprops = useBlockProps({
		className: "homey-accordion"
	});


	return (
		<>
			<InspectorControls>
				<PanelBody 
					title={ __('Background color', 'homey') }
				>
					<ColorPalette 
						colors={ colors }
						value={ backgroundColor }
						onChange={ newColor => { setAttributes( { backgroundColor : newColor } ) }}
					/>
				</PanelBody>
				<PanelBody
					title={ __('Text color', 'homey')}
				>
					<ColorPalette 
						colors={ colors }
						value={ textColor }
						onChange={ newColor => { setAttributes( { textColor : newColor } ) }}
					/>
				</PanelBody>
				<PanelBody
					title={ __('Number of items', 'homey') }
				>
					<RangeControl
						initialPosition={2}
						min={1}
						max={5}
						value={ amount }
						onChange={ newValue => { setAttributes( { amount : newValue} )}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockprops}>
				<div className="homey-accordion-item">
					<div className="homey-accordion-title" style={ { backgroundColor: `${backgroundColor}` } }>
						<RichText
							tagName='h2'
							value={ titleOne }
							onChange={ newValue => { setAttributes ( { titleOne : newValue })}}
							style={ {color: `${textColor}`} }
						/>
						<p className="homey-accordion-toggle" style={ { color: `${textColor}` }}>+</p>
					</div>
					<div className="homey-accordion-text">
						<RichText
							tagName='p'
							value={ contentOne }
							onChange={ newValue => { setAttributes ( { contentOne : newValue })}}
						/>
					</div>
				</div>
				{amount >= 2 &&
					<div className="homey-accordion-item">
						<div className="homey-accordion-title" style={ { backgroundColor: `${backgroundColor}` }}>
							<RichText
								tagName='h2'
								value={ titleTwo }
								onChange={ newValue => { setAttributes ( { titleTwo : newValue })}}
								style={ {color: `${textColor}`} }
							/>
							<p className="homey-accordion-toggle" style={ { color: `${textColor}` }}>+</p>
						</div>
						<div className="homey-accordion-text">
							<RichText
								tagName='p'
								value={ contentTwo }
								onChange={ newValue => { setAttributes ( { contentTwo : newValue })}}
							/>
						</div>
					</div>
				}
				{amount >= 3 &&
					<div className="homey-accordion-item">
						<div className="homey-accordion-title" style={ { backgroundColor: `${backgroundColor}` }}>
							<RichText
								tagName='h2'
								value={ titleThree }
								onChange={ newValue => { setAttributes ( { titleThree : newValue })}}
								style={ {color: `${textColor}`} }
							/>
							<p className="homey-accordion-toggle" style={ { color: `${textColor}`} }>+</p>
						</div>
						<div className="homey-accordion-text">
							<RichText
								tagName='p'
								value={ contentThree }
								onChange={ newValue => { setAttributes ( { contentThree : newValue })}}
							/>
						</div>
					</div>
				}
				{amount >= 4 &&
					<div className="homey-accordion-item">
						<div className="homey-accordion-title" style={ { backgroundColor: `${backgroundColor}` }}>
							<RichText
								tagName='h2'
								value={ titleFour }
								onChange={ newValue => { setAttributes ( { titleFour : newValue })}}
								style={ {color: `${textColor}`} }
							/>
							<p className="homey-accordion-toggle" style={ { color: `${textColor}` } }>+</p>
						</div>
						<div className="homey-accordion-text">
							<RichText
								tagName='p'
								value={ contentFour }
								onChange={ newValue => { setAttributes ( { contentFour : newValue })}}
							/>
						</div>
					</div>
				}
				{amount >= 5 &&
					<div className="homey-accordion-item">
						<div className="homey-accordion-title" style={ { backgroundColor: `${backgroundColor}` } }>
							<RichText
								tagName='h2'
								value={ titleFive }
								onChange={ newValue => { setAttributes ( { titleFive : newValue })}}
								style={ {color: `${textColor}`} }
							/>
							<p className="homey-accordion-toggle" style={ {color: `${textColor}`} }>+</p>
						</div>
						<div className="homey-accordion-text">
							<RichText
								tagName='p'
								value={ contentFive }
								onChange={ newValue => { setAttributes ( { contentFive : newValue })}}
							/>
						</div>
					</div>
				}
			</div>
		</>
	);
}
