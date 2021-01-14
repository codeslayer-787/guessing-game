'use strict';
function askName(){
  // Added functions on line 2 and 6
  let name = prompt('What\'s your name?');
  document.write(name);
  return ('Hello ' + name);
  // Added line 9 invocation 
}
let name = askName();