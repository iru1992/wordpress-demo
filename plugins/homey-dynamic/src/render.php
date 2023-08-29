<?php 

// Content
$titleOne = esc_html($attributes["titleOne"]);
$titleTwo = esc_html($attributes["titleTwo"]);
$titleThree = esc_html($attributes["titleThree"]);
$titleFour = esc_html($attributes["titleFour"]);
$titleFive = esc_html($attributes["titleFive"]);

$contentOne = esc_html($attributes["contentOne"]);
$contentTwo = esc_html($attributes["contentTwo"]);
$contentThree = esc_html($attributes["contentThree"]);
$contentFour = esc_html($attributes["contentFour"]);
$contentFive = esc_html($attributes["contentFive"]);

// Styles
$backgroundColor = esc_attr($attributes["backgroundColor"]);
$textColor = esc_attr($attributes["textColor"]);

// Number of items
$amount = esc_attr($attributes["amount"]);

?>


<div class="homey-accordion">
	<div class="homey-accordion-item">
		<div class="homey-accordion-title" style="background-color: <?php echo $backgroundColor; ?>">
			<h2 style="color: <?php echo $textColor; ?>"><?php echo __($titleOne, 'homey'); ?></h2>
			<p class="homey-accordion-toggle homey-toggle" style="color: <?php echo $textColor; ?>">+</p>
		</div>
		<div class="homey-accordion-text homey-hide homey-show">
			<p><?php echo __($contentOne, 'homey'); ?></p>
		</div>
	</div>
	<?php 
		if ( $amount >= 2 ) {
	?>
	<div class="homey-accordion-item">
		<div class="homey-accordion-title" style="background-color: <?php echo $backgroundColor; ?>">
			<h2 style="color: <?php echo $textColor; ?>"><?php echo __($titleTwo, 'homey'); ?></h2>
			<p class="homey-accordion-toggle" style="color: <?php echo $textColor; ?>">+</p>
		</div>
		<div class="homey-accordion-text homey-hide">
			<p><?php echo __($contentTwo, 'homey'); ?></p>
		</div>
	</div>
	<?php } ?>
	<?php 
		if ( $amount >= 3 ) {
	?>
	<div class="homey-accordion-item">
		<div class="homey-accordion-title" style="background-color: <?php echo $backgroundColor; ?>">
			<h2 style="color: <?php echo $textColor; ?>"><?php echo __($titleThree, 'homey'); ?></h2>
			<p class="homey-accordion-toggle" style="color: <?php echo $textColor; ?>">+</p>
		</div>
		<div class="homey-accordion-text homey-hide">
			<p><?php echo __($contentThree, 'homey'); ?></p>
		</div>
	</div>
	<?php } ?>
	<?php 
		if ( $amount >= 4 ) {
	?>
	<div class="homey-accordion-item">
		<div class="homey-accordion-title" style="background-color: <?php echo $backgroundColor; ?>">
			<h2 style="color: <?php echo $textColor; ?>"><?php echo __($titleFour, 'homey'); ?></h2>
			<p class="homey-accordion-toggle" style="color: <?php echo $textColor; ?>">+</p>
		</div>
		<div class="homey-accordion-text homey-hide">
			<p><?php echo __($contentFour, 'homey'); ?></p>
		</div>
	</div>
	<?php } ?>
	<?php 
		if ( $amount >= 5 ) {
	?>
	<div class="homey-accordion-item">
		<div class="homey-accordion-title" style="background-color: <?php echo $backgroundColor; ?>">
			<h2 style="color: <?php echo $textColor; ?>"><?php echo __($titleFive, 'homey'); ?></h2>
			<p class="homey-accordion-toggle" style="color: <?php echo $textColor; ?>">+</p>
		</div>
		<div class="homey-accordion-text homey-hide">
			<p><?php echo __($contentFive, 'homey'); ?></p>
		</div>
	</div>
	<?php } ?>
</div>

