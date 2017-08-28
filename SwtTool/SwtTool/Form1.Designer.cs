namespace SwtTool
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.encrpt_btn = new System.Windows.Forms.Button();
            this.encript_txt = new System.Windows.Forms.TextBox();
            this.decrpt_txt = new System.Windows.Forms.TextBox();
            this.dencrpt_btn = new System.Windows.Forms.Button();
            this.decrptKey = new System.Windows.Forms.TextBox();
            this.encrptkey = new System.Windows.Forms.TextBox();
            this.openFileDialog1 = new System.Windows.Forms.OpenFileDialog();
            this.uncompress_txt = new System.Windows.Forms.TextBox();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.uncompress_choice = new System.Windows.Forms.Button();
            this.uncompress_btn = new System.Windows.Forms.Button();
            this.result = new System.Windows.Forms.TextBox();
            this.compressSave = new System.Windows.Forms.Button();
            this.saveFileDialog1 = new System.Windows.Forms.SaveFileDialog();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.compress_choice = new System.Windows.Forms.Button();
            this.compress_btn = new System.Windows.Forms.Button();
            this.compress_txt = new System.Windows.Forms.TextBox();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            this.SuspendLayout();
            // 
            // encrpt_btn
            // 
            this.encrpt_btn.Location = new System.Drawing.Point(266, 12);
            this.encrpt_btn.Name = "encrpt_btn";
            this.encrpt_btn.Size = new System.Drawing.Size(75, 23);
            this.encrpt_btn.TabIndex = 0;
            this.encrpt_btn.Text = "加密";
            this.encrpt_btn.UseVisualStyleBackColor = true;
            this.encrpt_btn.Click += new System.EventHandler(this.encrpt_btn_Click);
            // 
            // encript_txt
            // 
            this.encript_txt.Location = new System.Drawing.Point(12, 13);
            this.encript_txt.Name = "encript_txt";
            this.encript_txt.Size = new System.Drawing.Size(177, 21);
            this.encript_txt.TabIndex = 1;
            // 
            // decrpt_txt
            // 
            this.decrpt_txt.Location = new System.Drawing.Point(441, 13);
            this.decrpt_txt.Name = "decrpt_txt";
            this.decrpt_txt.Size = new System.Drawing.Size(177, 21);
            this.decrpt_txt.TabIndex = 3;
            // 
            // dencrpt_btn
            // 
            this.dencrpt_btn.Location = new System.Drawing.Point(695, 12);
            this.dencrpt_btn.Name = "dencrpt_btn";
            this.dencrpt_btn.Size = new System.Drawing.Size(75, 23);
            this.dencrpt_btn.TabIndex = 2;
            this.dencrpt_btn.Text = "解密";
            this.dencrpt_btn.UseVisualStyleBackColor = true;
            this.dencrpt_btn.Click += new System.EventHandler(this.dencrpt_btn_Click);
            // 
            // decrptKey
            // 
            this.decrptKey.Location = new System.Drawing.Point(625, 13);
            this.decrptKey.Name = "decrptKey";
            this.decrptKey.Size = new System.Drawing.Size(64, 21);
            this.decrptKey.TabIndex = 4;
            this.decrptKey.Text = "69557093";
            // 
            // encrptkey
            // 
            this.encrptkey.Location = new System.Drawing.Point(196, 12);
            this.encrptkey.Name = "encrptkey";
            this.encrptkey.Size = new System.Drawing.Size(64, 21);
            this.encrptkey.TabIndex = 5;
            this.encrptkey.Text = "69557093";
            // 
            // openFileDialog1
            // 
            this.openFileDialog1.FileName = "openFileDialog1";
            this.openFileDialog1.FileOk += new System.ComponentModel.CancelEventHandler(this.openFileDialog1_FileOk_1);
            // 
            // uncompress_txt
            // 
            this.uncompress_txt.Location = new System.Drawing.Point(6, 20);
            this.uncompress_txt.Name = "uncompress_txt";
            this.uncompress_txt.Size = new System.Drawing.Size(273, 21);
            this.uncompress_txt.TabIndex = 6;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.uncompress_choice);
            this.groupBox1.Controls.Add(this.uncompress_btn);
            this.groupBox1.Controls.Add(this.uncompress_txt);
            this.groupBox1.Location = new System.Drawing.Point(13, 41);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(757, 55);
            this.groupBox1.TabIndex = 7;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "压缩文件读取";
            // 
            // uncompress_choice
            // 
            this.uncompress_choice.Location = new System.Drawing.Point(287, 18);
            this.uncompress_choice.Name = "uncompress_choice";
            this.uncompress_choice.Size = new System.Drawing.Size(75, 23);
            this.uncompress_choice.TabIndex = 8;
            this.uncompress_choice.Text = "选择…";
            this.uncompress_choice.UseVisualStyleBackColor = true;
            this.uncompress_choice.Click += new System.EventHandler(this.uncompress_choice_Click);
            // 
            // uncompress_btn
            // 
            this.uncompress_btn.Location = new System.Drawing.Point(370, 18);
            this.uncompress_btn.Name = "uncompress_btn";
            this.uncompress_btn.Size = new System.Drawing.Size(75, 23);
            this.uncompress_btn.TabIndex = 7;
            this.uncompress_btn.Text = "解压";
            this.uncompress_btn.UseVisualStyleBackColor = true;
            this.uncompress_btn.Click += new System.EventHandler(this.uncompress_btn_Click);
            // 
            // result
            // 
            this.result.Location = new System.Drawing.Point(13, 113);
            this.result.Multiline = true;
            this.result.Name = "result";
            this.result.ScrollBars = System.Windows.Forms.ScrollBars.Both;
            this.result.Size = new System.Drawing.Size(757, 329);
            this.result.TabIndex = 8;
            // 
            // compressSave
            // 
            this.compressSave.Location = new System.Drawing.Point(351, 461);
            this.compressSave.Name = "compressSave";
            this.compressSave.Size = new System.Drawing.Size(75, 23);
            this.compressSave.TabIndex = 7;
            this.compressSave.Text = "压缩保存";
            this.compressSave.UseVisualStyleBackColor = true;
            this.compressSave.Click += new System.EventHandler(this.compressSave_Click);
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.compress_choice);
            this.groupBox2.Controls.Add(this.compress_btn);
            this.groupBox2.Controls.Add(this.compress_txt);
            this.groupBox2.Location = new System.Drawing.Point(10, 510);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(757, 55);
            this.groupBox2.TabIndex = 9;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "压缩文件读取";
            // 
            // compress_choice
            // 
            this.compress_choice.Location = new System.Drawing.Point(287, 18);
            this.compress_choice.Name = "compress_choice";
            this.compress_choice.Size = new System.Drawing.Size(75, 23);
            this.compress_choice.TabIndex = 8;
            this.compress_choice.Text = "选择…";
            this.compress_choice.UseVisualStyleBackColor = true;
            this.compress_choice.Click += new System.EventHandler(this.compress_choice_Click);
            // 
            // compress_btn
            // 
            this.compress_btn.Location = new System.Drawing.Point(370, 18);
            this.compress_btn.Name = "compress_btn";
            this.compress_btn.Size = new System.Drawing.Size(75, 23);
            this.compress_btn.TabIndex = 7;
            this.compress_btn.Text = "压缩保存";
            this.compress_btn.UseVisualStyleBackColor = true;
            this.compress_btn.Click += new System.EventHandler(this.compress_btn_Click);
            // 
            // compress_txt
            // 
            this.compress_txt.Location = new System.Drawing.Point(6, 20);
            this.compress_txt.Name = "compress_txt";
            this.compress_txt.Size = new System.Drawing.Size(273, 21);
            this.compress_txt.TabIndex = 6;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(779, 605);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.compressSave);
            this.Controls.Add(this.result);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.encrptkey);
            this.Controls.Add(this.decrptKey);
            this.Controls.Add(this.decrpt_txt);
            this.Controls.Add(this.dencrpt_btn);
            this.Controls.Add(this.encript_txt);
            this.Controls.Add(this.encrpt_btn);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button encrpt_btn;
        private System.Windows.Forms.TextBox encript_txt;
        private System.Windows.Forms.TextBox decrpt_txt;
        private System.Windows.Forms.Button dencrpt_btn;
        private System.Windows.Forms.TextBox decrptKey;
        private System.Windows.Forms.TextBox encrptkey;
        private System.Windows.Forms.OpenFileDialog openFileDialog1;
        private System.Windows.Forms.TextBox uncompress_txt;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button uncompress_choice;
        private System.Windows.Forms.Button uncompress_btn;
        private System.Windows.Forms.TextBox result;
        private System.Windows.Forms.Button compressSave;
        private System.Windows.Forms.SaveFileDialog saveFileDialog1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button compress_choice;
        private System.Windows.Forms.Button compress_btn;
        private System.Windows.Forms.TextBox compress_txt;
    }
}

