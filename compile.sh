echo "'use strict';
" > build/libraries.js
cat vendor/*.js >> build/libraries.js

echo "'use strict';
" > build/build.js
cat js/*.js >> build/build.js
#cat js/**/*.js >> build/build.js



echo "'use strict';
" > demo/libraries.js
cat vendor/*.js >> demo/libraries.js

echo "'use strict';
" > demo/build.js
cat js/*.js >> demo/build.js
#cat js/**/*.js >> demo/build.js
