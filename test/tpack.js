// �ǰ�ļ����Է���ȫ�� node_modules��
require('global-shim')();

// ���� tpack ����
var tpack = require("../lib/index.js");

tpack.task('hello', function (options) {
    console.log('hello world');
});

if(process.mainModule == module){
	tpack.task('hello');
}