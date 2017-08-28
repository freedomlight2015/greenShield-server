function LastFunction() {
	if (typeof(AddmodalDiv) == "undefined") {
		setTimeout('veiwModel()', 200);
		return
	};
	var rand_left = (document.body.clientWidth - 350) / 2 - Math.random() * 200;
	var rand_top = (document.body.clientHeight - 200) / 2 - Math.random() * 200;
	LR_m_d = LR_m_e(true, false, true);
	AddmodalDiv('Chatpreobjck', '<style type="text/css">.lrinput{BORDER: navy 1px solid;}.submitchat_a{ width:69px; height:21px; color:#666; border:1px solid #666; font-size:12px; line-height:21px; padding:5px; text-decoration:none}</style><table border="0" align="center" cellpadding="1" cellspacing="1" id="Table_user_input" style="margin: 10px;width:100%"><tbody><tr><td colspan="2" height="25"><p align="center" style="FONT-SIZE: 12pt; color:#F00">您好！本次对话已加密</p></td></tr><tr><td colspan="2" height="25"><p align="center" style="FONT-SIZE: 9pt">客服人员在线，请点击"开始对话"按钮。</p></td></tr><tr><td colspan="2" align="center" style="color:orange;height:19px" id="sendprompt"></td></tr><tr><td colspan="2" align="center"><a href="javascript:void()" onclick="submitcheckchat();return false;" class="submitchat_a">开始对话</a></td></tr></tbody></table>', 350, null, rand_left, rand_top)
}

function submitcheckchat() {
	LR_m_f(LR_m_d, true, false, true);
	var div = LR_GetObj('modalDiv_Chatpreobjck');
	div.style.display = 'none';
	LastFunction3();
}