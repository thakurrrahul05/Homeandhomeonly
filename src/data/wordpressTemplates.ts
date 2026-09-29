export interface WordPressFile {
  filename: string;
  category: 'core' | 'templates' | 'styles';
  description: string;
  code: string;
}

export const WORDPRESS_THEME_FILES: WordPressFile[] = [
  {
    filename: 'style.css',
    category: 'styles',
    description: 'WordPress Theme Header Information & Core Stylesheet',
    code: `/*
Theme Name: HomeAndHomeOnly
Theme URI: https://homeandhomeonly.com
Author: HomeAndHomeOnly Team
Author URI: https://homeandhomeonly.com
Description: Clean, high-performance WordPress theme for smart home appliances, buying guides, and Indian home improvement solutions. Includes custom post types for Buying Guides & Home Problems.
Version: 1.0.0
Requires at least: 6.2
Tested up to: 6.7
Requires PHP: 8.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: homeandhomeonly
Tags: blog, e-commerce, custom-colors, custom-menu, featured-images, full-width-template, translation-ready
*/

:root {
  --color-pine: #075B4F;
  --color-pine-dark: #05443a;
  --color-coral: #E96B72;
  --color-cream: #F7F0E5;
  --color-mint: #EEF7F5;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-handwritten: 'Caveat', cursive;
}

body {
  font-family: var(--font-body);
  color: #1f2937;
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}

.font-handwritten {
  font-family: var(--font-handwritten);
}
`
  },
  {
    filename: 'functions.php',
    category: 'core',
    description: 'Theme setup, asset enqueuing, custom post types, and thumbnail sizes',
    code: `<?php
/**
 * HomeAndHomeOnly Theme Functions and Definitions
 *
 * @package HomeAndHomeOnly
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

function homeandhomeonly_setup() {
    // Make theme available for translation
    load_theme_textdomain( 'homeandhomeonly', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head
    add_theme_support( 'automatic-feed-links' );

    // Let WordPress manage document title
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 800, true );
    add_image_size( 'guide-thumb', 600, 400, true );
    add_image_size( 'category-card', 400, 300, true );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => esc_html__( 'Primary Header Menu', 'homeandhomeonly' ),
        'footer_explore' => esc_html__( 'Footer Explore Menu', 'homeandhomeonly' ),
        'footer_company' => esc_html__( 'Footer Company Menu', 'homeandhomeonly' ),
    ) );

    // HTML5 markup support
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Custom Logo
    add_theme_support( 'custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'homeandhomeonly_setup' );

/**
 * Enqueue scripts and styles
 */
function homeandhomeonly_scripts() {
    // Google Fonts: Plus Jakarta Sans, Inter, Caveat
    wp_enqueue_style( 'homeandhomeonly-fonts', 'https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap', array(), null );

    // Tailwind CSS via CDN or compiled build
    wp_enqueue_style( 'tailwindcss', 'https://cdn.tailwindcss.com?plugins=forms,container-queries', array(), '3.4.0' );

    // Main Theme Stylesheet
    wp_enqueue_style( 'homeandhomeonly-style', get_stylesheet_uri(), array(), '1.0.0' );

    // Navigation and interactive scripts
    wp_enqueue_script( 'homeandhomeonly-navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'homeandhomeonly_scripts' );

/**
 * Register Custom Post Types: Buying Guides & Home Problems
 */
function homeandhomeonly_register_cpt() {
    // 1. Buying Guides CPT
    register_post_type( 'buying_guide', array(
        'labels' => array(
            'name' => __( 'Buying Guides', 'homeandhomeonly' ),
            'singular_name' => __( 'Buying Guide', 'homeandhomeonly' ),
            'add_new' => __( 'Add New Guide', 'homeandhomeonly' ),
            'add_new_item' => __( 'Add New Buying Guide', 'homeandhomeonly' ),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array( 'slug' => 'buying-guides' ),
        'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt', 'custom-fields' ),
        'menu_icon' => 'dashicons-clipboard',
        'show_in_rest' => true,
    ) );

    // 2. Home Problems (Q&A / FAQs)
    register_post_type( 'home_problem', array(
        'labels' => array(
            'name' => __( 'Home Problems (Q&A)', 'homeandhomeonly' ),
            'singular_name' => __( 'Home Problem', 'homeandhomeonly' ),
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array( 'slug' => 'home-problems' ),
        'supports' => array( 'title', 'editor', 'custom-fields' ),
        'menu_icon' => 'dashicons-lightbulb',
        'show_in_rest' => true,
    ) );
}
add_action( 'init', 'homeandhomeonly_register_cpt' );
`
  },
  {
    filename: 'header.php',
    category: 'templates',
    description: 'Header template with brand logo, multi-level dropdowns, and search',
    code: `<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'bg-white text-gray-800 antialiased selection:bg-[#075B4F]/10 selection:text-[#075B4F]' ); ?>>
<?php wp_body_open(); ?>

<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
    <!-- Brand Logo Lockup -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="flex-shrink-0 flex items-center gap-2.5 group">
      <div class="w-10 h-10 flex-shrink-0">
        <svg class="w-full h-full" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 3L3 17V36C3 37.1046 3.89543 38 5 38H35C36.1046 38 37 37.1046 37 36V17L20 3Z" fill="#075B4F"/>
          <path d="M20 9L7 19.5V34H33V19.5L20 9Z" fill="#075B4F" stroke="#FFFFFF" stroke-width="2"/>
          <path d="M20 15C18.3431 15 17 16.3431 17 18C17 20.5 20 24 20 24C20 24 23 20.5 23 18C23 16.3431 21.6569 15 20 15Z" fill="#E96B72"/>
          <path d="M14 38V27H26V38" fill="#075B4F" stroke="#FFFFFF" stroke-width="2"/>
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="font-heading font-extrabold text-xl text-[#075B4F] tracking-tight leading-none">
          HomeAndHome<span class="text-[#E96B72]">Only</span>
        </span>
        <span class="text-[8.5px] font-semibold text-gray-500 tracking-[0.14em] mt-1 leading-none uppercase">
          SMART HOMES. HAPPIER LIVES.
        </span>
      </div>
    </a>

    <!-- Desktop Navigation Menu -->
    <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="px-3 py-1.5 text-sm font-semibold text-[#075B4F] relative">
        Home
        <span class="absolute bottom-0 left-3 right-3 h-0.5 bg-[#075B4F] rounded-full"></span>
      </a>
      <a href="<?php echo esc_url( home_url( '/category/kitchen-appliances' ) ); ?>" class="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors">Home Appliances</a>
      <a href="<?php echo esc_url( home_url( '/category/home-decor' ) ); ?>" class="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors">Home Decor</a>
      <a href="<?php echo esc_url( home_url( '/category/home-furnishing' ) ); ?>" class="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors">Home Furnishing</a>
      <a href="<?php echo esc_url( home_url( '/buying-guides' ) ); ?>" class="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors">Buying Guides</a>
      <a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-[#075B4F] transition-colors">Blog</a>
    </nav>

    <!-- Search Form -->
    <div class="flex items-center gap-3">
      <form role="search" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>" class="relative hidden sm:block w-64 md:w-72">
        <input type="search" name="s" class="w-full pl-4 pr-10 py-2 text-xs md:text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-[#075B4F] focus:ring-1 focus:ring-[#075B4F] transition placeholder:text-gray-400" placeholder="<?php esc_attr_e( 'Search articles, products, tips...', 'homeandhomeonly' ); ?>"/>
        <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#075B4F]">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>
        </button>
      </form>
    </div>
  </div>
</header>
`
  },
  {
    filename: 'front-page.php',
    category: 'templates',
    description: 'Front Page template rendering the exact layout with dynamic WP queries',
    code: `<?php
/**
 * Template Name: Home Page Template
 * Description: Main front page with Hero, Categories, Featured Buying Guides, Home Problems, Latest Articles, USP, and Community.
 *
 * @package HomeAndHomeOnly
 */

get_header(); ?>

<main id="primary" class="site-main">
  <!-- 1. Hero Section -->
  <section class="relative bg-gradient-to-b from-[#FFFDF9] to-[#FBF8F2] pt-8 pb-16 lg:py-16 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#075B4F]/10 text-[#075B4F] text-xs font-bold tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-[#E96B72]"></span>
            <?php esc_html_e( 'SMARTER HOME. BETTER CHOICES.', 'homeandhomeonly' ); ?>
          </div>
          <h1 class="font-heading text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-gray-900 leading-[1.12] tracking-tight">
            Helping Indian Homes Make Smarter <span class="text-[#075B4F] underline decoration-[#E96B72]/40 decoration-wavy underline-offset-8">Buying Decisions</span>
          </h1>
          <p class="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
            From kitchen appliances to everyday home essentials, we simplify confusing choices with practical tips, comparisons and buying guides.
          </p>
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a href="#featured-guides" class="inline-flex items-center justify-center gap-2 bg-[#075B4F] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#05443a] shadow-sm transition">
              Explore Buying Guides &rarr;
            </a>
            <a href="#latest-articles" class="inline-flex items-center justify-center bg-white border border-gray-300 text-gray-700 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
              Latest Home Tips
            </a>
          </div>
        </div>
        <!-- Right Image Column -->
        <div class="lg:col-span-6 relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
            <img src="<?php echo esc_url( get_theme_mod( 'hero_image', 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzfdmNcgL20uDQASfCHD8WDlJW5cNrUNAe-OCd-1JQKUO9j7xMFx9pyxAFiMejnqy3ddkTswptLrTfTYU9kPXB6Mal-CK64i3X_t3DMUo5SxF45MMEgkssYUaeuO3ZSzqq6EvEN8u97LJW2NjXFFW9fSovVjBj857H5HVh8J0C6Qb18y8R3ROkcCpuoBkXFOJxyBZrPakwCN8tLHG9Y3F9jK0AmJw4yCqnsDnq46EKrsBncWP-jqIeqA' ) ); ?>" class="w-full h-full object-cover" alt="Indian Home Living Room">
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-white/60">
              <span class="font-handwritten text-lg font-bold text-gray-800">A Happier Home Everyday</span>
              <span class="text-[#E96B72] text-sm">&hearts;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- 2. Category Grid, 3. Featured Guides, 4. Home Problems, 5. Articles, 6. Why Us, 7. Community -->
</main>

<?php get_footer(); ?>
`
  },
  {
    filename: 'single-buying_guide.php',
    category: 'templates',
    description: 'Single Buying Guide template with Comparison Matrix, Pros & Cons, and Verdict',
    code: `<?php
/**
 * Template for displaying single Buying Guides
 *
 * @package HomeAndHomeOnly
 */

get_header(); ?>

<main class="py-12 bg-white">
  <article class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mb-8">
      <span class="text-xs font-bold uppercase tracking-wider text-[#075B4F]">Buying Guide</span>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2"><?php the_title(); ?></h1>
      <p class="text-gray-500 text-sm mt-2">Tested by appliance experts &bull; Updated <?php the_modified_date(); ?></p>
    </div>

    <!-- Quick Verdict Banner -->
    <div class="bg-[#EEF7F5] border border-[#d2ebe5] p-6 rounded-2xl mb-10">
      <h3 class="font-heading font-bold text-[#075B4F] text-lg">Our Quick Verdict</h3>
      <p class="text-gray-700 text-sm mt-2 leading-relaxed"><?php echo get_post_meta( get_the_ID(), '_verdict', true ); ?></p>
    </div>

    <!-- Dynamic Products Loop with Pros/Cons and Specs -->
    <div class="prose max-w-none">
      <?php the_content(); ?>
    </div>
  </article>
</main>

<?php get_footer(); ?>
`
  },
  {
    filename: 'footer.php',
    category: 'templates',
    description: 'Footer template with 5-column navigation, social icons, and copyright',
    code: `<?php
/**
 * Footer template for HomeAndHomeOnly
 *
 * @package HomeAndHomeOnly
 */
?>
<footer class="bg-[#075B4F] text-white pt-16 pb-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
      <!-- Col 1: Brand Info -->
      <div class="lg:col-span-2 space-y-4">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="inline-flex items-center gap-2">
          <span class="font-heading font-extrabold text-xl text-white tracking-tight">HomeAndHome<span class="text-[#E96B72]">Only</span></span>
        </a>
        <p class="text-sm text-emerald-100 max-w-sm leading-relaxed">
          Practical home tips and buying guides for modern Indian homes.
        </p>
      </div>

      <!-- Col 2: Explore -->
      <div>
        <h4 class="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4"><?php esc_html_e( 'Explore', 'homeandhomeonly' ); ?></h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-emerald-100">
          <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="hover:text-white transition">Home</a></li>
          <li><a href="<?php echo esc_url( home_url( '/category/kitchen-appliances' ) ); ?>" class="hover:text-white transition">Home Appliances</a></li>
          <li><a href="<?php echo esc_url( home_url( '/category/home-decor' ) ); ?>" class="hover:text-white transition">Home Decor</a></li>
          <li><a href="<?php echo esc_url( home_url( '/category/home-furnishing' ) ); ?>" class="hover:text-white transition">Home Furnishing</a></li>
          <li><a href="<?php echo esc_url( home_url( '/buying-guides' ) ); ?>" class="hover:text-white transition">Buying Guides</a></li>
          <li><a href="<?php echo esc_url( home_url( '/blog' ) ); ?>" class="hover:text-white transition">Blog</a></li>
        </ul>
      </div>

      <!-- Col 3: Company -->
      <div>
        <h4 class="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4"><?php esc_html_e( 'Company', 'homeandhomeonly' ); ?></h4>
        <ul class="space-y-2.5 text-xs sm:text-sm text-emerald-100">
          <li><a href="#" class="hover:text-white transition">About Us</a></li>
          <li><a href="#" class="hover:text-white transition">Contact</a></li>
          <li><a href="#" class="hover:text-white transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white transition">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-white transition">Affiliate Disclosure</a></li>
        </ul>
      </div>

      <!-- Col 4: Stay in Touch -->
      <div>
        <h4 class="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300 mb-4"><?php esc_html_e( 'Stay in touch', 'homeandhomeonly' ); ?></h4>
        <div class="flex items-center gap-3">
          <a href="#" class="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors">IG</a>
          <a href="#" class="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors">YT</a>
          <a href="#" class="w-9 h-9 rounded-full bg-emerald-800/80 hover:bg-[#E96B72] text-white flex items-center justify-center transition-colors">PIN</a>
        </div>
      </div>
    </div>

    <div class="pt-8 border-t border-[#0A6D5F] text-center text-xs text-emerald-200">
      <p>&copy; <?php echo date('Y'); ?> HomeAndHomeOnly. All rights reserved.</p>
    </div>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
`
  }
];
