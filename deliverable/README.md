# contents
  1. overview
  2. breakpoints
  3. css
  4. javascript
        - hover effect - images + text
  5. images in general
        - carousel
        - using images in the grid

## 1. overview
So, 6 wireframes in total. We used the [bootstrap framework](getbootstrap.com) as a building block as it provides a decent grid system and a lot of good web practices backed in from the start. This documentation is just to cover the general points on the deliverable and any specifics on some of the tricky javascript bits.

## 2. breakpoints
The wireframes are fully responsive with a total of 5 breakpoints:
    - less than 768px  -> mobile
    - 768px            -> tablets
    - 992px            -> large tablets
    - 1200px           -> desktops
    - 1920px           -> cinema displays

## 3. css
**DO NOT** edit ``bootstrap.css``. This is the base CSS class and all the wireframes inherit styles from there. If you need to change one of the styles, you can use ``bootstrap.custom.css`` to overload the style in question.

## 4. javascript
**DO NOT** edit ``bootstrap.js``, same as the CSS, it's the base class and it should not be edited. All custom javascript should be placed in ``bootstrap.custom.js``. The classes that are noted below are linked to the custom javascript file, so if modifying, changes need to be done in both!

### Hover effect when placing mouse over images (see homepage.html)
When wanting to use a hover effect on a image, use the ``image-hover-overlay`` class. This class will style the overlay. To add text to that overlay use ``image-hover-text``, this class will determine how the text will be positioned on the overlay

### Hover effect when placing mouse over plain text (see resources.html)
When using an overlay on a column that does not contain an image, add the ``text-hover-overlay`` class to your column this class will allow you to modify the height of the column. The ``text-hover-overlay`` class can be then used to modify the design of your desired overlay. The ``placeholder-text`` class will then allow you to modify how the text on the overlay is positioned, but the value given to this class must be relative to the column height 
    - i.e We have a column with an height of 100px, if we want the text to appear in the centre we must give the ``placeholder-text`` a value of 50px
		
## 5. images
###Carousel image 
The carousel is fully responsive and the images will scale down and up when you provide the class ``img-responsive``, you may have to experiment with them to get the best quality.

### Images in the grid
Similarly, images contained in the grid must be given a class of ``img-responsive`` to become fully responsive. Again, mileage may vary with different quality images.
