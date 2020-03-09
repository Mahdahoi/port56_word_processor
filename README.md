#Absctract
###What is the Port56 Word Processor (going to be)
The Port56 Word Processor is supposed to become a fully
featured MIT-Licensed WYSIWYG serverless implementation of a
rich text editor using the internal .docx structure, being
rendered inside a HTML5 canvas developed by the Port56 UG,
the state being 100% controllable using the same internal
API as the editor uses for itself.

###Why
Since all implementations of a WYSIWYG web editor I've seen
to date are either paid, closed source, dependant on a
server, using `contenteditable="true"` and therefore
introducing HTML, difficult to port to DOCX and PDF format,
badly documented customization (or none at all), requiring
payment or a combination thereof, i decided to try filling
this niche.

###Usage
The only thing you have to do is to include the `build.js`
and `libraries.js` in some way in your webpage and call
`new Port56WordProcessor(canvasElement);`.
The resulting instance can now be used for interacting with
the editor.

#Contributing
###Where to edit / put files

Your files belong into the `js/` folder.

###Updating

For your changes to take effect, both in the `build/` folder
and `demo/` folder, which I personally use as a simple
testing device to check editor functionality during
development, you have to run the `compile.sh` script file
from inside the main project folder.
For example using bash:
`.../port56_word_processor$ bash compile.sh`

###Commits

Commits should have a 1:1 correspondency between the build
and source files in the same commit.
