//需要特殊处理啊button组件属性名改为参数
var _single_column="[{value:'列表1',label:'列表1-1'},{value:'列表2',label:'列表2-1'},{value:'列表3',label:'列表3-1'}]";
var _mutil_column="[[{value:'cm',label:'春眠'},{value:'bjx',label:'不觉晓'}],[{value:'cc',label:'处处'},{value:'wtn',label:'闻啼鸟'}]]";
var _mutil_column_auto="[{value: 1,label: '中国',children: [{value: 2,label: '广东',children: [{value: 3,label: '深圳'},{value: 4,label: '广州'}]}]},{value: 8,label: '美国',children: [{value: 9,label: '纽约',children: [{value: 10,label: '皇后街区'}]}]}]";
var data={
	"基础组件": [{
		"href": "https://www.uviewui.com/components/icon.html",
		"name": "Icon 图标",
		"template": "<u-icon id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-icon>",
		"param": {
			"props": [{
				"参数": "name",
				"说明": "图标名称，见示例图标集，如名称带有/，会被认为是图片图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "color['u-content-color']",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "图标字体大小，单位默认px",
				"类型": "String | Number",
				"默认值": "16px",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "是否显示粗体",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "一个用于区分多个图标的值，点击图标时通过click事件传出",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "hoverClass",
				"说明": "图标按下去的样式类，用法同uni的view组件的hover-class参数，详见：hover-class\n(opens new window)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "customPrefix（暂不可用）",
				"说明": "自定义字体图标库时，需要写上此值，详见：扩展自定义图标库\n(opens new window)",
				"类型": "String",
				"默认值": "uicon",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "图标右侧/下方的label文字",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelPos",
				"说明": "label相对于图标的位置",
				"类型": "String",
				"默认值": "right",
				"可选值": "bottom / top / left"
			}, {
				"参数": "labelSize",
				"说明": "label字体大小，单位默认px",
				"类型": "String | Number",
				"默认值": "15px",
				"可选值": "-"
			}, {
				"参数": "labelColor",
				"说明": "label字体颜色",
				"类型": "String",
				"默认值": "color['u-content-color']",
				"可选值": "-"
			}, {
				"参数": "space",
				"说明": "label与图标的距离，单位默认px",
				"类型": "String | Number",
				"默认值": "3px",
				"可选值": "-"
			}, {
				"参数": "imgMode",
				"说明": "图片裁剪、缩放的模式，image组件原生属性，详见：image\n(opens new window)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "name为图片路径时图片的宽度，单位默认px",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "name为图片路径时图片的高度，单位默认px",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "top",
				"说明": "图标到顶部的距离，如果某些场景，如果图标没有垂直居中，可以调整此参数，单位默认px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "stop",
				"说明": "是否阻止事件传播",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击图标时触发",
				"回调参数": "index: 通过props传递的index值",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/image.html",
		"name": "Image 图片",
		"template": "<u-image id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-image>",
		"param": {
			"props": [{
				"参数": "src",
				"说明": "图片地址，强烈建议使用绝对或者网络路径",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "裁剪模式，见上方说明",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "宽度，单位任意，如果为数值，默认单位px",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "高度，单位任意，如果为数值，默认单位px",
				"类型": "String | Number",
				"默认值": "225",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "图片形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "square",
				"可选值": "square"
			}, {
				"参数": "radius",
				"说明": "圆角，默认单位px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "lazyLoad",
				"说明": "是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "showMenuByLongpress",
				"说明": "是否开启长按图片显示识别小程序码菜单，仅微信小程序有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "loadingIcon",
				"说明": "加载中的图标，或者小图片",
				"类型": "String",
				"默认值": "photo",
				"可选值": "-"
			}, {
				"参数": "errorIcon",
				"说明": "加载失败的图标，或者小图片",
				"类型": "String",
				"默认值": "error-circle",
				"可选值": "-"
			}, {
				"参数": "showLoading",
				"说明": "是否显示加载中的图标或者自定义的slot",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showError",
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
				"参数": "bgColor",
				"说明": "背景颜色，用于深色页面加载图片时，为了和背景色融合",
				"类型": "String",
				"默认值": "#f3f4f6",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "loading",
				"说明": "自定义加载中的提示内容"
			}, {
				"名称": "error",
				"说明": "自定义失败的提示内容"
			}],
			"cellitem-events": [{
				"事件名": "click",
				"说明": "点击图片时触发",
				"回调参数": "-"
			}, {
				"事件名": "error",
				"说明": "图片加载失败时触发",
				"回调参数": "err: 错误信息"
			}, {
				"事件名": "load",
				"说明": "图片加载成功时触发",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/button.html",
		"name": "Button 按钮",
		"template": "<u-button id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-button>",
		"param": {
			"props": [{
				"属性名": "hairline",
				"说明": "是否显示按钮的细边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"平台差异说明": "-"
			}, {
				"属性名": "type",
				"说明": "按钮的样式类型",
				"类型": "String",
				"默认值": "info",
				"可选值": "info / primary / error/ warning / success",
				"平台差异说明": "-"
			}, {
				"属性名": "size",
				"说明": "按钮的大小",
				"类型": "String",
				"默认值": "normal",
				"可选值": "large / mini",
				"平台差异说明": "-"
			}, {
				"属性名": "shape",
				"说明": "按钮外观形状，见上方说明",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle",
				"平台差异说明": "-"
			}, {
				"属性名": "plain",
				"说明": "按钮是否镂空，背景色透明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "-"
			}, {
				"属性名": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "-"
			}, {
				"属性名": "loading",
				"说明": "按钮名称前是否带 loading 图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true",
				"平台差异说明": "App-nvue 平台，在 ios 上为雪花，Android上为圆圈"
			}, {
				"属性名": "loadingText",
				"说明": "加载中提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "loadingMode",
				"说明": "加载状态图标类型",
				"类型": "String",
				"默认值": "spinner",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "loadingSize",
				"说明": "加载图标大小",
				"类型": "String | Number",
				"默认值": "15",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "openType",
				"说明": "开放能力，具体请看uniapp稳定关于button组件部分说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "formType",
				"说明": "用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "appParameter",
				"说明": "打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效 （注：只微信小程序、QQ小程序有效）",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "hoverStopPropagation",
				"说明": "指定是否阻止本节点的祖先节点出现点击态，微信小程序有效（默认 true）",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false",
				"平台差异说明": "-"
			}, {
				"属性名": "lang",
				"说明": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
				"类型": "String",
				"默认值": "en",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "sessionFrom",
				"说明": "会话来源，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "sendMessageTitle",
				"说明": "会话内消息卡片标题，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "sendMessagePath",
				"说明": "会话内消息卡片点击跳转小程序路径，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "sendMessageImg",
				"说明": "会话内消息卡片图片，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "showMessageCard",
				"说明": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "dataName",
				"说明": "额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "throttleTime",
				"说明": "节流，一定时间内只能触发一次，单位毫秒",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "hoverStartTime",
				"说明": "按住后多久出现点击态，单位毫秒",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "hoverStayTime",
				"说明": "手指松开后点击态保留时间，单位毫秒",
				"类型": "String | Number",
				"默认值": "200",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "text",
				"说明": "按钮文字，之所以通过props传入，是因为slot传入的话（注：nvue中无法控制文字的样式）",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "icon",
				"说明": "按钮图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "iconColor",
				"说明": "按钮颜色",
				"类型": "String",
				"默认值": "在plain=true镂空状态下，颜色与边框保持一致，否则为白色（主题为info时为黑色#000000）",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "color",
				"说明": "按钮颜色，支持传入linear-gradient渐变色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "customStyle",
				"说明": "定义需要用到的外部样式,详细见上方文档",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}],
			"events": [{
				"属性名": "click",
				"说明": "按钮点击，请勿使用@tap点击事件，微信小程序无效，返回值为点击事件及参数",
				"类型": "Handler",
				"默认值": "-",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "getphonenumber",
				"说明": "open-type=\"getPhoneNumber\"时有效",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "getuserinfo",
				"说明": "用户点击该按钮时，会返回获取到的用户信息，从返回参数的detail中获取到的值同uni.getUserInfo",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "error",
				"说明": "当使用开放能力时，发生错误的回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "opensetting",
				"说明": "在打开授权设置页并关闭后回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "-",
				"平台差异说明": "-"
			}, {
				"属性名": "launchapp",
				"说明": "打开 APP 成功的回调",
				"类型": "Handler",
				"默认值": "微信小程序",
				"可选值": "-",
				"平台差异说明": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/text.html",
		"name": "Text 文本",
		"template": "<u-text id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-text>",
		"param": {
			"list-props": [{
				"参数": "type",
				"说明": "主题颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "是否显示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "text",
				"说明": "显示的值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "prefixIcon",
				"说明": "前置图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "suffixIcon",
				"说明": "后置图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "文本处理的匹配模式text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接",
				"类型": "String",
				"默认值": "-",
				"可选值": ""
			}, {
				"参数": "href",
				"说明": "mode=link下，配置的链接",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "format",
				"说明": "格式化规则",
				"类型": "String | Function",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "call",
				"说明": "mode=phone时，点击文本是否拨打电话",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "openType",
				"说明": "小程序的打开方式",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "是否粗体，默认normal",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "block",
				"说明": "是否块状",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "lines",
				"说明": "文本显示的行数，如果设置，超出此行数，将会显示省略号",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "文本颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "字体大小",
				"类型": "String | Number",
				"默认值": "15",
				"可选值": "-"
			}, {
				"参数": "iconStyle",
				"说明": "图标的样式",
				"类型": "Object | String",
				"默认值": "15px",
				"可选值": "-"
			}, {
				"参数": "decoration",
				"说明": "文字装饰，下划线，中划线等",
				"类型": "String",
				"默认值": "none",
				"可选值": "underline/line-through"
			}, {
				"参数": "margin",
				"说明": "外边距，对象、字符串，数值形式均可",
				"类型": "Object | Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "lineHeight",
				"说明": "文本行高",
				"类型": "Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "align",
				"说明": "文本对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center/right"
			}, {
				"参数": "wordWrap",
				"说明": "文字换行",
				"类型": "String",
				"默认值": "normal",
				"可选值": "break-word/anywhere"
			}],
			"list-events": [{
				"事件名": "click",
				"说明": "点击触发事件",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/layout.html",
		"name": "Layout 布局",
		"template": "<u-row id=\"id-xxx\"  onclick=\"getUnitDesc('xxxxxx',event)\" gutter=\"16\" style=\"margin-top: 10px;\">\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item1')\" id=\"col_props_item1\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item1--></view>\n</u-col>\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item2')\" id=\"col_props_item2\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item2--></view>\n</u-col>\n<u-col span=\"4\">\n<view class=\"layoutdrop\" @dragover.prevent @drop=\"colDrop('col_props_item3')\" id=\"col_props_item3\" style=\"background: #d3dce6;height: 80rpx;border-radius: 8rpx;\"><!--col_props_item3--></view>\n</u-col>\n</u-row>\n",
		"param": {
			"row-props": [{
				"参数": "gutter",
				"说明": "栅格间隔，左右各为此值的一半，单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-",
				"已选值": "16"
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
			}, {
				"参数": "style",
				"说明": "自定义分栏样式",
				"类型": "String",
				"默认值": "margin-top: 10px;",
				"可选值": "-",
				"已选值": "margin-top: 10px;"
			}],
			"col-props": [
				[{
					"参数": "span",
					"说明": "栅格占据的列数，总12等分",
					"类型": "String | Number",
					"默认值": "0",
					"可选值": "1-12",
					"已选值": 4
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
				}, {
					"参数": "style",
					"说明": "自定义分栏样式",
					"类型": "String",
					"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
					"可选值": "-",
					"已选值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
				}, {
					"参数": "id",
					"说明": "用于关联当前组件是否还有子组件",
					"类型": "String",
					"默认值": "不允许修改",
					"可选值": "-",
					"已选值": "col_props_item1"
				}],
				[{
					"参数": "span",
					"说明": "栅格占据的列数，总12等分",
					"类型": "String | Number",
					"默认值": "0",
					"可选值": "1-12",
					"已选值": 4
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
				}, {
					"参数": "style",
					"说明": "自定义分栏样式",
					"类型": "String",
					"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
					"可选值": "-",
					"已选值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
				}, {
					"参数": "id",
					"说明": "用于关联当前组件是否还有子组件",
					"类型": "String",
					"默认值": "不允许修改",
					"可选值": "-",
					"已选值": "col_props_item2"
				}],
				[{
					"参数": "span",
					"说明": "栅格占据的列数，总12等分",
					"类型": "String | Number",
					"默认值": "0",
					"可选值": "1-12",
					"已选值": 4
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
				}, {
					"参数": "style",
					"说明": "自定义分栏样式",
					"类型": "String",
					"默认值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;",
					"可选值": "-",
					"已选值": "background: #d3dce6;height: 80rpx;border-radius: 8rpx;margin-top: 5px;"
				}, {
					"参数": "id",
					"说明": "用于关联当前组件是否还有子组件",
					"类型": "String",
					"默认值": "不允许修改",
					"可选值": "-",
					"已选值": "col_props_item3"
				}]
			]
		}
	}, {
		"name": "CellGroup 单元格组",
		"href": "https://www.uviewui.com/components/cell.html",
		"template": "<u-cell-group id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ><!--CellGroupID--><!--单元格组保存页面删除开始--><view  @dragover.prevent @drop=\"colDrop('CellGroupID')\" class=\"cellGroupAdd\" >拖入该分组的列表</view><!--单元格组保存页面删除结束--></u-cell-group>",
		"param": {
			"props": [{
				"参数": "title",
				"说明": "分组标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-",
				"已选值": "分组标题(可为空)"
			}, {
				"参数": "border",
				"说明": "是否显示外边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "customStyle",
				"说明": "用户自定义外部样式，对象形式，如{'font-size': '12px'} 或 {'fontSize': '12px'}",
				"类型": "object",
				"默认值": "-",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/cell.html",
		"name": "Cell 单元格",
		"template": "<u-cell id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-cell>",
		"param": {
			"cell-props": [{
				"参数": "title",
				"说明": "左侧标题",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "标题下方的描述信息",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "右侧的内容",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "左侧图标名称，或者图片链接(本地文件建议使用绝对地址)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用cell",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "border",
				"说明": "是否显示下边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "center",
				"说明": "内容是否垂直居中(主要是针对右侧的value部分)",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "url",
				"说明": "点击后跳转的URL地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "linkType",
				"说明": "链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作",
				"类型": "String",
				"默认值": "navigateTo",
				"可选值": "-"
			}, {
				"参数": "clickable",
				"说明": "是否开启点击反馈(表现为点击时加上灰色背景)",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "isLink",
				"说明": "是否展示右侧箭头并开启点击反馈",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "required",
				"说明": "是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "rightIcon",
				"说明": "右侧的图标箭头",
				"类型": "String",
				"默认值": "arrow-right",
				"可选值": "-"
			}, {
				"参数": "arrowDirection",
				"说明": "右侧箭头的方向，可选值为：left，up，down",
				"类型": "String",
				"默认值": "right",
				"可选值": "left|up|down"
			}, {
				"参数": "iconStyle",
				"说明": "左侧图标样式",
				"类型": "Object | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "rightIconStyle",
				"说明": "右侧箭头图标的样式",
				"类型": "Object | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "titleStyle",
				"说明": "标题的样式",
				"类型": "Object | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "单位元的大小，可选值为large",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "stop",
				"说明": "点击cell是否阻止事件传播",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "name",
				"说明": "标识符，用于在click事件中进行返回",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"cell-slot": [{
				"名称": "title",
				"说明": "自定义左侧标题部分的内容，如需使用，请勿定义title参数，或赋值null即可"
			}, {
				"名称": "value",
				"说明": "自定义右侧标题部分的内容，如需使用，请勿定义value参数，或赋值null即可"
			}, {
				"名称": "icon",
				"说明": "自定义左侧的图标"
			}, {
				"名称": "right-icon",
				"说明": "自定义右侧图标内容，需设置arrow为false才起作用"
			}, {
				"名称": "label",
				"说明": "自定义label内容"
			}],
			"cell-event": [{
				"事件名": "click",
				"说明": "点击cell列表时触发",
				"回调参数": "name: props的name参数标识符"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/badge.html",
		"name": "Badge 徽标数",
		"template": "<u-badge id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-badge>",
		"param": {
			"props": [{
				"参数": "isDot",
				"说明": "不展示数字，只有一个小点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "value",
				"说明": "展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为0且show-zero为false时隐藏",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "组件是否显示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "max",
				"说明": "最大值，超过最大值会显示 '{max}+'",
				"类型": "String | Number",
				"默认值": "99",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "主题类型",
				"类型": "String",
				"默认值": "error",
				"可选值": "warning / success / primary / info"
			}, {
				"参数": "showZero",
				"说明": "当数值为 0 时，是否展示 Badge",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色，优先级比type高，如设置，type参数会失效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "徽标形状，circle-四角均为圆角，horn-左下角为直角",
				"类型": "String",
				"默认值": "circle",
				"可选值": "horn"
			}, {
				"参数": "numberType",
				"说明": "置数字的显示方式，详细见上方文档",
				"类型": "String",
				"默认值": "overflow",
				"可选值": "ellipsis / limit"
			}, {
				"参数": "offset",
				"说明": "设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "inverted",
				"说明": "是否反转背景和字体颜色",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "absolute",
				"说明": "组件是否绝对定位，为true时，offset参数才有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/tag.html",
		"name": "Tag 标签",
		"template": "<u-tag id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-tag>",
		"param": {
			"props": [{
				"参数": "type",
				"说明": "主题类型",
				"类型": "String",
				"默认值": "primary",
				"可选值": "success / info / warning / error"
			}, {
				"参数": "disabled",
				"说明": "不可用",
				"类型": "Boolean | String",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "标签大小",
				"类型": "String",
				"默认值": "medium",
				"可选值": "large、mini"
			}, {
				"参数": "shape",
				"说明": "标签形状",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "text",
				"说明": "标签的文字内容",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色，默认为空字符串，即不处理",
				"类型": "String",
				"默认值": "#C6C7CB",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "标签字体颜色，默认为空字符串，即不处理",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "borderColor",
				"说明": "标签的边框颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "closeColor",
				"说明": "关闭按钮图标的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "点击时返回的索引值，用于区分例遍的数组哪个元素被点击了",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "plainFill",
				"说明": "镂空时是否填充背景色",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "plain",
				"说明": "是否镂空",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closable",
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
			}, {
				"参数": "icon",
				"说明": "内置图标，或绝对路径的图片",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "click",
				"说明": "点击标签触发",
				"回调参数": "index: 传递的index参数值",
				"版本": "-"
			}, {
				"事件名": "close",
				"说明": "closable为true时，点击标签关闭按钮触发",
				"回调参数": "index: 传递的index参数值",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/loadingIcon.html",
		"name": "LoadingIcon 加载动画",
		"template": "<u-loading-icon id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-loading-icon>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否显示动画",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "color",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "color['u-tips-color']",
				"可选值": "-"
			}, {
				"参数": "textColor",
				"说明": "提示文本颜色",
				"类型": "String",
				"默认值": "color['u-tips-color']",
				"可选值": "-"
			}, {
				"参数": "vertical",
				"说明": "图标和文字是否垂直排列",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方说明",
				"类型": "String",
				"默认值": "circle",
				"可选值": "circle \\ semicircle"
			}, {
				"参数": "size",
				"说明": "加载图标的大小，单位px",
				"类型": "String | Number",
				"默认值": "24",
				"可选值": "-"
			}, {
				"参数": "textSize",
				"说明": "加载文字的大小，单位px",
				"类型": "String | Number",
				"默认值": "15",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "文字内容",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "timingFunction",
				"说明": "指定animation-timing-function的css属性，但只支持mode为circle或semicircle才有效",
				"类型": "String",
				"默认值": "ease-in-out",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "动画执行周期时间，单位ms",
				"类型": "string | Number",
				"默认值": "1200",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "图标的暗边颜色, mode为circle 模式有效",
				"类型": "String",
				"默认值": "transparent",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/loadingPage.html",
		"name": "LoadingPage 加载页",
		"template": "<u-loading-page id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-loading-page>",
		"param": {
			"props": [{
				"参数": "loadingText",
				"说明": "提示内容",
				"类型": "String | Number",
				"默认值": "正在加载",
				"可选值": "-"
			}, {
				"参数": "image",
				"说明": "文字上方用于替换loading动画的图片",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "loadingMode",
				"说明": "加载动画的模式",
				"类型": "String",
				"默认值": "circle",
				"可选值": "spinner \\ semicircle"
			}, {
				"参数": "loading",
				"说明": "是否加载中",
				"类型": "boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#C8C8C8",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "文字大小",
				"类型": "String | Number",
				"默认值": "19",
				"可选值": "-"
			}, {
				"参数": "loadingColor",
				"说明": "加载中图标的颜色",
				"类型": "String",
				"默认值": "#C8C8C8",
				"可选值": "-"
			}]
		}
	}],
	"表单组件": [{
		"href": "https://www.uviewui.com/components/form.html",
		"name": "Form 表单",
		"templateChild": "<u-form-item param-form-item-xxx >formUnit</u-form-item>",
		"template": "<u-form id=\"id-xxx\"  param-form-xxx  onclick=\"getUnitDesc('xxxxxx',event)\">slot-xxx<!--FormID--><!--表单保存页面删除开始--><view @dragover.prevent @drop=\"colDrop('FormID')\" class=\"u_form_add\">请将表单组件拖入其中</view><!--表单保存页面删除结束--><u-button type=\"primary\" style=\"margin: 50rpx;\" @click=\"submit\">提交</u-button></u-form>",
		"param": {
			"form-props": [{
				"参数": "model",
				"说明": "表单数据对象",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "rules",
				"说明": "通过ref设置，如果rules中有自定义方法等，需要使用setRules方法设置规则，见上方说明",
				"类型": "Object|Function|Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "errorType",
				"说明": "错误的提示方式，见上方说明",
				"类型": "String",
				"默认值": "message",
				"可选值": "none|toast|border-bottom|none"
			}, {
				"参数": "borderBottom",
				"说明": "是否显示表单域的下划线边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "labelPosition",
				"说明": "表单域提示文字的位置，left-左侧，top-上方",
				"类型": "String",
				"默认值": "left",
				"可选值": "top"
			}, {
				"参数": "labelWidth",
				"说明": "提示文字的宽度，单位px",
				"类型": "String | Number",
				"默认值": "45",
				"可选值": "数值 / auto"
			}, {
				"参数": "labelAlign",
				"说明": "lable字体的对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center / right"
			}, {
				"参数": "labelStyle",
				"说明": "lable的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"form-methods": [{
				"名称": "validate",
				"说明": "对整个表单进行校验的方法",
				"参数": "-"
			}, {
				"名称": "setRules",
				"说明": "如果rules中有自定义方法等，需要用此方法设置rules规则，否则微信小程序无效",
				"参数": "Function(rules)"
			}, {
				"名称": "validateField",
				"说明": "对部分表单字段进行校验",
				"参数": "Function(value, Function(errorsRes))"
			}, {
				"名称": "resetFields",
				"说明": "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
				"参数": "-"
			}, {
				"名称": "clearValidate",
				"说明": "清空校验结果",
				"参数": "Function(props)"
			}],
			"form-item-props": [{
				"参数": "label",
				"说明": "左侧提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "prop",
				"说明": "表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "borderBottom",
				"说明": "是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false",
				"类型": "String | Boolean",
				"默认值": "true",
				"可选值": "true / false"
			}, {
				"参数": "labelWidth",
				"说明": "提示文字的宽度，单位rpx，如设置，将覆盖u-form的同名参数",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "rightIcon",
				"说明": "右侧自定义字体图标(限uView内置图标)或图片地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "leftIcon",
				"说明": "左侧自定义字体图标(限uView内置图标)或图片地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "leftIconStyle",
				"说明": "左侧自定义字体图标的样式",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "required",
				"说明": "是否显示左边的\"*\"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则，如需在swiper标签内显示星号，需要给予swiper-item内第一个根节点一定的margin样式",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"form-item-slot": [{
				"名称": "-",
				"说明": "Form Item 的内容"
			}, {
				"名称": "right",
				"说明": "右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景"
			}],
			"form-item-events": [{
				"事件名": "click",
				"说明": "点击时触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/calendar.html",
		"name": "Calendar 日历",
		"template": "<u-calendar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-calendar>",
		"param": {
			"props": [{
				"参数": "title",
				"说明": "标题内容",
				"类型": "String",
				"默认值": "日期选择",
				"可选值": "-"
			}, {
				"参数": "showTitle",
				"说明": "是否显示标题",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showSubtitle",
				"说明": "是否显示副标题",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "mode",
				"说明": "日期类型选择",
				"类型": "String",
				"默认值": "single",
				"可选值": "multiple-可以选择多个日期，range-选择日期范围（多个月需配合monthNum属性使用）"
			}, {
				"参数": "startText",
				"说明": "mode=range时，第一个日期底部的提示文字",
				"类型": "String",
				"默认值": "开始",
				"可选值": "-"
			}, {
				"参数": "endText",
				"说明": "mode=range时，最后一个日期底部的提示文字",
				"类型": "String",
				"默认值": "结束",
				"可选值": "-"
			}, {
				"参数": "customList",
				"说明": "自定义列表",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "[]"
			}, {
				"参数": "color",
				"说明": "主题色，对底部按钮和选中日期有效",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "minDate",
				"说明": "最小的可选日期",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "maxDate",
				"说明": "最大可选日期",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "defaultDate",
				"说明": "默认选中的日期，mode为multiple或range是必须为数组格式",
				"类型": "Array | String | Date",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "maxCount",
				"说明": "mode=multiple时，最多可选多少个日期",
				"类型": "Number | String",
				"默认值": "Number.MAX_SAFE_INTEGER",
				"可选值": "-"
			}, {
				"参数": "rowHeight",
				"说明": "日期行高",
				"类型": "Number |String",
				"默认值": "56",
				"可选值": "-"
			}, {
				"参数": "formatter",
				"说明": "日期格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "showLunar",
				"说明": "是否显示农历",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "showMark",
				"说明": "是否显示月份背景色",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "confirmText",
				"说明": "确定按钮的文字",
				"类型": "String",
				"默认值": "确定",
				"可选值": "-"
			}, {
				"参数": "confirmDisabledText",
				"说明": "确认按钮处于禁用状态时的文字",
				"类型": "String",
				"默认值": "确定",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "是否显示日历弹窗",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "是否允许点击遮罩关闭日历 （注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "readonly",
				"说明": "是否为只读状态，只读状态下禁止选择日期",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "maxRange",
				"说明": "日期区间最多可选天数，默认无限制，mode = range时有效",
				"类型": "Number | String",
				"默认值": "无限制",
				"可选值": "-"
			}, {
				"参数": "rangePrompt",
				"说明": "范围选择超过最多可选天数时的提示文案，mode = range时有效",
				"类型": "String | null",
				"默认值": "选择天数不能超过 xx 天",
				"可选值": "-"
			}, {
				"参数": "showRangePrompt",
				"说明": "范围选择超过最多可选天数时，是否展示提示文案，mode = range时有效",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "allowSameDay",
				"说明": "是否允许日期范围的起止时间为同一天，mode = range时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "round",
				"说明": "圆角值，默认无圆角",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "monthNum 2.0.17",
				"说明": "最大展示的月份数量",
				"类型": "String | Number",
				"默认值": "3",
				"可选值": "-"
			}],
			"methods": [{
				"方法名": "setFormatter",
				"说明": "为兼容微信小程序而暴露的内部方法，见上方说明"
			}],
			"event": [{
				"事件名": "confirm",
				"说明": "日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发",
				"回调参数": "选择日期相关的返回参数"
			}, {
				"事件名": "close",
				"说明": "日历关闭时触发",
				"回调参数": "可定义页面关闭时的回调事件"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/keyboard.html",
		"name": "Keyboard 键盘",
		"template": "<u-keyboard id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-keyboard>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘",
				"类型": "String",
				"默认值": "car",
				"可选值": "number / card"
			}, {
				"参数": "dotDisabled",
				"说明": "是否显示\".\"按键，只在mode=number时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "tooltip",
				"说明": "是否显示键盘顶部工具条",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showTips",
				"说明": "是否显示工具条中间的提示",
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
				"参数": "showCancel",
				"说明": "是否显示工具条左边的\"取消\"按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showConfirm",
				"说明": "是否显示工具条右边的\"完成\"按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "random",
				"说明": "是否打乱键盘按键的顺序",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "safeAreaInsetBottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "是否允许点击遮罩收起键盘（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "show",
				"说明": "控制键盘的弹出与收起",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "overlay",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "zIndex",
				"说明": "弹出键盘的z-index值",
				"类型": "String | Number",
				"默认值": "1075",
				"可选值": "-"
			}, {
				"参数": "confirmText",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancelText",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "customStyle",
				"说明": "自定义样式，对象形式",
				"类型": "Object",
				"默认值": "{}",
				"可选值": "-"
			}, {
				"参数": "autoChange",
				"说明": "mode为car下，输入文字后，是否自动切换为字母模式",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"events": [{
				"事件名": "change",
				"说明": "按键被点击(不包含退格键被点击)",
				"回调参数": "按键的值，见上方说明和示例",
				"版本": "-"
			}, {
				"事件名": "close",
				"说明": "键盘关闭",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "confirm",
				"说明": "键盘顶部工具条右边的\"完成\"按钮被点击",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "cancel",
				"说明": "键盘顶部工具条左边的\"取消\"按钮被点击",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "backspace",
				"说明": "键盘退格键被点击",
				"回调参数": "-",
				"版本": "-"
			}],
			"slot": [{
				"名称": "default",
				"说明": "内容将会显示键盘的工具条上面，可以结合MessageInput 验证码输入组件实现类似支付宝输入密码时，上方显示输入内容的功能",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/picker.html",
		"name": "Picker 选择器",
		"template": "<u-picker id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-picker>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "用于控制选择器的弹出与收起",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "showToolbar",
				"说明": "是否显示顶部的操作栏",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "title",
				"说明": "顶部中间的标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "columns",
				"说明": "设置每一列的数据，见上方说明",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "loading",
				"说明": "加载状态",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "itemHeight",
				"说明": "各列中，单个选项的高度",
				"类型": "String | Number",
				"默认值": "44",
				"可选值": "-"
			}, {
				"参数": "cancelText",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "confirmText",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancelColor",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#909193",
				"可选值": "-"
			}, {
				"参数": "confirmColor",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "singleIndex",
				"说明": "选择器只有一列时，默认选中项的索引，从0开始",
				"类型": "Array",
				"默认值": "[0]",
				"可选值": "-"
			}, {
				"参数": "visibleItemCount",
				"说明": "每列中可见选项的数量",
				"类型": "String | Number",
				"默认值": "5",
				"可选值": "-"
			}, {
				"参数": "keyName",
				"说明": "自定义需要展示的text属性键名",
				"类型": "String",
				"默认值": "text",
				"可选值": "-"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "defaultIndex",
				"说明": "各列的默认索引",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "immediateChange 2.0.22",
				"说明": "是否在手指松开时立即触发change事件。若不开启则会在滚动动画结束后触发change事件，只在微信2.21.1及以上有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"methods": [{
				"名称": "setIndexs",
				"说明": "(index, setLastIndex) 设置对应列的选择值"
			}, {
				"名称": "setColumnValues",
				"说明": "多列联动时需要用到，见上方说明，注意微信小程序的特殊用法"
			}],
			"events": [{
				"事件名": "close",
				"说明": "关闭选择器时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "confirm",
				"说明": "点击确定按钮，返回当前选择的值",
				"回调参数": "Array: 见上方\"回调参数\"部分说明",
				"版本": "-"
			}, {
				"事件名": "change",
				"说明": "当选择值变化时触发",
				"回调参数": "Array: 见上方\"回调参数\"部分说明",
				"版本": "-"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/datetimePicker.html",
		"name": "DatetimePicker 选择器",
		"template": "<u-datetime-picker id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-datetime-picker>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "用于控制选择器的弹出与收起",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "showToolbar",
				"说明": "是否显示顶部的操作栏",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "v-model",
				"说明": "绑定值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "顶部标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "展示格式",
				"类型": "String",
				"默认值": "datetime",
				"可选值": "date为日期选择，time为时间选择，year-month为年月选择"
			}, {
				"参数": "maxDate",
				"说明": "可选的最大时间（时间戳毫秒）",
				"类型": "Number",
				"默认值": "最大默认值为后10年",
				"可选值": "-"
			}, {
				"参数": "minDate",
				"说明": "可选的最小时间（时间戳毫秒）",
				"类型": "Number",
				"默认值": "最小默认值为前10年",
				"可选值": "-"
			}, {
				"参数": "minHour",
				"说明": "可选的最小小时，仅mode=time有效",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "maxHour",
				"说明": "可选的最大小时，仅mode=time有效",
				"类型": "Number",
				"默认值": "23",
				"可选值": "-"
			}, {
				"参数": "minMinute",
				"说明": "可选的最小分钟，仅mode=time有效",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "maxMinute",
				"说明": "可选的最大分钟，仅mode=time有效",
				"类型": "Number",
				"默认值": "59",
				"可选值": "-"
			}, {
				"参数": "filter",
				"说明": "选项过滤函数",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "formatter",
				"说明": "输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "loading",
				"说明": "是否显示加载中状态",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "itemHeight",
				"说明": "各列中，单个选项的高度",
				"类型": "String | Number",
				"默认值": "44",
				"可选值": "-"
			}, {
				"参数": "cancelText",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "confirmText",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancelColor",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#909193",
				"可选值": "-"
			}, {
				"参数": "confirmColor",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "visibleItemCount",
				"说明": "每列中可见选项的数量",
				"类型": "String | Number",
				"默认值": "5",
				"可选值": "-"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "defaultIndex",
				"说明": "各列的默认索引",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "close",
				"说明": "关闭选择器时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "confirm",
				"说明": "点击确定按钮，返回当前选择的值",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "change",
				"说明": "当选择值变化时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮",
				"回调参数": "-",
				"版本": "-"
			}],
			"methods": [{
				"方法名": "setFormatter",
				"说明": "为兼容微信小程序而暴露的内部方法，见上方说明"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/rate.html",
		"name": "Rate 评分",
		"template": "<u-rate id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-rate>",
		"param": {
			"props": [{
				"参数": "value",
				"说明": "双向绑定选择星星的数量",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "count",
				"说明": "最多可选的星星数量",
				"类型": "String | Number",
				"默认值": "5",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁止用户操作",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "readonly 2.0.30",
				"说明": "是否只读",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "size",
				"说明": "星星的大小，单位rpx",
				"类型": "String | Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中星星的颜色",
				"类型": "String",
				"默认值": "#b2b2b2",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "选中的星星颜色",
				"类型": "String",
				"默认值": "#FA3534",
				"可选值": "-"
			}, {
				"参数": "gutter",
				"说明": "星星之间的距离",
				"类型": "String | Number",
				"默认值": "4",
				"可选值": "-"
			}, {
				"参数": "minCount",
				"说明": "最少选中星星的个数",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "allowHalf",
				"说明": "是否允许半星选择",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "activeIcon",
				"说明": "选中时的图标名，只能为uView的内置图标",
				"类型": "String",
				"默认值": "star-fill",
				"可选值": "-"
			}, {
				"参数": "inactiveIcon",
				"说明": "未选中时的图标名，只能为uView的内置图标",
				"类型": "String",
				"默认值": "star",
				"可选值": "-"
			}, {
				"参数": "touchable",
				"说明": "是否可以通过滑动手势选择评分",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "change",
				"说明": "选中的星星发生变化时触发",
				"回调参数": "value：当前选中的星星的数量，如果使用v-model双向绑定方式，无需监听此事件"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/search.html",
		"name": "Search 搜索",
		"template": "<u-search id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-search>",
		"param": {
			"props": [{
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
				"可选值": "square"
			}, {
				"参数": "bgColor",
				"说明": "搜索框背景颜色",
				"类型": "String",
				"默认值": "#f2f2f2",
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
				"参数": "showAction",
				"说明": "是否显示右侧控件(右侧的\"搜索\"按钮)",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "actionStyle",
				"说明": "右侧控件的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "actionText",
				"说明": "右侧控件文字",
				"类型": "String",
				"默认值": "搜索",
				"可选值": "-"
			}, {
				"参数": "inputAlign",
				"说明": "输入框内容水平对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "center / right"
			}, {
				"参数": "inputStyle",
				"说明": "自定义输入框样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否启用输入框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "borderColor",
				"说明": "边框颜色，配置了颜色，才会有边框",
				"类型": "String",
				"默认值": "transparent",
				"可选值": "-"
			}, {
				"参数": "searchIconColor",
				"说明": "搜索图标的颜色，默认同输入框字体颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "searchIconSize",
				"说明": "搜索图标的大小",
				"类型": "Number",
				"默认值": "22",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "输入框字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "placeholderColor",
				"说明": "placeholder的颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "searchIcon",
				"说明": "输入框左边的图标，可以为uView图标名称或图片路径",
				"类型": "String",
				"默认值": "search",
				"可选值": "-"
			}, {
				"参数": "margin",
				"说明": "组件与其他上下左右元素之间的距离，带单位的字符串形式，如\"30rpx\"、\"30rpx 20rpx\"等写法",
				"类型": "String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "animation",
				"说明": "是否开启动画，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "value",
				"说明": "输入框初始值",
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
				"参数": "height",
				"说明": "输入框高度，单位rpx",
				"类型": "String | Number",
				"默认值": "64",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "搜索左侧文本信息",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "change",
				"说明": "输入框内容发生变化时触发",
				"回调参数": "value：输入框的值",
				"版本": "-"
			}, {
				"事件名": "search",
				"说明": "用户确定搜索时触发，用户按回车键，或者手机键盘右下角的\"搜索\"键时触发",
				"回调参数": "value：输入框的值",
				"版本": "-"
			}, {
				"事件名": "custom",
				"说明": "用户点击右侧控件时触发",
				"回调参数": "value：输入框的值",
				"版本": "-"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发",
				"回调参数": "value：输入框的值",
				"版本": "-"
			}, {
				"事件名": "focus",
				"说明": "输入框获得焦点时触发",
				"回调参数": "value：输入框的值",
				"版本": "-"
			}, {
				"事件名": "clear",
				"说明": "配置了clearabled后，清空内容时会发出此事件",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "click",
				"说明": "disabled为true时，点击输入框，发出此事件，用于跳转搜索页",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "clickIcon",
				"说明": "左侧icon点击时候时触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/numberBox.html",
		"name": "NumberBox 步进器",
		"template": "<u-number-box id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-number-box>",
		"param": {
			"props": [{
				"参数": "name",
				"说明": "步进器标识符，在change回调返回",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "用于双向绑定的值，初始化时设置设为默认min值(最小值)",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "min",
				"说明": "用户可输入的最小值",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "max",
				"说明": "用户可输入的最大值",
				"类型": "String | Number",
				"默认值": "Number.MAX_SAFE_INTEGER",
				"可选值": "-"
			}, {
				"参数": "step",
				"说明": "步长，每次加或减的值， 支持小数值，如需小数",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "integer",
				"说明": "是否只能输入正整数",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabled",
				"说明": "是否禁用操作，包括输入框，加减按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabledInput",
				"说明": "是否禁止输入框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "asyncChange",
				"说明": "是否开启异步变更，开启后需要手动控制输入值",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "inputWidth",
				"说明": "输入框宽度，单位px",
				"类型": "String | Number",
				"默认值": "35",
				"可选值": "-"
			}, {
				"参数": "showMinus",
				"说明": "是否显示减少按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showPlus",
				"说明": "是否显示增加按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "decimalLength",
				"说明": "显示的小数位数",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "longPress",
				"说明": "是否允许长按进行加减",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "color",
				"说明": "输入框文字和加减按钮图标的颜色",
				"类型": "String",
				"默认值": "#323233",
				"可选值": "-"
			}, {
				"参数": "buttonSize",
				"说明": "按钮大小，宽高等于此值，单位px，输入框高度和此值保持一致",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "输入框和按钮的背景颜色",
				"类型": "String",
				"默认值": "#EBECEE",
				"可选值": "-"
			}, {
				"参数": "cursorSpacing",
				"说明": "指定光标于键盘的距离，避免键盘遮挡输入框，单位px",
				"类型": "String | Number",
				"默认值": "100",
				"可选值": "-"
			}, {
				"参数": "disablePlus",
				"说明": "是否禁用增加按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disableMinus",
				"说明": "是否禁用减少按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "iconStyle",
				"说明": "加减按钮图标的样式",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "focus",
				"说明": "输入框得到焦点触发(按钮可点击情况下)，对象形式",
				"回调参数": "value：输入框当前值，name：步进器标识符"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发，对象形式",
				"回调参数": "value：输入框当前值，name：步进器标识符"
			}, {
				"事件名": "change",
				"说明": "输入框内容发生变化时触发，对象形式",
				"回调参数": "value：输入框当前值，name：步进器标识符"
			}, {
				"事件名": "overlimit",
				"说明": "超过范围阈值时触发",
				"回调参数": "type：（minus已达最小值，plus已达最大值）"
			}],
			"slots": [{
				"名称": "minus",
				"说明": "减少按钮"
			}, {
				"名称": "input",
				"说明": "输入框"
			}, {
				"名称": "plus",
				"说明": "增加按钮"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/upload.html",
		"name": "Upload 上传",
		"template": "<u-upload id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-upload>",
		"param": {
			"props": [{
				"参数": "accept",
				"说明": "接受的文件类型，file只支持H5（只有微信小程序才支持把accept配置为all、media）",
				"类型": "String",
				"默认值": "image",
				"可选值": "all | media | image | file | video"
			}, {
				"参数": "capture",
				"说明": "图片或视频拾取模式，当accept为image类型时设置capture可选额外camera可以直接调起摄像头",
				"类型": "String | Array",
				"默认值": "['album', 'camera']",
				"可选值": "-"
			}, {
				"参数": "compressed",
				"说明": "当accept为video时生效，是否压缩视频，默认为true",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "camera",
				"说明": "当accept为video时生效，可选值为back或front",
				"类型": "String",
				"默认值": "back",
				"可选值": "-"
			}, {
				"参数": "maxDuration",
				"说明": "当accept为video时生效，拍摄视频最长拍摄时间，单位秒",
				"类型": "Number",
				"默认值": "60",
				"可选值": "true"
			}, {
				"参数": "uploadIcon",
				"说明": "上传区域的图标，只能内置图标",
				"类型": "String",
				"默认值": "camera-fill",
				"可选值": "-"
			}, {
				"参数": "uploadIconColor",
				"说明": "上传区域的图标的颜色",
				"类型": "String",
				"默认值": "#D3D4D6",
				"可选值": "-"
			}, {
				"参数": "useBeforeRead",
				"说明": "是否启用(显示/隐藏)组件",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "previewFullImage",
				"说明": "previewFullImage",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "maxCount",
				"说明": "最大选择图片的数量",
				"类型": "String | Number",
				"默认值": "52",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否启用(显示/隐藏)组件",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "imageMode",
				"说明": "预览上传的图片时的裁剪模式，和image组件mode属性一致",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "标识符，可以在回调函数的第二项参数中获取",
				"类型": "String",
				"默认值": "file",
				"可选值": "-"
			}, {
				"参数": "sizeType",
				"说明": "original 原图，compressed 压缩图，默认二者都有，H5无效",
				"类型": "Array<String>",
				"默认值": "['original', 'compressed']",
				"可选值": "-"
			}, {
				"参数": "multiple",
				"说明": "是否开启图片多选，部分安卓机型不支持",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "deletable",
				"说明": "是否显示删除图片的按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "maxSize",
				"说明": "选择单个文件的最大大小，单位B(byte)，默认不限制",
				"类型": "String | Number",
				"默认值": "Number.MAX_VALUE",
				"可选值": "-"
			}, {
				"参数": "fileList",
				"说明": "显示已上传的文件列表",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "uploadText",
				"说明": "上传区域的提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "内部预览图片区域和选择图片按钮的区域宽度，单位rpx，不能是百分比，或者auto",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "内部预览图片区域和选择图片按钮的区域高度，单位rpx，不能是百分比，或者auto",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "previewImage",
				"说明": "是否在上传完成后展示预览图",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"methods": [{
				"名称": "afterRead",
				"说明": "读取后的处理函数"
			}, {
				"名称": "beforeRead",
				"说明": "读取前的处理函数"
			}],
			"slot": [{
				"名称": "-(default)",
				"说明": "自定义上传样式"
			}],
			"events": [{
				"事件名": "afterRead",
				"说明": "读取后的处理函数",
				"回调参数": "(file, lists, name)，错误信息"
			}, {
				"事件名": "beforeRead",
				"说明": "读取前的处理函数",
				"回调参数": "(file, lists, name)，错误信息"
			}, {
				"事件名": "oversize",
				"说明": "图片大小超出最大允许大小",
				"回调参数": "(file, lists, name), name为通过props传递的index参数"
			}, {
				"事件名": "clickPreview",
				"说明": "全屏预览图片时触发",
				"回调参数": "(url, lists, name)，url为当前选中的图片地址，index为通过props传递的index参数"
			}, {
				"事件名": "delete",
				"说明": "删除图片",
				"回调参数": "传递index 回调 event 参数 包含index，file，name"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/code.html",
		"name": "Code 验证码输入框",
		"template": "<u-code id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-code>",
		"param": {
			"props": [{
				"参数": "seconds",
				"说明": "倒计时所需的秒数",
				"类型": "Number | String",
				"默认值": "60",
				"可选值": "-"
			}, {
				"参数": "startText",
				"说明": "开始前的提示语，见上方说明",
				"类型": "String",
				"默认值": "获取验证码",
				"可选值": "-"
			}, {
				"参数": "changeText",
				"说明": "倒计时期间的提示语，必须带有字母\"x\"，见上方说明",
				"类型": "String",
				"默认值": "X秒重新获取",
				"可选值": "-"
			}, {
				"参数": "endText",
				"说明": "倒计结束的提示语，见上方说明",
				"类型": "String",
				"默认值": "重新获取",
				"可选值": "-"
			}, {
				"参数": "keepRunning",
				"说明": "是否在H5刷新或各端返回再进入时继续倒计时",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "uniqueKey",
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
			"event": [{
				"事件名": "change",
				"说明": "倒计时期间，每秒触发一次",
				"回调参数": "text: 当前剩余多少秒的状态，见上方说明",
				"版本": "-"
			}, {
				"事件名": "start",
				"说明": "开始倒计时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "end",
				"说明": "结束倒计时触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/input.html",
		"name": "Input 输入框",
		"template": "<u-input id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-input>",
		"param": {
			"props": [{
				"参数": "value",
				"说明": "输入的值",
				"类型": "Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "输入框类型，见上方说明",
				"类型": "String",
				"默认值": "text",
				"可选值": "number | idcard | digit | password"
			}, {
				"参数": "disabled",
				"说明": "是否禁用输入框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabledColor",
				"说明": "禁用状态时的背景色",
				"类型": "String",
				"默认值": "#f5f7fa",
				"可选值": "-"
			}, {
				"参数": "clearable",
				"说明": "是否显示清除控件",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "password",
				"说明": "是否密码类型",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "maxlength",
				"说明": "最大输入长度，设置为 -1 的时候不限制最大长度",
				"类型": "String | Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "placeholder",
				"说明": "输入框为空时的占位符",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "placeholderClass",
				"说明": "指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/",
				"类型": "String",
				"默认值": "input-placeholder",
				"可选值": "-"
			}, {
				"参数": "placeholderStyle",
				"说明": "指定placeholder的样式，字符串/对象形式，如\"color: red;\"",
				"类型": "String | Object",
				"默认值": "color: #c0c4cc",
				"可选值": "-"
			}, {
				"参数": "showWordLimit",
				"说明": "是否显示输入字数统计，只在 type =\"text\"或type =\"textarea\"时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "confirmType",
				"说明": "设置右下角按钮的文字，兼容性详见uni-app文档",
				"类型": "String",
				"默认值": "done",
				"可选值": "send | search | next | go | done"
			}, {
				"参数": "confirmHold",
				"说明": "点击键盘右下角按钮时是否保持键盘不收起，H5无效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "holdKeyboard",
				"说明": "focus时，点击页面的时候不收起键盘，微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "focus",
				"说明": "自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "autoBlur",
				"说明": "键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disableDefaultPadding",
				"说明": "是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "cursor",
				"说明": "指定focus时光标的位置",
				"类型": "String | Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "cursorSpacing",
				"说明": "输入框聚焦时底部与键盘的距离",
				"类型": "String | Number",
				"默认值": "30",
				"可选值": "-"
			}, {
				"参数": "selectionStart",
				"说明": "光标起始位置，自动聚集时有效，需与selection-end搭配使用",
				"类型": "String | Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "selectionEnd",
				"说明": "光标结束位置，自动聚集时有效，需与selection-start搭配使用",
				"类型": "String | Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "adjustPosition",
				"说明": "键盘弹起时，是否自动上推页面",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "inputAlign",
				"说明": "输入框内容对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "left | center | right"
			}, {
				"参数": "fontSize",
				"说明": "输入框字体的大小",
				"类型": "String | Number",
				"默认值": "15px",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "输入框字体颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "prefixIcon",
				"说明": "输入框前置图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "prefixIconStyle",
				"说明": "前置图标样式，对象或字符串",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "suffixIcon",
				"说明": "输入框后置图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "suffixIconStyle",
				"说明": "后置图标样式，对象或字符串",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "border",
				"说明": "边框类型，surround-四周边框，bottom-底部边框，none-无边框",
				"类型": "String",
				"默认值": "surround",
				"可选值": "bottom | none"
			}, {
				"参数": "readonly",
				"说明": "是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "shape",
				"说明": "输入框形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "formatter",
				"说明": "输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "blur",
				"说明": "输入框失去焦点时触发",
				"回调参数": "event: input默认参数，event.detail.value获取内容",
				"版本": "-"
			}, {
				"事件名": "focus",
				"说明": "输入框聚焦时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "confirm",
				"说明": "点击完成按钮时触发",
				"回调参数": "value：内容值",
				"版本": "-"
			}, {
				"事件名": "keyboardheightchange",
				"说明": "键盘高度发生变化的时候触发此事件",
				"回调参数": "-",
				"版本": "微信小程序2.7.0+、App 3.1.0+"
			}, {
				"事件名": "input",
				"说明": "内容发生变化触发此事件",
				"回调参数": "value：内容值",
				"版本": "-"
			}, {
				"事件名": "change",
				"说明": "内容发生变化触发此事件",
				"回调参数": "value：内容值",
				"版本": "-"
			}, {
				"事件名": "clear",
				"说明": "点击清空内容",
				"回调参数": "-",
				"版本": "-"
			}],
			"methods": [{
				"方法名": "setFormatter",
				"说明": "为兼容微信小程序而暴露的内部方法，见上方说明"
			}],
			"slots": [{
				"名称": "prefix",
				"说明": "输入框前置内容，nuve环境需u--input有效，非nvue环境需u-input才有效"
			}, {
				"名称": "suffix",
				"说明": "输入框后置内容，nuve环境需u--input有效，非nvue环境需u-input才有效"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/textarea.html",
		"name": "Textarea 文本域",
		"template": "<u-textarea id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-textarea>",
		"param": {
			"list-props": [{
				"参数": "value",
				"说明": "输入框的内容",
				"类型": "String | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "placeholder",
				"说明": "输入框为空时占位符",
				"类型": "Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "输入框高度",
				"类型": "String | Number",
				"默认值": "70",
				"可选值": "-"
			}, {
				"参数": "confirmType",
				"说明": "设置键盘右下角按钮的文字，仅微信小程序，App-vue和H5有效",
				"类型": "String",
				"默认值": "done",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "count",
				"说明": "是否显示统计字数",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "focus",
				"说明": "是否自动获取焦点，nvue不支持，H5取决于浏览器的实现",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "autoHeight",
				"说明": "是否自动增加高度",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "fixed",
				"说明": "如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "cursorSpacing",
				"说明": "指定光标与键盘的距离",
				"类型": "Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "cursor",
				"说明": "指定focus时的光标位置",
				"类型": "Number | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "showConfirmBar",
				"说明": "是否显示键盘上方带有”完成“按钮那一栏，",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "selectionStart",
				"说明": "光标起始位置，自动聚焦时有效，需与selection-end搭配使用",
				"类型": "Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "selectionEnd",
				"说明": "光标结束位置，自动聚焦时有效，需与selection-start搭配使用",
				"类型": "Number",
				"默认值": "-1",
				"可选值": "-"
			}, {
				"参数": "adjustPosition",
				"说明": "键盘弹起时，是否自动上推页面",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "disableDefaultPadding",
				"说明": "是否去掉 iOS 下的默认内边距，只微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "holdKeyboard",
				"说明": "focus时，点击页面的时候不收起键盘，只微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "maxlength",
				"说明": "最大输入长度，设置为 -1 的时候不限制最大长度",
				"类型": "String | Number",
				"默认值": "140",
				"可选值": "-"
			}, {
				"参数": "border",
				"说明": "边框类型，surround-四周边框，none-无边框，bottom-底部边框",
				"类型": "String",
				"默认值": "surround",
				"可选值": "bottom"
			}, {
				"参数": "placeholderClass",
				"说明": "指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/",
				"类型": "String",
				"默认值": "textarea-placeholder",
				"可选值": "-"
			}, {
				"参数": "placeholderStyle",
				"说明": "指定placeholder的样式，字符串/对象形式，如\"color: red;\"",
				"类型": "String | Object",
				"默认值": "color: #c0c4cc",
				"可选值": "-"
			}, {
				"参数": "formatter",
				"说明": "输入过滤或格式化函数(如需兼容微信小程序，则只能通过setFormatter方法)",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}],
			"methods": [{
				"方法名": "setFormatter",
				"说明": "为兼容微信小程序而暴露的内部方法，见上方说明"
			}],
			"list-events": [{
				"事件名": "focus",
				"说明": "输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度",
				"回调参数": "e"
			}, {
				"事件名": "blur",
				"说明": "输入框失去焦点时触发，event.detail = {value, cursor}",
				"回调参数": "e"
			}, {
				"事件名": "linechange",
				"说明": "输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}",
				"回调参数": "e"
			}, {
				"事件名": "input",
				"说明": "当键盘输入时，触发 input 事件",
				"回调参数": "e.detail.value"
			}, {
				"事件名": "confirm",
				"说明": "点击完成时， 触发 confirm 事件",
				"回调参数": "e"
			}, {
				"事件名": "keyboardheightchange",
				"说明": "键盘高度发生变化的时候触发此事件",
				"回调参数": "e"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/checkbox.html",
		"name": "Checkbox 复选框",
		"template": "<u-checkbox id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-checkbox>",
		"param": {
			"checkbox-props": [{
				"参数": "name",
				"说明": "checkbox的名称",
				"类型": "String \\ Number \\ Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "形状，square为方形，circle为圆型",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "size",
				"说明": "整体的大小",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "checked",
				"说明": "是否默认选中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "String \\ Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标的大小，单位px",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "iconColor",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelSize",
				"说明": "label的字体大小，px单位",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelColor",
				"说明": "label的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelDisabled",
				"说明": "是否禁止点击提示语选中复选框",
				"类型": "String \\ Boolean",
				"默认值": "-",
				"可选值": "-"
			}],
			"checkboxgroup-props": [{
				"参数": "name",
				"说明": "标识符",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "绑定的值",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "disabled",
				"说明": "是否禁用全部checkbox",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "activeColor",
				"说明": "选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中的颜色",
				"类型": "String",
				"默认值": "#c8c9cc",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "整个组件的尺寸，默认px",
				"类型": "String",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "placement",
				"说明": "布局方式，row-横向，column-纵向",
				"类型": "Boolean",
				"默认值": "row",
				"可选值": "column"
			}, {
				"参数": "labelSize",
				"说明": "label的字体大小，px单位",
				"类型": "String \\ Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "labelColor",
				"说明": "label的字体颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "labelDisabled",
				"说明": "是否禁止点击文本操作",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "iconColor",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标的大小，单位px",
				"类型": "String \\ Number",
				"默认值": "12",
				"可选值": "-"
			}, {
				"参数": "iconPlacement",
				"说明": "勾选图标的对齐方式，left-左边，right-右边",
				"类型": "String",
				"默认值": "left",
				"可选值": "right"
			}, {
				"参数": "borderBottom",
				"说明": "竖向配列时，是否显示下划线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"checkboxgroup-event": [{
				"事件名": "change",
				"说明": "任一个checkbox状态发生变化时触发，回调为一个对象",
				"回调参数": "detail = array( [元素为被选中的checkbox的name] )",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/radio.html",
		"name": "Radio 单选框",
		"template": "<u-radio id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-radio>",
		"param": {
			"radio-props": [{
				"参数": "name",
				"说明": "checkbox的名称",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "形状，square为方形，circle为圆型",
				"类型": "String",
				"默认值": "square",
				"可选值": "circle"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelDisabled",
				"说明": "是否禁止点击提示语选中复选框",
				"类型": "String \\ Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标的大小，单位px",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelSize",
				"说明": "label的字体大小，px单位",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "label",
				"说明": "label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "整体的大小",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "iconColor",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelColor",
				"说明": "label的颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"radiogroup-props": [{
				"参数": "value",
				"说明": "绑定的值",
				"类型": "String\\Number\\Boolean",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用全部checkbox",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "shape",
				"说明": "形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}, {
				"参数": "activeColor",
				"说明": "选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中的颜色",
				"类型": "String",
				"默认值": "#c8c9cc",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "标识符",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "整个组件的尺寸，默认px",
				"类型": "String \\ Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "placement",
				"说明": "布局方式，row-横向，column-纵向",
				"类型": "String",
				"默认值": "row",
				"可选值": "column"
			}, {
				"参数": "label",
				"说明": "文本",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "labelColor",
				"说明": "label的字体颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "labelSize",
				"说明": "label的字体大小，px单位",
				"类型": "String \\ Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "labelDisabled",
				"说明": "是否禁止点击文本操作",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "iconColor",
				"说明": "图标颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标的大小，单位px",
				"类型": "String \\ Number",
				"默认值": "12",
				"可选值": "-"
			}, {
				"参数": "borderBottom",
				"说明": "竖向配列时，是否显示下划线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "iconPlacement",
				"说明": "勾选图标的对齐方式，left-左边，right-右边",
				"类型": "String",
				"默认值": "left",
				"可选值": "right"
			}],
			"radio-event": [{
				"事件名": "change",
				"说明": "某个radio状态发生变化时触发(选中状态)",
				"回调参数": "name: 通过props传递的name参数",
				"版本": "-"
			}],
			"radiogroup-event": [{
				"事件名": "change",
				"说明": "任一个radio状态发生变化时触发",
				"回调参数": "name: 值为radio通过props传递的name值",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/switch.html",
		"name": "Switch 开关选择器",
		"template": "<u-switch id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-switch>",
		"param": {
			"switch-props": [{
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
				"默认值": "25",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "打开时的背景色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "关闭时的背景色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "通过v-model双向绑定的值",
				"类型": "Boolean | String | Number",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "activeValue",
				"说明": "switch打开时的值",
				"类型": "Boolean | String | Number",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "inactiveValue",
				"说明": "switch关闭时的值",
				"类型": "Boolean | String | Number",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "asyncChange",
				"说明": "是否开启异步变更，开启后需要手动控制输入值",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "space",
				"说明": "圆点与外边框的距离",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"switch-event": [{
				"事件名": "change",
				"说明": "在switch打开或关闭时触发",
				"回调参数": "value：打开时为activeColor值，关闭时为inactiveColor值"
			}, {
				"事件名": "input",
				"说明": "在switch打开或关闭时触发（没开启异步）",
				"回调参数": "value：打开时为activeColor值，关闭时为inactiveColor值"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/slider.html",
		"name": "Slider 滑动选择器",
		"template": "<u-slider id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-slider>",
		"param": {
			"props": [{
				"参数": "value",
				"说明": "双向绑定滑块选择值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "blockSize",
				"说明": "滑块的大小",
				"类型": "String | Number",
				"默认值": "18",
				"可选值": "12 - 28"
			}, {
				"参数": "min",
				"说明": "可选的最小值(0-100之间)",
				"类型": "String | Number",
				"默认值": "1",
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
				"参数": "activeColor",
				"说明": "进度条的激活部分颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "进度条的背景颜色",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "blockColor",
				"说明": "滑块背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "showValue",
				"说明": "是否显示当前 value",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "blockStyle",
				"说明": "滑块按钮自定义样式，对象形式",
				"类型": "Object | String",
				"默认值": "-",
				"可选值": "-"
			}],
			"slider-events": [{
				"事件名": "input",
				"说明": "更新v-model的（拖动过程中）",
				"回调参数": "value：当前值"
			}, {
				"事件名": "changing",
				"说明": "触发事件（拖动过程中）",
				"回调参数": "value：当前值"
			}, {
				"事件名": "input",
				"说明": "更新v-model的",
				"回调参数": "value：当前值"
			}, {
				"事件名": "change",
				"说明": "触发事件",
				"回调参数": "value：当前值"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/album.html",
		"name": "Album 相册",
		"template": "<u-album id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-album>",
		"param": {
			"props": [{
				"参数": "urls",
				"说明": "图片地址列表 支持 Array<String> | Array<Object>形式",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "keyName",
				"说明": "指定从数组的对象元素中读取哪个属性作为图片地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "singleSize",
				"说明": "单图时，图片长边的长度",
				"类型": "String | Number",
				"默认值": "180",
				"可选值": "-"
			}, {
				"参数": "multipleSize",
				"说明": "多图时，图片边长",
				"类型": "String | Number",
				"默认值": "70",
				"可选值": "-"
			}, {
				"参数": "space",
				"说明": "多图时，图片水平和垂直之间的间隔",
				"类型": "String | Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "singleMode",
				"说明": "单图时，图片缩放裁剪的模式",
				"类型": "String",
				"默认值": "scaleToFill",
				"可选值": "-"
			}, {
				"参数": "multipleMode",
				"说明": "多图时，图片缩放裁剪的模式",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "maxCount",
				"说明": "最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量",
				"类型": "String | Number",
				"默认值": "9",
				"可选值": "-"
			}, {
				"参数": "previewFullImage",
				"说明": "是否可以预览图片",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "rowCount",
				"说明": "每行展示图片数量，如设置，singleSize和multipleSize将会无效",
				"类型": "String | Number",
				"默认值": "3",
				"可选值": "-"
			}, {
				"参数": "showMore",
				"说明": "超出maxCount时是否显示查看更多的提示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"event": [{
				"事件名": "albumWidth",
				"说明": "某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送",
				"回调参数": "width"
			}]
		}
	}],
	"数据组件": [{
		"href": "https://www.uviewui.com/components/list.html",
		"name": "List 列表",
		"template": "<u-list id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-list>",
		"param": {
			"list-props": [{
				"参数": "showScrollbar",
				"说明": "控制是否出现滚动条，仅nvue有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "lowerThreshold",
				"说明": "距底部多少时触发scrolltolower事件",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "upperThreshold",
				"说明": "距顶部多少时触发scrolltoupper事件，非nvue有效",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "scrollTop",
				"说明": "设置竖向滚动条位置",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "offsetAccuracy",
				"说明": "控制 onscroll 事件触发的频率，仅nvue有效",
				"类型": "String | Number",
				"默认值": "10",
				"可选值": "-"
			}, {
				"参数": "enableFlex",
				"说明": "启用 flexbox 布局。开启后，当前节点声明了display: flex就会成为flex container，并作用于其孩子节点，仅微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "pagingEnabled",
				"说明": "是否按分页模式显示List，默认值false",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "scrollable",
				"说明": "是否允许List滚动",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "scrollIntoView",
				"说明": "值应为某子元素id（id不能以数字开头）",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "scrollWithAnimation",
				"说明": "在设置滚动条位置时使用动画过渡",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "enableBackToTop",
				"说明": "iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只对微信小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "列表的高度",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "列表宽度",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "preLoadScreen",
				"说明": "列表前后预渲染的屏数，1代表一个屏幕的高度，1.5代表1个半屏幕高度",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}],
			"list-events": [{
				"事件名": "scroll",
				"说明": "滚动条滚动触发事件",
				"回调参数": "scrollTop: 滚动条位置"
			}, {
				"事件名": "scrolltolower",
				"说明": "滚动到底部触发事件",
				"回调参数": "-"
			}],
			"listitem-props": [{
				"参数": "anchor",
				"说明": "用于滚动到指定item",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/lineProgress.html",
		"name": "LineProgress 线形进度条",
		"template": "<u-line-progress id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-line-progress>",
		"param": {
			"props": [{
				"参数": "activeColor",
				"说明": "进度条激活部分的颜色",
				"类型": "String",
				"默认值": "#19be6b",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "进度条的底色，默认为灰色",
				"类型": "String",
				"默认值": "#ececec",
				"可选值": "-"
			}, {
				"参数": "percentage",
				"说明": "进度百分比，数值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "showText",
				"说明": "是否在进度条内部显示百分比的值",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "height",
				"说明": "进度条的高度，默认单位px",
				"类型": "String | Number",
				"默认值": "12",
				"可选值": "-"
			}],
			"slots": [{
				"名称": "default",
				"说明": "传入自定义的显示内容，将会覆盖默认显示的百分比值"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/countDown.html",
		"name": "CountDown 倒计时",
		"template": "<u-count-down id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-count-down>",
		"param": {
			"props": [{
				"参数": "time",
				"说明": "倒计时时长，单位ms",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "format",
				"说明": "时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒",
				"类型": "String",
				"默认值": "HH:mm:ss",
				"可选值": "-"
			}, {
				"参数": "autoStart",
				"说明": "是否自动开始倒计时",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "millisecond",
				"说明": "是否展示毫秒倒计时",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"events": [{
				"事件名": "change",
				"说明": "过程中，倒计时变化时触发",
				"回调参数": "time: 剩余的时间"
			}, {
				"事件名": "finish",
				"说明": "倒计时结束",
				"回调参数": "-"
			}],
			"methods": [{
				"名称": "start",
				"说明": "开始倒计时"
			}, {
				"名称": "pause",
				"说明": "暂停倒计时"
			}, {
				"名称": "reset",
				"说明": "重置倒计时"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/countTo.html",
		"name": "CountTo 数字滚动",
		"template": "<u-count-to id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-count-to>",
		"param": {
			"props": [{
				"参数": "startVal",
				"说明": "开始值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "endVal",
				"说明": "结束值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
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
				"参数": "useEasing",
				"说明": "滚动结束时，是否缓动结尾，见上方说明",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "decimal",
				"说明": "十进制分割",
				"类型": "String",
				"默认值": ".",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，单位px",
				"类型": "String | Number",
				"默认值": "22",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "字体是否加粗",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "separator",
				"说明": "千位分隔符，见上方说明",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"methods": [{
				"名称": "start",
				"说明": "autoplay为false时，通过此方法启动滚动"
			}, {
				"名称": "reStart",
				"说明": "暂停后重新开始滚动(从暂停前的值开始滚动)"
			}, {
				"名称": "paused",
				"说明": "暂停滚动"
			}],
			"event": [{
				"事件名": "end",
				"说明": "数值滚动到目标值时触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}],
	"反馈组件": [{
		"href": "https://www.uviewui.com/components/tooltip.html",
		"name": "Tooltip 长按提示",
		"template": "<u-tooltip id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-tooltip>",
		"param": {
			"tooltip-props": [{
				"参数": "text",
				"说明": "需要显示的提示文字",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "copyText",
				"说明": "点击复制按钮时，复制的文本，为空则使用text值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "文本大小",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "弹出提示框时，文本的背景色",
				"类型": "String",
				"默认值": "transparent",
				"可选值": "-"
			}, {
				"参数": "direction",
				"说明": "弹出提示的方向，top-上方，bottom-下方",
				"类型": "String",
				"默认值": "top",
				"可选值": "bottom"
			}, {
				"参数": "zIndex",
				"说明": "弹出提示的z-index，nvue无效",
				"类型": "String | Number",
				"默认值": "10071",
				"可选值": "-"
			}, {
				"参数": "showCopy",
				"说明": "是否显示复制按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "buttons",
				"说明": "扩展的按钮组",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "overlay",
				"说明": "是否显示透明遮罩以防止触摸穿透",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showToast",
				"说明": "是否显示复制成功或者失败的toast",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"tooltip-events": [{
				"事件名": "click",
				"说明": "点击触发事件",
				"回调参数": "index，被点击按钮的索引"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/actionSheet.html",
		"name": "ActionSheet 操作菜单",
		"template": "<u-action-sheet id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-action-sheet>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否展示",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "title",
				"说明": "设置标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "description",
				"说明": "选项上方的描述信息，见上方文档示例",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "actions",
				"说明": "按钮的文字数组，见上方文档示例",
				"类型": "Array<Object>",
				"默认值": "[ ]",
				"可选值": "-"
			}, {
				"参数": "cancelText",
				"说明": "取消按钮的文字，不为空时显示按钮",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "closeOnClickAction",
				"说明": "点击某个菜单项时是否关闭弹窗，见上方文档示例",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "safeAreaInsetBottom",
				"说明": "是否开启底部安全区适配",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "openType",
				"说明": "小程序的打开方式",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "点击遮罩是否允许关闭，见上方文档示例（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "round",
				"说明": "圆角值，默认无圆角",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "lang",
				"说明": "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
				"类型": "String",
				"默认值": "en",
				"可选值": "zh_CN | zh_TW | en"
			}, {
				"参数": "sessionFrom",
				"说明": "会话来源，open-type=\"contact\"时有效。只微信小程序有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "sendMessageTitle",
				"说明": "会话内消息卡片标题，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "sendMessagePath",
				"说明": "会话内消息卡片点击跳转小程序路径，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "sendMessageImg",
				"说明": "会话内消息卡片图片，openType=\"contact\"时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "showMessageCard",
				"说明": "是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示\"可能要发送的小程序\"提示，用户点击后可以快速发送小程序消息，openType=\"contact\"时有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "appParameter",
				"说明": "打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "select",
				"说明": "点击ActionSheet列表项时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "close",
				"说明": "点击取消按钮时触发",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "getuserinfo",
				"说明": "用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType=\"getUserInfo\"时有效",
				"回调参数": "detail",
				"版本": "-"
			}, {
				"事件名": "contact",
				"说明": "客服消息回调，openType=\"contact\"时有效",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "getphonenumber",
				"说明": "获取用户手机号回调，openType=\"getPhoneNumber\"时有效",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "error",
				"说明": "当使用开放能力时，发生错误的回调，openType=\"error\"时有效",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "launchapp",
				"说明": "打开 APP 成功的回调，openType=\"launchApp\"时有效",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "opensetting",
				"说明": "在打开授权设置页后回调，openType=\"openSetting\"时有效",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/alert.html",
		"name": "Alert 警告提示",
		"template": "<u-alert id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-alert>",
		"param": {
			"props": [{
				"参数": "title",
				"说明": "显示的文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "使用预设的颜色",
				"类型": "String",
				"默认值": "warning",
				"可选值": "success | primary | error | info"
			}, {
				"参数": "description",
				"说明": "辅助性文字，颜色比title浅一点，字号也小一点，可选",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "closable",
				"说明": "关闭按钮(默认为叉号icon图标)",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "showIcon",
				"说明": "是否显示左边的辅助图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "effect",
				"说明": "多图时，图片缩放裁剪的模式",
				"类型": "String",
				"默认值": "light(浅色)",
				"可选值": "dark(深色)"
			}, {
				"参数": "center",
				"说明": "文字是否居中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "fontSize",
				"说明": "字体大小",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击组件时触发",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/toast.html",
		"name": "Toast 消息提示",
		"template": "<u-toast id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-toast>",
		"param": {
			"params": [{
				"参数": "loading",
				"说明": "是否加载中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "message",
				"说明": "显示的文本",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "图标，或者绝对路径的图片",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "position",
				"说明": "toast出现的位置",
				"类型": "String",
				"默认值": "center",
				"可选值": "top / bottom"
			}, {
				"参数": "type",
				"说明": "主题类型",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "params",
				"说明": "跳转的参数",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "展示时间，单位ms",
				"类型": "String | Number",
				"默认值": "2000",
				"可选值": "-"
			}, {
				"参数": "complete",
				"说明": "执行完后的回调函数",
				"类型": "Function",
				"默认值": "null",
				"可选值": "-"
			}],
			"methods": [{
				"方法名": "show",
				"说明": "显示toast，如需一进入页面就显示toast，请在onReady生命周期调用",
				"参数": "见上方说明",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/noticeBar.html",
		"name": "NoticeBar 滚动通知",
		"template": "<u-notice-bar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-notice-bar>",
		"param": {
			"props": [{
				"参数": "text",
				"说明": "显示的内容，direction为column时要求为数组， 为row时要求为字符串",
				"类型": "Array | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "direction",
				"说明": "通告滚动模式，row-横向滚动，column-竖向滚动",
				"类型": "String",
				"默认值": "row",
				"可选值": "column"
			}, {
				"参数": "step",
				"说明": "direction = row时，是否使用步进形式滚动",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "icon",
				"说明": "是否显示左侧的音量图标",
				"类型": "String",
				"默认值": "volume",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "通告模式，link-显示右箭头，closable-显示右侧关闭图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "link / closable"
			}, {
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#f9ae3d",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "#fdf6ec",
				"可选值": "-"
			}, {
				"参数": "speed",
				"说明": "水平滚动时的滚动速度，即每秒滚动多少px(rpx)，这有利于控制文字无论多少时，都能有一个恒定的速度",
				"类型": "String | Number",
				"默认值": "80",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "字体大小",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "滚动一个周期的时间长，单位ms",
				"类型": "String | Number",
				"默认值": "2000",
				"可选值": "-"
			}, {
				"参数": "disableTouch",
				"说明": "是否禁止用手滑动切换（目前HX2.6.11，只支持App 2.5.5+、H5 2.5.5+、支付宝小程序、字节跳动小程序）",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "url",
				"说明": "跳转的页面路径",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "linkType",
				"说明": "页面跳转的类型",
				"类型": "String",
				"默认值": "navigateTo",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击通告文字触发",
				"回调参数": "index: 点击的text的索引",
				"版本": "-"
			}, {
				"事件名": "close",
				"说明": "点击右侧关闭图标触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/notify.html",
		"name": "Notify 消息提示",
		"template": "<u-notify id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-notify>",
		"param": {
			"methods": [{
				"事件名": "show",
				"说明": "显示并加载配置",
				"类型": "Handler"
			}, {
				"事件名": "primary / success / warning /error",
				"说明": "显示当前主题消息提示",
				"类型": "Handler"
			}, {
				"事件名": "close",
				"说明": "关闭消息提示",
				"类型": "Handler"
			}],
			"show-methods-arguments": [{
				"参数": "top",
				"说明": "到顶部的距离",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "type",
				"说明": "主题，primary，success，warning，error",
				"类型": "String",
				"默认值": "primary",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "message",
				"说明": "展示的文字内容",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "展示时长，为0时不消失，单位ms",
				"类型": "String | Number",
				"默认值": "3000",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "15",
				"可选值": "-"
			}, {
				"参数": "safeAreaInsetTop",
				"说明": "是否留出顶部安全距离（状态栏高度）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"slot": [{
				"参数": "icon",
				"说明": "通知内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/swipeAction.html",
		"name": "SwipeAction 滑动单元格",
		"template": "<u-swipe-action id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-swipe-action>",
		"param": {
			"swipeaction-props": [{
				"参数": "autoClose",
				"说明": "是否自动关闭其他swipe按钮组",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"swipeaction-event": [{
				"事件名": "click",
				"说明": "点击组件时触发",
				"回调参数": "(index)"
			}],
			"swipeactionitem-props": [{
				"参数": "show",
				"说明": "控制打开或者关闭",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "index",
				"说明": "标识符，如果是v-for，可用index索引",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "autoClose",
				"说明": "是否自动关闭其他swipe按钮组",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "threshold",
				"说明": "滑动距离阈值，只有大于此值，才被认为是要打开菜单",
				"类型": "Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "options",
				"说明": "右侧按钮内容",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "动画过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "标识符，如果是v-for，可用index索引值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"swipeactionitem-event": [{
				"事件名": "click",
				"说明": "按钮被点击时触发",
				"回调参数": "name: props参数name的值，index: 第几个按钮被点击"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/collapse.html",
		"name": "Collapse 折叠面板",
		"template": "<u-collapse id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-collapse>",
		"param": {
			"collapse-props": [{
				"参数": "value",
				"说明": "当前展开面板的name，非手风琴模式：[<String | Number>]，手风琴模式：String | Number",
				"类型": "String | Number | Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "accordion",
				"说明": "是否手风琴模式",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "border",
				"说明": "是否显示外边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"collapse-item-props": [{
				"参数": "title",
				"说明": "面板标题",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "标题右侧内容",
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
				"参数": "disabled",
				"说明": "面板是否可以打开或收起",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "isLink",
				"说明": "是否展示右侧箭头并开启点击反馈",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "clickable",
				"说明": "是否开启点击反馈",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border",
				"说明": "是否显示内边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "align",
				"说明": "标题的对齐方式",
				"类型": "String",
				"默认值": "left",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "唯一标识符，如不设置，默认用当前collapse-item的索引值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "标题左侧图片，可为绝对路径的图片或内置图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "面板展开收起的过渡时间，单位ms",
				"类型": "Number",
				"默认值": "300",
				"可选值": "-"
			}],
			"collapse-event": [{
				"事件名": "change",
				"说明": "当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)",
				"回调参数": "activeNames: String | Array"
			}, {
				"事件名": "open",
				"说明": "当前激活面板展开时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)",
				"回调参数": "activeNames: String | Array"
			}, {
				"事件名": "close",
				"说明": "当前激活面板关闭时触发(如果是手风琴模式，参数activeNames类型为String，否则为Array)",
				"回调参数": "activeNames: String | Array"
			}],
			"collapse-methods": [{
				"方法": "init",
				"说明": "重新初始化内部高度计算，用于异步获取内容的情形，请结合this.$nextTick()使用"
			}],
			"slot": [{
				"名称": "-",
				"说明": "主体部分的内容"
			}, {
				"名称": "title",
				"说明": "标题内容"
			}, {
				"名称": "icon",
				"说明": "icon"
			}, {
				"名称": "value",
				"说明": "右侧value"
			}, {
				"名称": "right-icon",
				"说明": "右侧icon"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/popup.html",
		"name": "Popup 弹出层",
		"template": "<u-popup id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-popup>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否展示弹窗",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "overlay",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "mode",
				"说明": "弹出方向",
				"类型": "String",
				"默认值": "bottom",
				"可选值": "top / right / bottom / center"
			}, {
				"参数": "duration",
				"说明": "遮罩打开或收起的动画过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "closeable",
				"说明": "是否显示关闭图标",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "overlayStyle",
				"说明": "遮罩自定义样式，一般用于修改遮罩颜色，如：{background: 'rgba(3, 100, 219, 0.5)'}",
				"类型": "Object | String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "overlayOpacity",
				"说明": "遮罩透明度，0-1之间，勿与overlayStyle共用",
				"类型": "Number | String",
				"默认值": "0.5",
				"可选值": "-"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "zIndex",
				"说明": "弹出层的z-index值",
				"类型": "Number | String",
				"默认值": "10075",
				"可选值": "-"
			}, {
				"参数": "safeAreaInsetBottom",
				"说明": "是否为留出底部安全距离",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "safeAreaInsetTop",
				"说明": "是否留出顶部安全距离（状态栏高度）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closeIconPos",
				"说明": "自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角",
				"类型": "String",
				"默认值": "top-right",
				"可选值": "top-left / bottom-left / bottom-right"
			}, {
				"参数": "round",
				"说明": "设置圆角值，仅对mode = top | bottom | cener有效",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "zoom",
				"说明": "当mode=center时 是否开启缩放",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "bgColor",
				"说明": "背景色，一般用于特殊弹窗内容场景，设置为transparent可去除默认的白色背景",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "customStyle",
				"说明": "用户自定义样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"event": [{
				"事件名": "open",
				"说明": "弹出层打开",
				"回调参数": "-",
				"版本": "-"
			}, {
				"事件名": "close",
				"说明": "弹出层收起",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/modal.html",
		"name": "Modal 模态框",
		"template": "<u-modal id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-modal>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否显示模态框，请赋值给show",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "title",
				"说明": "标题内容",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "content",
				"说明": "模态框内容，如传入slot内容，则此参数无效",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "confirmText",
				"说明": "确认按钮的文字",
				"类型": "String",
				"默认值": "确认",
				"可选值": "-"
			}, {
				"参数": "cancelText",
				"说明": "取消按钮的文字",
				"类型": "String",
				"默认值": "取消",
				"可选值": "-"
			}, {
				"参数": "showConfirmButton",
				"说明": "是否显示确认按钮",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showCancelButton",
				"说明": "是否显示取消按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "confirmColor",
				"说明": "确认按钮的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "cancelColor",
				"说明": "取消按钮的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "buttonReverse",
				"说明": "对调确认和取消的位置",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "zoom",
				"说明": "是否开启缩放模式",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "asyncClose",
				"说明": "是否异步关闭，只对确定按钮有效，见上方说明",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closeOnClickOverlay",
				"说明": "是否允许点击遮罩关闭Modal（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "negativeTop",
				"说明": "往上偏移的值，给一个负的margin-top，往上偏移，避免和键盘重合的情况，单位任意，数值则默认为rpx单位",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "modal宽度，不支持百分比，可以数值，px，rpx单位",
				"类型": "String | Number",
				"默认值": "650rpx",
				"可选值": "px | rpx"
			}, {
				"参数": "confirmButtonShape",
				"说明": "确认按钮的样式,如设置，将不会显示取消按钮",
				"类型": "String",
				"默认值": "-",
				"可选值": "circle(圆形) | square(方形)"
			}],
			"event": [{
				"事件名": "confirm",
				"说明": "点击确认按钮时触发",
				"回调参数": "-"
			}, {
				"事件名": "cancel",
				"说明": "点击取消按钮时触发",
				"回调参数": "-"
			}, {
				"事件名": "close",
				"说明": "点击遮罩关闭出发，closeOnClickOverlay为true有效",
				"回调参数": "-"
			}],
			"slots": [{
				"名称": "default",
				"说明": "传入自定义内容，一般为富文本，见上方说明"
			}, {
				"名称": "confirm-button",
				"说明": "传入自定义按钮，用于在微信小程序弹窗通过按钮授权的场景"
			}]
		}
	}],
	"布局组件": [{
		"href": "https://www.uviewui.com/components/scrollList.html",
		"name": "ScrollList 横向滚动列表",
		"template": "<u-scroll-list id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-scroll-list>",
		"param": {
			"props": [{
				"参数": "indicatorWidth",
				"说明": "指示器的整体宽度",
				"类型": "String | Number",
				"默认值": "50",
				"可选值": "-"
			}, {
				"参数": "indicatorBarWidth",
				"说明": "滑块的宽度",
				"类型": "String | Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "indicator",
				"说明": "是否显示面板指示器",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "indicatorColor",
				"说明": "指示器非激活颜色",
				"类型": "String",
				"默认值": "#f2f2f2",
				"可选值": "-"
			}, {
				"参数": "indicatorActiveColor",
				"说明": "指示器滑块颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "indicatorStyle",
				"说明": "指示器样式，可通过bottom，left，right进行定位",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "left",
				"说明": "滑动到左边时触发",
				"回调参数": "-"
			}, {
				"事件名": "right",
				"说明": "滑动到右边时触发",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/line.html",
		"name": "Line 线条",
		"template": "<u-line id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-line>",
		"param": {
			"props": [{
				"参数": "color",
				"说明": "线条的颜色",
				"类型": "String",
				"默认值": "#d6d7d9",
				"可选值": "-"
			}, {
				"参数": "length",
				"说明": "长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等",
				"类型": "String | Number",
				"默认值": "100%",
				"可选值": "-"
			}, {
				"参数": "direction",
				"说明": "线条的方向，row-横向，col-竖向",
				"类型": "String",
				"默认值": "row",
				"可选值": "col"
			}, {
				"参数": "hairline",
				"说明": "是否显示细边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "margin",
				"说明": "线条与上下左右元素的间距，字符串形式，如\"30rpx\"、\"20rpx 30rpx\"，默认单位px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "dashed",
				"说明": "是否虚线，false-实线，true-虚线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/overlay.html",
		"name": "Overlay 遮罩层",
		"template": "<u-overlay id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-overlay>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否显示遮罩",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "zIndex",
				"说明": "z-index 层级",
				"类型": "String | Number",
				"默认值": "10070",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "动画时长，单位毫秒",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "opacity",
				"说明": "不透明度值，当做rgba的第四个参数",
				"类型": "String | Number",
				"默认值": "0.5",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击遮罩发送此事件",
				"回调参数": "-"
			}],
			"slot": [{
				"名称": "default",
				"说明": "默认插槽，用于在遮罩层上方嵌入内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/noNetwork.html",
		"name": "NoNetwork 无网络提示",
		"template": "<u-no-network id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-no-network>",
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
				"回调参数": "-"
			}, {
				"事件名": "connected",
				"说明": "\"重试\"后，有网络触发",
				"回调参数": "-"
			}, {
				"事件名": "disconnected",
				"说明": "\"重试\"后，无网络触发",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/grid.html",
		"name": "Grid 宫格布局",
		"template": "<u-grid id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-grid>",
		"param": {
			"grid-props": [{
				"参数": "col",
				"说明": "宫格的列数",
				"类型": "String | Number",
				"默认值": "3",
				"可选值": "-"
			}, {
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
				"可选值": "center / right"
			}],
			"grid-item-props": [{
				"参数": "name",
				"说明": "宫格的name",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "宫格的背景颜色",
				"类型": "String",
				"默认值": "transparent(背景透明)",
				"可选值": "-"
			}],
			"grid-event": [{
				"事件名": "click",
				"说明": "点击宫格触发",
				"回调参数": "name"
			}],
			"grid-item-event": [{
				"事件名": "click",
				"说明": "点击宫格触发",
				"回调参数": "name"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/swiper.html",
		"name": "Swiper 轮播图",
		"template": "<u-swiper id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-swiper>",
		"param": {
			"swiper-props": [{
				"参数": "list",
				"说明": "轮播图数据，见上方\"基本使用\"说明",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "indicator",
				"说明": "是否显示面板指示器",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "indicatorActiveColor",
				"说明": "指示器激活的颜色",
				"类型": "String",
				"默认值": "#FFFFFF",
				"可选值": "-"
			}, {
				"参数": "indicatorInactiveColor",
				"说明": "指示器非激活颜色",
				"类型": "String",
				"默认值": "rgba(255, 255, 255, 0.35)",
				"可选值": "-"
			}, {
				"参数": "indicatorStyle",
				"说明": "指示器样式，可通过bottom，left，right进行定位",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "indicatorMode",
				"说明": "指示器模式",
				"类型": "String",
				"默认值": "line",
				"可选值": "dot"
			}, {
				"参数": "autoplay",
				"说明": "是否自动切换",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "current",
				"说明": "当前所在滑块的 index",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "currentItemId",
				"说明": "当前所在滑块的 item-id ，不能与 current 被同时指定",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "interval",
				"说明": "滑块自动切换时间间隔（ms）",
				"类型": "String | Number",
				"默认值": "3000",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "滑块切换过程所需时间（ms），nvue不支持",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "circular",
				"说明": "播放到末尾后是否重新回到开头",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "previousMargin",
				"说明": "前边距，可用于露出前一项的一小部分，nvue和支付宝不支持",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "nextMargin",
				"说明": "后边距，可用于露出后一项的一小部分，nvue和支付宝不支持",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "acceleration",
				"说明": "当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "displayMultipleItems",
				"说明": "同时显示的滑块数量，nvue、支付宝小程序不支持",
				"类型": "Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "easingFunction",
				"说明": "指定swiper切换缓动动画类型， 只对微信小程序有效",
				"类型": "String",
				"默认值": "default",
				"可选值": "linear、easeInCubic、easeOutCubic、easeInOutCubic"
			}, {
				"参数": "keyName",
				"说明": "list数组中指定对象的目标属性名",
				"类型": "String",
				"默认值": "url",
				"可选值": "-"
			}, {
				"参数": "imgMode",
				"说明": "图片的裁剪模式",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "详见图片裁剪"
			}, {
				"参数": "height",
				"说明": "组件高度",
				"类型": "String | Number",
				"默认值": "130",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "#f3f4f6",
				"可选值": "-"
			}, {
				"参数": "radius",
				"说明": "组件圆角，数值或带单位的字符串",
				"类型": "String | Number",
				"默认值": "4",
				"可选值": "-"
			}, {
				"参数": "loading",
				"说明": "是否加载中",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "showTitle",
				"说明": "是否显示标题，要求数组对象中有title属性",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "-"
			}],
			"swiper-events": [{
				"事件名": "click",
				"说明": "点击轮播图时触发",
				"回调参数": "index：点击了第几张图片，从0开始"
			}, {
				"事件名": "change",
				"说明": "轮播图切换时触发(自动或者手动切换)",
				"回调参数": "index：切换到了第几张图片，从0开始"
			}],
			"swiperindicator-props": [{
				"参数": "length",
				"说明": "轮播的长度",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "current",
				"说明": "当前处于活动状态的轮播的索引",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "indicatorActiveColor",
				"说明": "指示器非激活颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "indicatorInactiveColor",
				"说明": "指示器的激活颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "indicatorStyle",
				"说明": "指示器的形式",
				"类型": "String",
				"默认值": "line",
				"可选值": "dot"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/skeleton.html",
		"name": "Skeleton 骨架屏",
		"template": "<u-skeleton id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-skeleton>",
		"param": {
			"props": [{
				"参数": "loading",
				"说明": "是否显示骨架占位图，设置为false将会展示子组件内容",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "animate",
				"说明": "是否开启动画效果",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "rows",
				"说明": "段落占位图行数",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "rowsWidth",
				"说明": "段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度",
				"类型": "String | Array | Number",
				"默认值": "100%",
				"可选值": "-"
			}, {
				"参数": "rowsHeight",
				"说明": "段落的高度",
				"类型": "String | Array | Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "是否展示标题占位图",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "titleWidth",
				"说明": "标题的宽度",
				"类型": "String | Number",
				"默认值": "50%",
				"可选值": "-"
			}, {
				"参数": "titleHeight",
				"说明": "标题的高度",
				"类型": "String | Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "avatar",
				"说明": "是否展示头像占位图",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "avatarSize",
				"说明": "头像占位图大小",
				"类型": "String | Number",
				"默认值": "32",
				"可选值": "-"
			}, {
				"参数": "avatarShape",
				"说明": "头像占位图的形状，circle-圆形，square-方形",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/sticky.html",
		"name": "Sticky 吸顶",
		"template": "<u-sticky id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-sticky>",
		"param": {
			"props": [{
				"参数": "offsetTop",
				"说明": "吸顶时与顶部的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "customNavHeight",
				"说明": "导航栏高度，自定义导航栏时，需要传入此值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "disabled",
				"说明": "是否禁用吸顶功能",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "bgColor",
				"说明": "组件背景颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "zIndex",
				"说明": "吸顶时的z-index值，NVUE无效",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "index",
				"说明": "自定义标识，用于区分是哪一个组件",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/divider.html",
		"name": "Divider 分割线",
		"template": "<u-divider id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-divider>",
		"param": {
			"props": [{
				"参数": "dashed",
				"说明": "是否虚线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "hairline",
				"说明": "是否细线",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "dot",
				"说明": "是否以点替代文字，优先于text字段起作用",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "textPosition",
				"说明": "内容文本的位置",
				"类型": "String",
				"默认值": "center",
				"可选值": "left、right"
			}, {
				"参数": "text",
				"说明": "文本内容",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "textSize",
				"说明": "文本大小",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "textColor",
				"说明": "文本颜色",
				"类型": "String",
				"默认值": "#909399",
				"可选值": "-"
			}, {
				"参数": "lineColor",
				"说明": "线条颜色",
				"类型": "String",
				"默认值": "#dcdfe6",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "divider组件被点击时触发",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}],
	"导航组件": [{
		"href": "https://www.uviewui.com/components/tabbar.html",
		"name": "Tabbar 底部导航栏",
		"template": "<u-tabbar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-tabbar>",
		"param": {
			"tablebar-props": [{
				"参数": "value",
				"说明": "当前匹配项的name",
				"类型": "String | Number",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "safeAreaInsetBottom",
				"说明": "是否为iPhoneX留出底部安全距离",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border",
				"说明": "是否显示上方边框",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "zIndex",
				"说明": "元素层级z-index",
				"类型": "String | Number",
				"默认值": "1",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "选中标签的颜色",
				"类型": "String",
				"默认值": "#1989fa",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未选中标签的颜色",
				"类型": "String",
				"默认值": "#7d7e80",
				"可选值": "-"
			}, {
				"参数": "fixed",
				"说明": "是否固定在底部",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "placeholder",
				"说明": "fixed定位固定在底部时，是否生成一个等高元素防止塌陷",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"tablebaritem-props": [{
				"参数": "name",
				"说明": "item标签的名称，作为与u-tabbar的value参数匹配的标识符",
				"类型": "String | Number",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "uView内置图标或者绝对路径的图片",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "badge",
				"说明": "右上角的角标提示信息",
				"类型": "String | Number",
				"默认值": "null",
				"可选值": "-"
			}, {
				"参数": "dot",
				"说明": "是否显示圆点，将会覆盖badge参数",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "text",
				"说明": "描述文本",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "badgeStyle",
				"说明": "控制徽标的位置，对象或者字符串形式，可以设置top和right属性",
				"类型": "Object | String",
				"默认值": "'top: 6px;right:2px;'",
				"可选值": "-"
			}],
			"tablebaritem-events": [{
				"事件名": "change",
				"说明": "切换选项时触发",
				"回调参数": "index：当前要切换项的name"
			}, {
				"事件名": "click",
				"说明": "切换选项时触发",
				"回调参数": "index：当前要切换项的name"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/backTop.html",
		"name": "BackTop 返回顶部",
		"template": "<u-back-top id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-back-top>",
		"param": {
			"props": [{
				"参数": "mode",
				"说明": "按钮形状",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}, {
				"参数": "icon",
				"说明": "uView内置图标名称，或图片路径",
				"类型": "String",
				"默认值": "arrow-upward",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "返回顶部按钮的提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "duration",
				"说明": "返回顶部过程中的过渡时间，单位ms",
				"类型": "String | Number",
				"默认值": "100",
				"可选值": "-"
			}, {
				"参数": "scrollTop",
				"说明": "页面的滚动距离，通过onPageScroll生命周期获取",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "top",
				"说明": "滚动条滑动多少距离时显示，单位rpx",
				"类型": "String | Number",
				"默认值": "400",
				"可选值": "-"
			}, {
				"参数": "bottom",
				"说明": "返回按钮位置到屏幕底部的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "100",
				"可选值": "-"
			}, {
				"参数": "right",
				"说明": "返回按钮位置到屏幕右边的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "z-index",
				"说明": "返回顶部按钮的层级",
				"类型": "String | Number",
				"默认值": "9",
				"可选值": "-"
			}, {
				"参数": "iconStyle",
				"说明": "图标的样式，对象形式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "customStyle",
				"说明": "按钮外层的自定义样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "-",
				"说明": "自定义返回按钮的所有内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/navbar.html",
		"name": "Navbar 自定义导航栏",
		"template": "<u-navbar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-navbar>",
		"param": {
			"props": [{
				"参数": "safeAreaInsetTop",
				"说明": "是否开启顶部安全区适配",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "placeholder",
				"说明": "固定在顶部时，是否生成一个等高元素，以防止塌陷",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "fixed",
				"说明": "导航栏是否固定在顶部",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "border",
				"说明": "导航栏底部是否显示下边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "leftIcon",
				"说明": "左边返回图标的名称，只能为uView自带的图标",
				"类型": "String",
				"默认值": "arrow-left",
				"可选值": "-"
			}, {
				"参数": "leftText",
				"说明": "左边的提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "rightText",
				"说明": "右边的提示文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "rightIcon",
				"说明": "右边返回图标的名称，只能为uView自带的图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "title",
				"说明": "导航栏标题，如设置为空字符，将会隐藏标题占位区域",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "导航栏背景设置",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "titleWidth",
				"说明": "导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx",
				"类型": "String | Number",
				"默认值": "400rpx",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px",
				"类型": "String | Number",
				"默认值": "44px",
				"可选值": "-"
			}, {
				"参数": "leftIconSize",
				"说明": "左侧返回图标的大小",
				"类型": "String | Number",
				"默认值": "20px",
				"可选值": "-"
			}, {
				"参数": "leftIconColor",
				"说明": "左侧返回图标的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "autoBack 2.0.19",
				"说明": "点击左侧区域(返回图标)，是否自动返回上一页",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "titleStyle 2.0.23",
				"说明": "标题的样式，对象或字符串形式",
				"类型": "String | Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"event": [{
				"名称": "leftClick",
				"说明": "点击左侧区域",
				"类型": "Handler"
			}, {
				"名称": "rightClick",
				"说明": "点击右侧区域",
				"类型": "Handler"
			}],
			"slot": [{
				"名称": "left",
				"说明": "自定义左侧部分内容"
			}, {
				"名称": "right",
				"说明": "自定义右侧部分内容"
			}, {
				"名称": "center 2.0.17",
				"说明": "自定义中部内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/tabs.html",
		"name": "tabs 标签",
		"template": "<utabs id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></utabs>",
		"param": {
			"props": [{
				"参数": "duration",
				"说明": "滑块移动一次所需的时间，单位ms",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "list",
				"说明": "标签数组，元素为对象，如[{name: '推荐'}]",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "lineColor",
				"说明": "滑块颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "activeStyle",
				"说明": "菜单选择中时的样式",
				"类型": "String | Object",
				"默认值": "{ color: '#303133' }",
				"可选值": "-"
			}, {
				"参数": "inactiveStyle",
				"说明": "菜单非选中时的样式",
				"类型": "String | Object",
				"默认值": "{ color: '#606266' }",
				"可选值": "-"
			}, {
				"参数": "lineWidth",
				"说明": "滑块长度",
				"类型": "String | Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "lineHeight",
				"说明": "滑块高度",
				"类型": "String | Number",
				"默认值": "3",
				"可选值": "-"
			}, {
				"参数": "lineBgSize 2.0.30",
				"说明": "滑块背景显示大小，当滑块背景设置为图片时使用",
				"类型": "String",
				"默认值": "cover",
				"可选值": "-"
			}, {
				"参数": "itemStyle",
				"说明": "菜单item的样式",
				"类型": "String | Object",
				"默认值": "{ height: '44px' }",
				"可选值": "-"
			}, {
				"参数": "scrollable",
				"说明": "菜单是否可滚动",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "current",
				"说明": "当前选中标签的索引",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "keyName",
				"说明": "从list元素对象中读取的键名",
				"类型": "String",
				"默认值": "name",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "click",
				"说明": "点击标签时触发",
				"回调参数": "index: 标签索引值，item: 传入的其他值",
				"版本": "-"
			}, {
				"事件名": "change",
				"说明": "标签索引改变时触发(disalbed时不会触发)",
				"回调参数": "index: 标签索引值，item: 传入的其他值",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/subsection.html",
		"name": "Subsection 分段器",
		"template": "<u-subsection id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-subsection>",
		"param": {
			"props": [{
				"参数": "list",
				"说明": "选项的数组，形式见上方\"基本使用\"",
				"类型": "Array",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "current",
				"说明": "初始化时默认选中的选项索引值",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "激活时的颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未激活时的颜色",
				"类型": "String",
				"默认值": "#303133",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方\"模式选择\"说明",
				"类型": "String",
				"默认值": "button",
				"可选值": "subsection"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，单位px",
				"类型": "String | Number",
				"默认值": "12",
				"可选值": "-"
			}, {
				"参数": "bold",
				"说明": "激活选项的字体是否加粗",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "bgColor",
				"说明": "组件背景颜色，mode为button时有效",
				"类型": "String",
				"默认值": "#eeeeef",
				"可选值": "-"
			}, {
				"参数": "keyName",
				"说明": "从list元素对象中读取的键名",
				"类型": "String",
				"默认值": "name",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "change",
				"说明": "分段器选项发生改变时触发",
				"回调参数": "index：选项的index索引值，从0开始"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/indexList.html",
		"name": "IndexList 索引列表",
		"template": "<u-index-list id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-index-list>",
		"param": {
			"indexbar-props": [{
				"参数": "inactiveColor",
				"说明": "右边锚点状态非激活时的颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "右边锚点状态激活时的颜色",
				"类型": "String",
				"默认值": "#5677fc",
				"可选值": "-"
			}, {
				"参数": "indexList",
				"说明": "索引字符列表，数组",
				"类型": "Array[string | number]",
				"默认值": "A-Z",
				"可选值": "-"
			}, {
				"参数": "sticky",
				"说明": "是否开启锚点自动吸顶",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "customNavHeight",
				"说明": "自定义导航栏的高度，单位默认px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"indexanchor-props": [{
				"参数": "text",
				"说明": "列表锚点文本内容",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "列表锚点文字颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "列表锚点文字大小，单位默认px",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "bgColor",
				"说明": "列表锚点背景颜色",
				"类型": "String",
				"默认值": "#dedede",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "列表锚点高度，单位默认px",
				"类型": "String | Number",
				"默认值": "32",
				"可选值": "-"
			}],
			"indexbar-events": [{
				"事件名": "select",
				"说明": "选中右边索引字符时触发",
				"回调参数": "index: 索引字符",
				"版本": "-"
			}],
			"indexitem-slots": [{
				"名称": "default",
				"说明": "自定义列表内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/steps.html",
		"name": "Steps 步骤条",
		"template": "<u-steps id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-steps>",
		"param": {
			"steps-props": [{
				"参数": "direction",
				"说明": "row-横向，column-竖向",
				"类型": "String",
				"默认值": "row",
				"可选值": "column"
			}, {
				"参数": "current",
				"说明": "设置当前处于第几步",
				"类型": "Number | String",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "activeColor",
				"说明": "激活状态颜色",
				"类型": "String",
				"默认值": "#3c9cff",
				"可选值": "-"
			}, {
				"参数": "inactiveColor",
				"说明": "未激活状态颜色",
				"类型": "String",
				"默认值": "#969799",
				"可选值": "-"
			}, {
				"参数": "activeIcon",
				"说明": "激活状态的图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "inactiveIcon",
				"说明": "未激活状态图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "dot",
				"说明": "是否显示点类型",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"steps-item-props": [{
				"参数": "title",
				"说明": "标题文字",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "current",
				"说明": "描述文本",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标大小",
				"类型": "String | Number",
				"默认值": "17",
				"可选值": "-"
			}, {
				"参数": "error",
				"说明": "当前步骤是否处于失败状态",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"slot": [{
				"名称": "-",
				"说明": "自定步骤状态内容"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/empty.html",
		"name": "Empty 内容为空",
		"template": "<u-empty id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" >slot-xxx</u-empty>",
		"param": {
			"props": [{
				"参数": "icon",
				"说明": "内置图标名称，或图片路径，建议绝对路径",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "文字提示",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "textColor",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "textSize",
				"说明": "文字大小",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "iconColor",
				"说明": "图标的颜色",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "iconSize",
				"说明": "图标的大小",
				"类型": "String | Number",
				"默认值": "90",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "内置的图标，见上方说明",
				"类型": "String",
				"默认值": "data",
				"可选值": "-"
			}, {
				"参数": "width",
				"说明": "图标的宽度，单位px",
				"类型": "String | Number",
				"默认值": "160",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "图标的高度，单位px",
				"类型": "String | Number",
				"默认值": "160",
				"可选值": "-"
			}, {
				"参数": "show",
				"说明": "是否显示组件",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "marginTop",
				"说明": "组件到上一个元素的间距,单位px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}],
			"slot": [{
				"名称": "-",
				"说明": "给组件底部传入slot内容"
			}]
		}
	}],
	"其他组件": [{
		"href": "https://www.uviewui.com/components/parse.html",
		"name": "Parse 富文本解析器",
		"template": "<u-parse id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-parse>",
		"param": {
			"props": [{
				"参数": "bgColor",
				"说明": "背景颜色，只适用与APP-PLUS-NVUE",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "content",
				"说明": "要显示的富文本字符串",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "copyLink",
				"说明": "是否允许外部链接被点击时自动复制",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "domain",
				"说明": "主域名，设置后将给链接自动拼接上主域名或协议名",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "errorImg",
				"说明": "图片出错时的占位图链接",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "lazyLoad",
				"说明": "是否开启图片懒加载，nvue不支持此属性",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "loadingImg",
				"说明": "图片加载完成前的占位图，详见 占位图",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "pauseVideo",
				"说明": "是否在播放一个视频时自动暂停其它视频",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "previewImg",
				"说明": "是否开启图片被点击时自动预览",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "scrollTable",
				"说明": "是否自动给 table 添加一个滚动层（使表格可以单独横向滚动）",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "selectable",
				"说明": "是否开启长按复制内容",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "setTitle",
				"说明": "是否自动将 title 标签的内容设置到页面标题",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "showImgMenu",
				"说明": "是否开启图片被长按时显示菜单",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "tagStyle",
				"说明": "设置标签的默认样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "useAnchor",
				"说明": "是否使用页面内锚点",
				"类型": "Boolean/Number",
				"默认值": "false",
				"可选值": "true"
			}],
			"event": [{
				"事件名": "load",
				"说明": "dom 加载完成时触发",
				"回调参数": "所有节点被添加到节点树中时触发，无返回值，可以调用 api"
			}, {
				"事件名": "ready",
				"说明": "渲染完成时触发",
				"回调参数": "返回 boundingClientRect 的查询结果（包含宽高、位置等信息），所有图片（除懒加载）加载完成时才会触发，图片较大时可能 延时较长"
			}, {
				"事件名": "error",
				"说明": "出错时触发",
				"回调参数": "返回一个 object，其中 source 是错误来源，errMsg 为错误信息，target 包含出错标签的具体信息"
			}, {
				"事件名": "imgTap",
				"说明": "图片被点击时触发",
				"回调参数": "返回一个 object，其中 src 是图片链接，ignore 是一个函数，在事件中调用将不进行预览；可用于阻挡 onShow 的调用"
			}, {
				"事件名": "linkTap",
				"说明": "在链接被点击时触发",
				"回调参数": "返回一个 object，其中包含了被点击的 a 标签的所有属性，ignore 是一个函数，在事件中调用后将不自动跳转/复制；可在该事件中进行下载文档等进一步操作"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/codeInput.html",
		"name": "CodeInput 验证码输入",
		"template": "<u-code-input id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-code-input>",
		"param": {
			"props": [{
				"参数": "maxlength",
				"说明": "输入字符个数",
				"类型": "String \\ Number",
				"默认值": "6",
				"可选值": "-"
			}, {
				"参数": "dot",
				"说明": "是否用圆点填充",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mode",
				"说明": "模式选择，见上方\"基本使用\"说明",
				"类型": "String",
				"默认值": "box",
				"可选值": "bottomLine / middleLine"
			}, {
				"参数": "hairline",
				"说明": "是否细边框",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "space",
				"说明": "字符间的距离",
				"类型": "String \\ Number",
				"默认值": "10",
				"可选值": "-"
			}, {
				"参数": "value",
				"说明": "预置值",
				"类型": "String \\ Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "focus",
				"说明": "是否自动获取焦点",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "false"
			}, {
				"参数": "bold",
				"说明": "字体和输入横线是否加粗",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，单位rpx",
				"类型": "String \\ Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "输入框的大小，宽等于高",
				"类型": "String \\ Number",
				"默认值": "35",
				"可选值": "-"
			}, {
				"参数": "disabledKeyboard",
				"说明": "禁止点击输入框唤起系统键盘",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "borderColor",
				"说明": "边框和线条颜色",
				"类型": "String",
				"默认值": "#c9cacc",
				"可选值": "-"
			}, {
				"参数": "disabledDot",
				"说明": "是否禁止输入\".\"符号",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}],
			"events": [{
				"事件名": "change",
				"说明": "输入内容发生改变时触发，具体见上方说明",
				"回调参数": "value：当前输入的值",
				"版本": "-"
			}, {
				"事件名": "finish",
				"说明": "输入字符个数达maxlength值时触发，见上方说明",
				"回调参数": "value：当前输入的值",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/loadMore.html",
		"name": "LoadMore 加载更多",
		"template": "<u-load-more id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-load-more>",
		"param": {
			"props": [{
				"参数": "status",
				"说明": "组件状态",
				"类型": "String",
				"默认值": "loadmore",
				"可选值": "loading / nomore"
			}, {
				"参数": "bgColor",
				"说明": "组件背景颜色，在页面是非白色时会用到(默认为transparent)",
				"类型": "String",
				"默认值": "transparent",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "加载中时是否显示图标",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "false"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，单位rpx",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "字体颜色",
				"类型": "String",
				"默认值": "#606266",
				"可选值": "-"
			}, {
				"参数": "loadingIcon",
				"说明": "加载中状态的图标",
				"类型": "String",
				"默认值": "circle",
				"可选值": "spinner / semicircle"
			}, {
				"参数": "loadmoreText",
				"说明": "加载前的提示语",
				"类型": "String",
				"默认值": "加载更多",
				"可选值": "-"
			}, {
				"参数": "loadingText",
				"说明": "加载中提示语",
				"类型": "String",
				"默认值": "正在加载...",
				"可选值": "-"
			}, {
				"参数": "nomoreText",
				"说明": "没有更多的提示语",
				"类型": "String",
				"默认值": "没有更多了",
				"可选值": "-"
			}, {
				"参数": "isDot",
				"说明": "status为nomore时，内容显示为一个\"●\"",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "iconColor",
				"说明": "加载中的动画图标的颜色",
				"类型": "String",
				"默认值": "#b7b7b7",
				"可选值": "-"
			}, {
				"参数": "marginTop",
				"说明": "与前一个元素的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "10",
				"可选值": "-"
			}, {
				"参数": "marginBottom",
				"说明": "与后一个元素的距离，单位rpx",
				"类型": "String | Number",
				"默认值": "10",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "高度",
				"类型": "String | Number",
				"默认值": "auto",
				"可选值": "-"
			}, {
				"参数": "line",
				"说明": "是否显示左边分割线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}],
			"event": [{
				"事件名": "loadmore",
				"说明": "status为loadmore时，点击组件会发出此事件",
				"回调参数": "-",
				"版本": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/readMore.html",
		"name": "ReadMore 展开阅读更多",
		"template": "<u-read-more id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-read-more>",
		"param": {
			"props": [{
				"参数": "showHeight",
				"说明": "内容超出此高度才会显示展开全文按钮，单位rpx",
				"类型": "String | Number",
				"默认值": "400",
				"可选值": "-"
			}, {
				"参数": "toggle",
				"说明": "展开后是否显示收起按钮",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "closeText",
				"说明": "关闭时的提示文字",
				"类型": "String",
				"默认值": "展开阅读全文",
				"可选值": "-"
			}, {
				"参数": "openText",
				"说明": "展开时的提示文字",
				"类型": "String",
				"默认值": "收起",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "提示文字的颜色",
				"类型": "String",
				"默认值": "#2979ff",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "提示文字的大小，默认单位px",
				"类型": "String | Number",
				"默认值": "14",
				"可选值": "-"
			}, {
				"参数": "shadowStyle",
				"说明": "对阴影的自定义处理，对象形式",
				"类型": "Object",
				"默认值": "见上方说明",
				"可选值": "-"
			}, {
				"参数": "textIndent",
				"说明": "段落首行缩进的字符个数",
				"类型": "String",
				"默认值": "2em",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "用于在open和close事件中当作回调参数返回",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"methods": [{
				"名称": "init",
				"说明": "重新初始化组件内部高度计算过程，如果内嵌u-parse组件时可能需要用到"
			}],
			"events": [{
				"事件名": "open",
				"说明": "内容被展开时触发",
				"回调参数": "name - props中传入的name参数值"
			}, {
				"事件名": "close",
				"说明": "内容被收起时触发",
				"回调参数": "name - props中传入的name参数值"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/gap.html",
		"name": "Gap 间隔槽",
		"template": "<u-gap id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-gap>",
		"param": {
			"props": [{
				"参数": "bgColor",
				"说明": "背景颜色",
				"类型": "String",
				"默认值": "transparent(背景透明)",
				"可选值": "-"
			}, {
				"参数": "height",
				"说明": "间隔槽高度，单位px",
				"类型": "String | Number",
				"默认值": "20",
				"可选值": "-"
			}, {
				"参数": "marginTop",
				"说明": "与前一个元素的距离，单位px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}, {
				"参数": "marginBottom",
				"说明": "与后一个元素的距离，单位px",
				"类型": "String | Number",
				"默认值": "0",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/avatar.html",
		"name": "Avatar 头像",
		"template": "<u-avatar id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-avatar>",
		"param": {
			"avatar-props": [{
				"参数": "src",
				"说明": "头像路径，如加载失败，将会显示默认头像(不能为相对路径)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "头像形状",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}, {
				"参数": "size",
				"说明": "头像尺寸，可以为指定字符串(large, default, mini)，或者数值",
				"类型": "String | Number",
				"默认值": "40",
				"可选值": "-"
			}, {
				"参数": "mode",
				"说明": "头像图片的裁剪类型，与uni的image组件的mode参数一致，如效果达不到需求，可尝试传widthFix值",
				"类型": "String",
				"默认值": "scaleToFill",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "用文字替代图片，级别优先于src",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "bg-color",
				"说明": "背景颜色，一般显示文字时用",
				"类型": "String",
				"默认值": "#c0c4cc",
				"可选值": "-"
			}, {
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "#ffffff",
				"可选值": "-"
			}, {
				"参数": "font-size",
				"说明": "文字大小",
				"类型": "String | Number",
				"默认值": "18",
				"可选值": "-"
			}, {
				"参数": "icon",
				"说明": "显示的图标",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mp-avatar",
				"说明": "显示小程序头像，只对百度，微信，QQ小程序有效",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "random-bg-color",
				"说明": "是否使用随机背景色",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "default-url",
				"说明": "加载失败的默认头像(组件有内置默认图片)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "color-index",
				"说明": "如果配置了randomBgColor为true，且配置了此值，则从默认的背景色数组中取出对应索引的颜色值，取值0-19之间",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "name",
				"说明": "组件标识符",
				"类型": "String",
				"默认值": "level",
				"可选值": "-"
			}],
			"avatar-event": [{
				"事件名": "click",
				"说明": "头像被点击",
				"回调参数": "index: 用户传递的标识符"
			}],
			"avatargroup-props": [{
				"参数": "urls",
				"说明": "头像图片组",
				"类型": "Array",
				"默认值": "[]",
				"可选值": "-"
			}, {
				"参数": "maxCount",
				"说明": "最多展示的头像数量",
				"类型": "String | Number",
				"默认值": "5",
				"可选值": "-"
			}, {
				"参数": "shape",
				"说明": "头像形状",
				"类型": "String",
				"默认值": "circle",
				"可选值": "square"
			}, {
				"参数": "mode",
				"说明": "图片裁剪模式",
				"类型": "String",
				"默认值": "aspectFill",
				"可选值": "-"
			}, {
				"参数": "showMore",
				"说明": "超出maxCount时是否显示查看更多的提示",
				"类型": "Boolean",
				"默认值": "true",
				"可选值": "-"
			}, {
				"参数": "size",
				"说明": "头像大小",
				"类型": "String | Number",
				"默认值": "40",
				"可选值": "-"
			}, {
				"参数": "keyName",
				"说明": "指定从数组的对象元素中读取哪个属性作为图片地址",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "gap",
				"说明": "头像之间的遮挡比例（0.4代表遮挡40%）",
				"类型": "String | Number",
				"默认值": "0.5",
				"可选值": "-"
			}, {
				"参数": "extraValue",
				"说明": "需额外显示的值，如设置则优先于内部的urls.length - maxCount值",
				"类型": "String | Number",
				"默认值": "-",
				"可选值": "-"
			}],
			"avatargroup-event": [{
				"事件名": "showMore",
				"说明": "头像组更多点击",
				"回调参数": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/link.html",
		"name": "Link 超链接",
		"template": "<u-link id=\"id-xxx\" param-xxx  onclick=\"getUnitDesc('xxxxxx',event)\" ></u-link>",
		"param": {
			"props": [{
				"参数": "color",
				"说明": "文字颜色",
				"类型": "String",
				"默认值": "color['u-primary']",
				"可选值": "-"
			}, {
				"参数": "fontSize",
				"说明": "字体大小，默认单位px",
				"类型": "String | Number",
				"默认值": "15",
				"可选值": "-"
			}, {
				"参数": "underLine",
				"说明": "是否显示下划线",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "href",
				"说明": "跳转的链接，要带上http(s)",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "mpTips",
				"说明": "各个小程序平台把链接复制到粘贴板后的提示语",
				"类型": "String",
				"默认值": "链接已复制，请在浏览器打开",
				"可选值": "-"
			}, {
				"参数": "lineColor",
				"说明": "下划线颜色，默认同color参数颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}, {
				"参数": "text",
				"说明": "超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色",
				"类型": "String",
				"默认值": "-",
				"可选值": "-"
			}]
		}
	}, {
		"href": "https://www.uviewui.com/components/transition.html",
		"name": "Transition 动画",
		"template": "<u-transition id=\"id-xxx\" param-xxx event-xxx onclick=\"getUnitDesc('xxxxxx',event)\" ></u-transition>",
		"param": {
			"props": [{
				"参数": "show",
				"说明": "是否展示组件",
				"类型": "Boolean",
				"默认值": "false",
				"可选值": "true"
			}, {
				"参数": "mode",
				"说明": "使用的动画模式",
				"类型": "String",
				"默认值": "fade",
				"可选值": "true"
			}, {
				"参数": "duration",
				"说明": "动画的执行时间，单位ms",
				"类型": "String | Number",
				"默认值": "300",
				"可选值": "-"
			}, {
				"参数": "timingFunction",
				"说明": "使用的动画过渡函数，见上方说明",
				"类型": "String",
				"默认值": "ease-out",
				"可选值": "-"
			}, {
				"参数": "customStyle",
				"说明": "自定义样式",
				"类型": "Object",
				"默认值": "-",
				"可选值": "-"
			}],
			"events": [{
				"事件名": "beforeEnter",
				"说明": "进入前触发",
				"回调参数": "-"
			}, {
				"事件名": "enter",
				"说明": "进入中触发",
				"回调参数": "-"
			}, {
				"事件名": "afterEnter",
				"说明": "进入后触发",
				"回调参数": "-"
			}, {
				"事件名": "beforeLeave",
				"说明": "离开前触发",
				"回调参数": "-"
			}, {
				"事件名": "leave",
				"说明": "离开中触发",
				"回调参数": "-"
			}, {
				"事件名": "afterLeave",
				"说明": "离开后触发",
				"回调参数": "-"
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