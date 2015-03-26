Flag Sprites
============

[CSS Sprites](https://en.wikipedia.org/wiki/Sprite_(computer_graphics)#Sprites_by_CSS) -
a method to optimize page loads by combining a large number
of small images into one. The method of extremely relevant with the active
use of country flags - with all the flags on one page, then load it, the
browser will need to make only two server requests instead of 247.

Usage
-----------

Install bower
```
$ npm install -g bower
```

Get the package and persist it to bower.json
```
bower install flag-sprites --save
```


Include the stylesheet
```
<link href="components/flag-sprites/dist/css/flag-sprites.min.css" rel="stylesheet" type="text/css"/>
```

Use anywhere on your page
```
<i class="flag flag-ca"></a>
```

Attribution
-----------

Flag icons come from [FamFamFam](http://www.famfamfam.com/lab/icons/flags/), and callable following the [ISO 3166-1 alpha-2 country codes](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

FamFamFam flag icons are "available for free use for any purpose with no requirement for attribution".

Based on the concept of [flag-sprites](https://www.flag-sprites.com/), repackaged for [bower](http://bower.io/) and [LESS](http://lesscss.org) usage to optimize integration.