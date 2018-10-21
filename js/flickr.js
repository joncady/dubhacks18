var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=cars";
$.ajax({
    url: flickerAPI,
    dataType: "jsonp", // jsonp
    jsonpCallback: 'jsonFlickrFeed', // add this property
    success: function (result, status, xhr) {
        $.each(result.items, function (i, item) {
        console.log(item.media.m);
    });},
    error: function (xhr, status, error) {
        console.log(xhr);
}});        