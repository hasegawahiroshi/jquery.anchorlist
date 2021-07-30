# Anchor List

- 特定の要素ごとにアンカーを生成
- 指定した場所にそのリンク一覧を追加
- テスト

```
$(function(){
  $('#anchor-list').anchorlist({
    anchor     : $('h2'),     // リンク先となる見出しなど
    classname  : 'anchorlist' // リスト<ul>のクラス名
  });
});
```
