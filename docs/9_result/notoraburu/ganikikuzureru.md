---
description: 駆動部品に不具合がある可能性が高い
sidebar_position: 10
---

# ずれる・ゆがむ

:::success

:::

モーション基板のファームウエアに不具合があり、空走時にずれが生じる現象を確認しています。この不具合は特定のデータのみ発生します。

## 彫刻途中でずれる・切断がゆがむ

![](/assets/20191030_01.png)

![](/assets/20191030_02.png)

### リニアブッシュに汚れが溜まっている可能性があります。

Y軸シャフトにあるリニアブッシュに汚れが溜まると、レーザーヘッドがスムーズに動かないため、ずれが生じる場合があります。

:::success
[リニアブッシュのメンテナンス](/docs/process/notoraburu/gazureteshimau#ttanozure)をしてください。
:::

:::note 外部リンク
[HAJIME CL1 PLUS メンテナンスマニュアル(PDF)](https://www.oh-laser.com/files/plus_maintenance.pdf) 
:::

### 駆動部品が消耗している可能性があります。

モーターのトルクがかかる「プーリー」や「アイドラー」が消耗してくると、レーザーヘッドの動きに滑りが生じ、ずれが発生します。

:::danger
駆動部品の交換修理が必要です。
:::

## 彫刻位置がずれる

![](/assets/20191030_03.png)

### モーション基板に不具合がある可能性があります。

HARUKA パラメータの「彫刻速度を 20cm/秒 以下」、「移動速度を 10mm/秒 以下」に設定し、再度コピー紙などに加工してみてください。速度を遅くすると解決する場合があります。

:::danger
モーション基板の交換もしくは、ファームウエア書き換えで正常に戻ります。この場合、修理対応となります。
:::

## 切断時に角部がずれる

![](/assets/20191030_04.png)

切断スピードが速すぎるとレーザーヘッドが脱調し、ずれが生じる時があります。

:::success
切断スピードおよび移動速度を「20mm/秒以下」に設定し、再度加工してみてください。
:::
