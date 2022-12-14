---
description: 「はい」を押しても HARUKA の加工経過時間だけ動いている
sidebar_position: 2
---

# 「はい」を押しても始まらない

## 症状：「はい」ボタンを押してもスタートしない

「はい」ボタンを押しても加工スタートせず、HARUKA 上の加工経過時間だけが過ぎている場合は、HARUKA 起動時に、HAJIME のモーション基板のリセットが出来ていない時に起こります。（※このとき電源投入時のヘッドが原点に復帰する動きが非常にクイックです。）

:::success
HARUKA を再起動します。フリーズしている場合は強制終了して再起動してください。再起動しても回復しない場合は、HARUKA の[一時ファイル](/docs/soft/harukaganishinai/fairu)を削除して再度 HARUKA を再起動してください。
:::

## ケース1：HARUKAの動作不安定

### 対策法：強制終了する

![1. キーボードの「WINマーク」+「X」を押して「タスクマネージャー」をクリックします。](/assets/20191107_02.png)

![2. プロセスタブの「HARUKA（32ビット）」を右クリックして「タスクの終了」を選びます。](/assets/20191107_03.png)

HARUKA を再起動してください。

:::danger
以上を行っても回復しない場合は、モーション基板故障の可能性があります。

※ モーション基板の故障はめったにありませんのでパソコンに原因がある可能性が高いです。[セキュリティソフトの確認](/docs/soft/harukaganishinai/sekyuritsofutono)や[アクティブディレクトリ](/docs/soft/harukaganishinai/akutibudirekutori)の確認なども行ってみてください。
:::

## ケース2：パスのプロパティが間違っている。

下記ページの方法をご参照ください。

:::note
[切断データが彫刻になる](/docs/process/notoraburu/inanonininatteshimau)
:::