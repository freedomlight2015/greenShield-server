using System;
using System.Web;
using System.Web.UI;
using System.Collections.Generic;
using System.Text;

namespace LRServer_test.LiveWeb.OC
{
    public class DefendSetting : Page
    {
        public DefendSetting()
        {

        }
        // Methods
        protected void Page_Load(object sender, EventArgs e)
        {
            b7.swtDefendSetting();
        }
    }
}
