
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ysd1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
https://xn--9kqs1lo79d.cc/api/v1/chuixue?token=3caec4e567a99d5bcbb853d2de4870c1
//https://sub.moeu.de/share/sub/dabo2yyds?token=thank2you
hysteria2://5a356497-0e54-4de7-9168-a07d0c5828fc@[2a14:67c4:11::1cb]:8882?sni=addons.mozilla.org#%F0%9F%87%AD%F0%9F%87%B0%20HK-alice
ss://MjAyMi1ibGFrZTMtYWVzLTEyOC1nY206cHdldmQvT1huSHVUeGhJL2Y2RVZ1dz09@[2a14:67c4:11::1cb]:8885?#%F0%9F%87%AD%F0%9F%87%B0%20HK-alice
vless://5a356497-0e54-4de7-9168-a07d0c5828fc@[2a14:67c4:11::1cb]:8890?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=Og2Vm65alg0qcznOMA9IaYacXNhpsL02kExG5_EeLD8&type=grpc&authority=&serviceName=grpc&mode=gun#%F0%9F%87%AD%F0%9F%87%B0%20HK-alice
tuic://5a356497-0e54-4de7-9168-a07d0c5828fc%3A5a356497-0e54-4de7-9168-a07d0c5828fc@[2a14:67c4:11::1cb]:8883?sni=addons.mozilla.org&alpn=h3&congestion_control=bbr#%F0%9F%87%AD%F0%9F%87%B0%20HK-alice

hysteria2://b6679aa0-53ea-416f-a826-762bb234826a@2.27.174.240:56036?sni=www.bing.com&insecure=1&pinSHA256=40318b6e2914cb4293b57b2d936b134caf3c67e211c030483bc0eb3e6db363ae#hy2-%E5%8F%B0%E6%B9%BE-ACCK
tuic://b6679aa0-53ea-416f-a826-762bb234826a%3Ab6679aa0-53ea-416f-a826-762bb234826a@2.27.174.240:20476?sni=www.bing.com&alpn=h3&allow_insecure=1&congestion_control=bbr#tu5-%E5%8F%B0%E6%B9%BE-ACCK
anytls://b6679aa0-53ea-416f-a826-762bb234826a@2.27.174.240:11535?insecure=1&security=tls&sni=www.bing.com&type=tcp&headerType=none#anytls-%E5%8F%B0%E6%B9%BE-ACCK
vless://e3384d9c-101c-47e0-b56d-af7513c82987@107.172.97.4:34412?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=tW22hw_KBbb8VpCmrbmuqmN_NGESSWsqSlUCGscBuyw&type=tcp&headerType=none#US-HostPapa
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlVTLUhvc3RQYXBhIiwNCiAgImFkZCI6ICJjZG5zLmRvb24uZXUub3JnIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogImUzMzg0ZDljLTEwMWMtNDdlMC1iNTZkLWFmNzUxM2M4Mjk4NyIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiY29ubmVjdC1zYW5kd2ljaC11cHBlci1yb24udHJ5Y2xvdWRmbGFyZS5jb20iLA0KICAicGF0aCI6ICIvdm1lc3MtYXJnbz9lZD0yNTYwIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogImNvbm5lY3Qtc2FuZHdpY2gtdXBwZXItcm9uLnRyeWNsb3VkZmxhcmUuY29tIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogImZpcmVmb3giLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiDQp9
hysteria2://e3384d9c-101c-47e0-b56d-af7513c82987@107.172.97.4:34415?sni=www.bing.com&insecure=1&pinSHA256=F7%3AAA%3AE8%3AE6%3A68%3A0C%3A0B%3A96%3A5A%3AAD%3A65%3A04%3A5B%3A63%3AA8%3A30%3A9B%3A77%3A90%3AE0%3A32%3A42%3AF3%3AD4%3A3E%3A9B%3AC8%3A0A%3AC7%3A30%3AFA%3A65#US-HostPapa
tuic://e3384d9c-101c-47e0-b56d-af7513c82987%3Ae3384d9c-101c-47e0-b56d-af7513c82987@107.172.97.4:34414?sni=www.bing.com&alpn=h3&allow_insecure=1&congestion_control=bbr#US-HostPapa

vless://7bd180e8-1142-4387-93f5-03e8d750a896@www.shopify.com:443?encryption=none&security=tls&sni=wasmer.jgdong25.ggff.net&fp=chrome&type=ws&host=wasmer.jgdong25.ggff.net&path=%2F7bd180e8#%E6%96%B0%E5%8A%A0%E5%9D%A1-Hetzner
vless://3d6d0c85-9296-4b54-9db0-2a1454f56607@142.91.106.45:8880?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.nazhumi.com&fp=chrome&pbk=cej7pYQVmEdFfznvVJzAOPnr8NlSTfr0V7eBqlwQYgw&sid=09ea482289d35791&type=tcp&headerType=none#JP-Leaseweb_%E6%97%A5%E6%9C%AC
tuic://CE1B617C-9715-4C05-9546-D0B0E79B08A2%3Ace1b617c-9715-4c05-9546-d0b0e79b08a2@23.95.32.92:39807?sni=www.bing.com&alpn=h3&allow_insecure=1&congestion_control=cubic#rn-dc3-%E7%BE%8E%E5%9B%BD
anytls://0e63b628-2b1b-47f9-b42a-8b3445b0117e@185.85.242.170:21266?insecure=1&security=tls&type=tcp&headerType=none#anytls-uk-%E5%BE%B7%E5%9B%BD


