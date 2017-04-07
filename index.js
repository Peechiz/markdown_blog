var md = require( "markdown" ).markdown;
// console.log( markdown.toHTML( "Hello *World*!" ) );


text = "[Markdown] is a simple text-based [markup language]\n" +
       "created by [John Gruber]\n\n" +
       "[John Gruber]: http://daringfireball.net";

var tree = md.parse( text ),
   refs = tree[ 1 ].references;

console.log(tree);

// iterate through the tree finding link references
( function find_link_refs( jsonml ) {
 if ( jsonml[ 0 ] === "link_ref" ) {
   var ref = jsonml[ 1 ].ref;

   // if there's no reference, define a wiki link
   if ( !refs[ ref ] ) {
     refs[ ref ] = {
       href: "http://en.wikipedia.org/wiki/" + ref.replace(/\s+/, "_" )
     };
   }
 }
 else if ( Array.isArray( jsonml[ 1 ] ) ) {
   jsonml[ 1 ].forEach( find_link_refs );
 }
 else if ( Array.isArray( jsonml[ 2 ] ) ) {
   jsonml[ 2 ].forEach( find_link_refs );
 }
} )( tree );

// convert the tree into html
var html = md.renderJsonML( md.toHTMLTree( tree ) );
console.log( html );
