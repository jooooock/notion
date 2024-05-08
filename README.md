# notion

## 模块名

```
64982: 入口
5554: setupLogging
84041: crash reporter
10454: notion ipc

11239: config
68272: config

21852: AppController
26760: QuickSearchController
84087: TrayController
1147: WindowController
19628: WebUpdater
52728: TabController

87309: AssetCache 类
94774: AssetCache 实例

43579: initializeAutoUpdater


94625: electron-updater/main.js 入口
35778: electron-updater/NsisUpdater
95136: electron-updater/MacUpdater
49619: electron-updater/AppImageUpdater
45414: electron-updater/Provider
96064: electron-updater/AppUpdater
5931: electron-updater/electronHttpExecutor
33200: electron-updater/ElectronAppAdapter
17660: electron-updater/DownloadedUpdateHelper
54679: electron-updater/providerFactory
86216: electron-updater/BaseUpdater

69866: yml parser

79529: builder-util-runtime

36343: intl utils

56116: sentry
34516: setupSqliteServer

3420: ServerLogger 对应老版本的 helpers/loggly.js
21789: AppUtil

75593: CancellationToken
79529: 

15425: isNavigationAllowed 设置页面导航规则
35219: setupRendererListeners

29902: url protocol utils
26605: open at login
77514: handleNotionProtocol

83789: getDebugMenu
27683: TabColors

69340: redux store
73553: app slice
28192: history slice
14473: quick search slice
54417: tab slice
772: window slice

13387: session 下载进度展示
45437: events
4058: AsyncQueue
50833: setupSystemMenu

30506: appStatePersister

59664: HttpExecutor

21248: shared/logglyHelpers
37318: shared/cleanObjectForSerialization

43067: 工具类 utils

54679: createClient


// 外部依赖
4482: electron
34681: node-mac-window
16857: url
42613: assert
35317: child_process
49140: constants
76982: crypto
24434: events
79896: fs
58611: http
65692: https
69278: net
57075: node:stream
70857: os
16928: path
83480: querystring
2203: stream
13193: string_decoder
64756: tls
52018: tty
39023: util
28167: worker_threads

80115: fse
6354: redux toolkit

47419: electron-log
99163: debug for browser
81047: debug for nodejs
55623: debug
6600: lodash
44993: semver
```

## 本体更新逻辑
根据平台不同，请求对应更新配置文件，如下：
```text
https://desktop-release.notion-static.com/arm64-mac.yml
https://desktop-release.notion-static.com/latest.yml

[channel](-mac|-linux(-x86)).yml
```

返回的结果如下:
```yaml
version: 3.6.0
files:
  - url: Notion-arm64-3.6.0.zip
    sha512: CIcPy/z80S7zHUFcrvnxe88GVVKwzPyg1+40TMNwsmmEgsQR8prtJpdORIaBoVFSPV9WLbuetvuswqZLUnL/jA==
    size: 96167577
  - url: Notion-3.6.0-arm64.dmg
    sha512: ie0OrDj8s9RPirb3BhcjuwJec5h3ySN+2HNQswHT5bILsYSHQLdfp7vvKChnWvlTKbofxp+CmF37gWvgGx4yUQ==
    size: 96337451
path: Notion-arm64-3.6.0.zip
sha512: CIcPy/z80S7zHUFcrvnxe88GVVKwzPyg1+40TMNwsmmEgsQR8prtJpdORIaBoVFSPV9WLbuetvuswqZLUnL/jA==
releaseDate: '2024-05-03T19:28:11.345Z'
```

> 下载地址即为: `https://desktop-release.notion-static.com/Notion-arm64-3.6.0.zip`


然后下载对应的安装包并进行替换更新。


## 资源包更新逻辑
资源包通过 AssetCache 类进行更新，存放在`notionAssetCache-v2`目录下面
