<?php
/**
 * Plugin Name:       Homey Line Block
 * Description:       Adds a styled line to your pages or posts.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Koen Vleghels
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       homey
 *
 * @package           create-block
 */

defined( 'ABSPATH' ) || exit;

function create_block_homey_line_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'create_block_homey_line_block_block_init' );
