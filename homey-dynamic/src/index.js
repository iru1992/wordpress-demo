import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import homeyIcon from './icon.js';

registerBlockType( metadata.name, {

	icon: homeyIcon.primary,
	edit: Edit,
	
} );
