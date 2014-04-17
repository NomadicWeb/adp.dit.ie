# contents
  1. introduction
  2. breakpoints
  3. css
  4. javascript
  5. carousel images

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

## 5. carousel images
The carousel is responsive but only when the images placed inside it are the width of the largest breakpoint which is 1920px. Images of this width will be contract and enlarge correctly.
