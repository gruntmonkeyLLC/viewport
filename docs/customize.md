# Customize

Viewport was made with the following tablets in mind with portrait orientation.

1. iPad/iPad Pro.
2. Nexus 7/9/10
3. Pixel C.


## Setting your tablet size

#### app/index.html
Alter  
    #pageflip { width:2304px; /* determines the width of the horizontal container ( Number of sides * screen width)*/ }
    .scroller {	height:2048px; /* determines the height of the vertical container ( Number of sides * screen height)*/ }


## Images

#### app/images/{your img directory}

## Progressive Web App or AppCache

#### app/index.html
By default Viewport supports progressive web apps offline functionality through service workers and manifests.
If you have an iPad and want the same offline functionality uncomment the <!-- manifest="viewport.manifest" --> located in app/index.html and add it to the html tag.

viewport.manifest will be produced on build when you run

```sh
$ gulp
```
