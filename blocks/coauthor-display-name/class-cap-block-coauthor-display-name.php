<?php
/**
 * Co-Author Display Name Block 
 * 
 * @package Co-Authors Plus
 */

/**
 * CAP Block CoAuthor Display Name
 */
class CAP_Block_CoAuthor_Display_Name {
	/**
	 * Construct
	 */
	public function __construct() {
		add_action( 'init', array( __CLASS__, 'register_block' ) );
	}
	/**
	 * Register Block
	 */
	public static function register_block() : void {
		register_block_type(
			__DIR__ . '/build',
			array(
				'render_callback' => array( __CLASS__, 'render_block' ),
			)
		);
	}
	/**
	 * Render Block
	 * 
	 * @param array $attributes
	 * @param string $content
	 * @param WP_Block $block
	 * @return string
	 */
	public static function render_block( array $attributes, string $content, WP_Block $block ) : string {
		return array_key_exists( 'displayName', $block->context ) ? $block->context['displayName'] : '';
	}
}
