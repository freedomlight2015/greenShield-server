using System;
using System.Collections.Generic;
using System.Text;
using System.Data;

namespace LiveWS.LR
{
    public class MainForm2
    {
        private static void c_test()
        {
            DataRow dataRow_0=null;
            string A_0="", str7; int A_1=0;

            str7=c(dataRow_0, A_0, A_1);
        }
        private static string c(DataRow dataRow_0,string A_0, int A_1)
        {
            Int32 isnomarl = Convert.ToInt32(dataRow_0["isNormal"].ToString());
            string str = "";
            switch (A_1)
            {
                case 0:
                    if (isnomarl == 0)
                    {
                        return "A1|B22";//访问中未验证
                    }
                    else
                    {
                        return "A1|B8";//访问中
                    }
                case 1:
                    return (A_0 + "|B5");//邀请中

                case 2:
                case 3:
                    return "A0|B1";//等待应答

                case 4:
                case 9:
                    return str;//空字符串

                case 5:
                    if (isnomarl == 0)
                    {
                        return (A_0 + "|B22");//对话中未验证
                    }
                    else
                    {
                        return (A_0 + "|B3");//对话中
                    }
                case 6:
                    return (A_0 + "|B7");//内部对话

                case 7:
                    return (A_0 + "|B4");//转接中

                case 8:
                    if (isnomarl == 0)
                    {
                        return (A_0 + "|B22");//对话中未验证
                    }
                    else
                    {
                        return (A_0 + "|B3");//对话中
                    }
                case 10:
                    return "A1|B9";//已离开

                case 11:
                    return "A1|B9";//已离开
            }
            return str;
        }
    }
}
