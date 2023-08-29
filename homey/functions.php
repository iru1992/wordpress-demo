<?php

// Includes
require_once( get_theme_file_path('/includes/enqueue.php') );
require_once( get_theme_file_path('/includes/theme-support.php') );

// Hooks
add_action( 'wp_enqueue_scripts', 'homey_enqueue_scripts' );
add_action( 'wp_enqueue_scripts', 'homey_enqueue_google_fonts' );
add_action( 'after_setup_theme', 'homey_theme_support' );
