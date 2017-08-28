function LR_GetObj(id, theDoc) {
	if (!theDoc) {
		theDoc = document;
	}
	if (theDoc.getElementById) {
		return theDoc.getElementById(id);
	} else if (document.all) {
		return theDoc.all(id);
	}
}
function addBookmark(title, url) {
	if (window.sidebar) {
		window.sidebar.addPanel(title, url, '');
	} else if (document.all) {
		window.external.AddFavorite(url, title);
	} else if (window.opera && window.print) {
		return true;
	}
}
function changeadv0(ca0, ca2, ca3) {
	var logosrc1 = ca0.toLowerCase();
	if (logosrc1.indexOf('http') != 0) {
		ca0 = ca3 + ca0;
	} else {
		ca0 = ca2 ? ca0.replace('http://', 'https://') : ca0;
	}
	if (logosrc1.lastIndexOf('.js') == logosrc1.length - 3) {
		return '<sc' + 'ript lang' + 'uage="javascr' + 'ipt" src="' + ca0 + '"></sc' + 'ript>';
	}
	return '';
}
function changeadv(ca0, ca1, ca2, ca3) {
	if (typeof(ucd) != 'undefined' && ucd != '') {
		ca0 = ucd;
	}
	var logosrc1 = ca0.toLowerCase();
	if (logosrc1.indexOf('http') != 0) {
		ca0 = ca3 + ca0;
	} else {
		ca0 = ca2 ? ca0.replace('http://', 'https://') : ca0;
	}
	if (logosrc1.lastIndexOf('.swf') == logosrc1.length - 4) {
		LR_GetObj('td_leftcontent').innerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="' + (ca2 ? 'https:' : 'http:') + '//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=5,0,42,0" id="f1" width="125" height="300" VIEWASTEXT><param name="movie" value="' + ca0 + '"> <param name="bgcolor" value="#FFFFFF"><param name="quality" value="high"><param name="WMODE" value="transparent"><param name="allowscriptaccess" value="never"> <embed type="application/x-shockwave-flash" pluginspage="' + (ca2 ? 'https:' : 'http:') + '//www.macromedia.com/go/getflashplayer" width="125" height="300" name="f1" src="' + ca0 + '" bgcolor="#FFFFFF" quality="high" swLiveConnect="true" allowScriptAccess="never" ></embed> </object>';
	} else if (logosrc1.lastIndexOf('.gif') == logosrc1.length - 4 || logosrc1.lastIndexOf('.jpg') == logosrc1.length - 4 || logosrc1.lastIndexOf('.png') == logosrc1.length - 4) {
		LR_GetObj('td_leftcontent').innerHTML = '<a href="' + ca1 + '" target="_blank"><img src="' + ca0 + '"  width="125" height="300" border="0"></a>';
	} else if (logosrc1.lastIndexOf('.js') == logosrc1.length - 3) {} else {
		LR_GetObj('td_leftcontent').innerHTML = '<iframe frameborder="0" scrolling="no" id="advfm" style="border-top-style: none; border-right-style: none; border-left-style: none; border-bottom-style: none" src="' + ca0 + '" height="300" width="125"></iframe>';
	}
}
function AddmodalDiv(_id, _html, _width, _height, _left, _top) {
	var div = LR_GetObj('modalDiv_' + _id);
	if (div == null) {
		div = document.createElement('DIV');
		div.id = 'modalDiv_' + _id;
		with(div.style) {
			zIndex = 8999;
			width = (!_width ? 380 : _width) + 'px';
			if (_height) height = (!_height ? 240 : _height) + 'px';
			position = 'absolute';
			display = 'none';
			border = 'none';
			margin = padding = 0;
			document.body.insertBefore(div, document.body.firstChild);
			div.innerHTML = _html.indexOf('<div') == 0 ? _html : '<table width="100%" height="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="17" height="16" style="background:url(img_circle/a-1.gif)"></td><td style="background:url(img_circle/c-1.gif)"></td><td width="17" style="background:url(img_circle/a-2.gif)"></td></tr><tr><td style="background:url(img_circle/a-5.gif)"></td><td style="background-color:#ffffff" valign="top">' + _html + '</td><td style="background:url(img_circle/a-6.gif)"></td></tr><tr><td width="17" height="16" style="background:url(img_circle/a-3.gif)"></td><td style="background:url(img_circle/c-3.gif)"></td><td width="17" style="background:url(img_circle/a-4.gif)"></td></tr></table>';
		}
	}
	div.style.display = '';
	div.style.left = (!_left ? (c54 - div.clientWidth) / 2 : _left) + 'px';
	div.style.top = (!_top ? (c55 - div.clientHeight) / 2 : _top) + 'px';
}
function getnoteurl(_u) {
	return (_u ? "" : "ChatWin2.aspx?") + UrlQuery + "&cid=" + LR_cid + "&sid=" + LR_sid + "&skid1=" + skid + "&sk1=" + sk + "&un1=" + LR_un + "&ud1=" + LR_ud + "&ex=" + LR_ex + "&on=" + c53;
}
mainhtm = '<table width="640" height="455" border="0" cellpadding="0" cellspacing="0" id="table_01" align=center  style="DISPLAY: none;"><tr><td width="156" valign="top"  id="LeftContent"><table width="156" height="100%" border="0" cellpadding="0" cellspacing="0" id="table_02"><tr><td height="62" id="td_01">&nbsp;</td></tr><tr><td valign="top"><div id="td_leftcontent" style="margin-left:15px;width:125px;height:300px;">' + changeadv0(c30, c44, LR_sysurl) + '</div></td></tr><tr><td height="73" id="td_copyright">&nbsp;</td></tr></table></td><td width="18" valign="top"><table width="18" border="0" cellspacing="0" cellpadding="0" id="table_03"><tr><td id="td_03" height="48">&nbsp;</td></tr><tr><td id="td_switchcontent">&nbsp;</td></tr><tr><td id="td_05" height="56">&nbsp;</td></tr></table></td><td valign="top"  id="td_06"><table  border="0" cellspacing="0" cellpadding="0" id="table_04"><tr><td height="48" valign="top" id="td_07"><table border="0" cellspacing="0" cellpadding="0"><tr><td height="29"></td></tr><tr><td id="td_prompt1"></td></tr></table></td><td width="20" id="td_08">&nbsp;</td></tr><tr><td valign="top"><div style="background-color: #f0f2f1;display:none;width: 100%;height: 25px;border-top-color: #d0d2d1;border-right-color: #d0d2d1;border-bottom-color: #d0d2d1;border-left-color: #d0d2d1;line-height: 25px;text-indent: 5px;border-top-width: 0px;border-right-width: 0px;border-bottom-width: 1px;border-left-width: 0px;border-top-style: solid;border-right-style: solid;border-bottom-style: solid;border-left-style: solid;color: #666666;" id="pmtdiv"><img src="' + LR_imgurl + 'images/a1.gif" vspace="3" align="left"><div id="pmtdiv1"></div></div><iframe id="chatwordsFrame" name="chatwordsFrame" style=" BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none;  BORDER-BOTTOM-STYLE: none; HEIGHT: 100;" frameborder="0" hspace="0" src="about:blank" width="100"></iframe></td><td id="td_13">&nbsp;</td></tr><tr  id="uploadobj" style="display:none;" height=80><td id="uploadFrametd">&nbsp;</td><td id="td_17">&nbsp;</td></tr><tr id="uploadobj1" style="display:none;" height=31><td><table cellspacing=0 cellpadding=0 width=100% border=0><tr><td>' + c58 + '</td><td align=center id="progressPmt"></td><td align=right><a href="javascript:void(0)" onclick="f31(false);return false;">' + c59 + '</a>&nbsp;&nbsp;</td></tr></table><div style="BORDER-RIGHT: #006000 1px solid; PADDING-RIGHT: 1px; BORDER-TOP: #006000 1px solid; PADDING-LEFT: 1px; FONT-SIZE: 1px; PADDING-BOTTOM: 1px; BORDER-LEFT: #006000 1px solid; WIDTH: 100%; PADDING-TOP: 1px; BORDER-BOTTOM: #006000 1px solid; HEIGHT: 15px;margin-left:3px;margin-right:3px;margin-bottom:1px;"><div id="progressBar" style="HEIGHT:100%;BACKGROUND-COLOR:#00a000;width:0%;" align="center"></div></div></td><td id="td_18">&nbsp;</td></tr><tr><td id="td_14" height=25>&nbsp;</td><td id="td_12">&nbsp;</td></tr><tr><td height=80>';
if (usetext) {
	mainhtm += '<textarea id="TextBox1_editor" name="TextBox1_editor" style="BORDER: 0;height:78px;width:100%;overflow:auto; "  onfocus="editfocus();"  onblur="editblur();" onkeydown="return f11(event)" onkeyup="return f12(event)"  wrap="virtual"></textarea>';
} else {
	mainhtm += '<iframe id="FreeTextBox1_editor" name="FreeTextBox1_editor" style="BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none; BORDER-BOTTOM-STYLE: none; " frameborder="0" hspace="0" height="80" width="100" src="about:blank" onfocus="editfocus();"  onblur="editblur();"></iframe>';
}
mainhtm += '</td><td id="td_11">&nbsp;</td></tr><tr><td height="56" valign="top" id="td_09"><table border="0" cellspacing="0" cellpadding="0" id="table_05"><tr><td height="5" colspan="3"></td></tr><tr><td id="td_prompt2">';
if (c44) {
	mainhtm += '<img src="' + LR_imgurl + 'imgs/secure.gif" alt="SSL 128 bit"> ';
}
mainhtm += c21 + ':Enter</td><td width="70" id="td_15">&nbsp;</td><td width="9" id="td_16">&nbsp;</td></tr></table></td><td id="td_10">&nbsp;</td></tr></table></td></tr></table><map name="Map"><area shape="RECT" coords="4,43,151,64" ' + c49 + '></map>';
document.write(mainhtm);
var c54;
var c55;
c89 -= 20;

