
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'jgdong'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
//https://vps.3217000.xyz/jgdong1
vless://64205897-5003-4ad8-ade5-40e1e5b234a7@156.238.251.95:8880?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.apple.com&fp=chrome&pbk=Dz_vXf_v5quGpQptI7s20vH_ewO3EB8ZBLy7F3yvbyc&sid=1c2474de31c84b68&type=tcp&headerType=none#%E7%8B%90%E8%92%82%E4%BA%91US-Multacom
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhvbmdLb25nIiwNCiAgImFkZCI6ICIxMzkuMTk4LjEyMS4xNzMiLA0KICAicG9ydCI6ICIyMzY1NiIsDQogICJpZCI6ICJiZTA5ZDFkYy03OTAxLTQzNGYtOTczNi03ZWY4N2VkMjJmMzMiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogInRjcCIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICIiLA0KICAicGF0aCI6ICIiLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://fd950d30-fe08-43f6-b8fb-d70112f4690f@45.78.38.179:11402?encryption=none&security=reality&sni=swdist.apple.com&fp=chrome&pbk=g1f1wLjim5gOVGnI5LGUV0dL4iFXPoiepOPZfSxJe14&type=tcp&headerType=none#dmit%20.love%40xray.com
vless://06df5b3a-40e5-4314-a10d-f2e6a870fa7f@locvps.3217000.xyz:24176?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=tcp&headerType=none#locvps%7C8vcJ
vless://fc943f32-99ec-44d2-accf-b28a18ac3e2d@locvps.3217000.xyz:10447?encryption=none&security=tls&sni=locvps.3217000.xyz&fp=chrome&type=ws&path=%2F#locvpsws%7Co8eo.love
vless://64bfe164-78bf-4393-e423-b2d28ba31a8f@locvps.3217000.xyz:38932?encryption=none&security=reality&sni=www.cloudflare.com&fp=chrome&pbk=Z3ZGnAOdKkzJ07gR_7_0k9_iTTFP6paDOrqx1rN2LU4&type=tcp&headerType=none#locvpstcp%7CbpL2
ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTo2NjMyMGJmNi0yYTM2LTQ1YzUtYTE4Zi0zMWY3MmZjN2ZjMGQ=@l804xjpxgmg.vpntz.com:10423#%F0%9F%87%AD%F0%9F%87%B0%E9%A6%99%E6%B8%AFL1
vless://63af7042-ab32-4d77-9fdd-ff5a667455c2@192.9.251.50:12110?encryption=none&security=reality&sni=icloud.cdn-apple.com&fp=chrome&pbk=W9BjX6YmCIVsjhKMlz233Yoe0xcf0SVHfvPKqbf3vCg&type=tcp&headerType=none#%E9%BE%9F%E5%A3%B3%E5%9C%A3%E4%BD%95%E5%A1%9E%7Ccy2e.love%40xray.com
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogImRtaXQiLA0KICAiYWRkIjogIjIzLjE2Ni4xNjguOTMiLA0KICAicG9ydCI6ICIyMTA2MiIsDQogICJpZCI6ICIyOTc1MTk0ZC0zZGNiLTRiMTgtYmE2ZC01YmE1YzlkZDNjODkiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogIiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiINCn0=
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@172.64.106.188:443?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#k361-clone
vless://1e69d68c-b163-414c-fb85-f7d05dc953f1@ky11.mwedw51.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky11.mwedw51#ky11
vless://9ef72714-121e-47c4-a94b-487b65a2a005@ky01.fjsedf6523.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky01.fjsedf6523#ky01
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@yx.3217000.xyz:2053?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#Aocs-US
vless://a4ceb71e-3eef-474c-f467-d09b69327e40@urhsxfsf.tkpretty.com:59879?encryption=none&security=tls&type=ws&path=%2Fi7e5urthd#baipi
vless://9faa596b-7762-424d-bdc1-dbdb1063a940@fyfdrsi.tkpretty.com:42492?encryption=none&security=tls&type=ws&path=%2F34y5gwersfdv#baipi
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@43.153.103.203:443?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#US-SantaClara400
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@154.17.20.28:22477?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#US-SanJose-SJC4-clone
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@ru.a-dns.eu.org:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#%E8%8E%AB%E6%96%AF%E7%A7%91300Mbps%40%E6%97%A0%E9%99%90%E6%B5%81%E9%87%8F
vless://5bf6ca4d-786c-4dc2-8f5f-0ea46a6ffbf4@ky12.nefe512.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky12.nefe512#ky12
vless://6a768550-3d75-4f87-c61f-843b6415169d@ky41.rgrgjk54643.xyz:443?encryption=none&security=tls&type=ws&path=%2Fky41.rgrgjk54643#ky41
vless://29d7e10b-82a0-4425-bf5f-799deab5f204@45.147.201.45:10000?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.speedtest.net&fp=random&pbk=lw9C9lZKKC8pfwR_jOxYDpKTD54s0Ovffz3lVH3GuHU&sid=249e&spx=%2F&type=tcp&headerType=none#y2zow7qn
vless://d239f27d-6f3f-4633-fcc5-d4105b703df0@ky40.eghrr656.click:443?encryption=none&security=tls&type=ws&path=%2Fky40.eghrr656#ky40
vless://54497b6d-f570-42df-9365-e100a539e54e@161.35.97.77:30303?encryption=none&security=reality&sni=addons.mozilla.org&fp=chrome&pbk=cDaDzPr3PlS3NM8lreHZbdo-Mhqz8vMBzMSkHXhGIUA&type=tcp&headerType=none#danai%7CAyi5.love%40xray.com
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkIyN1x1NUZCN1x1OUUyMS1jbG9uZSIsDQogICJhZGQiOiAieXguMzIxNzAwMC54eXoiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZTk1ZTIyMTMtNjE1OS00YmJlLTlmZTUtMjhlNzA1YmMyM2VjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJxd2VxZXF3ZXF3ZXF3ZS5qYWdhb255YWJlcml0YS5ldS5vcmciLA0KICAicGF0aCI6ICIvaG9tZSIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlx1NkIyN1x1NUZCN1x1OUUyMSIsDQogICJhZGQiOiAiMTcyLjY0LjEwNi4xODgiLA0KICAicG9ydCI6ICI0NDMiLA0KICAiaWQiOiAiZTk1ZTIyMTMtNjE1OS00YmJlLTlmZTUtMjhlNzA1YmMyM2VjIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJxd2VxZXF3ZXF3ZXF3ZS5qYWdhb255YWJlcml0YS5ldS5vcmciLA0KICAicGF0aCI6ICIvaG9tZSIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICIiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIg0KfQ==
vless://d342d11e-d424-4583-b36e-524ab1f0afa4@[2606:4700:3001:e1ed:7872:8a58:a6a0:cf1d]:2053?encryption=none&security=tls&sni=edgood.889876.xyz&fp=ios&type=ws&host=edgood.889876.xyz&path=%2F%3Fed%3D2048#k361
vless://461b9b12-4f64-4bbd-8253-18ec1f443526@[2605:6400:5322:800e:0:1:e129:20f]:46528?encryption=none&security=reality&sni=blog.api.www.cloudflare.com&fp=chrome&pbk=cDaDzPr3PlS3NM8lreHZbdo-Mhqz8vMBzMSkHXhGIUA&type=tcp&headerType=none#acuslxc%7CL0vw.love%40xray.com

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
