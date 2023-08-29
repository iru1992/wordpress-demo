import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {

	const { 
		color, 
		amount, 
		contentFirst, 
		contentSecond, 
		contentThird, 
		contentFourth, 
		contentFifth, 
		contentSixth 
	} = attributes

	const blockprops = useBlockProps.save({
		className: "homey-horizontal-list-block"
	})


	return (
		<ul {...blockprops}>
			<li style={{ color: `${color}`}} >{ __(contentFirst, 'homey') }</li>
			{ amount >= 2 &&
				<li style={{ color: `${color}`}} >{ __(contentSecond, 'homey') }</li>
			}
			{ amount >= 3 &&
				<li style={{ color: `${color}`}} >{ __(contentThird, 'homey') }</li>
			}
			{ amount >= 4 &&
				<li style={{ color: `${color}`}} >{ __(contentFourth, 'homey') }</li>
			}
			{ amount >= 5 &&
				<li style={{ color: `${color}`}} >{ __(contentFifth, 'homey') }</li>
			}
			{ amount >= 6 &&
				<li style={{ color: `${color}`}} >{ __(contentSixth, 'homey') }</li>
			}
		</ul>
	);
}