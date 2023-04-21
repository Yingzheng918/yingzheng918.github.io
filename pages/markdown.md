# 标记语言 - markdown

> Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档，Markdown 文件的后缀名是“.md”。
>
> 1. 专注于文字内容；
> 2. 纯文本，易读易写，可以方便地纳入版本控制；
> 3. 语法简单，没有什么学习成本，能轻松在码字的同时做出美观大方的排版。

## 官网资源

- [Markdown 中文网](http://markdown.p2hp.com/)
- [Markdown 官方教程](https://markdown.com.cn/)
- [Markdown 在线编辑器 1](https://markdown.com.cn/editor/)
- [Markdown 在线编辑器 2](https://www.zybuluo.com/mdeditor/)
- [Markdown 在线编辑器 3](http://mahua.jser.me/)

## 工作原理

- 编辑 .md 或 .markdown 文件 --> 程序打开文件 --> 自动转换 html --> 浏览器预览

## 其它资源

- [John Gruber’s Markdown documentation](https://daringfireball.net/projects/markdown/). Markdown 的创建者编写的原始指南。
- [Markdown Tutorial](https://www.markdowntutorial.com/). 一个开源网站，你能用浏览器在这个网站上尝试 Markdown。
- [Awesome Markdown](https://github.com/mundimark/awesome-markdown). Markdown 工具和学习资源列表。
- [Typesetting Markdown](https://dave.autonoma.ca/blog/2019/05/22/typesetting-markdown-part-1). 这是一个系列教程，介绍了使用 [pandoc](https://pandoc.org/) 和 [ConTeXt](https://www.contextgarden.net/) 对 Markdown 文档进行排版的系统。

## 基本语法

### 标题

> 要创建标题，请在单词或短语前面添加井号 (#) 。# 的数量代表了标题的级别

| 语法                        | html                | 预览              |
| --------------------------- | ------------------- | ----------------- |
| `# 一级标题`                | `<h1>一级标题</h1>` | <h1>一级标题</h1> |
| 一级标题<br>=============== | `<h1>一级标题</h1>` | <h1>一级标题</h1> |
| `## 二级标题`               | `<h2>二级标题</h2>` | <h2>二级标题</h2> |
| 二级标题<br>=============== | `<h2>二级标题</h2>` | <h2>二级标题</h2> |
| `### 三级标题`              | `<h3>三级标题</h3>` | <h3>三级标题</h3> |
| `#### 四级标题`             | `<h4>四级标题</h4>` | <h4>四级标题</h4> |
| `##### 五级标题`            | `<h5>五级标题</h5>` | <h5>五级标题</h5> |
| `###### 六级标题`           | `<h6>六级标题</h6>` | <h6>六级标题</h6> |

### 段落

> 要创建段落，请使用空白行将一行或多行文本进行分隔

| 语法                                 | html                                         | 预览                                       |
| ------------------------------------ | -------------------------------------------- | ------------------------------------------ |
| 这是第一个段落<br><br>这是第二个段落 | `<p>这是第一个段落</p><p>这是第二个段落</p>` | <p>这是第一个段落</p><p>这是第二个段落</p> |

### 换行

> 在一行的末尾添加两个或多个空格，然后按回车键，即可创建一个换行(`<br>`)

| 语法                              | html                                      | 预览                                    |
| --------------------------------- | ----------------------------------------- | --------------------------------------- |
| 这是第一个段落 <br>这是第二个段落 | `<p>这是第一个段落<br>这是第二个段落</p>` | <p>这是第一个段落<br>这是第二个段落</p> |

### 强调

> 通过将文本设置为粗体或斜体来强调其重要性。

| 语法                   | html                                | 预览                              |
| ---------------------- | ----------------------------------- | --------------------------------- |
| `我是一个**粗体**文本` | `我是一个<strong>粗体</strong>文本` | 我是一个<strong>粗体</strong>文本 |
| `我是一个__粗体__文本` | `我是一个<strong>粗体</strong>文本` | 我是一个<strong>粗体</strong>文本 |
| `我是一个**斜体**文本` | `我是一个<em>斜体</em>文本`         | 我是一个<em>斜体</em>文本         |
| `我是一个__斜体__文本` | `我是一个<em>斜体</em>文本`         | 我是一个<em>斜体</em>文本         |

### 引用

```markdown
> 单行引用
```

> 单行引用

---

```markdown
> 多行引用
>
> 多行引用
```

> 多行引用
>
> 多行引用

---

```markdown
<!-- 嵌套引用 -->

> 嵌套引用
>
> > 嵌套引用
```

> 嵌套引用
>
> > 嵌套引用

---

```markdown
> ## 带有其他元素的引用
>
> > 带有其他元素的引用
```

> ## 带有其他元素的引用
>
> - _斜体_
> - **加粗**
> - **_加粗斜体_**

### 列表

> 要创建有序列表，请在每个列表项前添加数字并紧跟一个英文句点。数字不必按数学顺序排列，但是列表应当以数字 1 起始；对应 html 中的 ol+li

```markdown
1. 有序列表项
2. 有序列表项
```

1. 有序列表项
2. 有序列表项

> 要创建无序列表，请在每个列表项前面添加破折号 (-)、星号 (\*) 或加号 (+) 。缩进一个或多个列表项可创建嵌套列表；对应 html 中的 ul+li

```markdown
- 无序列表项
- 无序列表项
```

- 无序列表项
- 无序列表项

### 代码

- 要将单词或短语表示为代码，请将其包裹在反引号 (`) 中
- 要创建代码块，请将其包裹在反引号 (```) 中，并在第一行末尾表明代码语言或标记（可根据它进行代码高亮）

### 分割线

> 要创建分隔线，请在单独一行上使用三个或多个星号 (\*\*\*)、破折号 (---) 或下划线 (\_\_\_) ，并且不能包含其他内容

### 链接

- 语法：`[超链接显示名](超链接地址 "超链接标题")`
- html：`<a href="超链接地址" title="超链接title">超链接显示名</a>`
- 网址：`<https://markdown.com.cn>`
- html：`<a href="https://markdown.com.cn">https://markdown.com.cn</a>`
- 邮箱：`<fake@example.com>`
- html：`<a href="mailto:fake@example.com">fake@example.com</a>`
- 跳转到代码：`` [`markdown`](#markdown) ``
- html：[`markdown`](#markdown)

### 图片

> 要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本

- 语法：`![图片alt](图片链接 "图片title")`
- html：`<img src="图片链接" alt="图片alt" title="图片title">`

> 给图片增加链接，请将图像的 Markdown 括在方括号中，然后将链接添加在圆括号中

- 语法：`[![沙漠中的岩石图片](/assets/img/shiprock.jpg "Shiprock")](https://markdown.com.cn)`
- html：`<a href="https://markdown.com.cn"><img src="/pages/assets/img/shiprock.jpg" alt="沙漠中的岩石图片" title="Shiprock"></a>`

> 本地图像，使用 base64 方式

```markdown
![图片alt](图片ID "图片title")
[图片 ID]:图片 Base64
```

### 转义

> 要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符

- 以下列出的字符都可以通过使用反斜杠字符从而达到转义目的

| 字符  | 名称                                           |
| ----- | ---------------------------------------------- |
| \\    | backslash                                      |
| \`    | backtick (see also escaping backticks in code) |
| \*    | asterisk                                       |
| \_    | underscore                                     |
| \{ \} | curly braces                                   |
| \[ \] | brackets                                       |
| \( \) | parentheses                                    |
| \#    | pound sign                                     |
| \+    | plus sign                                      |
| \-    | minus sign (hyphen)                            |
| \.    | dot                                            |
| \!    | exclamation mark                               |
| \|    | pipe (see also escaping pipe in tables)        |

> 在 HTML 文件中，有两个字符需要特殊处理： < 和 &。< 符号用于起始标签，& 符号则用于标记 HTML 实体，如果你只是想要使用这些符号，你必须要使用实体的形式，像是 &lt; 和 &amp;

| 字符     | 名称 | 效果   |
| -------- | ---- | ------ |
| `&copy;` | 商标 | &copy; |
| `&lt;`   | <    | &lt;   |
| `&gt;`   | >    | &gt;   |
| `&amp;`  | $    | &amp;  |

### 表格

> 要添加表，请使用三个或多个连字符（---）创建每列的标题，并使用管道（|）分隔每列

```markdown
| 列 1   |   列 2   |   列 3 |
| :----- | :------: | -----: |
| 左对齐 | 居中对齐 | 右对齐 |
```

| 列 1   |   列 2   |   列 3 |
| :----- | :------: | -----: |
| 左对齐 | 居中对齐 | 右对齐 |

### 脚注

```markdown
Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

### 标题编号

`# 一级标题 custom-id`

### 定义列表

```markdown
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.
```

### 删除线

`~~世界是平坦的。~~ 我们现在知道世界是圆的。`

~~世界是平坦的。~~ 我们现在知道世界是圆的。

### 任务列表

```markdown
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

- 方式一：[emojipedia](https://emojipedia.org/)
- 方式二：表情代码 :joy: :tent:
