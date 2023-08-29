import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import homeyIcon from './icon.js';

registerBlockType( metadata.name, {

	icon: homeyIcon.primary,
	edit: Edit,
	save,
	
} );
