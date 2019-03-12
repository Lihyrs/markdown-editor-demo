<template>
  <div>
    <div id="render-editor">
      <p>Markdown语法主要分为如下几大部分：</p>
      <ul>
        <li>
          <strong>标题</strong>
        </li>
        <li>
          <strong>段落</strong>
        </li>
        <li>
          <strong>区块引用</strong>
        </li>
        <li>
          <strong>代码区块</strong>
        </li>
        <li>
          <strong>强调</strong>
        </li>
        <li>
          <strong>列表</strong>
        </li>
        <li>
          <strong>分割线</strong>
        </li>
        <li>
          <strong>链接</strong>
        </li>
        <li>
          <strong>图片</strong>
        </li>
        <li>
          <strong>反斜杠
            <code>\</code>
          </strong>
        </li>
        <li>
          <strong>符号'`'</strong>
        </li>
      </ul>
      <h4>1 标题</h4>
      <p>两种形式：
        <br>1）使用
        <code>=</code>和
        <code>-</code>标记一级和二级标题。
      </p>
      <blockquote>
        <p>一级标题
          <br>
          <code>=========</code>
          <br>二级标题
          <br>
          <code>---------</code>
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <h1>一级标题</h1>
        <h2>二级标题</h2>
      </blockquote>
      <p>2）使用
        <code>#</code>，可表示1-6级标题。
      </p>
      <blockquote>
        <p># 一级标题
          <br>## 二级标题
          <br>### 三级标题
          <br>#### 四级标题
          <br>##### 五级标题
          <br>###### 六级标题
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <h1>一级标题</h1>
        <h2>二级标题</h2>
        <h3>三级标题</h3>
        <h4>四级标题</h4>
        <h5>五级标题</h5>
        <h6>六级标题</h6>
      </blockquote>
      <h4>2 段落</h4>
      <p>段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用
        <strong>两个以上</strong>空格加上回车（引用中换行省略回车）。
      </p>
      <h4>3 区块引用</h4>
      <p>在段落的每行或者只在第一行使用符号
        <code>&gt;</code>,还可使用多个嵌套引用，如：
      </p>
      <blockquote>
        <p>&gt; 区块引用
          <br>&gt;&gt; 嵌套引用
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <p>区块引用</p>
        <blockquote>
          <p>嵌套引用</p>
        </blockquote>
      </blockquote>
      <h4>4 代码区块</h4>
      <p>代码区块的建立是在每行加上4个空格或者一个制表符（如同写代码一样）。如
        <br>普通段落：
      </p>
      <p>void main()
        <br>{
        <br>printf("Hello, Markdown.");
        <br>}
      </p>
      <p>代码区块：</p>
      <pre><code>void main()
{
    printf("Hello, Markdown.");
}
</code></pre>
      <p>
        <strong>注意</strong>:需要和普通段落之间存在空行。
      </p>
      <h4>5 强调</h4>
      <p>在强调内容两侧分别加上
        <code>*</code>或者
        <code>_</code>，如：
      </p>
      <blockquote>
        <p>*斜体*，_斜体_
          <br>**粗体**，__粗体__
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <p>
          <em>斜体</em>，
          <em>斜体</em>
          <br>
          <strong>粗体</strong>，
          <strong>粗体</strong>
        </p>
      </blockquote>
      <h4>6 列表</h4>
      <p>使用
        <code>·</code>、
        <code>+</code>、或
        <code>-</code>标记无序列表，如：
      </p>
      <blockquote>
        <p>
          -（+*） 第一项
          -（+*） 第二项
          - （+*）第三项
        </p>
      </blockquote>
      <p>
        <strong>注意</strong>：标记后面最少有一个_空格_或_制表符_。若不在引用区块中，必须和前方段落之间存在空行。
      </p>
      <p>效果：</p>
      <blockquote>
        <ul>
          <li>第一项</li>
          <li>第二项</li>
          <li>第三项</li>
        </ul>
      </blockquote>
      <p>有序列表的标记方式是将上述的符号换成数字,并辅以
        <code>.</code>，如：
      </p>
      <blockquote>
        <p>1 . 第一项
          <br>2 . 第二项
          <br>3 . 第三项
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <ol>
          <li>第一项</li>
          <li>第二项</li>
          <li>第三项</li>
        </ol>
      </blockquote>
      <h4>7 分割线</h4>
      <p>分割线最常使用就是三个或以上
        <code>*</code>，还可以使用
        <code>-</code>和
        <code>_</code>。
      </p>
      <h4>8 链接</h4>
      <p>链接可以由两种形式生成：
        <strong>行内式</strong>和
        <strong>参考式</strong>。
        <br>
        <strong>行内式</strong>：
      </p>
      <blockquote>
        <p>[github](https:://github.com "github")。</p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <p>
          <a href="https:://github.com" title="github">github</a>。
        </p>
      </blockquote>
      <p>
        <strong>参考式</strong>：
      </p>
      <blockquote>
        <p>[google][1]
          <br>[github][2]
          <br>[1]:https:://google.com "google"
          <br>[2]:https:://github.com "github"
        </p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <p>
          <a href="https:://google.com" title="google">google</a>
          <br>
          <a href="https:://github.com" title="github">github</a>
        </p>
      </blockquote>
      <p>
        <strong>注意</strong>：上述的
        <code>[1]:https:://google.com "google"</code>不出现在区块中。
      </p>
      <h4>9 图片</h4>
      <p>添加图片的形式和链接相似，只需在链接的基础上前方加一个
        <code>！</code>。
      </p>
      <h4>10 反斜杠
        <code>\</code>
      </h4>
      <p>相当于
        <strong>反转义</strong>作用。使符号成为普通符号。
      </p>
      <h4>11 符号'`'</h4>
      <p>起到标记作用。如：</p>
      <blockquote>
        <p>`ctrl+a`</p>
      </blockquote>
      <p>效果：</p>
      <blockquote>
        <p>`ctrl+a</p>
      </blockquote>
    </div>
  </div>
</template>

<script>
// import md from '../utils/mdRender';

export default {};
</script>
