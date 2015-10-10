# Anchor List

- 特定の範囲にある見出しごとにアンカーを生成
- 指定した場所にそのリンク一覧を追加

```
$(function(){
  $('#anchor-list').anchorlist({
    content : $('body'),      // 範囲指定
    header  : 'h2',           // 見出しの要素指定
    classname  : 'anchorlist' // リスト<ul>のクラス名
  });
});
```
