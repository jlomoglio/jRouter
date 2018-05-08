/**
 *   Routes for jRouter
 *   
 *   To use jRoutes is very simple. Just provide a CSS selector of the container (div) that you
 *   want to load your view into when a route is matched.
 *
 *   jRoute('', function () {
 *       jLoadView('selector','path-to-view-file');
 *   });


jRoute('', function () {
    jLoadView('[role="main"]','views/home.html');
});

jRoute('home', function () {
    jLoadView('[role="main"]','views/home.html');
});

jRoute('features', function () {
    jLoadView('[role="main"]','views/features.html');
});

jRoute('resources', function () {
    jLoadView('[role="main"]','views/resources.html');
});

jRoute('download', function () {
    jLoadView('[role="main"]','views/download.html');
});
