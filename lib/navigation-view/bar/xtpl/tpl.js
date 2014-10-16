/*compiled by xtemplate#3.3.1*/
var ret = module.exports = function tpl(undefined){
var t;
var t0;
var t1;
var t2;
var t3;
var t4;
var t5;
var t6;
var t7;
var t8;
var t9;
var tpl = this;
var root = tpl.root;
var buffer = tpl.buffer;
var scope = tpl.scope;
var runtime = tpl.runtime;
var name = tpl.name;
var pos = tpl.pos;
var data = scope.data;
var affix = scope.affix;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];
function func0(scope, buffer, undefined) {
var data = scope.data;
var affix = scope.affix;
buffer.data += '\r\n<div class="';
pos.line = 2;
var callRet1
callRet1 = callFnUtil(tpl, scope, {escape:1,params:['title-wrap']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet1);
buffer.data += '">\r\n    <div class="';
pos.line = 3;
var callRet2
callRet2 = callFnUtil(tpl, scope, {escape:1,params:['title']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet2);
buffer.data += '">';
var id3 = ((t=(affix.title)) !== undefined ? t:((t = data.title) !== undefined ? t :scope.resolveLooseUp(["title"])));
buffer = buffer.writeEscaped(id3);
buffer.data += '</div>\r\n</div>\r\n';
return buffer;
}


buffer.data += '';
pos.line = 1;
var id4 = ((t=(affix.withTitle)) !== undefined ? t:((t = data.withTitle) !== undefined ? t :scope.resolveLooseUp(["withTitle"])));
buffer = ifCommand.call(tpl, scope, {params:[id4],fn: func0}, buffer);
buffer.data += '\r\n<div class="';
pos.line = 6;
var callRet5
callRet5 = callFnUtil(tpl, scope, {escape:1,params:['content']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet5);
buffer.data += '">\r\n    <div class="';
pos.line = 7;
var callRet6
callRet6 = callFnUtil(tpl, scope, {escape:1,params:['center']}, buffer, ["getBaseCssClasses"]);
buffer = buffer.writeEscaped(callRet6);
buffer.data += '"></div>\r\n</div>';
return buffer;
};
ret.TPL_NAME = module.id || module.name;