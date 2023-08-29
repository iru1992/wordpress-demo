<?php

function homey_enqueue_scripts() {
    wp_register_style (
        'homeystyles',
        get_theme_file_uri( 'style.css' )
    );

    wp_enqueue_style (
        'homeystyles',
        get_theme_file_uri( 'style.css' )
    );
}

function homey_enqueue_google_fonts() {
    wp_register_style (
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Dancing+Script'
    );

    wp_enqueue_style (
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Dancing+Script'
    );
}
