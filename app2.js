'use strict';
function askName(){
  // Added functions on line 1 and 5
  let name = prompt('What\'s your name?');
  document.write(name);
  return ('Hello ' + name);
  // Added line 8 invocation 
}
let name = askName();