function LR_checkagent(_lr_na) {
	var _lr_o = _lr_na.split('|');
	for (_lr_w = 0; _lr_w < _lr_o.length; _lr_w++) {
		if (navigator.userAgent.toLowerCase().indexOf(_lr_o[_lr_w]) > -1) return true;
	}
	return false;
}
function f16() {
	try {
		if (top.location == self.location) if (LR_checkagent('safari')) {} else {
			window.resizeBy(c88 - document.body.clientWidth, c89 - document.body.clientHeight);
		}
		f6()
	} catch (e) {}
}
function f6() {
	try {
		if (document.body) {
			c54 = document.body.clientWidth;
			c55 = document.body.clientHeight;
		} else {
			c54 = window.innerWidth;
			c55 = window.innerHeight;
		}
		if (c55 < c89) {
			c55 = c89;
		}
		if (c54 < c88) {
			c54 = c88;
		}
		LR_GetObj('table_01').width = c54;
		LR_GetObj('table_01').style.height = c55;
		LR_GetObj('table_02').style.height = c55;
		LR_GetObj('table_03').style.height = c55;
		var mainwidth = c57 ? (c54 - 156 - 18) : (c54 - 18);
		LR_GetObj('td_06').width = mainwidth;
		LR_GetObj('table_04').width = mainwidth;
		LR_GetObj('table_04').style.height = c55;
		LR_GetObj('td_switchcontent').style.height = c55 - 48 - 56;
		LR_GetObj('chatwordsFrame').style.height = c55 - 48 - 56 - 25 - 80 - (LR_GetObj('pmtdiv').style.display == 'none' ? 0 : 25);
		if (LR_GetObj('uploadobj').style.display == '') LR_GetObj('chatwordsFrame').style.height = c55 - 48 - 56 - 25 - 80 - 80;
		if (LR_GetObj('uploadobj1').style.display == '') LR_GetObj('chatwordsFrame').style.height = c55 - 48 - 56 - 25 - 80 - 31;
		LR_GetObj('chatwordsFrame').width = LR_GetObj('table_04').width - 20;
		if (usetext) {} else {
			LR_GetObj('FreeTextBox1_editor').width = LR_GetObj('table_04').width - 20;
		}
		if (LR_GetObj('uploadFrame') != null) LR_GetObj('uploadFrame').width = LR_GetObj('table_04').width - 20;
		LR_GetObj('table_05').width = LR_GetObj('table_04').width - 20;
		var obj = LR_GetObj('modalDiv_Pingjiaobj');
		if (obj != null && obj.style.display != 'none') {
			LR_m_f(LR_m_d, true, false, false);
			pingjia();
		}
		obj = LR_GetObj('modalDiv_Chatpreobj');
		if (obj != null && obj.style.display != 'none') {
			LR_m_f(LR_m_d, true, false, true);
			showChatpre();
		}
		obj = LR_GetObj('td_prompt2');
		obj.style.cssText = c29;
		obj = LR_GetObj('td_prompt1');
		obj.style.cssText = c29;
		LR_GetObj('td_14').style.fontSize = '9pt';
		LR_GetObj('td_14').style.fontFamily = c10;
		f7();
	} catch (e) {}
}
function f17() {
	LR_GetObj('td_14').style.background = 'url(' + c12 + '/12.jpg)';
	LR_GetObj("td_15").innerHTML = '<a href="javascript:void(0)" onclick="User_Send();return false;" title="' + c20 + '"><img src="' + c12 + '/send_' + lng + '.gif" width="70" height="21" border="0"></a>';
	LR_GetObj("td_16").innerHTML = '<a href="javascript:void(0)" onclick="SwitchShortCut();return false;"  title="' + c33 + '"><img src="' + c12 + '/15.gif" width="9" height="21" border="0"></a>';
	var td14 = '<table id="tabletoolbar" style="display:none;" border="0" cellspacing="0" cellpadding="0" height="25"><tr>';
	if (c92) {
		td14 += '<td><a href="javascript:void(0)" onclick="SelSmile();return false;" title="' + c19 + '"><img src="' + c12 + '/smile_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (!usetext) {
		td14 += '<td><a href="javascript:void(0)" onclick="SetFont();return false;" title="' + c34 + '"><img src="' + c12 + '/font_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (c90) {
		td14 += '<td><a href="javascript:void(0)" onclick="f27();return false;" title="' + c28 + '"><img src="' + c12 + '/file_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (c75) {
		if (Telurl == null) {
			td14 += '<td><a href="javascript:void(0)" onclick="Freecall();return false;" title="' + c62 + '">';
		} else {
			td14 += '<td><a id="H_tel" href="' + Telurl + '" title="' + c62 + '" target="_blank">';
		}
		td14 += '<img src="' + c12 + '/freecall_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (c91) {
		td14 += '<td><a id="H_liuyan" href="chatwin2.aspx?{u}&page=3" title="' + c35 + '" target="_blank"><img src="' + c12 + '/note_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (duanxinurl != null) td14 += '<td><a id="H_duanxin" href="' + duanxinurl + '" title="' + c70 + '" target="_blank"><img src="' + c12 + '/dx_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	var testObj = null;
	try {
		testObj = new ActiveXObject("CaptureScreen.CapRect.2");
	} catch (e) {}
	if (c69 && (navigator.appName == 'Microsoft Internet Explorer' || testObj != null) && !usetext) {
		td14 += '<td><a href="javascript:void(0)" onclick="Capture();return false;" title="' + c63 + '"><img src="' + c12 + '/Capture_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (testObj) {
		delete testObj;
	}
	if (c44) {
		td14 += '<td><img src="imgs/secure.gif" alt="SSL 128 bit"></td><td width="2"></td>';
	}
	if (c38 && (navigator.appName == 'Microsoft Internet Explorer')) {
		td14 += '<td><a href="javascript:void(0)" onclick="f23();return false;" title="' + c17 + '"><img src="' + c12 + '/save_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
		if (c111) td14 += '<td><a href="javascript:void(0)" onclick="f24();return false;" title="' + c16 + '"><img src="' + c12 + '/print_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (c114) {
		td14 += '<td><a href="javascript:void(0)" onclick="pingjia();return false;" title="' + c71 + '"><img src="' + c12 + '/valuation_' + lng + '.gif" height="21" border="0"></a></td><td width="2"></td>';
	}
	if (c115) {
		td14 += '<td><a href="RobotList1.aspx?id=' + LR_websiteid + '&lng=' + lng + '" target="_blank" title="' + c116 + '"><img src="' + c12 + '/robotlist1_' + lng + '.gif" border="0"></a></td><td width="2"></td>';
	}
	td14 += '</tr></table>';
	LR_GetObj('td_14').innerHTML = td14;
	LR_GetObj('td_01').innerHTML = '<img src="' + c12 + '/1.jpg" height="62" width="156">';
	LR_GetObj('table_02').style.background = 'url(' + c12 + '/2.gif)';
	LR_GetObj('td_copyright').innerHTML = c15;
	LR_GetObj('td_03').innerHTML = '<img src="' + c12 + '/4.jpg" height="48" width="18">';
	LR_GetObj('td_switchcontent').style.background = 'url(' + c12 + '/10.gif)';
	LR_GetObj('td_switchcontent').innerHTML = '<a href="javascript:void(0)" onclick="f5();return false;" title=""><img src="' + c12 + '/' + (c57 ? '13-1.gif' : '13-2.gif') + '" width="9" height="47" border=0></a>';
	LR_GetObj('td_05').innerHTML = '<img src="' + c12 + '/6.jpg" height="56" width="18">';
	LR_GetObj('td_07').style.background = 'url(' + c12 + '/8.jpg)';
	LR_GetObj('td_08').innerHTML = '<img src="' + c12 + '/5.jpg" height="48" width="20">';
	LR_GetObj('td_09').style.background = 'url(' + c12 + '/9.jpg)';
	LR_GetObj('td_10').innerHTML = '<img src="' + c12 + '/7.jpg" height="56" width="20">';
	LR_GetObj('td_11').style.background = 'url(' + c12 + '/11.gif)';
	LR_GetObj('td_12').style.background = 'url(' + c12 + '/11.gif)';
	LR_GetObj('td_13').style.background = 'url(' + c12 + '/11.gif)';
	LR_GetObj('td_17').style.background = 'url(' + c12 + '/11.gif)';
	LR_GetObj('td_18').style.background = 'url(' + c12 + '/11.gif)';
}
var LR_m_d = null;

function LR_m_e(p1, p2, p3) {
	if (LR_m_d != null) return null;
	var div = document.createElement('DIV');
	div.id = 'LR_m_h_' + new Date().getTime();
	with(div.style) {
		zIndex = 8998;
		top = '0px';
		left = '0px';
		width = '100%';
		height = '100%';
		border = 'none';
		margin = padding = 0;
		position = 'absolute';
		backgroundColor = '#000';
		opacity = '0.2';
		filter = 'alpha(opacity=20)';
		duration = 1000;
	}
	document.body.insertBefore(div, document.body.firstChild);
	if (!p3) LR_m_a('SELECT');
	if (!p2) LR_m_a('OBJECT');
	if (!p1) LR_m_a('IFRAME');
	LR_m_c(div);
	return div;
}
function LR_m_c(obj) {
	obj.style.width = '100%';
	obj.style.height = '100%';
	var bodyCW = 0,
		bodyCH = 0;
	if (document.documentElement && document.documentElement.clientWidth) {
		bodyCW = document.documentElement.clientWidth;
	} else if (window.innerWidth) {
		bodyCW = window.innerWidth;
	} else if (document.body) {
		bodyCW = document.body.clientWidth;
	}
	if (window.innerHeight) bodyCH = window.innerHeight;
	else if (document.documentElement && document.documentElement.clientHeight) bodyCH = document.documentElement.clientHeight;
	else if (document.body) bodyCH = document.body.clientHeight;
	setTimeout(function() {
		bodyCW = Math.max(document.body.scrollWidth, bodyCW);
		bodyCH = Math.max(document.body.scrollHeight, bodyCH);
		obj.style.width = bodyCW + 'px';
		obj.style.height = bodyCH + 'px';
	}, 1);
}
function LR_m_b(TagName) {
	var s = document.getElementsByTagName(TagName);
	for (var i = 0, n = s.length; i < n; i++) {
		if (s[i].id == 'LR_Flash') continue;
		s[i].style.visibility = s[i].getAttribute('LR_m_g');
		s[i].removeAttribute('LR_m_g');
	}
};

function LR_m_a(TagName) {
	var s = document.getElementsByTagName(TagName);
	for (var i = 0, n = s.length; i < n; i++) {
		if (s[i].id == 'LR_Flash') continue;
		s[i].setAttribute('LR_m_g', s[i].style.visibility, 0);
		s[i].style.visibility = 'hidden';
	}
};

function LR_m_f(obj, p1, p2, p3) {
	if (LR_m_d == null) return;
	try {
		if (obj) {
			document.body.removeChild(obj);
			LR_m_d = null;
			if (!p3) LR_m_b('SELECT');
			if (!p2) LR_m_b('OBJECT');
			if (!p1) LR_m_b('IFRAME');
		}
	} catch (e) {}
};
var timerID_title;
var step_title = 0;

function flash_title() {
	if (isFocus) {
		flash_title1();
		return;
	}
	clearTimeout(timerID_title);
	step_title++;
	switch (step_title) {
	case 4:
		document.title = title1;
		step_title = 0;
		break;
	case 1:
		document.title = '*' + title1;
		break;
	case 2:
		document.title = '**' + title1;
		break;
	case 3:
		document.title = '***' + title1;
		break;
	}
	timerID_title = setTimeout('flash_title()', 200);
}
function flash_title1() {
	if (timerID_title != null) {
		clearTimeout(timerID_title);
		timerID_title = null;
		document.title = title0;
	}
}
function showChatpre() {
	LR_m_d = LR_m_e(true, false, true);
	AddmodalDiv('Chatpreobj', chatpre_show_content, 450);
}
function closechat() {
	_BeforeWinExit = 1;
	window.location = 'closeandcheckinvite.aspx?id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + lng + '&d=' + new Date().getTime();
}
function submitChatpre(ex, on, skid1, sk1, un, ud) {
	_BeforeWinExit = 0;
	LR_m_f(LR_m_d, true, false, true);
	var div = LR_GetObj('modalDiv_Chatpreobj');
	div.style.display = 'none';
	if (ex) LR_ex = ex;
	if (on != '') c53 = on;
	if (un) LR_un = un;
	if (ud) LR_ud = ud;
	if (skid1 != '') skid = skid1;
	if (sk1 != '') sk = sk1;
	LR_LS('&send=1');
}
function LastFunction() {
	if (skid != '' && skid != null) {
		chatwordsFrame.testclick(skid, sk);
	}
	LastFunction3();
}
function LoadDocument() {}
function changehref(_on) {
	var _obj = LR_GetObj(_on);
	if (_obj) {
		_obj.href = _obj.href.replace('{u}', getnoteurl(1));
	}
}
function LastFunction3() {
	changehref('H_liuyan');
	changehref('H_duanxin');
	changehref('H_tel');
	LR_GetObj('tabletoolbar').style.display = '';
	if (c36) {
		f8('start');
	} else {
		_BeforeWinExit = 1;
		if (c5 != '') alert(c5.replace('\\r\\n', '\r\n'));
		window.location = getnoteurl();
	}
}
window.onresize = f1;

function f1() {
	f6();
}
function f2(n) {
	if (n < 10) {
		return '0' + n;
	} else {
		return n.toString();
	}
}
function GetNowTime() {
	var d = new Date();
	return f2(d.getMonth() + 1) + '-' + f2(d.getDate()) + ' ' + f2(d.getHours()) + ':' + f2(d.getMinutes()) + ':' + f2(d.getSeconds());
}
function f9(str) {
	if (str == null) return '';
	var i = 0;
	var j;
	var len = str.length;
	trimstr = '';
	if (j < 0) return trimstr;
	flagbegin = true;
	flagend = true;
	while (flagbegin == true) {
		if (str.charAt(i) == ' ') {
			i++;
			flagbegin = true;
		} else {
			flagbegin = false;
		}
	}
	j = len - 1;
	var k = 0;
	while (flagend == true) {
		if (str.charAt(j) == ' ') {
			j--;
			flagend = true;
			k++;
		} else {
			flagend = false;
		}
	}
	if (str.length == i) {
		trimstr = '';
		return trimstr;
	}
	trimstr = str.substring(i, j + 1);
	return trimstr;
}
function f5() {
	var obj = LR_GetObj('LeftContent').style;
	if (c57) {
		obj.display = 'none';
		LR_GetObj('td_switchcontent').innerHTML = '<img src="' + c12 + '/13-2.gif" border=0 style="cursor:pointer" onclick="f5();">';
	} else {
		obj.display = '';
		LR_GetObj('td_switchcontent').innerHTML = '<img src="' + c12 + '/13-1.gif" border=0 style="cursor:pointer" onclick="f5();">';
	}
	c57 = !c57;
	f6();
	f7();
}
function f3(e) {
	if (e && (e.keyCode == 8 || (e.altKey && e.keyCode == 37))) {
		var tg = (e.target || e.srcElement);
		if (tg.type == 'text' || tg.type == 'textarea') {
			e.returnValue = true;
			return;
		}
		if (window.event) {
			e.cancelBubble = true;
		} else {
			e.preventDefault();
		}
		e.returnValue = false;
	}
}
var isFocus = false;
var shortcut = 'Enter';
var fontobj = new Object();
fontobj.fontname = c10;
fontobj.isbold = false;
fontobj.isitalic = false;
fontobj.isstrikethrough = false;
fontobj.isunderline = false;
fontobj.fontsize = 12;
fontobj.fontforecolor = '#ffffff';
fontobj.fontbackcolor = '#000000';
var MaxID = 0;
var wordscheckstring = '|';
var timerID = null;
var newtext = '';
var newtext1 = '';
var sendingtext = '';
var presendtext = '';
var sendedtemptext = '';
var sending = 0;
var iframestyle = c11;
title0 = unescape(title0.replace(/\+/g, '%20'));
title1 = unescape(title1.replace(/\+/g, '%20'));
var autoanswer0_time = 0;
var autoanswer1_time = 0;
var autoanswer2_time = 0;
var autoanswer3_time = 0;
var chatendcheck = 1;
var Intervalid = null;

function excludeE(strhtml) {
	var arr, ptn, s, t;
	ptn = /<.*?onresize.*?>/ig;
	arr = strhtml.match(ptn);
	if (arr == null) return strhtml;
	for (i = 0; i < arr.length; i++) {
		s = arr[i];
		t = s.replace(/onresize/ig, 'onresize' + i);
		strhtml = strhtml.replace(s, t);
	}
	return strhtml;
}
function f18() {
	if (usetext) {
		return excludeE(convertToHtml(LR_GetObj('TextBox1_editor').value));
	} else {
		return excludeE(FreeTextBox1_editor.document.body.innerHTML);
	}
}
function f18_out() {
	if (usetext) {
		return LR_GetObj('TextBox1_editor').value;
	} else {
		return FreeTextBox1_editor.document.body.outerText;
	}
}
var LR_xmlHttp;
var lastclsid = null;
var kindget = 0;

function GetXmlHttpObject(handler) {
	var objXmlHttp = null;
	objXmlHttp = GetMSXmlHttp();
	if (objXmlHttp != null) {
		objXmlHttp.onreadystatechange = handler;
	} else {
		objXmlHttp = new XMLHttpRequest();
		if (objXmlHttp != null) {
			try {
				objXmlHttp.onload = handler;
				objXmlHttp.onerror = handler;
				objXmlHttp.onreadystatechange = handler;
			} catch (e) {}
		}
	}
	return objXmlHttp;
}
function GetMSXmlHttp() {
	var xmlHttp = null;
	if (lastclsid == null) {
		var clsids = ['Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'Msxml2.XMLHTTP.3.0', 'Msxml2.XMLHTTP.2.6', 'Microsoft.XMLHTTP.1.0', 'Microsoft.XMLHTTP.1', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP'];
		for (var i = 0; i < clsids.length && xmlHttp == null; i++) {
			xmlHttp = CreateXmlHttp(clsids[i]);
		}
	} else {
		xmlHttp = CreateXmlHttp(lastclsid);
	}
	return xmlHttp;
}
function CreateXmlHttp(clsid) {
	var xmlHttp = null;
	try {
		xmlHttp = new ActiveXObject(clsid);
		lastclsid = clsid;
		return xmlHttp;
	} catch (e) {
		return null
	}
}
var Ajax_timerID;
var trypost = 0;

function PostCall(url, poststr) {
	if (LR_xmlHttp != null) {
		trypost++;
		if (trypost > 20) {
			getReady('err2');
			LR_xmlHttp = null;
			return;
		}
		Ajax_timerID = setTimeout("PostCall('" + url + "','" + poststr + "')", 1000);
		return;
	}
	trypost = 0;
	try {
		LR_xmlHttp = GetXmlHttpObject(CallbackMethod);
		if (typeof(LR_xmlHttp.setrequestheader) != 'undefined') {
			LR_xmlHttp.open('POST', url, true);
			LR_xmlHttp.setrequestheader('content-length', poststr.length);
			LR_xmlHttp.setrequestheader('content-type', 'application/x-www-form-urlencoded');
			LR_xmlHttp.send(poststr);
		} else if (typeof(LR_xmlHttp.setRequestHeader) != 'undefined') {
			LR_xmlHttp.open('POST', url, true);
			LR_xmlHttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
			LR_xmlHttp.send(poststr);
		} else {
			kindget = 1;
			LR_xmlHttp.open('GET', url + (url.indexOf('?') == -1 ? '?' : '&') + poststr, true);
			LR_xmlHttp.send(null);
		}
	} catch (e) {
		getReady('err3');
		LR_xmlHttp = null;
	}
}
function CallbackMethod() {
	if (LR_xmlHttp == null) {
		return;
	}
	if (LR_xmlHttp.readyState == 0) {} else if (LR_xmlHttp.readyState == 1) {} else if (LR_xmlHttp.readyState == 2) {} else if (LR_xmlHttp.readyState == 3) {} else if (LR_xmlHttp.readyState == 4 || LR_xmlHttp.readyState == 'complete') {
		if (LR_xmlHttp.status == 200) {
			var response = LR_xmlHttp.responseText;
			getReady(response);
		} else {
			getReady('err4');
		}
		LR_xmlHttp = null;
	} else if (LR_xmlHttp.status == 404) {
		getReady('err5');
		LR_xmlHttp = null;
	} else {
		getReady('err6');
		LR_xmlHttp = null;
	}
}
function f8(acttype) {
	var poststr;
	if (acttype == 'check') {
		if (sending) {
			return;
		}
		sending = 1;
		if (sendingtext == '') {
			var temptext = newtext.length > 200 ? '' : ',ACT_TEMP|' + (isFocus ? '1' : '0') + '|' + encodeURIComponent(f9(f18_out()).substring(0, 100));
			if (parseInt(c109) > 0 && parseInt(autoanswer0_time) > 0 && (new Date().getTime() - parseInt(autoanswer0_time)) > parseInt(c109) * 1000) {
				c109 = 0;
				temptext += ',ACT_r0';
			}
			if (parseInt(c110) > 0 && parseInt(autoanswer3_time) > 0 && (new Date().getTime() - parseInt(autoanswer3_time)) > parseInt(c110) * 1000) {
				autoanswer3_time = 0;
				temptext += ',ACT_r1';
			}
			if (sendedtemptext != temptext) {
				newtext += temptext;
				sendedtemptext = temptext;
			}
			poststr = 'id=' + LR_siteid + '&sid=' + LR_sid + '&maxid=' + MaxID + '&_text=' + escape((newtext + newtext1 + presendtext).replace(/\+/g, '%2b')) + '&lng=' + lng;
			sendingtext = newtext + presendtext;
			newtext = newtext1 = presendtext = '';
		} else {
			poststr = 'id=' + LR_siteid + '&sid=' + LR_sid + '&maxid=' + MaxID + '&_text=' + escape(sendingtext.replace(/\+/g, '%2b')) + '&lng=' + lng;
		}
		if (LRppid != '') poststr += '&pp=' + LRppid;
		PostCall(LR_sysurl + 'LR/CdCheck.aspx', poststr);
	} else if (acttype == 'start') {
		poststr = 'websiteid=' + LR_websiteid + '&p=' + escape(c50) + '&oname=' + c53 + '&sid=' + LR_sid + '&cid=' + LR_cid + '&ex=' + LR_ex + '&lng=' + lng + '&un=' + LR_un + '&ud=' + LR_ud + '&skid=' + skid + '&sk=' + escape(sk);
		PostCall(LR_sysurl + 'LR/CdStart.aspx', poststr + '&d=' + new Date().getTime());
	} else if (acttype == 'end') {
		poststr = 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + lng;
		if (pj != '' && pj != '1') poststr += '&pj=' + pj;
		if (typeof(reservecontent) != 'undefined' && reservecontent != '' && reservecontent != '1') poststr += '&yuyue=' + reservecontent;
		PostCall(LR_sysurl + 'LR/CdEnd.aspx', poststr);
	} else if (acttype == 'end1') {
		poststr = 'id=' + LR_siteid + '&sid=' + LR_sid + '&lng=' + lng + '&k=1';
		PostCall(LR_sysurl + 'LR/CdEnd.aspx', poststr);
	} else if (acttype == 'upload') {
		poststr = 'uploadid=' + LR_sid + '&lng=' + lng + '';
		PostCall(LR_sysurl + 'LR/CdUpload.aspx', poststr);
	}
}
function isIe() {
	return ( !! window.ActiveXObject || "ActiveXObject" in window) ? true : false;
}
if (!isIe()) {
	document.write('<audio id="sound1" preload="auto" src="sounds/sound.wav"></audio>');
} else {
	document.write('<bgsound id="sound" loop="1"  />');
}
function play() {
	if (!isIe()) {
		LR_GetObj("sound1").play();
	} else {
		LR_GetObj("sound").src = "sounds/sound.wav";
	}
}
var LRppid = '';

function showTime() {
	obj = LR_GetObj('pmtdiv');
	if (obj.style.display == 'none') {
		obj.style.display = '';
		f6();
		chatwordsFrame.scroll(0, 50000);
		c113 = unescape(c113.replace(/\+/g, '%20'));
	}
	LR_GetObj('pmtdiv1').innerHTML = c113.replace('%s%', c112.toString());
	if (c112 == 0) {
		if (Intervalid != null) {
			clearInterval(Intervalid);
			Intervalid = null;
		}
		f8('end1');
	}
	c112--;
}
var timerID_answermore = null;

function autoanswermore() {
	if (c118 == '' || wordscheckstring == null) {
		if (timerID_answermore != null) {
			clearTimeout(timerID_answermore);
			timerID_answermore = null;
		}
		return;
	}
	if (autoanswer0_time == 0) {
		timerID_answermore = setTimeout('autoanswermore()', 1000);
		return;
	}
	var ntime = new Date().getTime();
	var n = c118.indexOf(',');
	if (n > 0) {
		var s = c118.substring(0, n);
		var wtime = ntime - autoanswer0_time;
		var wtime1 = parseInt(s) * 1000;
		if (wtime >= wtime1) {
			c118 = c118.substring(n + 1, c118.length);
			n = c118.indexOf('|');
			var tt = c118.substring(0, n).replace(/\+/g, '%20');
			c118 = c118.substring(n + 1, c118.length);
			addnewtext(',ACT_AR|' + tt);
			tt = decodeURIComponent(tt);
			f20('<p><font class="operatornamefont">' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + tt + '</div>', true);

		}
	}
	timerID_answermore = setTimeout('autoanswermore()', 1000);
}
function addnewtext(_text0) {
	if (newtext1.indexOf(_text0) == -1) newtext1 += _text0;
}
function autoanswer() {
	if (parseInt(c93) > 0 && parseInt(autoanswer0_time) > 0 && (new Date().getTime() - parseInt(autoanswer0_time)) > parseInt(c93) * 1000) {
		c93 = 0;
		var tt = c94.replace('{0}', getnoteurl() + '&page=3').replace('{1}', getnoteurl() + '&page=FreeTel');
		addnewtext(',ACT_AR|' + escape(tt));
		f20('<p><font class="operatornamefont">' + c101 + '&nbsp;' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + tt + '</div>', true);
	}
	if (parseInt(c95) > 0 && parseInt(autoanswer1_time) > 0 && (new Date().getTime() - parseInt(autoanswer1_time)) > parseInt(c95) * 1000 * 60) {
		autoanswer1_time = 0;
		var tt = c96;
		addnewtext(',ACT_AR|' + escape(tt));
		f20('<p><font class="operatornamefont">' + c101 + '&nbsp;' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + tt + '</div>', true);
	}
	if (parseInt(c97) > 0 && parseInt(autoanswer2_time) > 0 && (new Date().getTime() - parseInt(autoanswer2_time)) > parseInt(c97) * 1000 * 60) {
		autoanswer2_time = 0;
		var tt = c98;
		addnewtext(',ACT_AR|' + escape(tt));
		f20('<p><font class="operatornamefont">' + c101 + '&nbsp;' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + tt + '</div>', true);
	}
	if (parseInt(c99) > 0 && parseInt(autoanswer3_time) > 0 && (new Date().getTime() - parseInt(autoanswer3_time)) > parseInt(c99) * 1000) {
		autoanswer3_time = 0;
		var tt = c100;
		addnewtext(',ACT_AR|' + escape(tt));
		f20('<p><font class="operatornamefont">' + c101 + '&nbsp;' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + tt + '</div>', true);
	}
}
var lurl = '';
var isstarted = 0;

function start2(o) {
	autoanswer0_time = new Date().getTime();
	LRppid = o[5];
	if (o[0] != '1') timerID_answermore = setTimeout('autoanswermore()', 1000);
}
function getReady(returnvalue) {
	sending = 0;
	var isstart = 0;
	if (returnvalue == 'r') {
		if (sendingtext != '') sendingtext = '';
		if (wordscheckstring != null) {
			clearTimeout(timerID);
			timerID = null;
			timerID = setTimeout('f14()', 2000);
		}
		autoanswer();
		return;
	}
	if (returnvalue == '' || returnvalue == null || returnvalue.indexOf('err') == 0) {
		if (wordscheckstring != null) {
			clearTimeout(timerID);
			timerID = null;
			timerID = setTimeout('f14()', 2000);
		}
		autoanswer();
		return;
	}
	isstarted = 1;
	var rr = returnvalue.split(",");
	for (w = 0; w < rr.length; w++) {
		if (rr[w] == '') {
			continue;
		}
		if (rr[w] == 'noinput') {
			f10(c21 + ':' + shortcut);
			continue;
		}
		var o = rr[w].split("|");
		if (o.length > 1 && o[0] == 'inputting') {
			f10(c86.replace('{0}', unescape(o[1].replace(/\+/g, '%20'))));
			continue;
		}
		if (o.length > 1 && o[0] == 'upload') {
			if (o[1] == 'ReceivingData') {
				var progressBarobj = LR_GetObj('progressBar').style;
				progressBarobj.width = parseInt(o[2]) / parseInt(o[3]) * 100 + '%';
				LR_GetObj('progressPmt').innerHTML = o[2] + '/' + o[3];
				if (uploading) uploadTimeID = setTimeout("f30()", 1000);
				continue;
			} else if (o[1] == 'Complete') {} else if (o[1] == 'Error') {
				f31();
			} else if (o[1] == 'null') {
				if (uploading) uploadTimeID = setTimeout("f30()", 5000);
			}
			return;
		}
		if (o.length != 6) continue;
		if (sendingtext != '') sendingtext = '';
		o[1] = o[1].replace(/\+/g, '%20');
		o[5] = o[5].replace(/\+/g, '%20');
		o[1] = f15(unescape(o[1]));
		o[4] = o[4].replace(/\+/g, '%20');
		o[4] = unescape(o[4]);
		o[5] = unescape(o[5]);
		if (o[0] == '-1') {
			if (timerID != null) {
				clearTimeout(timerID);
				timerID = null;
			}
			getReady('r');
			_BeforeWinExit = 1;
			alert(o[1]);
			if (o[4] == 'close') {
				window.close();
				return;
			}
			window.location = getnoteurl();
			return;
		}
		if (o[3] != '') {
			if (o[4].indexOf('start') != 0) {
				if (wordscheckstring.indexOf('|' + o[3] + '|') != -1) {
					continue;
				}
				wordscheckstring += o[3] + '|';
				MaxID = o[3];
			}
			switch (o[2]) {
			case '1':
				if (o[1].toString().indexOf('%name%') > -1) {
					o[1] = o[1].toString().replace('%name%', '<b>' + o[5] + '</b>')
				}
				f21(o[1]);
				break;
			case '37':
				var ooo = o[1].split("|");
				for (ww = 0; ww < ooo.length; ww++) {
					ooo[ww] = ooo[ww].replace(/\+/g, '%20');
					ooo[ww] = unescape(ooo[ww]);
				}
				if (ooo[0].length > 0) window.document.title = ooo[0];
				if (ooo[1].length > 0) changeadv(ooo[1], ooo[2], c44, LR_sysurl);
				break;
			case '17':
				if (uploading) f31();
				f20('<p><font class="clientnamefont">' + c23 + ' ' + GetNowTime() + '</font></p><div style="margin-left:5px" class="clientfont">' + o[1] + '</div>', true);
				break;
			case '43':
				pingjia();
				break;
			case '46':
				LR_oname0530 = o[5];
				YuYue();
				break;
			case '50':
				IFrameOpen(o[1]);
				break;
			case '16':
				if (uploading) f31();
				o[1] = o[1].toString().replace('%c%', '<b><font class="clientnamefont">' + c23 + '</font></b>');
				f20('<p><font class="sysfont">' + o[1] + '</font></p>', true);
				break;
			case '-3':
				c93 = -1;
				autoanswer3_time = 0;
				autoanswer2_time = autoanswer1_time = new Date().getTime();
				f20('<p><font class="operatornamefont">' + o[5].replace('HTTP/1.1 100 Continue', '') + '&nbsp; ' + o[0] + '</font></p><div style="margin-left:5px" class="operatorfont">' + o[1] + '</div>', true);
				play();
				break;
			case '-2':
				f20('<p><font class="clientnamefont">' + c23 + '  ' + o[0] + '</font></p><div style="margin-left:5px" class="clientfont">' + o[1] + '</div>', true);
				break;
			case '3':
				if (o[5] == '') break;
				if (chatendcheck && c112 > 0) {
					chatendcheck = 0;
					Intervalid = window.setInterval('showTime()', 1000);
				}
				c93 = -1;
				autoanswer3_time = 0;
				autoanswer2_time = autoanswer1_time = new Date().getTime();
				f20('<p><font class="operatornamefont">' + o[5].replace('HTTP/1.1 100 Continue', '') + '&nbsp;' + GetNowTime() + '</font></p><div style="margin-left:5px" class="operatorfont">' + o[1] + '</div>', true);
				owordscount++;
				play();
				break;
			case '20':
				autoanswer3_time = 0;
				autoanswer2_time = autoanswer1_time = new Date().getTime();
				f20(o[1], true);
				break;
			case '4':
				autoanswer3_time = 0;
				autoanswer2_time = autoanswer1_time = new Date().getTime();
				var oooo = o[1].split("|");
				if (oooo.length == 2) {
					if (oooo[0] != '') {
						alert(unescape(oooo[0].replace(/\+/g, '%20')));
					}
					f8('end');
					_WinExit = 1;
					_BeforeWinExit = 1;
					window.onunload = null;
					window.onbeforeunload = null;
					chatwordsFrame.onunload = null;
					chatwordsFrame.onbeforeunload = null;
					lurl = unescape(oooo[1]);
					if (lurl.substring(0, 9) == 'transfer:') {
						lurl = lurl.substring(9, lurl.length);
					} else {
						lurl = 'custom_url.aspx?url=' + unescape(oooo[1]);
					}
					setTimeout("window.location=lurl;", 1500);
				} else if (oooo.length == 1) {
					window.open(o[1], o[3], '');
				}
				break;
			case '22':
				_WinExit = 1;
				_BeforeWinExit = 1;
				window.onunload = null;
				window.onbeforeunload = null;
				chatwordsFrame.onunload = null;
				chatwordsFrame.onbeforeunload = null;
				window.location = o[1];
				break;
			default:
				break;
			}
		}
		switch (o[4]) {
		case 'start':
			start2(o);
			isstart = 1;
			break;
		case 'start1':
			c93 = 0;
			start2(o);
			isstart = 1;
			break;
		case 'restart':
			f8('start');
			return;
		case 'end':
			if (Intervalid != null) {
				clearInterval(Intervalid);
				Intervalid = null;
			}
			if (timerID != null) {
				clearTimeout(timerID);
				timerID = null;
			}
			if (wordscheckstring == null) {
				return;
			}
			wordscheckstring = null;
			_BeforeWinExit = 1;
			chatwordsFrame.document.body.innerHTML = chatwordsFrame.document.body.innerHTML.replace(/onclick/g, "ronclick");
			if (chatwordsFrame.document.body.innerHTML.indexOf(c8) == -1) {
				f20('<p class="sysfont">' + o[1] + '<BR>' + c8 + '</p>', true);
			}
			return;
		case 'print':
			f21(o[1]);
			break;
		case 'direct':
			if (Intervalid != null) {
				clearInterval(Intervalid);
				Intervalid = null;
			}
			if (timerID != null) {
				clearTimeout(timerID);
				timerID = null;
			}
			if (wordscheckstring == null) {
				return;
			}
			wordscheckstring = null;
			_BeforeWinExit = 1;
			alert(o[1]);
			chatwordsFrame.document.body.innerHTML = chatwordsFrame.document.body.innerHTML.replace(/onclick/g, "ronclick");
			f21(o[1]);
			if (chatwordsFrame.document.body.innerHTML.indexOf(c8) == -1) {
				f20('<p class="sysfont">' + o[1] + '<BR>' + c8 + '</p>', true);
			}
			return;
		case 'exit':
			return;
		}
	}
	if (sendingtext != '') {
		sendingtext = '';
	}
	clearTimeout(timerID);
	timerID = null;
	timerID = setTimeout("f14()", !isstart ? 2000 : 1);
	autoanswer();
}
function f10(text) {
	if (c44) text = '<img src="imgs/secure.gif"  alt="SSL 128 bit"> ' + text;
	if (LR_GetObj('td_prompt2').innerHTML != text) LR_GetObj('td_prompt2').innerHTML = text;
}
var c74 = 0;

function User_Send() {
	if (wordscheckstring == null) return false;
	var tempouttext = f9(f18_out().replace(/\n/g, ''));
	var temphtml = f15(f18());
	if (tempouttext == '' && (temphtml.indexOf('IMG') == -1) && (temphtml.indexOf('img') == -1)) {
		f10(c4);
		f19('', false);
		f22();
		return false;
	}
	var ml = 8000;
	if (kindget == 1) ml = 2000;
	if (escape(temphtml).length > ml) {
		f10(c120.replace('{0}', temphtml.length.toString()));
		return false;
	};
	f19('', false);
	f7();
	f22();
	f10(c22);
	if (newtext != '') {
		newtext += ',' + encodeURIComponent(temphtml);
	} else {
		presendtext += ',' + encodeURIComponent(temphtml);
	}
	if (MaxID != 0) f20('<p><font class="clientnamefont">' + c23 + ' ' + GetNowTime() + '</font></p><div style="margin-left:5px" class="clientfont">' + temphtml + '</div>', true);
	if (c73 > -1 && pj == '') {
		c74++;
		if (c74 >= c73) pingjia();
	}
	f10(c21 + ':' + shortcut);
	if (c93 == -1) autoanswer3_time = new Date().getTime();
	clearTimeout(timerID_answermore);
	timerID_answermore = null;
	return true;
}
var clearhtml = false;

function AddLine() {
	var tagPrefix = '\r\n';
	var element = LR_GetObj('TextBox1_editor');
	if (document.selection && document.selection.type != 'Control') {
		var sel = document.selection.createRange();
		if (sel.text.length > 0) {
			sel.text += tagPrefix;
		} else {
			sel.text = tagPrefix;
		}
		sel.select();
	} else if (element != null && window.getSelection && element.selectionStart > -1) {
		var startP = element.selectionStart;
		var endP = element.selectionEnd;
		element.value = element.value.substring(0, startP) + tagPrefix + element.value.slice(endP);
		element.selectionStart = startP + 2;
		element.selectionEnd = endP + 1;
	}
}
function f11(evt) {
	evt = evt || window.event;
	var keyCode = evt.keyCode;
	var ctrlKey = evt.ctrlKey;
	var altKey = evt.altKey;
	if (altKey && evt.keyCode == 37) {
		evt.cancelBubble = true;
		evt.returnValue = false;
		return;
	}
	if ((keyCode == 13) && shortcut == 'Enter' && ctrlKey) {
		AddLine();
		return false;
	}
	if ((keyCode == 13) && shortcut == 'Enter') {
		clearhtml = User_Send();
		return false;
	}
	if (ctrlKey && (keyCode == 13) && shortcut == 'Ctrl + Enter') {
		clearhtml = User_Send();
		return false;
	}
	if (altKey && (keyCode == 83) && shortcut == 'ALT + S') {
		clearhtml = User_Send();
		return false;
	}
	return true;
}
function f12(evt) {
	if (clearhtml) {
		f19('', false);
		f22();
		clearhtml = false;
		return false;
	}
}
function f13() {
	f8('end')
}
function f14() {
	if (isstarted == 0) {
		f8('start');
		return;
	}
	if (chatwordsFrame.serverkindname != '') {
		newtext += ',ACT_SERVERKIND|' + chatwordsFrame.serverkind + '|' + encodeURIComponent(chatwordsFrame.serverkindname);
		chatwordsFrame.serverkindname = '';
	}
	if (GuestTel != '') {
		newtext += ',ACT_TEL|' + GuestTel;
		GuestTel = '';
	}
	if (pj != '' && pj != '1') {
		newtext += ',ACT_PJ|' + pj;
		pj = '1';
	}
	if (typeof(reservecontent) != 'undefined' && reservecontent != '' && reservecontent != '1') {
		newtext += ',ACT_YY|' + reservecontent;
		reservecontent = '1';
	}
	f8('check');
}
function convertIMG(str) {
	var arr, arr1, re, s;
	re = /{img:.*?}/g;
	arr = str.match(re);
	if (arr == null) return str;
	for (i = 0; i < arr.length; i++) {
		arr1 = arr[i].match(re);
		if (arr1 == null) return str;
		if (arr1.length == 1) {
			s = arr1[0].substring(arr1[0].indexOf(':') + 1, arr1[0].indexOf('}'));
			str = str.replace(arr1, '<img src=' + s + ' border=0>');
		}
	}
	return str;
}
function convertToHtml(str) {
	return convertIMG(str.replace(/ /g, '&nbsp;').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\"/g, '&quot;').replace(/\'/g, '&#39;'));
}
function f15(html) {
	html = html.replace(/<\/?SPAN[^>]*>/gi, "");
	html = html.replace(/<(\w[^>]*)  class=([^    |>]*)([^>]*)/gi, "<$1$3");
	html = html.replace(/<(\w[^>]*)  lang=([^    |>]*)([^>]*)/gi, "<$1$3");
	html = html.replace(/<\\?\?xml[^>]*>/gi, "");
	html = html.replace(/<\/?\w+:[^>]*>/gi, "");
	html = html.replace(/ /, "  ");
	html = html.replace(/<iframe/gi, '<xiframe');
	if (c39) {
		var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi");
		html = html.replace(re, "<div$2</div>");
	}
	html = html.replace(/<script.*<\/script>/gi, "");
	return html;
}
function f19(text, add) {
	if (add) {
		if (usetext) {
			LR_GetObj('TextBox1_editor').value += text;
		} else {
			FreeTextBox1_editor.document.body.innerHTML += text;
		}
	} else {
		if (usetext) {
			LR_GetObj('TextBox1_editor').value = text;
		} else {
			FreeTextBox1_editor.document.body.innerHTML = text;
		}
	}
}
function f7() {
	if (LR_GetObj('Button1') != null) {
		try {
			LR_GetObj('Button1').focus();
			return;
		} catch (e) {}
	};
	window.setTimeout(function() {
		if (usetext) {
			LR_GetObj('TextBox1_editor').focus();
		} else {
			FreeTextBox1_editor.focus();
		}
	}, 0);
}
function f20(html, add) {
	if (!isFocus) {
		flash_title();
		window.focus();
	}
	if (add) {
		chatwordsFrame.document.body.innerHTML += html;
	} else chatwordsFrame.document.body.innerHTML = html;
	for (var i = 0; i < 10; i++) chatwordsFrame.scroll(0, 50000);
}
function f21(html) {
	if (!isFocus) {
		flash_title();
		window.focus();
	}
	LR_GetObj('td_prompt1').innerHTML = '&nbsp;' + html;
}
function OpenDialog(url, width, height) {
	if (navigator.appName == 'Microsoft Internet Explorer') {
		window.showModalDialog(url, self, 'dialogWidth:' + width + 'px;dialogHeight:' + height + 'px;status:0;scroll:0;location:0;help:0;');
	} else {
		window.open(url, 'LR_Dialog', 'modal=yes,width=' + width + ',height=' + height + ',resizable=no,scrollbars=no,location=no,status=no');
	}
}
function SwitchShortCut() {
	OpenDialog('ShortCutWin_' + lng + '.aspx', 210, 135);
}
function SwitchShortCut1(shortcut1) {
	if (!shortcut1) return;
	shortcut = shortcut1;
	f10(c21 + ':' + shortcut);
	f7();
}
function SetFont() {
	OpenDialog('SetFont_' + lng + '.aspx', 380, 280);
}
function SetFont1(fontobj1) {
	if (usetext) return;
	var obj = FreeTextBox1_editor.document;
	if (!fontobj1) return;
	fontobj = fontobj1;
	obj.execCommand('fontname', '', fontobj.fontname);
	if (fontobj.isbold != obj.queryCommandState('bold')) obj.execCommand('bold', '', null);
	if (fontobj.isitalic != obj.queryCommandState('Italic')) obj.execCommand('Italic', '', null);
	obj.execCommand('FontSize', '', ConvertFontsize(fontobj.fontsize));
	if (fontobj.isstrikethrough != obj.queryCommandState('strikethrough')) obj.execCommand('strikethrough', '', null);
	if (fontobj.isunderline != obj.queryCommandState('underline')) obj.execCommand('underline', '', null);
	f7();
}
function f22() {
	if (usetext) return;
	var obj = FreeTextBox1_editor.document;
	obj.execCommand('SelectAll', '', null);
	obj.execCommand('fontname', '', fontobj.fontname);
	if (fontobj.isbold != obj.queryCommandState('bold')) obj.execCommand('bold', '', null);
	if (fontobj.isitalic != obj.queryCommandState('Italic')) obj.execCommand('Italic', '', null);
	obj.execCommand('FontSize', '', ConvertFontsize(fontobj.fontsize));
	if (fontobj.isstrikethrough != obj.queryCommandState('strikethrough')) obj.execCommand('strikethrough', '', null);
	if (fontobj.isunderline != obj.queryCommandState('underline')) obj.execCommand('underline', '', null);
}
function ConvertFontsize(size) {
	if (size == 8) return 1;
	if (size == 10) return 2;
	if (size == 12) return 3;
	if (size == 14) return 4;
	if (size == 18) return 5;
	if (size == 24) return 6;
	if (size == 36) return 7;
}
function SelSmile() {
	OpenDialog('Smile_' + lng + '.aspx', 360, 330);
}
function SelSmile1(smilesrc) {
	var ss = usetext ? LR_GetObj('TextBox1_editor').value : f18();
	if (smilesrc) {
		f19(ss + (usetext ? '{img:' + smilesrc + '}' : '<img src="' + smilesrc + '" border="0">'), 0);
		f7();
	}
}
function f23() {
	var obj = chatwordsFrame.document;
	var chathtml1 = obj.body.innerHTML;
	var code_win = window.open('about:blank', '_blank', 'top=10000');
	try {
		code_win.document.open();
		code_win.document.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><base target="_blank">' + iframestyle + '</head><body></body></html>');
		code_win.document.write(chathtml1);
		code_win.document.close();
		code_win.document.execCommand('saveas', '', c6 + '.htm');
		code_win.close();
	} catch (e) {
		if (code_win != null) code_win.close();
	}
}
function f24() {
	var obj = chatwordsFrame.document;
	obj.execCommand('print', '', null);
}
function HidePingjiaobj() {
	LR_m_f(LR_m_d, true, false, false);
	var div = LR_GetObj('modalDiv_Pingjiaobj');
	div.style.display = 'none';
}
var pj = '';

function pingjia() {
	if (wordscheckstring == null) return;
	var div = LR_GetObj('modalDiv_Pingjiaobj');
	if (div != null && div.style.display != 'none') return;
	LR_m_d = LR_m_e(true, false, false);
	if (div == null) {
		var mainhtm = '<table id="Table_pingjia" cellSpacing="5" cellPadding="0" align="center" border="0"><tr><td height="25"><b>' + c76 + '</b></td></tr><tr><td >' + c77 + '</td></tr><tr><td>';
		var pj_rr = c72.split('|');
		for (w = 0; w < pj_rr.length; w++) {
			if (pj_rr[w] == '') {
				continue;
			}
			mainhtm += '<input type="radio" id="pj' + w.toString() + '" name="pj"   value="' + pj_rr[w] + '" ' + ((w == 0) ? 'checked' : '') + ' />' + pj_rr[w];
		}
		mainhtm += '</td></tr><tr><td height="25" valign="bottom">' + c78 + '</td></tr><tr><td><TEXTAREA rows="8" cols="42"  name="note"  id="note"  style="BORDER-RIGHT: navy 1px solid; BORDER-TOP: navy 1px solid; FONT-SIZE: 12pt; BORDER-LEFT: navy 1px solid; WIDTH: 100%; BORDER-BOTTOM: navy 1px solid; BORDER-LEFT: navy 1px solid; HEIGHT: 75px"></TEXTAREA></td></tr><tr><td height="5"></td></tr><tr><td align="center" id="td_19"><A onClick="pingjia1();return false;" href="javascript:void(0)" class="menu2">' + c79 + '</A> <A style="margin-left:20px;" onClick="HidePingjiaobj();return false;" href="javascript:void(0)" class="menu2">' + c80 + '</A>	</td></tr></table>';
	}
	AddmodalDiv('Pingjiaobj', mainhtm);
	LR_GetObj('note').focus();
}
function pingjia1() {
	var note = LR_GetObj('note').value;
	var pj0 = '';
	var pj_rr = c72.split('|');
	for (w = 0; w < pj_rr.length; w++) {
		if (pj_rr[w] == '') {
			continue;
		}
		if (LR_GetObj('pj' + w.toString()).checked) {
			pj0 += LR_GetObj('pj' + w.toString()).value;
		}
	}
	f20('<p><font class="sysfont">' + c119 + '</font></p>', true);
	pj = encodeURIComponent(pj0) + '|' + encodeURIComponent(note);
	c81 = '';
	HidePingjiaobj();
}
if (c117 != '') {
	document.write('<scr' + 'ipt language="ja' + 'vasc' + 'ript" src="' + unescape(c117) + 'ws/reservehtml.aspx?siteid=' + LR_websiteid + '&lng=' + lng + '"></sc' + 'ript>');
}
function HideYuYueobj() {
	LR_m_f(LR_m_d, true, false, true);
	var div = LR_GetObj('modalDiv_YuYueobj');
	if (div != null) div.style.display = 'none';
}
var LR_oname0530 = '';

function YuYue() {
	if (wordscheckstring == null || typeof(reserveformhtml) == 'undefined') return;
	var div = LR_GetObj('modalDiv_YuYueobj');
	if (div != null && div.style.display != 'none') return;
	LR_m_d = LR_m_e(true, false, true);
	AddmodalDiv('YuYueobj', reserveformhtml);
	LR_GetObj('reservename').focus();
}
var CaptureCount = 0;

function Capture() {
	if (navigator.appVersion.indexOf("MSIE") == -1) {
		alert(c64);
		return;
	}
	var testObj = null;
	try {
		testObj = new ActiveXObject("CaptureScreen.CapRect.2");
	} catch (e) {}
	if (testObj) {
		delete testObj;
	} else {
		var winactivex = window.open('activex_' + lng + '.htm', 'activex', '');
		winactivex.moveTo(0, 0);
		winactivex.focus();
		return;
	}
	CaptureCount++;
	var HideWindow;
	if (window.confirm(c68)) {
		HideWindow = true;
	}
	var span = chatwordsFrame.document.createElement("P");
	span.id = 'Capture' + CaptureCount;
	var CapObject = chatwordsFrame.document.createElement("OBJECT");
	span.appendChild(CapObject);
	CapObject.width = '390px';
	CapObject.height = '226px';
	CapObject.style.margin = "5px 8px";
	CapObject.id = 'CapRect' + CaptureCount;
	CapObject.classid = 'clsid:D9CBC5C0-A9B4-441A-B888-8181D5439CC9';
	CapObject.HideWindow = HideWindow;
	CapObject.TipBitmap = 'jp_' + (lng == 'kr' ? 'en' : lng) + '.bmp';
	CapObject.SetButtonOk(13, 123, 81, 25);
	CapObject.SetButtonCancel(98, 123, 81, 25);
	if (CapObject.Capture()) {
		var span1 = chatwordsFrame.document.createElement("SPAN");
		span1.id = 'SPAN' + CaptureCount;
		span1.innerHTML = '<p style="width:' + CapObject.width + ';margin-top:0;" align=center><a href="javascript:void(0)" onclick="parent.Capture_SaveAs(' + CaptureCount + ');return false;">' + c66 + '</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="' + LR_sysurl + 'site/' + LR_siteid + '/Cupload/' + LR_sid + CapObject.PngName + '">' + c65 + '</a></p>';
		span.appendChild(span1);
		chatwordsFrame.document.body.appendChild(span);
		chatwordsFrame.scroll(0, 50000);
		if (CapObject.SetPostURL(LR_sysurl + 'lr/CaptureUpload1.aspx?uploadId=' + new Date().getTime() + '' + Math.floor(1000 * Math.random()))) {
			CapObject.AddInput("sid", LR_sid);
			CapObject.AddInput("siteid", LR_websiteid);
			CapObject.AddInput("lng", lng);
			CapObject.Send("PngFile");
		} else {
			window.alert(c67);
		}
	} else {
		span.removeChild(CapObject);
		delete CapObject;
		delete span;
	}
}
function Capture_SaveAs(obj) {
	chatwordsFrame.document.getElementById('CapRect' + obj).Save();
}
var GuestTel = '';

function Freecall() {
	if (wordscheckstring == null) return;
	OpenDialog('freecall_' + lng + '.aspx', 348, 230);
}
function Freecall1(guestname, tel) {
	GuestTel = encodeURIComponent(guestname) + '|' + encodeURIComponent(tel);
}
var _WinExit = 0;
var _BeforeWinExit = 0;
var owordscount = 0;

function f25() {
	if (_BeforeWinExit || _WinExit) return;
	_WinExit = 1;
	if (wordscheckstring == null) return;
	f33();
}
function f26() {
	if (_BeforeWinExit || _WinExit) return;
	_WinExit = 1;
	if (wordscheckstring == null) return;
	f33();
}
function f33() {
	if (_BeforeWinExit) return;
	_WinExit = 1;
	if (wordscheckstring == null) return;
	if (timerID != null) {
		clearInterval(timerID);
		timerID = null;
	}
	f13();
	if (chatwordsFrame.document.getElementById('CapRect1') != null) {
		chatwordsFrame.document.getElementById('CapRect1').CleanTemp();
	}
	if (c87 != null && navigator.appName == 'Microsoft Internet Explorer') {
		eval(c87);
		c87 = null;
	} else {
		alert(c0);
	}
}
function f32() {
	if (_BeforeWinExit) return;
	if (pj == '' && c82) pingjia();
	return c81;
}
var uploading = false;

function f27() {
	if (wordscheckstring == null) if (uploading) return;
	var logoobj = LR_GetObj('uploadobj').style;
	if (logoobj.display == '') {
		return;
	}
	logoobj.display = '';
	LR_GetObj('uploadFrametd').innerHTML = '<iframe id="uploadFrame" name="uploadFrame" style="BORDER-TOP-STYLE: none; BORDER-RIGHT-STYLE: none; BORDER-LEFT-STYLE: none;  BORDER-BOTTOM-STYLE: none; HEIGHT: 80;" frameborder="0" hspace="0" height="80" width="100%" src="about:blank"></iframe>';
	var up = '<table cellspacing=1 cellpadding=0 width=100% border=0 ID="Table1"><form action="' + LR_sysurl + 'lr/ClientUpload.aspx?uploadId=' + LR_sid + '&siteid=' + LR_websiteid + '&lng=' + lng + '" method="post" enctype="multipart/form-data" name="Form1" ID="Form1" target="_self"><tr><td colspan=3 height=1 bgcolor="#4c6ca5"></td></tr><tr><td style="WIDTH: 100px;" noWrap>' + c27 + ':</td><td>' + c37 + '</td><td style="width:10px;"><INPUT type="button" value="' + c40 + '" ID="Button2" NAME="Button2" onclick="parent.f28();"></td></tr><tr><td noWrap>' + c41 + ':</td><td colspan=2><INPUT type="file" ID="File1" NAME="File1" style="width:100%;"></td></tr><tr><td noWrap>' + c42 + ':</td><td><INPUT type="text" ID="filenote" NAME="filenote" style="WIDTH: 100%;"></td><td><INPUT type="submit" value="' + c43 + '" ID="Button1" NAME="Button1" onclick="return parent.f29();"></td></tr></form></table>';
	var obj = uploadFrame.document;
	obj.open();
	obj.write('<html><head>' + c11 + '</head><body scroll=no>' + up + '</body></html>');
	obj.close();
	var progressBarobj = LR_GetObj('progressBar').style;
	progressBarobj.width = '0%';
	LR_GetObj('progressPmt').innerHTML = '&nbsp;';
	chatwordsFrame.scroll(0, 50000);
	f6();
}
function f28() {
	var logoobj = LR_GetObj('uploadobj').style;
	logoobj.display = 'none';
	f6();
}
var uploadTimeID = null;

function f29() {
	var v = LR_GetObj('File1', uploadFrame.document).value;
	if (v == '') {
		alert(c18);
		LR_GetObj('File1', uploadFrame.document).focus();
		return false;
	}
	var v1 = LR_GetObj('filenote', uploadFrame.document).value;
	if (v1 == '') {
		LR_GetObj('filenote', uploadFrame.document).value = v.substring(v.lastIndexOf('\\') + 1);
	}
	var logoobj = LR_GetObj('uploadobj').style;
	logoobj.display = 'none';
	var logoobj1 = LR_GetObj('uploadobj1').style;
	logoobj1.display = '';
	uploading = true;
	uploadTimeID = setTimeout('f30()', 1000);
	return true;
}
function f30() {
	f8('upload');
}
function f31(act) {
	var logoobj = LR_GetObj('uploadobj').style;
	logoobj.display = 'none';
	var logoobj1 = LR_GetObj('uploadobj1').style;
	logoobj1.display = 'none';
	if (uploadTimeID != null) {
		clearTimeout(uploadTimeID);
		uploadTimeID = null;
	}
	uploading = false;
	f6();
}
function editfocus() {
	isFocus = true;
	flash_title1();
}
function editblur() {
	isFocus = false;
}
var logoobj = null;
var logoobj1 = null;
logoobj = LR_GetObj('firstp').style;
logoobj1 = LR_GetObj('table_01').style;
logoobj.display = 'none';
logoobj1.display = '';
f5();
if (!usetext) {
	var obj = LR_GetObj('FreeTextBox1_editor').contentWindow;
	var obj1 = (navigator.appVersion.indexOf('MSIE 5.0') > -1) ? FreeTextBox1_editor.document : obj.document;
	obj1.open();
	obj1.write('<html name="FreeTextBox1_editor_html"><head><base target="_blank"><script language="javascript">try{if(window.HTMLElement){HTMLElement.prototype.__defineGetter__("outerText",function(){var r=this.ownerDocument.createRange();r.selectNodeContents(this);return r.toString();});}}catch(e){}function killErrors(){return true;}window.onerror = killErrors;</script><style type="text/css">body{margin: 0px; padding: 0px 0px 0px 0px; border: 0px;}p { margin-top:0px;margin-bottom:0px;}</style></head><body onkeydown="return parent.f11(event)" onkeyup="return parent.f12(event)" onfocus="return parent.editfocus()" onblur="return parent.editblur()"></body></html>');
	obj1.close();
	if (navigator.userAgent.indexOf('Opera') == -1 && navigator.userAgent.indexOf('Firefox') == -1) {
		obj1.body.contentEditable = true;
	}
	if ((navigator.appVersion.indexOf('MSIE 5.5') > -1) || (navigator.appVersion.indexOf('MSIE 6') > -1) || (navigator.appVersion.indexOf('MSIE 7') > -1)) {} else {
		try {
			obj1.designMode = 'On';
			if (obj1.addEventListener) {
				obj1.addEventListener('keydown', f11, false);
				obj1.addEventListener('keyup', f12, false);
				obj1.addEventListener('focus', editfocus, false);
				obj1.addEventListener('blur', editblur, false);
			} else if (obj1.attachEvent) {
				obj1.attachEvent('onkeydown', f11);
				obj1.attachEvent('onkeyup', f12);
				obj1.attachEvent('onfocus', editfocus);
				obj1.attachEvent('onblur', editblur);
			}
		} catch (e) {}
	}
	f22();
}
f21(c45);
f16();
f17();
window.focus();
setTimeout('f6();', 500);
f7();
changeadv(c30, c1, c44, LR_sysurl);