`

//请将机场订阅链接填入上方
let urls = [];// https://subs.zeabur.app/clash , https://neko-warp.nloli.xyz/neko_warp.yaml

let subconverter = "apiurl.v1.mk"; //在线订阅转换后端，目前使用肥羊的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		let links = await ADD(MainData + '\n' + urls.join('\n'));
		let link = "";
		let linksub = "";
		
		for (let x of links) {
			if (x.toLowerCase().startsWith('http')) {
				linksub += x + '\n';
			} else {
				link += x + '\n';
			}
		}
		MainData = link;
		urls = await ADD(linksub);
		let sublinks = request.url ;
		//console.log(MainData,urls,sublinks);
		
		let warp = env.WARP ;
		if(warp && warp != "") sublinks += '|' + (await ADD(warp)).join('|');

		if ( !(token == mytoken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage("#异常访问", request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			//首页改成一个nginx伪装页
			return new Response(`
			<!DOCTYPE html>
			<html>
			<head>
			<title>Welcome to nginx!</title>
			<style>
				body {
					width: 35em;
					margin: 0 auto;
					font-family: Tahoma, Verdana, Arial, sans-serif;
				}
			</style>
			</head>
			<body>
			<h1>Welcome to nginx!</h1>
			<p>If you see this page, the nginx web server is successfully installed and
			working. Further configuration is required.</p>
			
			<p>For online documentation and support please refer to
			<a href="http://nginx.org/">nginx.org</a>.<br/>
			Commercial support is available at
			<a href="http://nginx.com/">nginx.com</a>.</p>
			
			<p><em>Thank you for using nginx.</em></p>
			</body>
			</html>
			`, {
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else if ( TG == 1 || !userAgent.includes('subconverter') || !userAgent.includes('null')){
			await sendMessage("#获取订阅", request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
		}

		let req_data = MainData;
		// 创建一个AbortController对象，用于控制fetch请求的取消
		const controller = new AbortController();

		const timeout = setTimeout(() => {
			controller.abort(); // 取消所有请求
		}, 1618); // 1.618秒后触发

		try {
			const responses = await Promise.allSettled(urls.map(url =>
				fetch(url, {
					method: 'get',
					headers: {
						'Accept': 'text/html,application/xhtml+xml,application/xml;',
						'User-Agent': `v2rayn/6.42 cmliu/CF-Workers-SUB ${userAgentHeader}`
					},
					signal: controller.signal // 将AbortController的信号量添加到fetch请求中，以便于需要时可以取消请求
				}).then(response => {
					if (response.ok) {
						return response.text().then(content => {
							// 这里可以顺便做内容检查
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups') && content.includes('rules')) {
								//console.log("clashsub: " + url);
								sublinks += "|" + url;
							} else if  (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								//console.log("singboxsub: " + url);
								sublinks += "|" + url;
							} else {
								return content; // 保证链式调用中的下一个then可以接收到文本内容
							}
						});
					} else {
						return ""; // 如果response.ok为false，返回空字符串
					}
				})
			));	
			//console.log(responses);
			for (const response of responses) {
				if (response.status === 'fulfilled') {
					const content = await response.value;
					req_data += base64Decode(content) + '\n';
				}
			}
		} catch (error) {
			//console.error(error);
		} finally {
			// 无论成功或失败，最后都清除设置的超时定时器
			clearTimeout(timeout);
		}
		//修复中文错误
		const utf8Encoder = new TextEncoder();
		const encodedData = utf8Encoder.encode(req_data);
		const text = String.fromCharCode.apply(null, encodedData);

		//去重
		const uniqueLines = new Set(text.split('\n'));
		const result = [...uniqueLines].join('\n');
		//console.log(result);

		const base64Data = btoa(result);
		//console.log(base64Data);

		//console.log("自建节点: " + MainData,"订阅链接: " + urls,"转换链接: " + sublinks);

		let target = "v2ray";
		if (userAgent.includes('clash') && !userAgent.includes('nekobox')) {
			target = "clash";
		} else if (userAgent.includes('sing-box') || userAgent.includes('singbox')) {
			target = "singbox";
		} else {
			return new Response(base64Data ,{
				headers: { 
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		}

		const subconverterUrl = `https://${subconverter}/sub?target=${target}&url=${encodeURIComponent(sublinks)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;

		try {
			const subconverterResponse = await fetch(subconverterUrl);
			
			if (!subconverterResponse.ok) {
				throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
			}
			
			const subconverterContent = await subconverterResponse.text();
			
			return new Response(subconverterContent ,{
				headers: { 
					"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
					"content-type": "text/plain; charset=utf-8",
					"Profile-Update-Interval": `${SUBUpdateTime}`,
				}
			});
		} catch (error) {
			return new Response(`Error: ${error.message}`, {
				status: 500,
				headers: { 'content-type': 'text/plain; charset=utf-8' },
			});
		}

	}
};

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

// 将 base64 编码的字符串转换为 utf-8 编码的字符
function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function ADD(envadd) {
	var addtext = envadd.replace(/[	 "'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}
