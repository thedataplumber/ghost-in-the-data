$(function() {

  var interpolate = function(theString, argumentArray) {
     var regex = /%s/;
     var _r=function(p,c){return p.replace(regex,c);}
     return argumentArray.reduce(_r, theString);
  }

  $("body").on("click", ".share-link", function() {
    var $link = $(this);
    var params = {signature: "<SIGNATURE>", action: "shorturl", format: "json", url: $link.data('url')};
    $.getJSON("http://<SHORT_URL>/yourls-api.php", params, function(data) {
      var shareUrl = interpolate($link.data('template'), [ data.shorturl, $link.data('title') ])
      window.open(shareUrl, $link.data('name'), $link.data('spec'));
    });
  });

});
/*
function short( url){
  var api_url  = 'http://<SHORT_URL>/yourls-api.php';
  var response = $.get( api_url, {
      signature: "<SIGNATURE>",
      action:   "shorturl",
      format:   "json",
      url:      url || window.location
      },
      // callback function that will deal with the server response
      function( data) {
          // for instance, return short URL
          return data.shorturl;
      }
  );
  return response;
}
*/
/*
$(function(){
// event handler in here!
  $("# Button ID")

});
*/
