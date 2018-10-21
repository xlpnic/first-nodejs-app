var _ = require('underscore');

// "require" checks that...
// 1. Is it a core modeule? If not...
// 2. Is it a file/folder? It not...
// 3. Is it in the node_modules folder?

var result = _.contains([1,2,3], 1);

console.log(result);