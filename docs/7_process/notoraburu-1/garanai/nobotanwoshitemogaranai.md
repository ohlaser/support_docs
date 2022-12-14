---
description: 本体から押した場合か HARUKA から押した場合かを確認
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 電源を押しても入らない

## ※**最初に下記を確認してください**

:::info
1. ボタンは長押ししていますか？
2. コンセントは刺さっていますか？
3. 背面の主電源スイッチは入っていますか？
:::

## 症状1：本体の電源ボタンを押しても入らない

### **1. ヒューズ切れの可能性があります**

背面パネルにあるヒューズホルダーを開け、ヒューズを取り出します。黒くなっている場合はヒューズが切れています。

![※ HAJIME CL1 PLUS は予備のヒューズが一つ入っています。](/assets/20191016_02.png)

:::tip
<Tabs>
<TabItem value="HAJIME CL1 PLUS / HAJIME CL1" label="HAJIME CL1 PLUS / HAJIME CL1">

主電源スイッチをオフにします。本体電源コード（3P）を抜くと、ヒューズホルダーが出せるようになります。上の溝につめを引っ掛けて手前に引き出します。（固い場合はマイナスドライバーなどを使用してください）

<iframe width="560" height="315" src="https://www.youtube.com/embed/BqsotGxhWio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</TabItem>

<TabItem value="HAJIME" label="HAJIME">

本体電源コードをコンセントから抜いてください。丸いヒューズホルダーのキャップを左に回すと、そのまま引き出せます。
</TabItem>
</Tabs>
:::

#### **交換ヒューズの規格**

:::info
ヒューズの規格：ガラス管ヒューズ　20mm 10A（125V/250V）
:::

下記リンクをご参考の上、ヒューズを交換してください。

:::note 外部リンク
[Amazon.co.jp: OHM ミニ管 ヒューズ 10A-250V 4本 (04-1678): DIY・工具・ガーデン](https://www.amazon.co.jp/dp/B001TVN5LU/?coliid=I3BISY677LYEU1&colid=2P27YP4M43BSD&psc=0) 
:::

:::danger
ヒューズを交換してもすぐ同じように切れる場合、漏電している可能性があります。内部部品が壊れているので修理が必要です。（部品不良、落雷による故障の可能性あり）
:::

### **2. 電源スイッチの故障、レーザー発振器の電源故障、メイン基板（OH-PCB）の故障**

:::danger
ヒューズに問題がないのに本体の電源ボタンを押しても全く入らない場合は、背面の主電源スイッチの故障、LED電源ボタンの故障、レーザー発振器の電源故障、メイン基板の故障いずれかが考えられるので修理が必要です。（部品不良、過電流による故障、アース未接続による故障の可能性あり）
:::

## 症状2：HARUKA の電源ボタンを押しても入らない。（本体からは入る）

### **1. 主電源ONの状態でグレーの電源マークが無い。（HARUKA ステータス「加工機：未接続」）**

HAJIME とパソコンとの USB 接続ができていない場合に起こります。

:::success
**USB 差し込み口が原因**

* パソコン側のUSB 差込口を別の場所にしてみる。何度か差し直してみる。
* バスパワーの USB ハブを使用していないか確認する。（バスパワーのハブは通信不良になる可能性があります。セルフパワーなら大丈夫。）

**ケーブル不良が原因**

* 2m以上のケーブルを使用していないか確認する。（長いケーブルは通信不良になる可能性があります。2m以内にしてください。）
* ケーブル自体が断線していないか確認する。（別のものに交換　※ごくまれにあります）

**パソコンが原因**

* HARUKA の[システム条件](/docs/basic/pc_spec)に合っているパソコンか確認する。
* [セキュリティーソフト](/docs/soft/harukaganishinai/sekyuritsofutono)で通信を監視、遮断されていないか確認する。
:::

:::note 外部リンク
[Amazon.co.jp: エレコム USB3.0 ハブ 4ポート 1ｍ ACアダプタ付 セルフ/バス両対応 MacBook / Surface Pro / Chromebook他 ノートPC Nintendo Switch対応 ブラック U3H-A408SBK : パソコン・周辺機器](https://www.amazon.co.jp/dp/B00KKJJCXC/?coliid=I9R7OGQUCPEL4&colid=2P27YP4M43BSD&psc=1) 
:::

### **2. グレーの電源マークがある。（HARUKA ステータス「加工機：接続中」）**

HARUKA がフリーズして反応していません。

:::success
1. HARUKA を強制終了してパソコンを再起動する。
2. HARUKA の[システム条件](/docs/basic/pc_spec)に合っているパソコンか確認する。
3. HARUKA を再インストールする。
:::

強制終了の方法

![キーボードの「Ctrl」+「Alt」+「Del」を押して「タスクマネージャー」を起動します。](/assets/img20191021_01.png)

プロセスのアプリの中から「HARUKA（32ビット）」を右クリックして「タスクの終了」をクリックします。

:::danger
解決しない場合は、本体内部の電子部品が故障し通信回路が壊れている可能性があるので修理が必要です。（※ 本体からは電源が入るので、故障ではなくパソコン側に何か原因がある可能性が非常に高いです。）
:::
