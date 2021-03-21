# thinkbig

thinkbig theme for ghost blog engine [Ghost](http://github.com/tryghost/ghost/).

## Changelog

###v8.0.0
Updates to make compatible with Ghost v4.0
	* replaced {{code}} in error.hbs with {{statusCode}}
	* Added .kg-bookmark-* css classes to support Koenig editor

###v7.0.10
	* Article width max-width 60%

###v7.0.9
	* Added fade/slide up animation for post-cards

###v7.0.2
	* Changes to post-card borders

###v7.0.1
	* Adjusted scaling for post-featured-hero

###v7.0
	* Non post pages now extend to 95% of view

###v6.5.7
	* Scale first item in feed.

###v6.5.6
	* styling for page navigation items.

###v6.5.5
	* Removed background from home and index feeds. Highlights for read time on each post

###v6.5.4
	* home, tag and author feed background now lighter. Removed box shadows from post-card tiles until hover.

###v6.5.2
	* Font styling updates for post-titles and headers

###v6.5.1
	* Default text color now #1a2a30. Post card titles no longer bold

###v6.5
	* Added styling for figcaption elements

###v6.4.7
	* Navigation menu styling for current items and first item

###v6.4.4
  * ghosthunter results template updates

###v6.4
  * Removed disqus comments.
  * Removed next and previous links for inside post articles. Next/Previous navigation related to read-next aside only.
  * Removed social media js


###v6.3.9
  * Removal of email signup slider on homepage
  * Replaced deprecated @blog with @site property
  * Removed legacy adsense stylesheet
  * Removed share bottoms (sharing should be done from the user-agent)
  * Removed padding for posts and headers
  * Removed comment and other navigation links from within posts
  * Removed search from posts. Searching is now confined to archive/index Pages
  * Simplified the mail signup form

###v6.3.8
  * Post headers now appear outside and before article body

###v6.3.7
  * Navigation menu bug fixes

###v6.3.0
  * Removed navigation menu border
  * Navigation items now highlight when matching current page

###v6.2.9
  * Introduction of the +/- menu button on small screens for top bar navigation

###v6.2.8
  * Fixed bug with menu duplication on small media

###v6.2.7
  * Home page utilizes infinite scrolling to fetch all posts
  * Search bar moved to top on index as the index page/2 etc ... now act as paginated archives
  * Added extra padding to searchbox to match padding on home-tiles container when placed at top of pages
  * Removed padding at end of home-tiles containers
  * Tag and Author pages now use the flowing postcard of tiles style

###v5.16.3
  * Removed redundant post-footer block from posts and pages
  * Fixed bug that caused post counts for tags not to be displayed


###v5.16
  * New text for subscribe banners
  * Last version to support Ghost 1

###v5.13

  * Navigation has no border on index (home and main index pages)
  * ghostHunter version updated. Now uses API instead of parsing RSS
  * Search box and results style changes

###v5.12

  * Post elements layout updated

###v5.11

  * Adjusted text sizing in read-next-story boxes

###v5.10

  * Index now uses the widescreen background images similar to author pages

###v5.0.8

  * Removed justify from post text

###v5.0.5

  * post-page attribute added to articles on pages and posts

###v5.0.3

  * Removed top pagination on index pages
  * Narrow index post width to 36%
  * pagination font weight normal

###v5.0

  * Removed follow from pages

###v4.9

  * Removed hard coded social links in navigation

###v4.8

  * Dates removed from indexes and homepage

###v4.7.6

  * Changed frontpost tile title heading to colour to black
  * Reverted favicon

###v4.7.5

  * Removed top margin from comment-aside

###v4.7.4

  * Mail signup form now spans screen

###v4.7.3

  * Comment aside now spans screen

###v4.7

  * Recent post section added to post pages

###v4.6.1

  * Reverted homepage layout changes

###v4.6

  * Changes to homepage layout

###v4.5.8

  * Fixed bug with featured post image not stretching to 100% when image is smaller than viewport

###v4.5.7

 * Display for site-head changed to table. Bug with author-img-post being
   overwritten fixed

###v4.5.6

	* Custom navigation styling for navigation on homepage removed

###v4.5.5

	* Removed deprecated tweet button with counts

###v4.5.4

	* Navigation bar tweaks

###v4.5.3

	* Font changed for headers

###v4.5.2

	* Updated post font sizing
	* Simplified error page

###v4.5.1

	* Updated error page

###v4.5

	* Updated logo

###v4.4.8

	* Removed extra-pagination from homepage
	* Fixed styling on extra pagination and included extra pagination on index
	* Removed mail form from index

###v4.4.7

	* Sizing adjusted for post-header on screens smaller than 320px width

###v4.4.6

	* Fixed bug with slider not rolling to top of screen
	* Hero title scales with screen size

###v4.4.5

	* Slider now auto hides if not engaged after 20 seconds

###v4.4.4

	* Removed unnecessary container box for subscription slider

###v4.4.3

	* Moved meta section to header for hero post on frontpage

###v4.4

	* Hero image for first article now has text floating above background image

###v4.3.2

	* Placed post meta information at end of post excerpt for each loop item on
	  tag page

###v4.3.1

	* Adjusted positioning of navigation bar and slider

###v4.3

	* navigation bar size and color scheme modified
	* frontpage tiles reorganized to show featured image first

###v4.2

	* Removed box-shadow from frontpage post tiles for a fully flat design
	* Added animation to front page mail signup form

###v3.8.8

	* Fixed bug with home link not using relative redirect in footer

###v3.8.7

	* disqus_identifier added to threads to minimize duplication

###v3.8.6

	* lab-signup.js

###v3.8.5

	* Pages can now have cover images

###v3.8.4

	* frontpost images now adjust height responsively

###v3.8.3

	* Replaced twitter link text with icon

###v3.8.2

	* Updated error template

###v3.8

	* New Tag template

###v3.7.3

	* Changed highlight color for featured hero post

###v3.7.2

	* Responsive fixes for tile scaling

###v3.7

	* Masonry layout on homepage

###v3.6

	* Updated author page
	* Removed author block from post page
	* Home and Indexes changed to use post description instead of excerpt

###v3.5.5

	* Updated author page styling

###v3.5.4

	* Logo assets updated

###v1.1.5

	* Navigation section added

###v1.1.6

	* Fix bug with search results not showing for ghosthunter
	* Removed margin from navigation ul
	* Changed footer background colour to white
	* Added a "Home" item to navigation tree

###v1.1.7

	* Removed RSS subscriber button from footer
	* Removed the rss subscribe link from the search block
	* centered the search field

###v1.1.8

	* Removed fixed navigation section that was floated on the right
	* Reverted to minimalist style of 1.1.4
	* Added navigation links to the top left of each page
	* Updated navigation links

###v1.1.9

	* Added disqus comments

###v1.2.0

	* Minor fixes for disqus

###v1.2.1

	* Added back the disqus comment count
	* Spacing fix for header and navigation
	* Added legal navigation link

###v1.2.2

	* Added images to the excerpt on the index page

###v1.2.3

	* Adjusted analytics tracking code to include demographic data

###v1.2.4

	* Removed log and site title from posts, pages, tags

###v1.2.4.4

	* Updated nav

###v1.2.5

	* made the post articles scale up dynamically. Max width now 46%.

###v1.2.6

	* Background color updated
	* Author block color updated
	* Navigation links added to posts
	* loop partial created
	* index.hbs and tag.hbs updated to utilize loop
	* date format updated
	* Updated the display of author-meta block for posts

###v1.2.7

	* Changes to support multi-user in 0.5.0
	* Added author.hbs template
	* responsive desgin style fixes

###v1.2.7.1

	* responsive fix for disqus thread

###v1.2.7.2

	* Updated description for tag page to include # of posts
	* Fix resizing on #tag-archive-header
	* Removed error page article stub and substituted it with .inner class
	* Removed article section on error page

###v1.2.8

	* Added Ads by Google

###v1.2.8.1

	* Style edits to Adsense banner
	* resizeadsbygoogle.js assest added to dynamically resize
	  based on window size

###v1.2.8.2

		* Added adsbygoogle to the posts.hbs

###v1.2.8.3

	* Removed top and bottom margin around iframe,.fluid-width-video-wrapper to fix bug with adsense

###v1.2.8.4

	* Comment nav added to post bottom
	* Spacing for disqus improved
	* Share Options updated
	* Sharing buttons added to post top
	* Promo notice added below display ads

###v1.2.8.5

	* sharing, author block moved to partials

###v1.2.9

	* Subscription button added to navigation

###v1.2.9.1
	* Subscription link added to bottom of posts

###v1.3

	* Fontfix for page-title

###v1.3.1

	* adjusted site-head to 45%

###v1.3.2

	* Removed links in navigation bar
	* centered navigation bar
	* Updated favicon

###v1.3.3

	* Changed post-title a colors

###v1.3.4

	* Reverted color change

###v1.3.5

	* Changed favicon

###v1.3.6

	* Made the navigation bar fixed.

###v1.3.7

	* Updated the header background strip

###v1.3.8

	* Added a homepage template
	* Removed title logo and description from homepage

###v1.3.9

	* Top navigation bar is now fixed on scroll
	* top navigation bar opacity adjusted to 0.95

###v1.4

	* Added hulu to resizable video sources
	* Removed italics from blockquotes
	* Fixed bug with video resizing in post-excerpt

###v1.4.1

	* Small style tweaks to navigation bar

###v1.4.2

	* Hide cover image for author page

###v1.4.3

	* Removed the centered circle mark after posts

###v1.5

	* Updated GA tracking code to include In-Page Analytics

###v1.5.1

	* Modified the BTA link in footer to redirect to colophon

###v1.6

	* Insert adsense adsbygoogle into post content
	* Bug fixes for fixed nav topbar

###v1.6.1

	* Responsive fixes for adsense block
	* Removal of unnecessary spacing around posts and headers

###v1.6.2

	* Additional responsive styling for adsense post blocks
	* js updates to allow publish two ads for longer posts (30+ paragraphs)

###v1.6.3

	* Fixed bug that prevented full-img from clearing ad banners

###v1.6.4

	* Bug fix that prevented topnav from displaying properly in ie9
	* Bug fix for adsense push call in publish-adsense-ads.js

###v1.6.5

	* Updated publish-adsense-ads.js to still validate when enforcing strict

###v1.6.6

	* Border style changes for post excerpts on index
	* Float clearance for fluid video divs
	* Changed float attribute for older and newer post links
	* Added default active color for links

###v1.6.7

	* Added new adsense ad-unit

###v1.6.8

	* Removed responsive ad-unit to prevent crashing bug in ie on resize

###v1.6.9

	* center responsive ad

###v1.6.9.1

	* .content overflow now hidden

###v1.7

	* Responsive navigation menu

###v1.7.1

	* Fix padding issue that prevented excerpt images from being centered on small screens

###v1.7.2

	* Added Facebook Open Graph meta tags

###v1.7.3

	* Updated link rel canonical to point to absolute URL for each page and post
	* Added og fixes and og:image on homepage

###v1.7.4

	* Added reddit share button to top and bottom of pages
	* Added pocket save button

###v1.7.5

	* Added twitter cards open graph meta tags

###v1.7.6

	* Added linkedin share button

###v1.7.7

	* Changed the styling and text of the bottom share notice

###v1.8

	* Removed site-head border strip.
	* Site head only displays when there is a cover image


###v1.8.1

	* Reverted site-head changes.

###v1.8.2

	* Updated favicon and logo

###v1.8.3

	* Changed styling for author-url in post meta
	* Inserted nav to urge users to comment

###v1.8.4

	* Added Ads to the loop

###v1.8.5

	* Fixed searchbox spacing
	* Updated text for comment-aside box
	* author block header now links to author page

###v1.8.6

	* Added Facebook and Google+ page links to navigation

###v1.8.7

	* Rearranged nav items. RSS now icon only

###v1.8.8

	* Added box-shadow to fixed navigation bar on scroll

###v1.8.9

	* Added transition effect to topnavbar

###v1.9

	* Like and Retweet strip added to each post excerpt on home and index
	* Added like buttons to posts

###v1.9.1

	* Added inshare button

###v1.9.2

	* Layout fixes for like buttons on smaller screens

###v1.9.3

	* Fixed bug with URL encoding in iframes
	* Fixed url bug with +1 button

###v1.9.4

	* Removed border and padding from excerpt images
	* 1rem top and bottom margin added to comment aside

###v1.9.5

	* Updated the loop to include ads
	* Reverted home to use loop

###v1.9.6

	* Added large box Ad above last posts in loop
	* Changed social media links in navbar to follow button actions

###1.9.6.6

	* Changed background of response-ad to match adsense ad units

###1.9.6.7

	* Topnavbar transition opacity on switch to fixed

###v2.0

	* New homepage style introduced.

###v2.0.5

	* Change navigation color on posts, pages, author and tag templates
	* Fixed image scaling on homepage
	* Added post-excerpt-index to fluid vids
	* Changed background on index and home
	* Hero images only on homepage with index using previous rendering

###v2.0.8

	* Fixed error with resizing post-excerpt image when window between 900 and 500px

###v2.0.8.2

	* Paragraph font and spacing adjustments for posts and excerpts

###v2.1

	* Added Hero image to posts.

###v2.1.1

	* Removed continue-post from indexes

###v2.1.3

	* Changed second from loop ad to Adsense-Loop-Block-Banner

###v2.1.3.1

	* Minor change made to make publish script load async so that page displays when user has adblockers or
	  disables js

###v.2.1.3.2

	* changed the named of post class to defeat adblocker

###v2.2

	* Moved post ads up the page. 1st Ad will now always display in 2nd paragraph while 2nd Ad will be at quarter mark

###v2.2.1

	* Updated fitvid to rescale ted.com videos

###v2.2.2

	* Fixed default template bug that resulted in the author image being fetched in the og tags instead of blog logo
	  when no feature image is defined for a post

###v2.3

	* Changed disqus to always load using HTTPS

###v2.4

	* Rotated position of loop Ads

###v2.5

	* Removed padding from comment-aside
	* Updated comment-aside wording

###v2.6

	* Updated comment-aside wording
	* Follow Links now open in new tab/window

###v2.6.1

	* Fixed menu links

###v2.6.3

	* Updated favicon

###v2.6.4

	* Post mailform

###v2.6.5

	* Page mailforms added to home and indexes

###v2.6.6

	* Removed ad blocks from home and index

###v2.7

	* Adjusted mail form

###v2.7.3

	* Moved the subscription form to article footer

###v2.7.4

	* Updated keywords

###v2.7.5

	* Removed subscribe page links

###v2.8

	* Replaced custom navigation with navigation helper

###v2.8.1

	* Changed navigation to use relative URL

###v3.0

	* Added Next/Previous links to post top navigation
	* Added Read Aside Block to post end
	* Positioning and Style changes to article footer and comments section

###v3.0.1

	* Removed top margin from read more section

###v3.0.2

	* Removed navigation from error pages

###v3.0.3

	* Removed dummy "Advertisement" anchor and converted it to span element

###v3.1

	* Added Amazon widget to posts above mailform

###v3.1.1

	* Added <!--googleoff: all--> and <!--googleon: all--> to improve search keyword indexing
	  to ignore site navigational content

###v3.2

	* Moved the loading of jquery to page end to prevent blocking

###v3.2.1

	* Fixed bug with responsive handling of horizontal banner ad. Now it will only be visible when 0.46*viewport > 728px

###v3.2.3

	* Reverted jquery deferringo

###v3.2.5

	* Added structured schema.org formatted meta data to header

###v3.2.6

	* Fixed bug after image url in json-ld structured data

###v3.3

	* Removed horizontal ad banner
	* Removed Amazon Search

###v3.4

	* Removed border from site nav
	* Removed static to fixed site nav behaviour

###v3.5

	* Removed ads from posts

###v3.5.1

	* Swapped positions of the next and previous posts in "read-next" section.

###v3.5.2

	* Updated jQuery
	* Moved jQuery injection to page end

###v3.5.3

	* Removed strip line from header background for post and author pages
