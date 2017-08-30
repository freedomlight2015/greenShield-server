<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="gsmanager.aspx.cs" Inherits="LiveWeb.OC.GSManage" %>
<!DOCTYPE html>
<html>
<head>
	<title>Security</title>
	<link rel="stylesheet" href="css/style.css">
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="security" />

</head>
<body>
<h1>BrotherHood Security</h1>
   <div class="main">
   <h2>安全设置</h2>
       <form action="bhSecurity.aspx" method="post">
       <input type="hidden" value="level1" name="opt">
       <input type="hidden" value="<%= gsPublic.Global_VerifyCode %>" name="vid">
	    <input type="submit"  value="开启防护">
		</form>	
        <form action="bhSecurity.aspx" method="post">
       <input type="hidden" value="close" name="opt">
       <input type="hidden" value="<%= gsPublic.Global_VerifyCode %>" name="vid">
	    <input type="submit"  value="关闭防护">
		</form>	
        <form action="bhSecurity.aspx" method="post">
       <input type="hidden" value="on" name="track">
       <input type="hidden" value="<%= gsPublic.Global_VerifyCode %>" name="vid">
	    <input type="submit"  value="开启在线访客">
		</form>	
        <form action="bhSecurity.aspx" method="post">
       <input type="hidden" value="off" name="track">
       <input type="hidden" value="<%= gsPublic.Global_VerifyCode %>" name="vid">
	    <input type="submit"  value="关闭在线访客">
		</form>	
   </div>
   <div class="footer">
		<p> BrotherHood Security </p>
   </div>
</body>
</html>