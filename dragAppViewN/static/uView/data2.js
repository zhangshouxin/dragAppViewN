//需要特殊处理啊button组件属性名改为参数
var _single_column="[{value:'列表1',label:'列表1-1'},{value:'列表2',label:'列表2-1'},{value:'列表3',label:'列表3-1'}]";
var _mutil_column="[[{value:'cm',label:'春眠'},{value:'bjx',label:'不觉晓'}],[{value:'cc',label:'处处'},{value:'wtn',label:'闻啼鸟'}]]";
var _mutil_column_auto="[{value: 1,label: '中国',children: [{value: 2,label: '广东',children: [{value: 3,label: '深圳'},{value: 4,label: '广州'}]}]},{value: 8,label: '美国',children: [{value: 9,label: '纽约',children: [{value: 10,label: '皇后街区'}]}]}]";
var data={
	"基础组件": [ {
		"name": "Icon 图标",
		"href": "https://www.uviewui.com/components/icon.html",
		"template":"<u-icon  id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-icon>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":""
				},
				{
				"参数": "name",
				"说明": "图标名称，见示例图标集，如名称带有/，会被认为是图片图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"photo"
			    }, {
				"参数": "color",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "inherit",
				"可选值": "-",
				"已选值":"#2979ff"
			}, {
				"参数": "size",
				"说明": "图标字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "inherit",
				"可选值": "-",
				"已选值":48
			}, {
				"参数": "index",
				"说明": "一个用于区分多个图标的值，点击图标时通过click事件传出",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "hover-class",
				"说明": "图标按下去的样式类，用法同uni的view组件的hover-class参数，详见：hover-class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "图标右侧/下方的label文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label-size",
				"说明": "label字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "label-color",
				"说明": "label字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "custom-prefix",
				"说明": "自定义字体图标库时，需要写上此值，详见：扩展自定义图标库",
				"类型": "String",
				"默认值": "uicon",
				"可选值": "-"
			}, {
				"参数": "margin-left",
				"说明": "label在右方时与图标的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "margin-top",
				"说明": "label在下方时与图标的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "margin-bottom",
				"说明": "label在上方时与图标的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "margin-right",
				"说明": "label在左侧时与图标的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "label-pos",
				"说明": "label相对于图标的位置(left和top为1.4.1新增)",
				"类型": "String",
				"默认值": "right",
				"可选值": "bottom / top / left"
			}, {
				"参数": "width",
				"说明": "name为图片路径时图片的宽度，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "name为图片路径时图片的高度，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "top",
				"说明": "如果某些场景，如果图标没有垂直居中，可以调整此参数，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "show-decimal-icon",
				"说明": "是否为DecimalIcon",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "inactive-color",
				"说明": "背景颜色，可接受主题色，仅Decimal时有效",
				"类型": "String",
				"默认值": "#ececec",
				"可选值": "-"
			}, {
				"参数": "percent",
				"说明": "显示的百分比，仅Decimal时有效",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击图标时触发",
				"回调参数": "index值",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Image 图片",
		"href": "https://www.uviewui.com/components/image.html",
		"template":"<u-image id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-image>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"-"
				},
				{
				"参数": "src",
				"说明": "图片地址，强烈建议使用绝对或者网络路径",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"../../../static/shuijiao.jpg"
			}, {
				"参数": "mode",
				"说明": "裁剪模式，见上方说明",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "宽度，单位任意，如果为数值，则为rpx单位",
				"类型": "String | Number",
				"默认值": "100%",
				"可选值": "-",
				"已选值":"300rpx"
			}, {
				"参数": "height",
				"说明": "高度，单位任意，如果为数值，则为rpx单位",
				"类型": "String | Number",
				"默认值": "auto",
				"可选值": "-",
				"已选值":"300rpx"
			}, {
				"参数": "shape",
				"说明": "图片形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "border-radius",
				"说明": "圆角值，单位任意，如果为数值，则为rpx单位",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "lazy-load",
				"说明": "是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "show-menu-by-longpress",
				"说明": "是否开启长按图片显示识别小程序码菜单，仅微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "loading-icon",
				"说明": "加载中的图标，或者小图片",
				"类型": "String",
				"默认值": "photo",
				"可选值": "-"
			}, {
				"参数": "error-icon",
				"说明": "加载失败的图标，或者小图片",
				"类型": "String",
				"默认值": "error-circle",
				"可选值": "-"
			}, {
				"参数": "show-loading",
				"说明": "是否显示加载中的图标或者自定义的slot",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-error",
				"说明": "是否显示加载错误的图标或者自定义的slot",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "fade",
				"说明": "是否需要淡入效果",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "webp",
				"说明": "只支持网络资源，只对微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "duration",
				"说明": "搭配fade参数的过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "500",
				"可选值": "-"
			}, {
				"参数": "bg-color 1.6.2",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "#f3f4f6",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "loading",
				"说明": "自定义加载中的提示内容",
				"可选值": "true/false"
			}, {
				"名称": "error",
				"说明": "自定义失败的提示内容",
				"可选值": "-",
			}],
			"cellitem-events": [{
				"事件名": "click",
				"说明": "点击图片时触发",
				"回调参数": "",
				"可选值": "-",
			}, {
				"事件名": "error",
				"说明": "图片加载失败时触发",
				"回调参数": "err:错误信息",
				"可选值": "-",
			}, {
				"事件名": "load",
				"说明": "图片加载成功时触发",
				"回调参数": "",
				"可选值": "-",
			}]
		}
	}, {
		"name": "Button 按钮",
		"href": "https://www.uviewui.com/components/button.html",
		"template":"<u-button id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">测试按钮</u-button>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "size",
				"说明": "按钮的大小",
				"类型": "String",
				"默认值": "default",
				"可选值": "medium/mini",
				"平台差异说明": "-",
				"已选值":"mini"
			}, {
				"参数": "ripple",
				"说明": "是否开启点击水波纹效果",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "-"
			}, {
				"参数": "ripple-bg-color",
				"说明": "水波纹的背景色，ripple为true时有效",
				"类型": "String",
				"默认值": "rgba(0, 0, 0, 0.15)",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"参数": "type",
				"说明": "按钮的样式类型",
				"类型": "String",
				"默认值": "default",
				"可选值": "primary/success/info/warning/error",
				"平台差异说明": "-"
			}, {
				"参数": "plain",
				"说明": "按钮是否镂空，背景色透明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "-"
			}, {
				"参数": "hair-line",
				"说明": "是否显示按钮的细边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"平台差异说明": "-"
			}, {
				"参数": "shape",
				"说明": "按钮外观形状，见上方说明",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle",
				"平台差异说明": "-"
			}, {
				"参数": "loading",
				"说明": "按钮名称前是否带 loading 图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "App-nvue 平台，在 ios 上为雪花，Android上为圆圈"
			}, {
				"参数": "form-type",
				"说明": "用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件",
				"类型": "String",
				"默认值": "-",
				"可选值": "submit/reset",
				"平台差异说明": "-"
			}, {
				"参数": "open-type",
				"说明": "开放能力",
				"类型": "String",
				"默认值": "请参考uni-app方文档",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"参数": "hover-class",
				"说明": "指定按钮按下去的样式类。当 hover-class=\"none\" 时，没有点击态效果",
				"类型": "String",
				"默认值": "button-hover",
				"可选值": "-",
				"平台差异说明": "App-nvue 平台暂不支持"
			}, {
				"参数": "hover-start-time",
				"说明": "按住后多久出现点击态，单位毫秒",
				"类型": "String | Number",
				"默认值": "20",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"参数": "hover-stay-time",
				"说明": "手指松开后点击态保留时间，单位毫秒",
				"类型": "String | Number",
				"默认值": "150",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"参数": "custom-style",
				"说明": "对按钮的自定义样式，对象形式，见上方说明",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"参数": "app-parameter",
				"说明": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "微信小程序、QQ小程序"
			}, {
				"参数": "hover-stop-propagation",
				"说明": "指定是否阻止本节点的祖先节点出现点击态",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "lang",
				"说明": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
				"类型": "String",
				"默认值": "en",
				"可选值": "zh_CN \\ zh_TW",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "session-from",
				"说明": "会话来源，open-type=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "send-message-title",
				"说明": "会话内消息卡片标题，open-type=\"contact\"时有效",
				"类型": "String",
				"默认值": "当前标题",
				"可选值": "-",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "send-message-path",
				"说明": "会话内消息卡片点击跳转小程序路径，open-type=\"contact\"时有效",
				"类型": "String",
				"默认值": "当前分享路径",
				"可选值": "-",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "send-message-img",
				"说明": "会话内消息卡片图片，open-type=\"contact\"时有效",
				"类型": "String",
				"默认值": "当前页面截图",
				"可选值": "-",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "show-message-card",
				"说明": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，open-type=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "微信小程序"
			}, {
				"参数": "throttle-time",
				"说明": "节流的时间间隔(一定时间内无论点击多少次，只会触发一次click事件)，单位ms，详见节流防抖",
				"类型": "String | Number",
				"默认值": "500",
				"可选值": "-",
				"平台差异说明": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数",
				"类型": "Handler",
				"默认值": "-",
				"可选值": "",
				"平台差异说明": ""
			}, {
				"事件名": "getphonenumber",
				"说明": "open-type=\"getPhoneNumber\"时有效",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "",
				"平台差异说明": ""
			}, {
				"事件名": "getuserinfo",
				"说明": "用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "",
				"平台差异说明": ""
			}, {
				"事件名": "error",
				"说明": "当使用开放能力时，发生错误的回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "",
				"平台差异说明": ""
			}, {
				"事件名": "opensetting",
				"说明": "在打开授权设置页并关闭后回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "",
				"平台差异说明": ""
			}, {
				"事件名": "launchapp",
				"说明": "打开 APP 成功的回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "",
				"平台差异说明": ""
			}]
		}
	}, {
		"name": "Layout 布局",
		"href": "https://www.uviewui.com/components/layout.html",
		"template":"<u-row id=\"id-xxx\"  onclick=\"getUnitDesc('xxxxxx',event)\" gutter=\"16\" style=\"margin-top: 10px;\">\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item1')\" id=\"col_props_item1\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item1--></view>\n</u-col>\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item2')\" id=\"col_props_item2\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item2--></view>\n</u-col>\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item3')\" id=\"col_props_item3\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item3--></view>\n</u-col>\n</u-row>\n",
		"param": {
			"row-props": [{
				"参数": "gutter",
				"说明": "栅格间隔，左右各为此值的一半，单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-",
				"已选值":"16"
			}, {
				"参数": "justify",
				"说明": "水平排列方式(微信小程序暂不支持)",
				"类型": "String",
				"默认值": "flex-start",
				"可选值": "flex-start/flex-end/center/space-around/space-between"
			}, {
				"参数": "align",
				"说明": "垂直排列方式",
				"类型": "String",
				"默认值": "center",
				"可选值": "center/top/bottom"
			},
			{
				"参数": "style",
				"说明": "自定义分栏样式",
				"类型": "String",
				"默认值": "margin-top: 10px;",
				"可选值": "-",
				"已选值":"margin-top: 10px;"
			}
			
			],
			"col-props": [[{
				"参数": "span",
				"说明": "栅格占据的列数，总12等分",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "1-12",
				"已选值":4
			}, {
				"参数": "offset",
				"说明": "分栏左边偏移，计算方式与span相同",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "text-align",
				"说明": "文字水平对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center/right/left"
			},
			{
				"参数": "style",
				"说明": "自定义分栏样式",
				"类型": "String",
				"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
				"可选值": "-",
				"已选值":"background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
			},
			{
				"参数": "id",
				"说明": "用于关联当前组件是否还有子组件",
				"类型": "String",
				"默认值": "不允许修改",
				"可选值": "-",
				"已选值": "col_props_item1",
			}
			],
			[{
				"参数": "span",
				"说明": "栅格占据的列数，总12等分",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "1-12",
				"已选值":4
			}, {
				"参数": "offset",
				"说明": "分栏左边偏移，计算方式与span相同",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "text-align",
				"说明": "文字水平对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center/right/left"
			},
			{
				"参数": "style",
				"说明": "自定义分栏样式",
				"类型": "String",
				"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
				"可选值": "-",
				"已选值":"background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
			},
			{
				"参数": "id",
				"说明": "用于关联当前组件是否还有子组件",
				"类型": "String",
				"默认值": "不允许修改",
				"可选值": "-",
				"已选值": "col_props_item2",
			}
			],
			[{
				"参数": "span",
				"说明": "栅格占据的列数，总12等分",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "1-12",
				"已选值":4
			}, {
				"参数": "offset",
				"说明": "分栏左边偏移，计算方式与span相同",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "text-align",
				"说明": "文字水平对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center/right/left"
			},
			{
				"参数": "style",
				"说明": "自定义分栏样式",
				"类型": "String",
				"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
				"可选值": "-",
				"已选值":"background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
			},
			{
				"参数": "id",
				"说明": "用于关联当前组件是否还有子组件",
				"类型": "String",
				"默认值": "不允许修改",
				"可选值": "-",
				"已选值": "col_props_item3",
			}
			]
			]
		}
	}, {
		"name": "CellGroup 单元格组",
		"href": "https://www.uviewui.com/components/cell.html",
		"template":"<u-cell-group  id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ><!--CellGroupID--><!--单元格组保存页面删除开始--><view  @dragover.prevent @drop=\"colDrop('CellGroupID')\" class=\"cellGroupAdd\" >拖入该分组的列表</view><!--单元格组保存页面删除结束--></u-cell-group>",
		"param": {
			"props": [{
				"参数": "title",
				"说明": "分组标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"分组标题(可为空)"
			}, {
				"参数": "border",
				"说明": "是否显示外边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "title-style",
				"说明": "分组标题的的样式，对象形式，如{'font-size': '24rpx'} 或 {'fontSize': '24rpx'}",
				"类型": "object",
				"默认值": "-",
				"可选值": "-"
			},
			{
			"参数": "style",
			"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
			"类型": "String",
			"默认值": "-",
			"可选值": "-",
			"已选值":"-"
			},
			]
		}
	},
	{
		"name": "CellItem 单元格列表",
		"href": "https://www.uviewui.com/components/cell.html",
		"template":"<u-cell-item class=\"layoutdrop\" id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-cell-item>",
		"param": {
			"props": [{
				"参数": "title",
				"说明": "左侧标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"左侧标题"
			}, {
				"参数": "icon",
				"说明": "左侧图标名，只支持uView内置图标，见Icon 图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"setting-fill"
			}, {
				"参数": "icon-style",
				"说明": "icon的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "右侧内容",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "标题下方的描述信息",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-bottom",
				"说明": "是否显示cell的下边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border-top",
				"说明": "是否显示cell的上边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "border-gap",
				"说明": "border-bottom为true时，Cell列表中间的条目的下边框是否与左边有一个间隔 1.4.0已废弃",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "hover-class",
				"说明": "是否开启点击反馈，none为无效果，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "none"
			}, {
				"参数": "arrow",
				"说明": "是否显示右侧箭头，开启的话，将会默认带上点击反馈，可通过hover-class配置",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "arrow-direction",
				"说明": "箭头方向，可选值为",
				"类型": "String",
				"默认值": "right",
				"可选值": "right/up/down"
			}, {
				"参数": "title-style",
				"说明": "标题样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "required",
				"说明": "是否显示左边表示必填的星号",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "value-style",
				"说明": "右侧内容样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label-style",
				"说明": "标题下方描述信息的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "背景颜色，默认透明背景",
				"类型": "String",
				"默认值": "transparent",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "用于在click事件回调中返回，标识当前是第几个Item",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title-width",
				"说明": "标题的宽度，单位rpx",
				"类型": "Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon-size",
				"说明": "左边通过icon参数传入的图标的大小，单位rpx",
				"类型": "Number | String",
				"默认值": "34",
				"可选值": "-"
			}, {
				"参数": "center",
				"说明": "是否使内容垂直居中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"slot": [{
				"名称": "title",
				"说明": "自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可",
				"例子":"",
				"可选值": "-",
			}, {
				"名称": "icon",
				"说明": "自定义左侧的图标",
				"例子":"<u-icon slot=\"icon\" size=\"32\" name=\"search\"></u-icon>",
				"可选值": "-",
			}, {
				"名称": "right-icon",
				"说明": "自定义右侧图标内容，需设置arrow为false才起作用",
				"例子":"<u-switch slot=\"right-icon\" v-model=\"checked\"></u-switch>",
				"可选值": "-",
			}, {
				"名称": "label",
				"说明": "自定义label内容，需同时设置use-label-slot为true",
				"例子":"",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击cell列表时触发",
				"回调参数": "index: 通过props传递的index参数",
				"可选值": "",
			}]
		}
	}
	, {
		"name": "Badge 徽标数",
		"href": "https://www.uviewui.com/components/badge.html",
		"template":"<u-badge id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\"  ></u-badge>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "count",
				"说明": "展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-",
				"已选值":8
			}, {
				"参数": "is-dot",
				"说明": "不展示数字，只有一个小点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "absolute",
				"说明": "组件是否绝对定位，为true时，offset参数才有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "overflow-count",
				"说明": "展示封顶的数字值",
				"类型": "String | Number",
				"默认值": "99",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "使用预设的背景颜色",
				"类型": "String",
				"默认值": "error",
				"可选值": "error/success/primary/warning/info"
			}, {
				"参数": "show-zero",
				"说明": "当数值为 0 时，是否展示 Badge",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "size",
				"说明": "Badge的尺寸，设为mini会得到小一号的Badge",
				"类型": "String",
				"默认值": "default",
				"可选值": "default/mini"
			}, {
				"参数": "offset",
				"说明": "设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx。absolute为true时有效",
				"类型": "Array",
				"默认值": "[20, 20]",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色，优先级比type高，如设置，type参数会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "is-center",
				"说明": "组件中心点是否和父组件右上角重合，优先级比offset高，如设置，offset参数会失效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}]
		}
	}, {
		"name": "Tag 标签",
		"href": "https://www.uviewui.com/components/tag.html",
		"template":"<u-tag id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" />",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "type",
				"说明": "主题类型",
				"类型": "String",
				"默认值": "primary",
				"可选值": "primary/success/info/warning/error"
			}, {
				"参数": "size",
				"说明": "标签大小",
				"类型": "String",
				"默认值": "default",
				"可选值": "mini"
			}, {
				"参数": "shape",
				"说明": "标签形状",
				"类型": "String",
				"默认值": "square",
				"可选值": "square/circle/circleLeft/circleRight"
			}, {
				"参数": "text",
				"说明": "标签的文字内容",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"Tag标签"
			}, {
				"参数": "bg-color",
				"说明": "自定义标签的背景颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "文字的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-color",
				"说明": "标签的边框颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "close-color",
				"说明": "关闭按钮的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "点击标签时，会通过click事件返回该值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方说明",
				"类型": "String",
				"默认值": "light",
				"可选值": "light/dark/plain"
			}, {
				"参数": "closeable",
				"说明": "是否可关闭，设置为true，文字右边会出现一个关闭图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "show",
				"说明": "标签显示与否",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"event": [{
				"事件名": "click",
				"说明": "点击标签触发",
				"回调参数": "index: 传递的index参数值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "close",
				"说明": "closeable为true时，点击标签关闭按钮触发",
				"回调参数": "index: 传递的index参数值",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}],
	"表单组件": [
		{
			"name": "Form 表单",
			"href": "https://www.uviewui.com/components/form.html",
			"templateChild":"<u-form-item param-form-item-xxx >formUnit</u-form-item>",
			"template":"<u-form id=\"id-xxx\"  param-form-xxx  onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx<!--FormID--><!--表单保存页面删除开始--><view @dragover.prevent @drop=\"colDrop('FormID')\" class=\"u_form_add\">请将表单组件拖入其中</view><!--表单保存页面删除结束--><u-button type=\"primary\" style=\"margin: 50rpx;\" @click=\"submit\">提交</u-button></u-form>",
			"param": {
				"form-props": [
					 {
						"repair":true,
						"参数": "ref",
						"说明": "用于查找当前组件对象",
						"类型": "String",
						"默认值": "-",
						"可选值": "-",
						"已选值":"formRef"
					},
				    {
					"repair":true,
					"参数": "model",
					"说明": "表单数据对象,且用于表单验证",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-",
					"已选值":"fromModel"
				}, {
					"repair":true,
					"参数": "rules",
					"说明": "表单参数规则验证",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-",
					"已选值":"fromRules"
				}, {
					"参数": "error-type",
					"说明": "错误的提示方式，数组形式，见上方说明",
					"类型": "Array",
					"默认值": "['message']",
					"可选值": "-"
				}, {
					"参数": "border-bottom",
					"说明": "是否显示表单域的下划线边框",
					"类型": "Boolean",
					"默认值": "true",
					"可选值": "-"
				}, {
					"参数": "label-position",
					"说明": "表单域提示文字的位置，left-左侧，top-上方",
					"类型": "String",
					"默认值": "left",
					"可选值": "left/top"
				}, {
					"参数": "label-width",
					"说明": "提示文字的宽度，单位rpx",
					"类型": "String | Number",
					"默认值": "90",
					"可选值": ""
				}, {
					"参数": "label-style",
					"说明": "lable的样式，对象形式",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-"
				}, {
					"参数": "label-align",
					"说明": "lable的对齐方式",
					"类型": "String",
					"默认值": "left",
					"可选值": "left/center/right"
				}],
				"form-methods": [{
					"名称": "setRules",
					"说明": "调用此方法，设置校验规则",
					"参数": "Function(rules)",
				}, {
					"名称": "resetFields",
					"说明": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
					"参数": "-",
				}, {
					"名称": "validate",
					"说明": "对整个表单进行校验的方法",
					"参数": "Function(callback: Function(boolean))",
				}],
				"form-item-props": [{
					"参数": "label",
					"说明": "左侧提示文字",
					"类型": "String",
					"默认值": "-",
					"可选值": "-",
					"已选值":"左侧标题"
				}, {
					"参数": "prop",
					"说明": "表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				}, {
					"参数": "border-bottom",
					"说明": "是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false",
					"类型": "Boolean",
					"默认值": "true",
					"可选值": "true/false"
				}, {
					"参数": "label-position",
					"说明": "表单域提示文字的位置，left-左侧，top-上方，如设置，将覆盖u-form的同名参数",
					"类型": "String",
					"默认值": "-",
					"可选值": "left/top"
				}, {
					"参数": "label-width",
					"说明": "提示文字的宽度，单位rpx，如设置，将覆盖u-form的同名参数",
					"类型": "String | Number",
					"默认值": "-",
					"可选值": "-",
					"已选值": "150"
				}, {
					"参数": "label-style",
					"说明": "lable的样式，对象形式，如设置，将覆盖u-form的同名参数",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-"
				}, {
					"参数": "label-align",
					"说明": "lable的对齐方式，如设置，将覆盖u-form的同名参数",
					"类型": "String",
					"默认值": "-",
					"可选值": "left/center/right",
					"已选值":"center"
				}, {
					"参数": "right-icon",
					"说明": "右侧自定义字体图标(限uView内置图标)或图片地址",
					"类型": "String",
					"默认值": "-",
					"可选值": ""
				}, {
					"参数": "left-icon",
					"说明": "左侧自定义字体图标(限uView内置图标)或图片地址",
					"类型": "String",
					"默认值": "-",
					"可选值": ""
				}, {
					"参数": "left-icon-style",
					"说明": "左侧图标的样式，对象形式",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-"
				}, {
					"参数": "right-icon-style",
					"说明": "右侧图标的样式，对象形式",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-"
				}, {
					"参数": "required",
					"说明": "是否显示左边的\"*\"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则",
					"类型": "Boolean",
					"默认值": "false",
					"可选值": "true"
				}],
				// "form-item-slot": [{
				// 	"名称": "-",
				// 	"说明": "Form Item 的内容",
				// 	"可选值": "-"
				// }, {
				// 	"名称": "right",
				// 	"说明": "右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景",
				// 	"可选值": "-"
				// }]
			}
		}, 
		{
		"name": "Input 输入框",
		"href": "https://www.uviewui.com/components/input.html",
		"template":"<u-input id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"/>",
		"param": {
			"props": [
				{
					"repair":true,
					"参数": "v-model",
					"说明": "用于双向绑定输入框的值(不要改变他在数组中顺序，绑定其他组件时会通过数组下标获取)",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				}, 
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				},
				{
				"参数": "type",
				"说明": "模式选择",
				"类型": "String",
				"默认值": "text",
				"可选值": "text/select/password/textarea/number"
			},
			{
				"参数": "bdUnit",
				"说明": "绑定其他选择类组件,只有当type=select时生效",
				"类型": "String",
				"默认值": "-",
				"可选值": "Calendar 日历/Select 列选择器/Keyboard 键盘/Picker 选择器/ActionSheet 操作菜单/Popup 弹出层"
			},
			{
				"参数": "clearable",
				"说明": "是否显示右侧的清除图标，type = select时无效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			},{
				"参数": "input-align",
				"说明": "输入框文字的对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/center/right"
			}, {
				"参数": "placeholder",
				"说明": "placeholder显示值",
				"类型": "String",
				"默认值": "请输入内容",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用输入框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "maxlength",
				"说明": "输入框的最大可输入长度",
				"类型": "Number | String",
				"默认值": "140",
				"可选值": "-"
			}, {
				"参数": "placeholder-style",
				"说明": "placeholder的样式，字符串形式，如\"color: red;\"",
				"类型": "String",
				"默认值": "\"color: #c0c4cc;\"",
				"可选值": "-"
			}, {
				"参数": "confirm-type",
				"说明": "设置键盘右下角按钮的文字，仅在type为text时生效",
				"类型": "String",
				"默认值": "done",
				"可选值": "-"
			}, {
				"参数": "custom-style",
				"说明": "自定义输入框的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "focus",
				"说明": "是否自动获得焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "fixed",
				"说明": "如果type为textarea，且在一个\"position:fixed\"的区域，需要指明为true",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "password-icon",
				"说明": "type为password时，是否显示右侧的密码查看图标",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border",
				"说明": "是否显示边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"已选值":"true"
			}, {
				"参数": "border-color",
				"说明": "输入框的边框颜色",
				"类型": "String",
				"默认值": "#dcdfe6",
				"可选值": "-"
			}, {
				"参数": "auto-height",
				"说明": "是否自动增高输入区域，type为textarea时有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "height",
				"说明": "高度，单位rpx",
				"类型": "Number | String",
				"默认值": "text类型时为70，textarea时为100",
				"可选值": "-"
			}, {
				"参数": "cursor-spacing",
				"说明": "指定光标与键盘的距离，单位px",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "selection-start",
				"说明": "光标起始位置，自动聚焦时有效，需与selection-end搭配使用",
				"类型": "Number | String",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "selection-end",
				"说明": "光标结束位置，自动聚焦时有效，需与selection-start搭配使用",
				"类型": "Number | String",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "trim",
				"说明": "是否自动去除两端的空格",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}]
		}
	},{
		"name": "Calendar 日历",
		"href": "https://www.uviewui.com/components/calendar.html",
		"template":"<u-calendar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-calendar>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "选择日期的模式，date-为单个日期，range-为选择日期范围",
				"类型": "String",
				"默认值": "date",
				"可选值": "date/range"
			}, {
				"repair":true,
				"参数": "v-model",
				"说明": "布尔值变量，用于控制日历的弹出与收起（注意页面使用多个日历）",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-",
				//"已选值":"calendarV"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "change-year",
				"说明": "是否显示顶部的切换年份方向的按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "change-month",
				"说明": "是否显示顶部的切换月份方向的按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "max-year",
				"说明": "可切换的最大年份",
				"类型": "Number | String",
				"默认值": "2050",
				"可选值": "-"
			}, {
				"参数": "min-year",
				"说明": "可切换的最小年份",
				"类型": "Number | String",
				"默认值": "1950",
				"可选值": "-"
			}, {
				"参数": "min-date",
				"说明": "最小可选日期",
				"类型": "Number | String",
				"默认值": "1950-01-01",
				"可选值": "-"
			}, {
				"参数": "max-date",
				"说明": "最大可选日期",
				"类型": "Number | String",
				"默认值": "当前日期",
				"可选值": "-",
				"已选值":"2050-01-01"
			}, {
				"参数": "border-radius",
				"说明": "弹窗顶部左右两边的圆角值，单位rpx",
				"类型": "Number | String",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "mask-close-able",
				"说明": "是否允许通过点击遮罩关闭日历",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "month-arrow-color",
				"说明": "月份切换按钮箭头颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "year-arrow-color",
				"说明": "年份切换按钮箭头颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "日期字体的默认颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "active-bg-color",
				"说明": "起始/结束日期按钮的背景色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "z-index",
				"说明": "弹出时的z-index值",
				"类型": "String | Number",
				"默认值": "10075",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "起始/结束日期按钮的字体颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "range-bg-color",
				"说明": "起始/结束日期之间的区域的背景颜色",
				"类型": "String",
				"默认值": "rgba(41,121,255,0.13)",
				"可选值": "-"
			}, {
				"参数": "range-color",
				"说明": "选择范围内字体颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "start-text",
				"说明": "起始日期底部的提示文字",
				"类型": "String",
				"默认值": "开始",
				"可选值": "-"
			}, {
				"参数": "end-text",
				"说明": "结束日期底部的提示文字",
				"类型": "String",
				"默认值": "结束",
				"可选值": "-"
			}, {
				"参数": "btn-type",
				"说明": "底部确定按钮的主题",
				"类型": "String",
				"默认值": "primary",
				"可选值": "default / success / info/ warning / error"
			}, {
				"参数": "toolTip",
				"说明": "顶部提示文字，如设置名为tooltip的slot，此参数将失效",
				"类型": "String",
				"默认值": "选择日期",
				"可选值": "-"
			}, {
				"参数": "closeable",
				"说明": "是否显示右上角的关闭图标",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"slot": [{
				"名称": "tooltip",
				"说明": "自定义日历顶部的内容",
				"可选值":"-"
			}],
			"events": [{
				"repair":true,
				"事件名": "change",
				"说明": "点击右上角确定按钮时触发",
				"回调参数": "选择日期相关的返回参数",
				"可选值":"-",
				//"已选值":"CalChange"
			}]
		}
	}, {
		"name": "Select 列选择器",
		"href": "https://www.uviewui.com/components/select.html",
		"initData":{'single-column':_single_column,'mutil-column':_mutil_column,'mutil-column-auto':_mutil_column_auto},
		"template":"<u-select id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-select>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "模式选择，\"single-column\"-单列模式，\"mutil-column\"-多列模式，\"mutil-column-auto\"-多列联动模式",
				"类型": "String",
				"默认值": "single-column",
				"可选值": "single-column/mutil-column/mutil-column-auto",
				"已选值":"single-column"
			}, {
				"参数": "list",
				"说明": "列数据，数组形式，见上方说明",
				"类型": "Array",
				"默认值":_single_column,
				"可选值": "-",
				"已选值":_single_column
				
			}, {
				"repair":true,
				"参数": "v-model",
				"说明": "布尔值变量，用于控制选择器的弹出与收起(注意页面使用)",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-",
				//"已选值":"selectV"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "cancel-color",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "confirm-color",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "default-value",
				"说明": "提供的默认选中的下标，见上方说明",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mask-close-able",
				"说明": "是否允许通过点击遮罩关闭Picker",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "z-index",
				"说明": "弹出时的z-index值",
				"类型": "String | Number",
				"默认值": "10075",
				"可选值": "-"
			}, {
				"参数": "value-name",
				"说明": "自定义list数据的value属性名 1.3.6",
				"类型": "String",
				"默认值": "value",
				"可选值": "-"
			}, {
				"参数": "label-name",
				"说明": "自定义list数据的label属性名 1.3.6",
				"类型": "String",
				"默认值": "label",
				"可选值": "-"
			}, {
				"参数": "child-name",
				"说明": "自定义list数据的children属性名，只对多列联动模式有效 1.3.6",
				"类型": "String",
				"默认值": "children",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "顶部中间的标题 1.3.6",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "confirm-text 1.5.6",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancel-text 1.5.6",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}],
			"events": [{
				"repair":true,
				"事件名": "confirm",
				"说明": "点击确定按钮，返回当前选择的值",
				"回调参数": "Array",
				"版本": "-",
				"可选值": "-",
				//"已选值":"selectConfirm"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮，返回当前选择的值",
				"回调参数": "Array",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Keyboard 键盘",
		"href": "https://www.uviewui.com/components/keyboard.html",
		"template":"<u-keyboard id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-keyboard>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "键盘类型，见上方基本使用的说明",
				"类型": "String",
				"默认值": "number",
				"可选值": "number/car/card"
			}, 
			{
				"repair":true,
				"参数": "v-model",
				"说明": "布尔值变量，用于控制键盘的弹出与收起",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-",
				//"已选值":"keybv"
			},
			{
				"参数": "dot-enabled",
				"说明": "是否显示\".\"按键，只在mode=number时有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "tooltip",
				"说明": "是否显示键盘顶部工具条",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "tips",
				"说明": "工具条中间的提示文字，见上方基本使用的说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "show-tips",
				"说明": "是否显示工具条中间的文字",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "cancel-btn",
				"说明": "是否显示工具条左边的\"取消\"按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "confirm-btn",
				"说明": "是否显示工具条右边的\"完成\"按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "mask",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "z-index",
				"说明": "弹出键盘的z-index值",
				"类型": "Number | String",
				"默认值": "1075",
				"可选值": "-"
			}, {
				"参数": "random",
				"说明": "是否打乱键盘按键的顺序",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mask-close-able",
				"说明": "是否允许点击遮罩收起键盘",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "confirm-text",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "cancel-text",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}],
			"events": [{
				"repair":true,
				"事件名": "change",
				"说明": "按键被点击(不包含退格键被点击)",
				"回调参数": "按键的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "cancel",
				"说明": "键盘顶部工具条左边的\"取消\"按钮被点击",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "confirm",
				"说明": "键盘顶部工具条右边的\"完成\"按钮被点击",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "backspace",
				"说明": "键盘退格键被点击",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "default",
				"说明": "内容将会显示键盘的工具条上面，可以结合MessageInput 验证码输入组件实现类似支付宝输入密码时，上方显示输入内容的功能",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Picker 选择器",
		"href": "https://www.uviewui.com/components/picker.html",
		"template":"<u-picker id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-picker>",
		"param": {
			"props": [{
				"参数": "params",
				"说明": "需要显示的参数，见上方说明，mode=region或mode=time时有效",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "模式选择，region-地区模式，time-时间模式，selector-单列模式(需要给rang指定数据)，multiSelector-多列模式(需要给rang指定数据)",
				"类型": "String",
				"默认值": "time",
				"可选值": "time/region/selector/multiSelector"
			}, 
			{
				"repair":true,
				"参数": "v-model",
				"说明": "布尔值变量，用于控制键盘的弹出与收起",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				//"已选值":"pickerV"
			},
			{
				"参数": "start-year",
				"说明": "可选的开始年份，mode=time时有效",
				"类型": "String | Number",
				"默认值": "1950",
				"可选值": "-"
			}, {
				"参数": "end-year",
				"说明": "可选的结束年份，mode=time时有效",
				"类型": "String | Number",
				"默认值": "2050",
				"可选值": "-"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "cancel-color",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "confirm-color",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "default-time",
				"说明": "默认选中的时间，mode=time时有效，需在onReady生命周期赋值，见顶部说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "default-region",
				"说明": "默认选中的地区，中文形式，mode=region时有效，需在onReady生命周期赋值，见顶部说明",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "area-code",
				"说明": "默认选中的地区，编号形式，mode=region时有效",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "default-selector",
				"说明": "数组形式，其中每一项表示选择了range对应项中的第几个(下标从0开始)，见上方说明",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "mask-close-able",
				"说明": "是否允许通过点击遮罩关闭Picker",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-time-tag",
				"说明": "时间模式时，是否显示后面的年月日中文提示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "z-index",
				"说明": "弹出时的z-index值",
				"类型": "String | Number",
				"默认值": "10075",
				"可选值": "-"
			}, {
				"参数": "range",
				"说明": "自定义选择的数据，mode=selector或mode=multiSelector时有效",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "range-key",
				"说明": "当range参数的元素为对象时，指定Object中的哪个key的值作为选择器显示内容，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "顶部中间的标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "confirm-text",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancel-text",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}],
			"events": [{
				"repair":true,
				"事件名": "confirm",
				"说明": "点击确定按钮，返回当前选择的值",
				"回调参数": "Object",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮，返回当前选择的值",
				"回调参数": "Object",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "columnchange",
				"说明": "列发生改变时触发，只对mode = multiSelector时有效",
				"回调参数": "Object",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Rate 评分",
		"href": "https://www.uviewui.com/components/rate.html",
		"template":"<u-rate id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-rate>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "v-model",
				"说明": "双向绑定选择星星的数量",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "count",
				"说明": "最多可选的星星数量",
				"类型": "mode",
				"默认值": "5",
				"可选值": "-"
			}, {
				"参数": "current",
				"说明": "默认选中的星星数量，1.4.5起建议使用v-model方式",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁止用户操作",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "size",
				"说明": "星星的大小，单位rpx",
				"类型": "String | Number",
				"默认值": "32",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "未选中星星的颜色",
				"类型": "String",
				"默认值": "#b2b2b2",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "选中的星星颜色",
				"类型": "String",
				"默认值": "#FA3534",
				"可选值": "-"
			}, {
				"参数": "gutter",
				"说明": "星星之间的距离",
				"类型": "String | Number",
				"默认值": "10",
				"可选值": "-"
			}, {
				"参数": "min-count",
				"说明": "最少选中星星的个数",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "active-icon",
				"说明": "选中时的图标名，只能为uView的内置图标",
				"类型": "String",
				"默认值": "star-fill",
				"可选值": "-"
			}, {
				"参数": "inactive-icon",
				"说明": "未选中时的图标名，只能为uView的内置图标",
				"类型": "String",
				"默认值": "star",
				"可选值": "-"
			}, {
				"参数": "custom-prefix",
				"说明": "自定义字体图标库时，需要写上此值，详见：扩展自定义图标库",
				"类型": "String",
				"默认值": "uicon",
				"可选值": "-"
			}, {
				"参数": "colors",
				"说明": "颜色分级显示，可以用不同颜色区分评分层级",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icons",
				"说明": "图标分级显示，可以用不同类型的icon区分评分层级",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "change",
				"说明": "选中的星星发生变化时触发",
				"回调参数": "value：当前选中的星星的数",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Search 搜索",
		"href": "https://www.uviewui.com/components/search.html",
		"template":"<u-search id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-search>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "v-model",
				"说明": "双向绑定输入框搜索值",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "搜索框形状，round-圆形，square-方形",
				"类型": "String",
				"默认值": "round",
				"可选值": "round/square"
			}, {
				"参数": "bg-color",
				"说明": "搜索框背景颜色",
				"类型": "String",
				"默认值": "#f2f2f2",
				"可选值": "-"
			}, {
				"参数": "border-color",
				"说明": "边框颜色，配置了颜色，才会有边框",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "placeholder",
				"说明": "占位文字内容",
				"类型": "String",
				"默认值": "请输入关键字",
				"可选值": "-"
			}, {
				"参数": "clearabled",
				"说明": "是否启用清除控件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "focus",
				"说明": "是否自动获得焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "show-action",
				"说明": "是否显示右侧控件(右侧的\"搜索\"按钮)",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "action-text",
				"说明": "右侧控件文字",
				"类型": "String",
				"默认值": "搜索",
				"可选值": "-"
			}, {
				"参数": "action-style",
				"说明": "右侧控件的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "input-align",
				"说明": "输入框内容水平对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/center/right"
			}, {
				"参数": "disabled",
				"说明": "是否启用输入框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "animation",
				"说明": "是否开启动画，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "height",
				"说明": "输入框高度，单位rpx",
				"类型": "String | Number",
				"默认值": "64",
				"可选值": "-"
			}, {
				"参数": "search-icon-color",
				"说明": "搜索图标的颜色，默认同输入框字体颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "输入框字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "placeholder-color",
				"说明": "placeholder的颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "margin",
				"说明": "组件与其他上下左右元素之间的距离，带单位的字符串形式，如\"30rpx\"、\"30rpx 20rpx\"等写法",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "maxlength",
				"说明": "输入框最大能输入的长度，-1为不限制长度",
				"类型": "String | Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "input-style",
				"说明": "自定义输入框样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "search-icon",
				"说明": "输入框左边的图标，可以为uView图标名称或图片路径",
				"类型": "String",
				"默认值": "search",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "change",
				"说明": "输入框内容发生变化时触发",
				"回调参数": "value：输入框的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "search",
				"说明": "用户确定搜索时触发，用户按回车键，或者手机键盘右下角的\"搜索\"键时触发",
				"回调参数": "value：输入框的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "custom",
				"说明": "用户点击右侧控件时触发",
				"回调参数": "value：输入框的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发",
				"回调参数": "value：输入框的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "focus",
				"说明": "输入框获得焦点时触发",
				"回调参数": "value：输入框的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "clear",
				"说明": "配置了clearabled后，清空内容时会发出此事件",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "click",
				"说明": "disabled为true时，点击输入框，发出此事件，用于跳转搜索页",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "NumberBox 步进器",
		"href": "https://www.uviewui.com/components/numberBox.html",
		"template":"<u-number-box id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-number-box>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				},
				{
				"参数": "v-model",
				"说明": "步进器初始值",
				"类型": "Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "输入框和按钮的背景颜色",
				"类型": "String",
				"默认值": "#F2F3F5",
				"可选值": "-"
			}, {
				"参数": "min",
				"说明": "用户可输入的最小值",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "max",
				"说明": "用户可输入的最大值",
				"类型": "Number",
				"默认值": "99999",
				"可选值": "-"
			}, {
				"参数": "step",
				"说明": "步长，每次加或减的值，1.4.5起支持小数值，如需小数，请设置positive-integer为false",
				"类型": "Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用操作，禁用后无法加减或手动修改输入框的值",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "size",
				"说明": "输入框文字和按钮字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "26",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "输入框文字和加减按钮图标的颜色",
				"类型": "String",
				"默认值": "#323233",
				"可选值": "-"
			}, {
				"参数": "input-width",
				"说明": "输入框宽度，单位rpx",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "input-height",
				"说明": "输入框和按钮的高度，单位rpx",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "事件回调时用以区分当前发生变化的是哪个输入框",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled-input",
				"说明": "是否禁止输入框手动输入值",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "cursor-spacing",
				"说明": "指定光标于键盘的距离，避免键盘遮挡输入框，单位rpx",
				"类型": "String | Number",
				"默认值": "200",
				"可选值": "-"
			}, {
				"参数": "long-press",
				"说明": "是否开启长按连续递增或递减",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "press-time",
				"说明": "开启长按触发后，每触发一次需要多久，单位ms",
				"类型": "String | Number",
				"默认值": "250",
				"可选值": "-"
			}, {
				"参数": "positive-integer",
				"说明": "是否只能输入正整数",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "change",
				"说明": "输入框内容发生变化时触发，对象形式",
				"回调参数": "value：输入框当前值，index：通过props传递的index值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发，对象形式",
				"回调参数": "value：输入框当前值，index：通过props传递的index值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "minus",
				"说明": "点击减少按钮时触发(按钮可点击情况下)，对象形式",
				"回调参数": "value：输入框当前值，index：通过props传递的index值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "plus",
				"说明": "点击增加按钮时触发(按钮可点击情况下)，对象形式",
				"回调参数": "value：输入框当前值，index：通过props传递的index值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发，对象形式",
				"回调参数": "value：输入框当前值，index：通过props传递的index值",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Upload 上传",
		"href": "https://www.uviewui.com/components/upload.html",
		"template":"<u-upload  id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-upload>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
					"参数": "v-model",
					"说明": "已选择的图片(但是不体现在组件上),结合on-list-change事件实现绑定",
					"类型": "Object",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "ref",
				"说明": "用于查找当前组件",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"uploadRef"
				},
				{
				"参数": "action",
				"说明": "服务器上传地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "max-count",
				"说明": "最大选择图片的数量",
				"类型": "String | Number",
				"默认值": "99",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "图片预览区域和添加图片按钮的宽度，单位rpx，不能是百分比，或者auto",
				"类型": "String | Number",
				"默认值": "200",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "图片预览区域和添加图片按钮的高度，单位rpx，不能是百分比，或者auto",
				"类型": "String | Number",
				"默认值": "200",
				"可选值": "-"
			}, {
				"参数": "custom-btn",
				"说明": "如果需要自定义选择图片的按钮，设置为true",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "show-progress",
				"说明": "是否显示进度条",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "disabled",
				"说明": "是否启用(显示/隐藏)组件",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "image-mode",
				"说明": "预览图片等显示模式，可选值为uni的image的mode属性值",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "header",
				"说明": "上传携带的头信息，对象形式",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}, {
				"参数": "form-data",
				"说明": "上传额外携带的参数",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "上传文件的字段名，供后端获取使用",
				"类型": "String",
				"默认值": "file",
				"可选值": "-"
			}, {
				"参数": "size-type",
				"说明": "original 原图，compressed 压缩图，默认二者都有，H5无效",
				"类型": "Array<String>",
				"默认值": "['original', 'compressed']",
				"可选值": "-"
			}, {
				"参数": "source-type",
				"说明": "选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有",
				"类型": "Array<String>",
				"默认值": "['album', 'camera']",
				"可选值": "-"
			}, {
				"参数": "preview-full-image",
				"说明": "是否可以通过uni.previewImage预览已选择的图片",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "multiple",
				"说明": "是否开启图片多选，部分安卓机型不支持",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "deletable",
				"说明": "是否显示删除图片的按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "max-size",
				"说明": "选择单个文件的最大大小，单位B(byte)，默认不限制",
				"类型": "String | Number",
				"默认值": "Number.MAX_VALUE",
				"可选值": "-"
			}, {
				"参数": "file-list",
				"说明": "默认显示的图片列表，数组元素为对象，必须提供url属性",
				"类型": "Array<Object>",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "upload-text",
				"说明": "选择图片按钮的提示文字",
				"类型": "String",
				"默认值": "选择图片",
				"可选值": "-"
			}, {
				"参数": "auto-upload",
				"说明": "选择完图片是否自动上传",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"已选值":"false"
			}, {
				"参数": "show-tips",
				"说明": "特殊情况下是否自动提示toast，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-upload-list",
				"说明": "是否显示组件内部的图片预览",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "del-icon",
				"说明": "右上角删除图标名称，只能为uView内置图标",
				"类型": "String",
				"默认值": "close",
				"可选值": "-"
			}, {
				"参数": "del-bg-color",
				"说明": "右上角关闭按钮的背景颜色",
				"类型": "String",
				"默认值": "#fa3534",
				"可选值": "-"
			}, {
				"参数": "del-color",
				"说明": "右上角关闭按钮图标的颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "to-json",
				"说明": "如果上传后服务端返回的值为json字符串的话，是否自动转为json",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "before-upload",
				"说明": "每个文件上传前触发的钩子回调函数，见上方说明，注意不要加括号",
				"类型": "Function",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "limitType",
				"说明": "允许的图片后缀",
				"类型": "Array",
				"默认值": "['png', 'jpg', 'jpeg', 'webp', 'gif']",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"methods": [{
				"名称": "upload",
				"说明": "调用此方法，手动上传图片",
				"例子":"this.$refs.组件的ref.upload();"
			}, {
				"名称": "clear",
				"说明": "调用此方法，清空内部文件列表",
				"例子":"this.$refs.组件的ref.clear();"
			}, {
				"名称": "reUpload",
				"说明": "调用此方法，重新上传内部上传失败或者尚未上传的图片",
				"例子":"this.$refs.组件的ref.reUpload();"
			}, {
				"名称": "remove(index)",
				"说明": "手动移除列表的某一个图片，index为lists数组的索引",
				"例子":"this.$refs.组件的ref.remove(index);"
			}],
			"slot": [{
				"名称": "addBtn",
				"说明": "自定义的选择图片按钮",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "on-oversize",
				"说明": "图片大小超出最大允许大小",
				"回调参数": "(file, lists, name), name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-preview",
				"说明": "全屏预览图片时触发",
				"回调参数": "(url, lists, name)，url为当前选中的图片地址，index为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-remove",
				"说明": "移除图片时触发",
				"回调参数": "(index, lists, name)，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-success",
				"说明": "图片上传成功时触发",
				"回调参数": "(data, index, lists, name)，data为服务器返回的数据，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-change",
				"说明": "图片上传后，无论成功或者失败都会触发",
				"回调参数": "(res, index, lists, name)，res为服务器返回的信息，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-error",
				"说明": "图片上传失败时触发",
				"回调参数": "(res, index, lists, name)，res为服务器返回的信息，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-progress",
				"说明": "图片上传过程中的进度变化过程触发",
				"回调参数": "(res, index, lists, name)，res为服务器返回的信息，具体参数请打印查看，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-uploaded",
				"说明": "所有图片上传完毕触发",
				"回调参数": "(lists, name)，可以通过此事件，将lists参数获取，提交给后端使用，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"事件名": "on-choose-complete",
				"说明": "每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表",
				"回调参数": "(lists, name)，内部当前的文件列表，name为通过props传递的index参数",
				"可选值": "-"
			}, {
				"repair":true,
				"事件名": "on-list-change",
				"说明": "当内部文件列表被加入文件、移除文件，或手动调用clear方法时触发",
				"回调参数": "(lists, name)，内部文件变化之后的列表，name为通过props传递的index参数",
				"可选值": "-",
				//"已选值":"onListChange"
			}, {
				"事件名": "on-choose-fail",
				"说明": "选择文件出错时触发，比如选择文件时取消了操作，只在微信和APP有效",
				"回调参数": "(error)，错误信息",
				"可选值": "-"
			}]
		}
	}, {
		"name": "VerificationCode 验证码倒计时",
		"href": "https://www.uviewui.com/components/verificationCode.html",
		"template":"<u-button id=\"id-xxx\" param-but event-but onclick=\"getUnitDesc('xxxxxx',event)\">{{vmodel-but}}<u-verification-code param-xxx event-xxx></u-verification-code></u-button>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class(该样式用于外层button组件上面)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"font-size: 12px;color: #333333;width: 100px;"
				},
				{
				"参数": "ref",
				"说明": "用于查找当前组件(不能为空)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"vcode"
				},
				{
				"参数": "v-model",
				"说明": "双向绑定button的值(不能为空)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"tips"
				},
				{
				"参数": "seconds",
				"说明": "倒计时所需的秒数",
				"类型": "Number | String",
				"默认值": "60",
				"可选值": "-"
			}, {
				"参数": "start-text",
				"说明": "开始前的提示语，见上方说明",
				"类型": "String",
				"默认值": "获取验证码",
				"可选值": "-"
			}, {
				"参数": "change-text",
				"说明": "倒计时期间的提示语，必须带有字母\"x\"，见上方说明",
				"类型": "String",
				"默认值": "X秒重新获取",
				"可选值": "-"
			}, {
				"参数": "end-text",
				"说明": "倒计结束的提示语，见上方说明",
				"类型": "String",
				"默认值": "重新获取",
				"可选值": "-"
			}, {
				"参数": "keep-running",
				"说明": "是否在H5刷新或各端返回再进入时继续倒计时",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "unique-key",
				"说明": "多个组件之间继续倒计时的区分key，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"methods": [{
				"名称": "start",
				"说明": "开始倒计时"
			}, {
				"名称": "reset",
				"说明": "结束当前正在进行中的倒计时，设置组件为可以重新获取验证码的状态"
			}],
			"event": [
				{
				"事件名": "tap",
				"说明": "该事件用于外层的button上面，点击后触发倒计时组件(不能为空)",
				"回调参数": "",
				"版本": "-",
				"可选值": "-",
				"已选值": "getCode"
				},
				{
				"事件名": "change",
				"说明": "倒计时期间，每秒触发一次(不能为空)",
				"回调参数": "text: 当前剩余多少秒的状态，见上方说明",
				"版本": "-",
				"可选值": "-",
				"已选值":"zChange"
			}, {
				"事件名": "start",
				"说明": "开始倒计时触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "end",
				"说明": "结束倒计时触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Field 输入框",
		"href": "https://www.uviewui.com/components/field.html",
	    "template":"<u-field id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-field>",
		"param": {
			"props": [
				{
				"参数": "v-model",
				"说明": "双向绑定button的值(不能为空),请不要不要修改该字段在数组中的位置",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "type",
				"说明": "输入框的类型",
				"类型": "String",
				"默认值": "text",
				"可选值": "text/textarea/select"
			}, 
			{
				"参数": "bdUnit",
				"说明": "关联选择性组件组件,type需为select,请将disabled参数设为true",
				"类型": "String",
				"默认值": "-",
				"可选值": "Calendar 日历/Select 列选择器/Keyboard 键盘/Picker 选择器/ActionSheet 操作菜单/Popup 弹出层"
			},
			{
				"参数": "icon",
				"说明": "label左边的图标，限uView的图标名称",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-bottom",
				"说明": "是否显示field的下边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border-top",
				"说明": "是否显示field的上边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "icon-style",
				"说明": "icon的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "right-icon",
				"说明": "输入框右边的图标名称，限uView的图标名称",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "required",
				"说明": "是否必填，左边显示红色\"*\"号",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "label",
				"说明": "输入框左边的文字提示",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"左侧标题"
			}, {
				"参数": "password",
				"说明": "是否密码输入方式(用点替换文字)，type为text时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "clearable",
				"说明": "是否显示右侧清空内容的图标控件(输入框有内容，且获得焦点时才显示)，点击可清空输入框内容",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "label-width",
				"说明": "label的宽度，单位rpx",
				"类型": "Number | String",
				"默认值": "130",
				"可选值": "-"
			}, {
				"参数": "label-align",
				"说明": "label的文字对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/center/right"
			}, {
				"参数": "input-align",
				"说明": "输入框内容对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/center/right"
			}, {
				"参数": "icon-color",
				"说明": "左边通过icon配置的图标的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "clear-size",
				"说明": "清除图标的大小，单位rpx",
				"类型": "Number | String",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "field-style",
				"说明": "输入框的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "auto-height",
				"说明": "是否自动增高输入区域，type为textarea时有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "error-message",
				"说明": "显示的错误提示内容，如果为空字符串或者false，则不显示错误信息",
				"类型": "String \\ Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "placeholder",
				"说明": "输入框的提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"请输入内容"
			}, {
				"参数": "placeholder-style",
				"说明": "placeholder的样式(内联样式，字符串)，如\"color: #ddd\"",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "focus",
				"说明": "是否自动获得焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "fixed",
				"说明": "如果type为textarea，且在一个\"position:fixed\"的区域，需要指明为true",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabled",
				"说明": "是否不可输入",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "maxlength",
				"说明": "最大输入长度，设置为 -1 的时候不限制最大长度",
				"类型": "Number | String",
				"默认值": "140",
				"可选值": "-"
			}, {
				"参数": "confirm-type",
				"说明": "设置键盘右下角按钮的文字，仅在type=\"text\"时生效",
				"类型": "String",
				"默认值": "done",
				"可选值": "-"
			}, {
				"参数": "trim",
				"说明": "是否自动去除两端的空格",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"slot": [{
				"名称": "icon",
				"说明": "自定义左侧的图标",
				"可选值": "-"
			}, {
				"名称": "right",
				"说明": "自定义右侧内容",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "focus",
				"说明": "输入框获得焦点时触发",
				"回调参数": "",
				"可选值": "-"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发",
				"回调参数": "",
				"可选值": "-"
			}, {
				"事件名": "right-icon-click",
				"说明": "通过right-icon生成的图标被点击时触发",
				"回调参数": "",
				"可选值": "-"
			}, {
				"事件名": "click",
				"说明": "输入框被点击或者通过right-icon生成的图标被点击时触发，这样设计是考虑到传递右边的图标，一般都为需要弹出\"picker\"等操作时的场景，点击倒三角图标，理应发出此事件，见上方说明",
				"回调参数": "",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Checkbox 复选框",
		"href": "https://www.uviewui.com/components/checkbox.html",
		"template":"<u-checkbox-group id=\"id-xxx\"  param-checkbox-group event-checkbox-group onclick=\"getUnitDesc('xxxxxx',event)\"><u-checkbox param-checkbox-item event-checkbox-item  v-model=\"item.event-checkbox-checked\" v-for=\"(item, index) in event-checkbox-list\" :key=\"index\" :name=\"item.event-checkbox-name\">{{item.event-checkbox-name}}</u-checkbox></u-checkbox-group>",
		"param": {
			"checkbox-props": [
				{
				"参数": "dataFiled",
				"说明": "该CheckBox数据源对应的字段",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"list"
				},
				{
				"参数": "dataSource",
				"说明": "该CheckBox数据源",
				"类型": "Array",
				"默认值":"[{\"name\":\"春眠\",\"checked\":false},{\"name\": \"不觉\",\"checked\":false},{\"name\": \"晓\",\"checked\":false}]",
				"可选值": "-",
				"已选值":"[{\"name\":\"春眠\",\"checked\":false},{\"name\": \"不觉\",\"checked\":false},{\"name\": \"晓\",\"checked\":false}]"
				},
				{
				"参数": "v-checked",
				"说明": "已选中的值(不体现组件上面)，通过checkboxgroup-event的change事件实现双向绑定",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-",
				},
				{
				"参数": "v-model",
				"说明": "双向绑定某一个checkbox的值，如果将该变量设置为true，将会被选中,数据源当中需要存在该字段(不能为空)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"checked"
			   },
			   {
				"参数": "size",
				"说明": "组件整体的大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label-size",
				"说明": "label字体大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon-size",
				"说明": "图标大小，单位rpx",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "checkbox组件的标示符，数据源当中需要存在该字段(不能为空)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"name"
			}, {
				"参数": "shape",
				"说明": "形状，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "square"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "false/true"
			}, {
				"参数": "label-disabled",
				"说明": "是否禁止点击文本操作checkbox",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "false / true"
			}, {
				"参数": "active-color",
				"说明": "选中时的颜色，如设置CheckboxGroup的active-color将失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"checkboxgroup-props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class(该样式用于外层复选框组组件上面)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "max",
				"说明": "最多能选中多少个checkbox",
				"类型": "String \\ Number",
				"默认值": "999",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用所有checkbox",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "icon-size",
				"说明": "图标大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "组件整体的大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "34",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "形状，见上方说明",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}, {
				"参数": "active-color",
				"说明": "选中时的颜色，应用到所有子Checkbox组件",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "label-disabled",
				"说明": "是否禁止点击文本操作checkbox",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true/false"
			}, {
				"参数": "width",
				"说明": "checkbox的宽度，需带单位，如50%，150rpx",
				"类型": "String",
				"默认值": "auto",
				"可选值": "-"
			}, {
				"参数": "wrap",
				"说明": "是否每个checkbox占一行",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true/false"
			}],
			"checkbox-event": [{
				"事件名": "change",
				"说明": "某个checkbox状态发生变化时触发，回调为一个对象",
				"回调参数": "detail = {value: [true或者false，true为被选中，否则反之], name: [通过props传递的name参数] }",
				"版本": "-",
				"可选值": "-",
			}],
			"checkboxgroup-event": [{
				"事件名": "change",
				"说明": "任一个checkbox状态发生变化时触发，回调为一个对象",
				"回调参数": "detail = array( [元素为被选中的checkbox的name] )",
				"版本": "-",
				"可选值": "-",
			}]
		}
	}, {
		"name": "Radio 单选框",
		"href": "https://www.uviewui.com/components/radio.html",
		"template":"<u-radio-group    id=\"id-xxx\" param-radio-group event-radio-group onclick=\"getUnitDesc('xxxxxx',event)\"><u-radio param-radio-item event-radio-item  v-for=\"(item, index) in event-radio-list\" :key=\"index\" :name=\"item.event-radio-name\">{{item.event-radio-name}}</u-radio></u-radio-group>",
		"param": {
			"radio-props": [
				{
				"参数": "dataFiled",
				"说明": "该CheckBox数据源对应的字段",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"list"
				},
				{
				"参数": "dataSource",
				"说明": "该CheckBox数据源",
				"类型": "Array",
				"默认值":"[{\"name\":\"春眠\"},{\"name\": \"不觉\"},{\"name\": \"晓\"}]",
				"可选值": "-",
				"已选值":"[{\"name\":\"春眠\"},{\"name\": \"不觉\"},{\"name\": \"晓\"}]"
				},
				{
				"参数": "icon-size",
				"说明": "图标大小，单位rpx",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label-size",
				"说明": "label字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "radio组件的标示符",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-",
				"已选值":"name"
			}, {
				"参数": "shape",
				"说明": "形状，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "circle/square"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "false/true"
			}, {
				"参数": "label-disabled",
				"说明": "是否禁止点击文本操作radio",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "true/false"
			}, {
				"参数": "active-color",
				"说明": "选中时的颜色，如设置radioGroup的active-color将失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"radiogroup-props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class(该样式用于外层单选框组组件上面)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "v-model",
				"说明": "被选中radio双向绑定的值，如果初始值为某一个radio的name，该radio将会默认被选中",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用所有radio",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "label-disabled",
				"说明": "是否禁止点击文本操作radio",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "shape",
				"说明": "形状，见上方说明",
				"类型": "String",
				"默认值": "circle",
				"可选值": "circle/square"
			}, {
				"参数": "icon-size",
				"说明": "图标大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "选中时的颜色，应用到所有子Radio组件",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "radio组件整体的大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "34",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "radio的宽度，需带单位，如50%，150rpx",
				"类型": "String | Number",
				"默认值": "auto",
				"可选值": "-"
			}, {
				"参数": "wrap",
				"说明": "是否每个radio占一行",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"radio-event": [{
				"事件名": "change",
				"说明": "某个radio状态发生变化时触发(选中状态)",
				"回调参数": "name: 通过props传递的name参数",
				"版本": "-",
				"可选值": "-",
			}],
			"radiogroup-event": [{
				"事件名": "change",
				"说明": "任一个radio状态发生变化时触发",
				"回调参数": "name: 值为radio通过props传递的name值",
				"版本": "-",
				"可选值": "-",
			}]
		}
	}, {
		"name": "Switch 开关选择器",
		"href": "https://www.uviewui.com/components/switch.html",
		"template":"<u-switch id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-switch>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
				},
				{
				"参数": "v-model",
			    "说明": "被选中switch双向绑定事件",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-",
				"已选值":"sw"
				},
				{
				"参数": "loading",
				"说明": "是否处于加载中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "size",
				"说明": "开关尺寸，单位rpx",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "打开时的背景色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "关闭时的背景色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "vibrate-short",
				"说明": "是否使手机发生短促震动，目前只在iOS的微信小程序和微信小程序开发工具有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "active-value",
				"说明": "打开选择器时通过change事件发出的值",
				"类型": "Boolean | Number | String",
				"默认值": "true",
				"可选值": ""
			}, {
				"参数": "inactive-value",
				"说明": "关闭选择器时通过change事件发出的值",
				"类型": "Boolean | Number | String",
				"默认值": "false",
				"可选值": ""
			}],
			"event": [{
				"事件名": "change",
				"说明": "在switch打开或关闭时触发",
				"回调参数": "value：打开时为active-value值，关闭时为inactive-value值",
				"可选值": ""
			}]
		}
	}, {
		"name": "Slider 滑动选择器",
		"href": "https://www.uviewui.com/components/slider.html",
		"templateWc":"<view style=\"position: relative;height: 80rpx;border: 1px solid #F55555;\"><label style=\"width: 20%;position: absolute;line-height: 80rpx;left: 30rpx;\">滑动条:</label>SliderChild</view>",
		"template":"<u-slider id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-slider>",
		"param": {
			"props": [
				{
				"参数": "style",
				"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"width: 70%;position: absolute;left: 150rpx;top: 25rpx;"
				},
				{
					"参数": "name",
					"说明": "当前滑块的名称",
					"类型": "String",
					"默认值": "滑动条",
					"可选值": "-",
					"已选值":"滑动条"
				}, 
				{
				"参数": "v-model",
				"说明": "双向绑定滑块选择值",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, 
			{
				"参数": "min",
				"说明": "可选的最小值(0-100之间)",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "max",
				"说明": "可选的最大值(0-100之间)",
				"类型": "String | Number",
				"默认值": "100",
				"可选值": "-"
			}, {
				"参数": "step",
				"说明": "选择的步长",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "block-width",
				"说明": "滑动按钮的宽度(高等于宽)，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "滑动选择条的高度，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-",
				"已选值":"20"
			}, {
				"参数": "inactive-color",
				"说明": "滑动选择条的底部背景颜色",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "底部选择部分的背景颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "block-color",
				"说明": "滑块背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "block-style",
				"说明": "给滑块按钮自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用滑块",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "use-slot",
				"说明": "是否使用slot传入自定义滑块",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"events": [{
				"事件名": "start",
				"说明": "触发滑块移动",
				"回调参数": "",
				"可选值": ""
			}, {
				"事件名": "moving",
				"说明": "正在滑动中",
				"回调参数": "",
				"可选值": ""
			}, {
				"事件名": "end",
				"说明": "滑动结束",
				"回调参数": "",
				"可选值": ""
			}]
		}
	}],
	"数据组件": [{
		"name": "CircleProgress 圆形进度条",
		"href": "https://www.uviewui.com/components/circleProgress.html",
		"template":"<u-circle-progress id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-circle-progress>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
			   {
				"参数": ":percent",
				"说明": "圆环进度百分比值，为数值类型，0-100",
				"类型": "Number",
				"默认值": "-",
				"可选值": "-",
				"已选值":50
			   }, {
				"参数": "inactive-color",
				"说明": "圆环的底色，默认为灰色(该值无法动态变更)",
				"类型": "String",
				"默认值": "#ececec",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "圆环激活部分的颜色(该值无法动态变更)",
				"类型": "String",
				"默认值": "#19be6b",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "整个圆环组件的宽度，高度默认等于宽度值，单位rpx",
				"类型": "String | Number",
				"默认值": "200",
				"可选值": "-"
			}, {
				"参数": "border-width",
				"说明": "圆环的边框宽度，单位rpx",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "整个圆环执行一圈的时间，单位ms",
				"类型": "String | Number",
				"默认值": "1500",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "如设置，active-color值将会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "success / primary / error / info / warning"
			}, {
				"参数": "bg-color",
				"说明": "整个组件背景颜色，默认为白色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "default",
				"说明": "中间显示的内容,可以是纯文本也可以是其他组件",
				"可选值": "-"
			}],
		}
	}, {
		"name": "LineProgress 线形进度条",
		"href": "https://www.uviewui.com/components/lineProgress.html",
		"template":"<u-line-progress id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-line-progress>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": ":percent",
				"说明": "进度条百分比值，为数值类型，0-100",
				"类型": "Number",
				"默认值": "-",
				"可选值": "-",
				"已选值":50
			}, {
				"参数": "round",
				"说明": "进度条两端是否为半圆",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "type",
				"说明": "如设置，active-color值将会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "success/primary/error/info/warning"
			}, {
				"参数": "active-color",
				"说明": "进度条激活部分的颜色",
				"类型": "String",
				"默认值": "#19be6b",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "进度条的底色，默认为灰色",
				"类型": "String",
				"默认值": "#ececec",
				"可选值": "-"
			}, {
				"参数": "show-percent",
				"说明": "是否在进度条内部显示当前的百分比值数值",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "height",
				"说明": "进度条的高度，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "striped",
				"说明": "是否显示进度条激活部分的条纹",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "striped-active",
				"说明": "条纹是否具有动态效果",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"slot": [{
				"名称": "default",
				"说明": "传入自定义的显示内容，将会覆盖默认显示的百分比值",
				"可选值":""
			}]
		}
	}, {
		"name": "Table 表格",
		"href": "https://www.uviewui.com/components/table.html",
		"template":"<u-table  id=\"id-xxx\" param-table  onclick=\"getUnitDesc('xxxxxx',event)\"><u-tr><u-th param-th v-for=\"(item, index) in list-th\" :key=\"index\" >{{item}}</u-th></u-tr><u-tr v-for=\"(item2, index2) in list-td\" :key=\"index2\"><u-td param-td v-for=\"(item3,value, index3) in item2\" :key=\"index3\">{{item3}}</u-td></u-tr></u-table>",
		"param": {
			"table-props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
					"参数": "dataFiled",
					"说明": "表格数据源绑定字段",
					"类型": "String",
					"默认值": "-",
					"可选值": "-",
					"已选值":"list"
				},
				{
					"参数": "dataSource",
					"说明": "表格数据源",
					"类型": "Array",
					"默认值": "-",
					"可选值": "-",
					"已选值":"{\"th\":[\"姓名\",\"性别\",\"年龄\"],\"td\":[[\"张三\",\"男\",\"25\"],[\"李四\",\"男\",\"26\"],[\"王五\",\"男\",\"27\"]]}"
				},
			    {
				"参数": "border-color",
				"说明": "表格边框的颜色",
				"类型": "String",
				"默认值": "#e4e7ed",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "表格的背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "align",
				"说明": "单元格的内容对齐方式，作用类似css的text-align",
				"类型": "String",
				"默认值": "center",
				"可选值": "center/left/right"
			}, {
				"参数": "padding",
				"说明": "单元格的内边距，同css的padding写法",
				"类型": "String",
				"默认值": "10rpx 0",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "单元格字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "单元格字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "th-style",
				"说明": "th单元格的样式，对象形式(将th所需参数放在table组件，是为了避免每一个th组件要写一遍)",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}],
			"td-props": [{
				"参数": "width",
				"说明": "单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度",
				"类型": "String | Number",
				"默认值": "auto",
				"可选值": "-"
			}],
			"th-props": [{
				"参数": "width",
				"说明": "标题单元格宽度百分比或者具体带单位的值，如30%， 200rpx等，一般使用百分比，单元格宽度默认为均分tr的长度",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "CountDown 倒计时",
		"href": "https://www.uviewui.com/components/countDown.html",
		"template":"<u-count-down id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-count-down>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "ref",
				"说明": "用于查找当前组件(如果不是自动开始倒计时,不能为空)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"uCountDown"
				},
				{
				"参数": "timestamp",
				"说明": "倒计时，单位为秒",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-",
				"已选值":"60"
			}, {
				"参数": "autoplay",
				"说明": "是否自动开始倒计时，如果为false，需手动调用开始方法。见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"已选值":"false"
			}, {
				"参数": "separator",
				"说明": "分隔符，colon为英文冒号，zh为中文",
				"类型": "String",
				"默认值": "colon",
				"可选值": "zh"
			}, {
				"参数": "separator-size",
				"说明": "分隔符的字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "separator-color",
				"说明": "分隔符的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "倒计时字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "show-border",
				"说明": "是否显示倒计时数字的边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "border-color",
				"说明": "数字边框的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "倒计时数字的背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "倒计时数字的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "数字高度值(宽度等同此值)，设置边框时看情况是否需要设置此值，单位rpx",
				"类型": "String",
				"默认值": "auto",
				"可选值": "-"
			}, {
				"参数": "show-days",
				"说明": "是否显示倒计时的\"天\"部分",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-hours",
				"说明": "是否显示倒计时的\"时\"部分",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-minutes",
				"说明": "是否显示倒计时的\"分\"部分",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-seconds",
				"说明": "是否显示倒计时的\"秒\"部分",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "hide-zero-day",
				"说明": "当\"天\"的部分为0时，隐藏该字段",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "end",
				"说明": "倒计时结束",
				"回调参数": "",
				"可选值":"-"
			}, {
				"事件名": "change",
				"说明": "倒计过程中，每秒触发一次",
				"回调参数": "timestamp: 当前剩余的倒计秒数",
				"可选值":"-"
			}],
			"methods": [{
				"名称": "start",
				"说明": "开始倒计时(不是自动开始倒计时调用此方法)",
				"例子":"this.$refs.ref的值.start();"
			}]
		}
	}, {
		"name": "CountTo 数字滚动",
		"href": "https://www.uviewui.com/components/countTo.html",
		"template":"<u-count-to id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-count-to>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "ref",
				"说明": "用于查找当前组件",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"uCountTo"
				},
				{
				"参数": ":start-val",
				"说明": "开始值",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-",
				"已选值":30
			}, {
				"参数": ":end-val",
				"说明": "结束值",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-",
				"已选值":500
			}, {
				"参数": "duration",
				"说明": "滚动过程所需的时间，单位ms",
				"类型": "String | Number",
				"默认值": "2000",
				"可选值": "-"
			}, {
				"参数": "autoplay",
				"说明": "是否自动开始滚动",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "decimals",
				"说明": "要显示的小数位数，见上方说明",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "use-easing",
				"说明": "滚动结束时，是否缓动结尾，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "separator",
				"说明": "千位分隔符，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "字体是否加粗",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"methods": [{
				"名称": "start",
				"说明": "autoplay为false时，通过此方法启动滚动",
				"例子":"this.$refs.ref的值.start();"
			}, {
				"名称": "reStart",
				"说明": "暂停后重新开始滚动(从暂停前的值开始滚动)",
				"例子":"this.$refs.ref的值.reStart();"
			}, {
				"名称": "paused",
				"说明": "暂停滚动",
				"例子":"this.$refs.ref的值.reStart();"
			}],
			"event": [{
				"事件名": "end",
				"说明": "数值滚动到目标值时触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}],
	"反馈组件": [{
		"name": "ActionSheet 操作菜单",
		"href": "https://www.uviewui.com/components/actionSheet.html",
		"template":"<u-action-sheet id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-action-sheet>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
					"repair":true,
					"参数": "v-model",
					"说明": "双向绑定操作菜单是否显示",
					"类型": "Boolean",
					"默认值": "-",
					"可选值": "-",
					//"已选值":"sheetShow"
				}, 
				{
				"参数": "list",
				"说明": "数据源对应的字段(与数据源进行关联，形成双向绑定)",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"list"
				},
				{
				"参数": "dataSource",
				"说明": "数据源(该参数应放到数据源对应字段之后)",
				"类型": "dataSource",
				"默认值": "[{\"text\": \"斯人若彩虹\",\"color\": \"#2d497b\",\"fontSize\": 28,\"subText\": \"怦然行动\"}, {\"text\": \"遇上方知有\",\"color\": \"#f55555\",\"fontSize\": 28}]",
				"可选值": "-",
				"已选值":" [{\"text\": \"斯人若彩虹\",\"color\": \"#2d497b\",\"fontSize\": 28,\"subText\": \"怦然行动\"}, {\"text\": \"遇上方知有\",\"color\": \"#f55555\",\"fontSize\": 28}]"
			   }, 
			{
				"参数": "tips",
				"说明": "顶部的提示文字，见上方文档示例",
				"类型": "Object",
				"默认值": "{text: '菜单标题',color: '#f55555','fontSize': 24}",
				"可选值": "-",
				"已选值": "{text: '菜单标题',color: '#f55555','fontSize': 24}"
			}, {
				"参数": "cancel-btn",
				"说明": "是否显示底部的取消按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border-radius",
				"说明": "弹出部分顶部左右的圆角值，单位rpx",
				"类型": "Number \\ String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "mask-close-able",
				"说明": "点击遮罩是否可以关闭",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "z-index",
				"说明": "z-index值",
				"类型": "Number \\ String",
				"默认值": "1075",
				"可选值": "-"
			}, {
				"参数": "cancel-text",
				"说明": "取消按钮的提示文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}],
			"events": [{
				"repair":true,
				"事件名": "click",
				"说明": "点击ActionSheet列表项时触发",
				"回调参数": "index: 点击了第几个，从0开始",
				"版本": "-",
				"可选值": "-"
				
			}, {
				"事件名": "close",
				"说明": "点击取消按钮时触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "AlertTips 警告提示",
		"href": "https://www.uviewui.com/components/alertTips.html",
		"template":"<u-alert-tips id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-alert-tips>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "title",
				"说明": "显示的文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "description",
				"说明": "辅助性文字，颜色比title浅一点，字号也小一点，可选",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "close-able",
				"说明": "关闭按钮(默认为叉号icon图标)",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "type",
				"说明": "使用预设的颜色",
				"类型": "String",
				"默认值": "warning",
				"可选值": "warning/success/primary/error/info"
			}, {
				"参数": "close-text",
				"说明": "用文字替代关闭图标，close-able为true时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "show-icon",
				"说明": "是否显示左边的辅助图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "show",
				"说明": "显示或隐藏组件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "icon",
				"说明": "左侧的图标名称，如设置type和show-icon值，会有一个默认的图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon-style",
				"说明": "自定义图标的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title-style",
				"说明": "自定义标题的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "desc-style",
				"说明": "自定义内容的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "close",
				"说明": "点击关闭按钮时触发，需在此回调设置show为false",
				"回调参数": "",
				"可选值": "-"
			}, {
				"事件名": "click",
				"说明": "点击组件时触发",
				"回调参数": "",
				"可选值": "-"
			}]
		}
	}, 
	{
		"name": "NoticeBar 滚动通知",
		"href": "https://www.uviewui.com/components/noticeBar.html",
		"template":"<u-notice-bar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-notice-bar>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
					"参数": "list",
					"说明": "数据源对应的字段(与数据源进行关联，形成双向绑定)",
					"类型": "dataFiled",
					"默认值": "-",
					"可选值": "-",
					"已选值":"list"
					},
					{
					"参数": "dataSource",
					"说明": "数据源(该参数应放到数据源对应字段之后)",
					"类型": "dataSource",
					"默认值": "[\"斯人若彩虹\",\"遇上方知有\"]",
					"可选值": "-",
					"已选值":"[\"斯人若彩虹\",\"遇上方知有\"]"
				},
				 {
				"参数": "type",
				"说明": "显示的主题",
				"类型": "String",
				"默认值": "warning",
				"可选值": "warning/primary/info/error/success/none"
			}, {
				"参数": "volume-icon",
				"说明": "是否显示小喇叭图标",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "more-icon",
				"说明": "是否显示右边的向右箭头",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "close-icon",
				"说明": "是否显示关闭图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "autoplay",
				"说明": "是否自动播放",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "背景颜色",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "滚动模式",
				"类型": "String",
				"默认值": "horizontal(水平滚动)",
				"可选值": "vertical(垂直滚动)"
			}, {
				"参数": "show",
				"说明": "是否显示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "volume-size",
				"说明": "左边喇叭的大小",
				"类型": "String | Number",
				"默认值": "34",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "滚动周期时长，只对步进模式有效，横向衔接模式无效，单位ms",
				"类型": "String | Number",
				"默认值": "2000",
				"可选值": "-"
			}, {
				"参数": "speed",
				"说明": "水平滚动时的滚动速度，即每秒移动多少距离，只对水平衔接方式有效，单位rpx",
				"类型": "String | Number",
				"默认值": "160",
				"可选值": "-"
			}, {
				"参数": "is-circular",
				"说明": "mode为horizontal时，指明是否水平衔接滚动",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "play-state",
				"说明": "播放状态，play - 播放，paused - 暂停",
				"类型": "String",
				"默认值": "play",
				"可选值": "play/paused"
			}, {
				"参数": "disable-touch",
				"说明": "是否禁止通过手动滑动切换通知，只有mode = vertical，或者mode = horizontal且is-circular = false时有效；只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "padding",
				"说明": "内置滚动通知的内边距，字符串，类似\"16rpx 20rpx\"",
				"类型": "String",
				"默认值": "18rpx 24rpx",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "圆角值，单位rpx",
				"类型": "String \\ Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "no-list-hidden",
				"说明": "list为空数组时，是否显示组件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击通告文字触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效",
				"回调参数": "index：当前文字所在list数组的索引值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "close",
				"说明": "点击右侧关闭图标触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "getMore",
				"说明": "点击右侧向右图标触发",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "end",
				"说明": "列表的消息每次被播放一个周期时触发，只有mode = vertical，或者mode = horizontal且is-circular = false时有效",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, 
	{
		"name": "Collapse 折叠面板",
		"href": "https://www.uviewui.com/components/collapse.html",
		"template":"<u-collapse id=\"id-xxx\" param-collapse collapse-event onclick=\"getUnitDesc('xxxxxx',event)\"><u-collapse-item param-collapse-item  collapse-item-event :title=\"item.head\" v-for=\"(item, index) in dataFiled\" :key=\"index\">{{item.body}}slot-xxx</u-collapse-item></u-collapse>",
		"param": {
			"collapse-props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "accordion",
				"说明": "是否手风琴模式",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"已选值":"true"
			}, {
				"参数": "arrow",
				"说明": "是否显示标题右侧的箭头",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "arrow-color",
				"说明": "标题右侧箭头的颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "item-style",
				"说明": "整个Item的自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "head-style",
				"说明": "Item的标题自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "body-style",
				"说明": "Item的主体自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "hover-class",
				"说明": "样式类名，按下时有效，样式必须写在根目录的App.vue或通过其引入的全局样式中才有效，none为无效果，作用于头部标题区域",
				"类型": "String",
				"默认值": "u-hover-class",
				"可选值": "u-hover-class/none"
			}],
			"collapse-item-props": [
				{
				"repair":true,
				"参数": "dataFiled",
				"说明": "数据源对应的字段(与数据源进行关联，形成双向绑定)",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"CollapseList"
				},
				{
				"repair":true,
				"参数": "dataSource",
				"说明": "数据源(数据格式不能改变,该参数应放到数据源对应字段之后)",
				"类型": "dataSource",
				"默认值": "[{\"head\": \"斯人若彩虹\",\"body\": \"11111111111\"}, {\"head\": \"遇上方知有\",\"body\": \"22222222222222\"}]",
				"可选值": "-",
				"已选值":"[{\"head\": \"斯人若彩虹\",\"body\": \"11111111111\"}, {\"head\": \"遇上方知有\",\"body\": \"22222222222222\"}]"
				},
				// {
				// "参数": "title",
				// "说明": "面板标题",
				// "类型": "String",
				// "默认值": "-",
				// "可选值": "-"
			 //   }, 
			   {
				"参数": "index",
				"说明": "主要用于事件的回调，标识那个Item被点击",
				"类型": "String / Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "面板是否可以打开或收起",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "open",
				"说明": "设置某个面板的初始状态是否打开",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "name",
				"说明": "唯一标识符，如不设置，默认用当前collapse-item的索引值",
				"类型": "String / Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "align",
				"说明": "标题的对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "-"
			}, {
				"参数": "active-style",
				"说明": "不显示箭头时，可以添加当前选择的collapse-item活动样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"collapse-event": [{
				"事件名": "change",
				"说明": "当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)",
				"回调参数": "activeNames: String / Array",
				"可选值": "-",
				"已选值":""
			}],
			"collapse-item-event": [{
				"事件名": "change",
				"说明": "某个item被打开或者收起时触发",
				"回调参数": "对象，{index: index, show: true | false }，index为collapse-item的index参数，show为true表示被打开，false表示被收起",
				"可选值": "-",
				"已选值":""
			}],
			"collapse-methods": [{
				"方法": "init",
				"说明": "重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nextTick()使用"
			}],
			"slot": [{
				"名称": "default",
				"说明": "主体部分的内容(需要手动删除页面{{item.body}})",
				"可选值": "-"
			}, {
				"名称": "title",
				"说明": "头部的内容，不含右边的箭头",
				"可选值": "-"
			}, {
				"名称": "title-all",
				"说明": "整个头部的内容，包含右边的箭头",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Popup 弹出层",
		"href": "https://www.uviewui.com/components/popup.html",
		"template":"<u-popup id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"><view>该区域用户自定义写入其他组件</view></u-popup>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
					"repair":true,
					"参数": "v-model",
					"说明": "双向绑定操作弹出层是否显示",
					"类型": "Boolean",
					"默认值": "true",
					"可选值": "-",
					//"已选值":"pupUpShow"
				},
				{
				"参数": "mode",
				"说明": "弹出方向",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/top/right/bottom/center",
				"已选值":"center"
			}, {
				"参数": "mask",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "length",
				"说明": "mode=left | 见上方说明",
				"类型": "String | Number",
				"默认值": "auto",
				"可选值": "-"
			}, {
				"参数": "zoom",
				"说明": "是否开启缩放动画，只在mode为center时有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "safe-area-inset-bottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mask-close-able",
				"说明": "点击遮罩是否可以关闭弹出层",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "custom-style",
				"说明": "用户自定义样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "弹窗圆角值",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "z-index",
				"说明": "弹出内容的z-index值",
				"类型": "Number | String",
				"默认值": "10075",
				"可选值": "-"
			}, {
				"参数": "closeable",
				"说明": "是否显示关闭图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"已选值":"true"
			}, {
				"参数": "close-icon",
				"说明": "关闭图标的名称，只能uView的内置图标",
				"类型": "String",
				"默认值": "close",
				"可选值": "-"
			}, {
				"参数": "close-icon-pos",
				"说明": "自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角",
				"类型": "String",
				"默认值": "top-right",
				"可选值": "top-right/top-left/bottom-left/bottom-right"
			}, {
				"参数": "close-icon-color",
				"说明": "关闭图标的颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "close-icon-size",
				"说明": "关闭图标的大小，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "mode = left | center | right时有效，优先级高于length",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "mode = top | center | bottom时有效，优先级高于length",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "negative-top",
				"说明": "中部弹出时，以避免可能弹出的键盘重合，往上偏移的值，单位任意，数值则默认为rpx单位",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "mask-custom-style",
				"说明": "遮罩自定义样式，一般用于修改遮罩透明度对象形式，如：{background: 'rgba(0, 0, 0, 0.5)'}",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "遮罩打开或收起的动画过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "250",
				"可选值": "-"
			}],
			"events": [{
				
				"事件名": "open",
				"说明": "弹出层打开",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}, {
				"repair":true,
				"事件名": "close",
				"说明": "弹出层收起",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "SwipeAction 滑动操作",
		"href": "https://www.uviewui.com/components/swipeAction.html",
		"template":"<u-swipe-action id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"  :index=\"index\" v-for=\"(item, index) in dataFiled\" :key=\"index\" ><view style=\"height: 50px;\">{{item.title}}</view></u-swipe-action>",
		"param": {
			"props": [
				{
					"repair":true,
					"参数": "dataFiled",
					"说明": "滑动操作数据源绑定字段",
					"类型": "dataFiled",
					"默认值": "-",
					"可选值": "-",
					"已选值":"SwipeActionList"
				},
				{
					"repair":true,
					"参数": "dataSource",
					"说明": "数据源(map中的title为必传项)",
					"类型": "dataSource",
					"默认值": "[{\"title\": \"左侧内容1\"},{\"title\": \"左侧内容2\"},{\"title\": \"左侧内容3\"}]",
					"可选值": "-",
					"已选值":"[{\"title\": \"左侧内容1\"},{\"title\": \"左侧内容2\"},{\"title\": \"左侧内容3\"}]"
				},
				
			{
				"参数": "bg-color",
				"说明": "整个组件背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "btn-width",
				"说明": "按钮宽度，单位rpx",
				"类型": "String | Number",
				"默认值": "180",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁止某个swipeAction滑动",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "vibrate-short",
				"说明": "是否使手机发生短促震动，目前只在iOS的微信小程序和微信小程序开发工具有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			},  {
				"参数": "options",
				"说明": "按钮组的配置参数，数组形式",
				"类型": "Array",
				"默认值":"[{text: '收藏',style: {backgroundColor: '#5baefa'}},{text: '删除',style: {backgroundColor: '#f55555'}}]",
				"可选值": "-",
				"已选值":"[{text: '收藏',style: {backgroundColor: '#5baefa'}},{text: '删除',style: {backgroundColor: '#f55555'}}]"
			}],
			"event": [{
				"事件名": "click",
				"说明": "点击组件时触发",
				"回调参数": "(index1, index)，见上方\"点击事件\"的说明",
				"可选值": "-"
			},
			// {
			// 	"事件名": "close",
			// 	"说明": "组件触发关闭状态时",
			// 	"回调参数": "index: 通过props传递的index",
			// 	"可选值": "-"
			// }, {
			// 	"事件名": "open",
			// 	"说明": "组件触发打开状态时",
			// 	"回调参数": "index: 通过props传递的index",
			// 	"可选值": "-"
			// }, 
			{
				"事件名": "content-click",
				"说明": "点击内容时触发",
				"回调参数": "index: 通过props传递的index",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Modal 模态框",
		"href": "https://www.uviewui.com/components/modal.html",
		"template":"<u-modal id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-modal>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "v-model",
				"说明": "是否显示模态框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"已选值":"modalShow"
			    },
				{
				"参数": "z-index",
				"说明": "层级",
				"类型": "String | Number",
				"默认值": "1075",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "标题内容",
				"类型": "String",
				"默认值": "提示",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "模态框宽度，数值时单位为rpx",
				"类型": "String | Number",
				"默认值": "600",
				"可选值": "600/auto"
			}, {
				"参数": "content",
				"说明": "模态框内容，如传入slot内容，则此参数无效",
				"类型": "String",
				"默认值": "内容",
				"可选值": "-",
				"已选值":"自定义内容区域"
			}, {
				"参数": "show-title",
				"说明": "是否显示标题",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-confirm-button",
				"说明": "是否显示确认按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-cancel-button",
				"说明": "是否显示取消按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "confirm-text",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancel-text",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "cancel-color",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "confirm-color",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "模态框圆角值，单位rpx",
				"类型": "String | Number",
				"默认值": "16",
				"可选值": "-"
			}, {
				"参数": "title-style",
				"说明": "自定义标题样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "content-style",
				"说明": "自定义内容样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "cancel-style",
				"说明": "自定义取消按钮样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "confirm-style",
				"说明": "自定义确认按钮样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "zoom",
				"说明": "是否开启缩放模式",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "async-close",
				"说明": "是否异步关闭，只对确定按钮有效，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mask-close-able",
				"说明": "是否允许点击遮罩关闭Modal",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "negative-top",
				"说明": "往上偏移的值，以避免可能弹出的键盘重合，单位任意，数值则默认为rpx单位 1.4.4",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "confirm",
				"说明": "点击确认按钮时触发",
				"回调参数": "",
				"可选值": "-"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮时触发",
				"回调参数": "",
				"可选值": "-"
			}],
			"method": [{
				"事件名": "clearLoading",
				"说明": "异步控制时，通过调用此方法，可以不关闭Modal，而单是清除loading状态"
			}],
			"slots": [{
				"名称": "default",
				"说明": "传入自定义内容，一般为富文本，见上方说明",
				"可选值": "-"
			}, {
				"名称": "confirm-button",
				"说明": "传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景",
				"可选值": "-"
			}]
		}
	}],
	"布局组件": [{
		"name": "Line 线条",
		"href": "https://www.uviewui.com/components/line.html",
		"template":"<u-line id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"/>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "color",
				"说明": "线条的颜色",
				"类型": "String",
				"默认值": "#e4e7ed",
				"可选值": "-"
			}, {
				"参数": "length",
				"说明": "长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等",
				"类型": "String",
				"默认值": "100%",
				"可选值": "-"
			}, {
				"参数": "direction",
				"说明": "线条的方向，row-横向，col-竖向",
				"类型": "String",
				"默认值": "row",
				"可选值": "row/col"
			}, {
				"参数": "hair-line",
				"说明": "是否显示细线条",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "margin",
				"说明": "线条与上下左右元素的间距，字符串形式，如\"30rpx\"、\"20rpx 30rpx\"",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-style",
				"说明": "线条类型，见上方说明",
				"类型": "String",
				"默认值": "solid",
				"可选值": "solid/dashed/dotted"
			}]
		}
	}, {
		"name": "Card 卡片",
		"href": "https://www.uviewui.com/components/card.html",
		"template":"<u-card id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-card>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "full",
				"说明": "卡片与屏幕两侧是否留空隙",
				"类型": "Boolean",
				"默认值": "fasle",
				"可选值": "true"
			},
			{
				"参数": "title",
				"说明": "头部左边的标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title-color",
				"说明": "标题颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "title-size",
				"说明": "标题字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "sub-title",
				"说明": "头部右边的副标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "sub-title-color",
				"说明": "副标题颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "sub-title-size",
				"说明": "副标题字体大小",
				"类型": "String | Number",
				"默认值": "26",
				"可选值": "-"
			}, {
				"参数": "border",
				"说明": "是否显示边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "index",
				"说明": "用于标识点击了第几个卡片",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "margin",
				"说明": "卡片与屏幕两边和上下元素的间距，需带单位，如\"30rpx 20rpx\"，见上方说明",
				"类型": "String",
				"默认值": "30rpx",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "卡片整体的圆角值，单位rpx",
				"类型": "String | Number",
				"默认值": "16",
				"可选值": "-"
			}, {
				"参数": "head-style",
				"说明": "头部自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "body-style",
				"说明": "主体自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "foot-style",
				"说明": "底部自定义样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "head-border-bottom",
				"说明": "是否显示头部的下边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "foot-border-top",
				"说明": "是否显示底部的上边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "thumb",
				"说明": "缩略图路径，如设置将显示在标题的左边，不建议使用相对路径",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "thumb-width",
				"说明": "缩略图的宽度，高等于宽，单位rpx",
				"类型": "String | Number",
				"默认值": "60",
				"可选值": "-"
			}, {
				"参数": "thumb-circle",
				"说明": "缩略图是否为圆形",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "padding",
				"说明": "给head，body，foot部的内边距，见上方说明，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "show-head",
				"说明": "是否显示头部",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-foot",
				"说明": "是否显示尾部",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "box-shadow",
				"说明": "卡片外围阴影，字符串形式",
				"类型": "String",
				"默认值": "none",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "head",
				"说明": "自定义卡片头部内容",
				"可选值": "-"
			}, {
				"名称": "body",
				"说明": "自定义卡片主体部分内容",
				"可选值": "-"
			}, {
				"名称": "foot",
				"说明": "自定义卡片底部部分内容",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "click",
				"说明": "整个卡片任意位置被点击时触发",
				"回调参数": "index: 用户传递的标识符",
				"可选值": "-"
			}, {
				"事件名": "head-click",
				"说明": "卡片头部被点击时触发",
				"回调参数": "index: 用户传递的标识符",
				"可选值": "-"
			}, {
				"事件名": "body-click",
				"说明": "卡片主体部分被点击时触发",
				"回调参数": "index: 用户传递的标识符",
				"可选值": "-"
			}, {
				"事件名": "foot-click",
				"说明": "卡片底部部分被点击时触发",
				"回调参数": "index: 用户传递的标识符",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Mask 遮罩层",
		"href": "https://www.uviewui.com/components/mask.html",
		"template":"<u-mask id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-mask>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"已选值":"false"
			}, {
				"参数": "z-index",
				"说明": "z-index 层级",
				"类型": "String | Number",
				"默认值": "10070",
				"可选值": "-"
			}, {
				"参数": "custom-style",
				"说明": "自定义样式对象，见上方说明",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "动画时长，单位毫秒",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "zoom",
				"说明": "是否使用scale对遮罩进行缩放",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "mask-click-able",
				"说明": "遮罩是否可点击，为false时点击不会发送click事件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "click",
				"说明": "mask-click-able为true时，点击遮罩发送此事件",
				"回调参数": "",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "default",
				"说明": "默认插槽，用于在遮罩层上方嵌入内容",
				"可选值": "-"
			}]
		}
	}, {
		"name": "NoNetwork 无网络提示",
		"href": "https://www.uviewui.com/components/noNetwork.html",
		"template":"<u-no-network id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-no-network>",
		"param": {
			"props": [{
				"参数": "tips",
				"说明": "没有网络时的提示语",
				"类型": "String",
				"默认值": "哎呀，网络信号丢失",
				"可选值": "-"
			}, {
				"参数": "zIndex",
				"说明": "组件的z-index值",
				"类型": "String | Number",
				"默认值": "10080",
				"可选值": "-"
			}, {
				"参数": "image",
				"说明": "无网络的图片提示，可用的src地址或base64图片",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "retry",
				"说明": "用户点击页面的\"重试\"按钮时触发",
				"回调参数": "",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Grid 宫格布局",
		"href": "https://www.uviewui.com/components/grid.html",
		"template":"<view id=\"id-xxx\"  onclick=\"getUnitDesc('xxxxxx',event)\" ><u-grid  param-grid-props grid-event   v-for=\"lii in Math.ceil(dataFiled.item.length/dataFiled.col)\" :col=\"dataFiled.col\">\n<u-grid-item  grid-item-props  grid-item-event  v-for=\"(va,li) in dataFiled.item\" v-if=\"li<lii*dataFiled.col&&li>=(lii-1)*dataFiled.col\">\n<u-icon :name=\"va.icon\" :size=\"46\"></u-icon>\n<view >{{va.text}}</view>\n</u-grid-item>\n</u-grid></view>",
		"param": {
			"grid-props": [
				{
					"repair":true,
					"参数": "dataFiled",
					"说明": "宫格布局数据源绑定字段",
					"类型": "dataFiled",
					"默认值": "-",
					"可选值": "-",
					"已选值":"GridList"
				},
				{
					"repair":true,
					"参数": "dataSource",
					"说明": "数据源(col-宫格的列数,item-宫格的总数)",
					"类型": "dataSource",
					"默认值": "{col:3,item:[{icon:\"man\",text:\"自定义1\"},{icon:\"man\",text:\"自定义2\"},{icon:\"man\",text:\"自定义3\"},{icon:\"woman\",text:\"自定义4\"},{icon:\"man\",text:\"自定义5\"},{icon:\"man\",text:\"自定义6\"}]}",
					"可选值": "-",
					"已选值":"{col:3,item:[{icon:\"man\",text:\"自定义1\"},{icon:\"man\",text:\"自定义2\"},{icon:\"man\",text:\"自定义3\"},{icon:\"woman\",text:\"自定义4\"},{icon:\"man\",text:\"自定义5\"},{icon:\"man\",text:\"自定义6\"}]}"
				},
				// {
				// "参数": "col",
				// "说明": "宫格的列数()",
				// "类型": "String | Number",
				// "默认值": "3",
				// "可选值": "-"
			 //   }, 
			{
				"参数": "border",
				"说明": "是否显示宫格的边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "align",
				"说明": "宫格的对齐方式，用于控制只有一两个宫格时的对齐场景",
				"类型": "String",
				"默认值": "left",
				"可选值": "left/center/right"
			}, {
				"参数": "hover-class",
				"说明": "样式类名，按下时有效，样式必须写在根目录的App.vue或通过其引入的全局样式中才有效，none为无效果，作用于头部标题区域",
				"类型": "String",
				"默认值": "u-hover-class",
				"可选值": "none/u-hover-class"
			}],
			"grid-item-props": [{
				"参数": "bg-color",
				"说明": "宫格的背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": ":index",
				"说明": "点击宫格时，返回的值()",
				"类型": "String",
				"默认值": "va.text ,text-是指数据源中显示宫格存在的key",
				"可选值": "-",
				"已选值":"va.text"
			}, {
				"参数": "custom-style",
				"说明": "自定义样式，对象形式",
				"类型": "Object",
				"默认值": "{padding: '30rpx 0'}",
				"可选值": "-"
			}],
			"grid-event": [{
				"事件名": "click",
				"说明": "点击宫格触发",
				"回调参数": "index: u-grid-item通过props传递的index值",
				"可选值": "-"
			}],
			"grid-item-event": [{
				"事件名": "click",
				"说明": "点击宫格触发",
				"回调参数": "index: u-grid-item通过props传递的index值",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Swiper 轮播图",
		"href": "https://www.uviewui.com/components/swiper.html",
		"template":"<u-swiper id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-swiper>",
		"param": {
			"props": [{
				"参数": "list",
				"说明": "轮播图数据，见上方\"基本使用\"说明",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"SwiperList"
			},
			{
				"参数": "dataSource",
				"说明": "数据源(该参数应放到数据源对应字段之后)",
				"类型": "dataSource",
				"默认值": "[{image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',title: '昨夜星辰昨夜风，画楼西畔桂堂东'},{image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',title: '身无彩凤双飞翼，心有灵犀一点通'},{image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'}]",
				"可选值": "-",
				"已选值":"[{image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',title: '昨夜星辰昨夜风，画楼西畔桂堂东'},{image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',title: '身无彩凤双飞翼，心有灵犀一点通'},{image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'}]"
			},
			{
				"参数": "title",
				"说明": "是否显示标题文字，需要配合list参数，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mode",
				"说明": "指示器模式，见上方说明",
				"类型": "String",
				"默认值": "round",
				"可选值": "round/rect/dot/number/none"
			}, {
				"参数": "height",
				"说明": "轮播图组件高度，单位rpx",
				"类型": "String | Number",
				"默认值": "250",
				"可选值": "-"
			}, {
				"参数": "indicator-pos",
				"说明": "指示器的位置",
				"类型": "String",
				"默认值": "bottomCenter",
				"可选值": "topLeft / topCenter / topRight / bottomLeft / bottomRight"
			}, {
				"参数": "effect3d",
				"说明": "是否开启3D效果",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "autoplay",
				"说明": "是否自动播放",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "interval",
				"说明": "自动轮播时间间隔，单位ms",
				"类型": "String | Number",
				"默认值": "2500",
				"可选值": "-"
			}, {
				"参数": "circular",
				"说明": "是否衔接播放，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "duration",
				"说明": "切换一张轮播图所需的时间，单位ms",
				"类型": "String | Number",
				"默认值": "500",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "轮播图圆角值，单位rpx",
				"类型": "String | Number",
				"默认值": "8",
				"可选值": "-"
			}, {
				"参数": "title-style",
				"说明": "自定义标题样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "effect3d-previous-margin",
				"说明": "effect3d = true模式的情况下，激活项与前后项之间的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "img-mode",
				"说明": "图片的裁剪模式，详见image组件裁剪模式",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "组件内部读取的list参数中的属性名，见上方说明",
				"类型": "string",
				"默认值": "name",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "背景颜色",
				"类型": "string",
				"默认值": "#f3f4f6",
				"可选值": "-"
			}, {
				"参数": "current",
				"说明": "初始化时，默认显示第几项",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击轮播图时触发",
				"回调参数": "index：点击了第几张图片，从0开始",
				"可选值": "-"
			}, {
				"事件名": "change",
				"说明": "轮播图切换时触发(自动或者手动切换)",
				"回调参数": "index：切换到了第几张图片，从0开始",
				"可选值": "-"
			}]
		}
	}
	],
	"导航组件": [{
		"name": "Dropdown 下拉菜单",
		"href": "https://www.uviewui.com/components/dropdown.html",
		"template":"<u-dropdown id=\"id-xxx\" dropdown-props dropdown-events onclick=\"getUnitDesc('xxxxxx',event)\">templateChild</u-dropdown>",
		"templateChild":"<u-dropdown-item  dropdown-item-events v-model=\"dropdown-item-vmodel\" title=\"dropdown-item-title\" :options=\"dataFiled\"></u-dropdown-item>",
		"param": {
			"dropdown-props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "active-color",
				"说明": "标题和选项卡选中的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			   }, {
				"参数": "inactive-color",
				"说明": "标题和选项卡未选中的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "close-on-click-mask",
				"说明": "点击遮罩是否关闭菜单",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "close-on-click-self",
				"说明": "点击当前激活项标题是否关闭菜单",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "duration",
				"说明": "选项卡展开和收起的过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "标题菜单的高度，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "border-bottom",
				"说明": "标题菜单是否显示下边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "title-size",
				"说明": "标题的字体大小，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "border-radius",
				"说明": "菜单展开内容下方的圆角值，单位任意",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "menu-icon",
				"说明": "标题菜单右侧的图标",
				"类型": "String",
				"默认值": "arrow-down",
				"可选值": "arrow-down-fill"
			}, {
				"参数": "menu-icon-size",
				"说明": "标题菜单右侧的图标的大小，单位任意，数值默认为rpx单位",
				"类型": "String | Number",
				"默认值": "26",
				"可选值": "-"
			}],
			"dropdown-events": [{
				"事件名": "open",
				"说明": "下拉菜单被打开时触发",
				"回调参数": "(index) - 当前被打开菜单的索引",
				"可选值": "-"
			}, {
				"事件名": "close",
				"说明": "下拉菜单被关闭时触发",
				"回调参数": "(index) - 当前被关闭菜单的索引",
				"可选值": "-"
			}],
			"dropdown-item-props": [
				{
					"repair":true,
					"参数": "dataFiled",
					"说明": "下拉菜单数据源绑定字段",
					"类型": "dataFiled",
					"默认值": "-",
					"可选值": "-",
					"已选值":"DropdownList"
				},
				{
					"repair":true,
					"参数": "dataSource",
					"说明": "数据源(vmodel-具体绑定的字段)",
					"类型": "dataSource",
					"默认值": "[{\"title\":\"距离\",\"vmodel\":\"juli\",\"options\":[{\"label\": \"距离排序1\",\"value\": 1},{\"label\": \"距离排序2\",\"value\": 2},{\"label\": \"距离排序3\",\"value\": 3}]},{\"title\":\"区域\",\"vmodel\":\"quyu\",\"options\":[{\"label\": \"区域排序1\",\"value\": 1},{\"label\": \"区域排序2\",\"value\": 2},{\"label\": \"区域排序3\",\"value\": 3}]},{\"title\":\"好评\",\"vmodel\":\"haop\",\"options\":[{\"label\": \"好评1\",\"value\": 1},{\"label\": \"好评2\",\"value\": 2},{\"label\":\"好评3\",\"value\": 3}]}]",
					"可选值": "-",
					"已选值":"[{\"title\":\"距离\",\"vmodel\":\"juli\",\"options\":[{\"label\": \"距离排序1\",\"value\": 1},{\"label\": \"距离排序2\",\"value\": 2},{\"label\": \"距离排序3\",\"value\": 3}]},{\"title\":\"区域\",\"vmodel\":\"quyu\",\"options\":[{\"label\": \"区域排序1\",\"value\": 1},{\"label\": \"区域排序2\",\"value\": 2},{\"label\": \"区域排序3\",\"value\": 3}]},{\"title\":\"好评\",\"vmodel\":\"haop\",\"options\":[{\"label\": \"好评1\",\"value\": 1},{\"label\": \"好评2\",\"value\": 2},{\"label\":\"好评3\",\"value\": 3}]}]"
				}
				
			],
			
			"dropdown-item-events": [{
				"事件名": "change",
				"说明": "每个u-dropdown均有此回调，点击某个options选项时触发",
				"回调参数": "(value) - 点击项绑定的value属性值",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Tabbar 底部导航栏",
		"href": "https://www.uviewui.com/components/tabbar.html",
		"template":"<u-tabbar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-tabbar>",
		"param": {
			"props": [{
				"repair":true,
				"参数": "list",
				"说明": "各项的配置参数，见顶部说明，数组形式",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"TabbarList"
			}, 
			{
				"repair":true,
				"参数": "dataSource",
				"说明": "数据源\n iconPath:未激活的图标\n selectedIconPath:激活(选中)的图标\n text:显示的提示文字\n count: 红色角标显示的数字\n isDot: 如果配置此值为true，那么角标将会以红点的形式显示\n customIcon: 如果使用自定义扩展的图标库字体\n midButton: 如果是凸起按钮项，需配置此值为true\n pagePath: 跳转的路径，路径需要以"/"开头\n",
				"类型": "dataSource",
				"默认值": "[{\"iconPath\": \"bag\",\"selectedIconPath\": \"bag-fill\",\"text\": \"首页\",\"customIcon\": false},{\"iconPath\": \"home\",\"selectedIconPath\": \"home-fill\",\"text\": \"发布\",\"midButton\": true,\"customIcon\": false},{\"iconPath\": \"account\",\"selectedIconPath\": \"account-fill\",\"text\": \"我的\",\"customIcon\": false}]",
				"可选值": "-",
				"已选值":"[{\"iconPath\": \"bag\",\"selectedIconPath\": \"bag-fill\",\"text\": \"首页\",\"customIcon\": false},{\"iconPath\": \"home\",\"selectedIconPath\": \"home-fill\",\"text\": \"发布\",\"midButton\": true,\"customIcon\": false},{\"iconPath\": \"account\",\"selectedIconPath\": \"account-fill\",\"text\": \"我的\",\"customIcon\": false}]"
			},
			{
				"参数": "show",
				"说明": "是否显示组件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"repair":true,
				"参数": "v-model",
				"说明": "双向绑定的激活项的索引值",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-",
				//"已选值":"tabbarVM"
			}, {
				"参数": "bg-color",
				"说明": "组件的背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "高度，单位任意，数值则为rpx单位，不建议修改",
				"类型": "String | Number",
				"默认值": "50px",
				"可选值": "-"
			}, {
				"参数": "icon-size",
				"说明": "非中部凸起图标的大小，单位任意，数值则为rpx单位",
				"类型": "String | Number",
				"默认值": "40",
				"可选值": "-"
			}, {
				"参数": "mid-button-size",
				"说明": "凸起的图标的大小，单位任意，数值则为rpx单位",
				"类型": "String | Number",
				"默认值": "90",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "文字和字体图标激活时的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "文字和字体图标未激活时的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "mid-button",
				"说明": "是否需要中部凸起的按钮，配置了此值，依然需要配置list参数中需凸起项的midButton为true，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "before-switch",
				"说明": "切换之前的回调钩子，见上方说明",
				"类型": "Function",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border-top",
				"说明": "是否显示顶部的边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "hide-tab-bar",
				"说明": "是否隐藏原生tabbar",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "change",
				"说明": "切换选项时触发",
				"回调参数": "index：当前要切换项的索引",
				"可选值": "-"
			}]
		}
	}, 
	{
		"name": "tabsSwiper 全屏选项卡",
		"href": "https://www.uviewui.com/components/tabsSwiper.html",
		"template":"<u-tabs-swiper id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" @change=\"tabsChange\" ></u-tabs-swiper><swiper :current=\"current-xxx\" @transition=\"transition\" @animationfinish=\"animationfinish\">templateChild</swiper>",
		"templateChild":"<swiper-item class=\"swiper-item\"><scroll-view scroll-y style=\"height: 800rpx;width: 100%;\" @scrolltolower=\"onreachBottom\">自定义内容区域</scroll-view></swiper-item>",
		"param": {
			"props": [{
				"参数": "is-scroll",
				"说明": "tabs是否可以左右拖动",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, 
			{
				"repair":true,
				"参数": ":current",
				"说明": "指定哪个tab为激活状态",
				"类型": "String",
				"默认值": "0",
				"可选值": "-",
				"已选值":"tabsSwiperCurrent"
			},
			{
				"repair":true,
				"参数": "list",
				"说明": "标签数组，元素为对象",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"tabsSwiperList"
			},
			{
				"repair":true,
				"参数": "dataSource",
				"说明": "数据源",
				"类型": "dataSource",
				"默认值":"[{\"name\": \"待收货\"},{\"name\": \"待付款\"},{\"name\": \"待评价\"}]",
				"可选值": "-",
				"已选值":"[{\"name\": \"待收货\"},{\"name\": \"待付款\"},{\"name\": \"待评价\"}]"
			},
			{
				"repair":true,
				"参数": "ref",
				"说明": "用于查找当前组件",
				"类型": "String",
				"默认值": "0",
				"可选值": "-",
				"已选值":"tabsSwiperRef"
			},
			 {
				"参数": "height",
				"说明": "导航栏的高度，单位rpx",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "tab文字大小，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "swiper-width",
				"说明": "tabs组件外部swiper的宽度，默认为屏幕宽度，单位rpx",
				"类型": "string | Number",
				"默认值": "750",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "滑块和激活tab文字的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "tabs文字颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "bar-width",
				"说明": "滑块宽度，单位rpx",
				"类型": "String | Number",
				"默认值": "40",
				"可选值": "-"
			}, {
				"参数": "bar-height",
				"说明": "滑块高度，单位rpx",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "gutter",
				"说明": "单个tab标签的左右内边距之和，单位rpx",
				"类型": "String | Number",
				"默认值": "40",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "tabs导航栏的背景颜色",
				"类型": "string",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "组件内部读取的list参数中的属性名（tab名称），见上方说明",
				"类型": "string",
				"默认值": "name",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "激活选项的字体是否加粗",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-bar",
				"说明": "是否显示底部的滑块",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "bar-style",
				"说明": "底部滑块的样式，对象形式",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}, {
				"参数": "active-item-style",
				"说明": "当前活动Item的样式，对象形式",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}, {
				"参数": "count",
				"说明": "组件内部读取的list参数中的属性名（badge徽标数），用法与name一致，见上方说明",
				"类型": "string",
				"默认值": "count",
				"可选值": "-"
			}, {
				"参数": "offset",
				"说明": "设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，单位rpx。",
				"类型": "Array",
				"默认值": "[5, 20]",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Subsection 分段器",
		"href": "https://www.uviewui.com/components/subsection.html",
		"template":"<u-subsection id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-subsection>",
		"param": {
			"props": [
			{
				"repair":true,
				"参数": "list",
				"说明": "选项的数组",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"SubsectionList"
			},
			{
				"repair":true,
				"参数": "dataSource",
				"说明": "数据源",
				"类型": "dataSource",
				"默认值":"[{\"name\": \"待收货\"},{\"name\": \"待付款\"},{\"name\": \"待评价\"}]",
				"可选值": "-",
				"已选值":"[{\"name\": \"待收货\"},{\"name\": \"待付款\"},{\"name\": \"待评价\"}]"
			},
			
			{
				"repair":true,
				"参数": "current",
				"说明": "初始化时默认选中的选项索引值",
				"类型": "vmodel",
				"默认值": "0",
				"可选值": "-",
				//"已选值":"subCurrent"
			}, {
				"参数": "active-color",
				"说明": "激活时的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "未激活时的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方\"模式选择\"说明",
				"类型": "String",
				"默认值": "button",
				"可选值": "subsection"
			}, {
				"参数": "font-size",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "组件高度，单位rpx",
				"类型": "String | Number",
				"默认值": "70",
				"可选值": "-"
			}, {
				"参数": "animation",
				"说明": "是否开启动画效果，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "bold",
				"说明": "激活选项的字体是否加粗",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "bg-color",
				"说明": "组件背景颜色，mode为button时有效",
				"类型": "String",
				"默认值": "#eeeeef",
				"可选值": "-"
			}, {
				"参数": "button-color",
				"说明": "按钮背景颜色，mode为button时有效",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "change",
				"说明": "分段器选项发生改变时触发",
				"回调参数": "index：选项的index索引值，从0开始",
				"可选值": "-"
			}]
		}
	}, {
		"name": "IndexList 索引列表",
		"href": "https://www.uviewui.com/components/indexList.html",
		"template":"<u-index-list id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"><view v-for=\"(item, index) in ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']\" :key=\"index\"><u-index-anchor :index=\"item\" /><view>自定义内容区域--{{item}}</view></view></u-index-list>",
		"param": {
			"props": [
				{
					"repair":true,
				"参数": "scrollTop",
				"说明": "当前滚动高度，自定义组件无法获得滚动条事件，所以依赖接入方传入",
				"类型": "vmodel",
				"默认值": "0",
				"可选值": "-",
				"已选值":"scrollTopIl"
			  }, {
				"参数": "z-index",
				"说明": "锚点吸顶时的层级",
				"类型": "Number | String",
				"默认值": "965",
				"可选值": "-"
			  }, {
				"参数": "sticky",
				"说明": "是否开启锚点自动吸顶",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "offset-top",
				"说明": "锚点自动吸顶时与顶部的距离，单位rpx，见上方\"自定义导航栏\"说明",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "锚点和右边索引字符高亮颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "select",
				"说明": "选中右边索引字符时触发",
				"回调参数": "index: 索引字符",
				"版本": "-",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Steps 步骤条",
		"href": "https://www.uviewui.com/components/steps.html",
		"template":"<u-steps id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-steps>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "mode",
				"说明": "设置模式",
				"类型": "String",
				"默认值": "dot",
				"可选值": "dot/number"
			}, {
				"repair":true,
				"参数": "list",
				"说明": "数轴条数据，数组。具体见上方示例",
				"类型": "dataFiled",
				"默认值": "-",
				"可选值": "-",
				"已选值":"StepsList"
			}, 
			{
				"repair":true,
				"参数": "dataSource",
				"说明": "数据源",
				"类型": "dataSource",
				"默认值":"[{\"name\": \"下单\"},{\"name\": \"出货\"},{\"name\": \"运输\"},{\"name\": \"签收\"}]",
				"可选值": "-",
				"已选值":"[{\"name\": \"下单\"},{\"name\": \"出货\"},{\"name\": \"运输\"},{\"name\": \"签收\"}]"
			},
			{
				"参数": "type",
				"说明": "type主题",
				"类型": "String",
				"默认值": "primary",
				"可选值": "primary/info/success/error/warning"
			}, {
				"参数": "current",
				"说明": "设置当前处于第几步",
				"类型": "vmodel",
				"默认值": "0",
				"可选值": "-",
				"已选值":"stepsCurrent"
			}, {
				"参数": "direction",
				"说明": "row-横向，column-竖向",
				"类型": "String",
				"默认值": "row",
				"可选值": "row/column"
			}, {
				"参数": "active-color",
				"说明": "已完成步骤的激活颜色，如设置，type值会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "un-active-color",
				"说明": "未激活的颜色，用于表示未完成步骤的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "mode = number时的自定义图标",
				"类型": "String",
				"默认值": "checkmark",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Empty 内容为空",
		"href": "https://www.uviewui.com/components/empty.html",
		"template":"<u-empty id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-empty>",
		"param": {
			"props": [{
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "文字提示",
				"类型": "String",
				"默认值": "无内容",
				"可选值": "-"
			}, {
				"参数": "icon-color",
				"说明": "icon的颜色，字体图标时有效",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "icon-size 1.4.2",
				"说明": "icon的大小，单位rpx，如果src为图片路径，此参数可以设置图片的尺寸",
				"类型": "String | Number",
				"默认值": "120",
				"可选值": "-"
			}, {
				"参数": "src",
				"说明": "图标名称或者图片路径(绝对路径)，如定义，mode参数会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "提示文字的大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "内置的图标，见上方说明",
				"类型": "String",
				"默认值": "data",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "是否显示组件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "margin-top",
				"说明": "组件到上一个元素的间距,单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "bottom",
				"说明": "给组件底部传入slot内容",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Link 超链接",
		"href": "https://www.uviewui.com/components/link.html",
		"template":"<u-link id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">超链接名称</u-link>",
		"param": {
			"props": [
				{
					"repair":true,
					"参数": "href",
					"说明": "跳转的链接，要带上http(s)",
					"类型": "String",
					"默认值": "-",
					"可选值": "-",
					"已选值":"https://www.baidu.com"
				},
				{
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "under-line",
				"说明": "是否显示下划线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "line-color",
				"说明": "下划线颜色，默认同color参数颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mp-tips",
				"说明": "各个小程序平台把链接复制到粘贴板后的提示语",
				"类型": "String",
				"默认值": "链接已复制，请在浏览器打开",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Section 查看更多",
		"href": "https://www.uviewui.com/components/section.html",
		"template":"<u-section id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx</u-section>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "title",
				"说明": "左边主标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值":"内容标题"
			   }, {
				"参数": "sub-title",
				"说明": "右边副标题",
				"类型": "String",
				"默认值": "更多",
				"可选值": "-"
			}, {
				"参数": "right",
				"说明": "是否显示右边的内容",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show-line",
				"说明": "是否显示左边的竖条",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "font-size",
				"说明": "主标题的字体大小",
				"类型": "String | Number",
				"默认值": "28",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "主标题是否加粗",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "color",
				"说明": "主标题颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "sub-color",
				"说明": "右边副标题的颜色(右箭头同此颜色)",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "line-color",
				"说明": "左边竖线的颜色，默认同color参数值",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "arrow",
				"说明": "是否显示右边箭头",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "click",
				"说明": "组件右侧的内容被点击时触发，用于跳转\"更多\"",
				"回调参数": "",
				"版本": "-",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "right",
				"说明": "自定义右侧内容",
				"可选值": "-"
			}]
		}
	}],
	"其他组件": [
		 {
		"name": "MessageInput 验证码输入",
		"href": "https://www.uviewui.com/components/messageInput.html",
		"template":"<u-message-input id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-message-input>",
		"param": {
			"props": [{
				"参数": ":maxlength",
				"说明": "输入字符个数",
				"类型": "String | Number",
				"默认值": "4",
				"可选值": "-"
			}, {
				"参数": "dot-fill",
				"说明": "是否用圆点填充",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方\"基本使用\"说明",
				"类型": "String",
				"默认值": "box",
				"可选值": "box/bottomLine/middleLine"
			}, {
				"参数": "value",
				"说明": "预置值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "breathe",
				"说明": "是否开启呼吸效果，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "focus",
				"说明": "是否自动获取焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "bold",
				"说明": "字体和输入横线是否加粗",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "font-size",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "60",
				"可选值": "-"
			}, {
				"参数": "active-color",
				"说明": "当前激活输入框的样式",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactive-color",
				"说明": "非激活输入框的样式，文字颜色同此值",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "输入框的宽度(高等于宽)，单位rpx",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "disabled-keyboard",
				"说明": "禁止点击输入框唤起系统键盘",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"events": [{
				"事件名": "change",
				"说明": "输入内容发生改变时触发，具体见上方说明",
				"回调参数": "value：当前输入的值",
				"版本": "-",
				"可选值": "-"
			}, {
				"事件名": "finish",
				"说明": "输入字符个数达maxlength值时触发，见上方说明",
				"回调参数": "value：当前输入的值",
				"版本": "-",
				"可选值": "-"
			}]
		}
	},  {
		"name": "Gap 间隔槽",
		"href": "https://www.uviewui.com/components/gap.html",
		"template":"<u-gap id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-gap>",
		"param": {
			"props": [{
				"参数": "bg-color",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "transparent(背景透明)",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "间隔槽高度，单位rpx",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "margin-top",
				"说明": "与前一个元素的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "margin-bottom",
				"说明": "与后一个元素的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Avatar 头像",
		"href": "https://www.uviewui.com/components/avatar.html",
		"template":"<u-avatar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-avatar>",
		"param": {
			"props": [
				{
					"参数": "style",
					"说明": "自定义样式,组件生成后,可以根据自己需要添加class",
					"类型": "String",
					"默认值": "-",
					"可选值": "-"
				},
				{
				"参数": "bg-color",
				"说明": "背景颜色，一般显示文字时用",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "src",
				"说明": "头像路径，如加载失败，将会显示默认头像",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "头像尺寸，可以为指定字符串(large, default, mini)，或者数值，单位rpx",
				"类型": "String | Number",
				"默认值": "default",
				"可选值": "large/default/mini"
			}, {
				"参数": "mode",
				"说明": "显示类型，见上方说明",
				"类型": "String",
				"默认值": "circle",
				"可选值": "circle/square"
			}, {
				"参数": "text",
				"说明": "用文字替代图片，级别优先于src",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "img-mode",
				"说明": "头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthFix值",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "show-sex",
				"说明": "是否显示右上角的性别图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "sex-icon",
				"说明": "右上角性别图标，可传入图片路径，或内置图标名",
				"类型": "String",
				"默认值": "man",
				"可选值": "woman"
			}, {
				"参数": "sex-bg-color",
				"说明": "性别图标的背景颜色",
				"类型": "String",
				"默认值": "man-primary主题，woman-error主题",
				"可选值": "man-primary/woman-error"
			}, {
				"参数": "show-level",
				"说明": "是否显示右下角的等级图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "level-icon",
				"说明": "右下角等级图标，可传入图片路径，或内置图标名",
				"类型": "String",
				"默认值": "level",
				"可选值": "-"
			}, {
				"参数": "level-bg-color",
				"说明": "等级图标的背景颜色",
				"类型": "String",
				"默认值": "warning主题",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "click",
				"说明": "头像被点击",
				"回调参数": "index: 用户传递的标识符",
				"可选值": "-"
			}]
		}
	}, {
		"name": "Loading 加载动画",
		"href": "https://www.uviewui.com/components/loading.html",
		"template":"<u-loading id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\"></u-loading>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "模式选择，见上方说明",
				"类型": "String",
				"默认值": "circle",
				"可选值": "circle/flower"
			}, {
				"参数": "color",
				"说明": "动画活动区域的颜色，只对 mode = circle 模式有效",
				"类型": "String",
				"默认值": "#c7c7c7",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "加载图标的大小",
				"类型": "String | Number",
				"默认值": "34",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "是否显示动画",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}]
		}
	}],
	"模板":[
		{
			"name":"登录",
			"href":"/pages/zyPages/template/login/index",
		},
		{
			"name":"个人中心",
			"href":"/pages/zyPages/template/wxCenter/index",
		},
		{
			"name":"自定义键盘支付",
			"href":"/pages/zyPages/template/keyboardPay/index",
		},
		{
			"name":"垂直分类(左右独立)",
			"href":"/pages/zyPages/template/mallMenu/index1",
		},
		{
		    "name":"垂直分类(左右联动)",
			"href":"/pages/zyPages/template/mallMenu/index2",
		},
		{
			"name":"提交订单栏",
			"href":"/pages/zyPages/template/submitBar/index",
		},
		{
			"name":"评论列表",
			"href":"/pages/zyPages/template/comment/index",
		},
		{
			"name":"订单列表",
			"href":"/pages/zyPages/template/order/index",
		},
		{
			"name":"收货地址",
			"href":"/pages/zyPages/template/address/index",
		},
		{
			"name":"城市选择",
			"href":"/pages/zyPages/template/citySelect/index",
		},
		{
			"name":"优惠券",
			"href":"/pages/zyPages/template/coupon/index",
		}
	],
	"已生成页面":[









//新增页面追加









		]
}

export default data;