---
description: HARUKAのアンインストール方法
sidebar_position: 1
slug: /basic/recover_haruka/uninstall
---

# HARUKAのアンインストール

## 操作方法

### 1. アンインストールを実行する

削除するときは「コントロールパネル＞すべてのコントロールパネル項目＞プログラムと機能」から削除をしてください。

### 2. HARUKAの一時フォルダを削除する

WINDOWSのフォルダオプションから隠しフォルダを表示する設定にしてください。 HARUKAを終了した状態で、 C:\Users\（アカウント名）\AppData \Local を開きます。 このフォルダの中に、「Oh-Laser」と「オーレーザー株式会社」というフォルダがありますので**フォルダごと**削除してください。

```
C:\Users\（アカウント名）\AppData\Local\
```

次に、C:\User\（アカウント名）\AppData\Local\temp\を開きます。このフォルダの中に「HARUKA」というフォルダがありますのでフォルダごと削除してください。

```
C:\Users\（アカウント名）\AppData\Local\temp\
```

次に、 C:\Users\（アカウント名）\AppData \Roaming を開きます。 このフォルダの中に、「Oh-Laser」と「オーレーザー株式会社」というフォルダがありますのでフォルダごと削除してください。

```
C:\Users\（アカウント名）\AppData\Roaming\
```

&#x20;削除したフォルダは、HARUKAが生成した一時ファイルの場所なのですが、削除することで、HARUKAをクリーンな状態にできます。
