# jRouter
A Simple Javascript Hash Router

# Usage
Simply place the jRouter file in your javascript directory and a script reference to it

#jRoutes
Routes for jRouter 

To use jRoutes is very simple. Just provide a CSS selector of the container (div) that you
want to load your view into when a route is matched.

```javascript
jRoute('', function () {
    jLoadView('selector','path-to-view-file');
});
```

To set a route from your html

```javascript
<a data-route="docs/getting-started/welcome">
```

and then...

```javascript
// Set route when menu item is clicked
$('[data-route]').on('click', function() {
    jSetRoute($(this).attr('data-route'));
});
```
Note: jSetRoute() is provided as part of jRouter

# Requirements

All that is required is the latest version of jQuery.
