# contents
  1. introduction
  2. breakpoints
  3. css
  4. javascript
        - hover effect - images + text
  5. images in general
        - carousel
        - using images in the grid

## 1. introduction

## 2. breakpoints
The wireframes are fully responsive with a total of 5 breakpoints:
    - less than 768px  -> mobile
    - 768px            -> tablets
    - 992px            -> large tablets
    - 1200px           -> desktops
    - 1920px           -> cinema displays

## 3. css
DO NOT edit ``bootstrap.css``. This is the base CSS class and all the wireframes inherit styles from there. If you need to change one of the styles, you can use ``bootstrap.custom.css`` to overload the style in question.

## 4. javascript
DO NOT edit ``bootstrap.js``, same as the CSS, it's the base class and it should not be edited. All custom javascript should be placed in ``bootstrap.custom.js``.

-hover Images

  - When wanting to use a hover effect on a image please use the image-hover-overlay class. This class will style the overlay.
  - To add text to that overlay please use image-hover-text, this class will determine how the text will be positioned on the overlay
  
-hover text

	- When using an overlay on a column that does not contain an image please add the text-hover-overlay class to your column this class will allow you to modify the height of the column
	- The text-hover-overlay class can be then used to modify the design of your desired overlay.
	- The placeholder-text class will then allow you to modify how the text on the overlay is positioned, but the value given to this class must be relative to the column height
		E.G. We have a column with an height of 100px, if we want the text to appear in the centre we must give the placeholder-text a value of 50px
		
	THE ABOVE HOVER FUNCTIONALITY IS CONTROLED IN BOOTSTRAPCUSTOM.CSS SO IF THE CLASS NAMES ARE MODIFIED THE JS MUST BE MODIFIED TOO!!!

## 5. carousel images
The carousel is responsive but only when the images placed inside it are the width of the largest breakpoint which is 1920px. Images of this width will be contract and enlarge correctly.
