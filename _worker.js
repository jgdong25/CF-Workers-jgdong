
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ysd1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `

vless://64d08053-509c-45f2-8f45-24e3807a047f@[2a14:67c4:11::1cb]:24883?encryption=mlkem768x25519plus.native.0rtt.NtxKTAKXPKYQICBRG0cNHnR_wEKzbcogDIKYrtBhffYMqrqTsiJTbiYzRRdrsnxj3lkoUEMQ2gcflpYVaktYEcEBOoEZ3auk54clYyo84WxPH4iGyENWKWlDqHSnxciiF5HKRlLF2nSCuqy1mnGKydIYd0azontkWOqL7BKtAOpz_BOi4IpWsWzB-Wxpo7okM3sNximyyQhU-oarmvy6CjyuSzgFh8y5-CJ9xxJLz3IAVPyzuRS2eWRLLdSsGBRAbWAxp8Ilg7KwNQgh0PZLJboWnOnDfvAcQxysEbh4V-pSjGwMd8hwS2itupqwlgxD5BkbwTVr4gBOGbrOpgkeNAdACrU2olGchupvHOECeSghFze6wUdrCJhvjyDIWGC_9KW8dWaZlZKQzGlfrCwIEByUCfYYrPgfPdYPyFMqG9mPpRkqhbR77dlukDOY75MU6iozpUwQdBcjZQiihfywZapuN0Mh7MB2uKVWTyR4nAB5hgfP3PqNi7KPn1nAQtyUMyVULehYc_eJ0IsBNNzH7el88bN5c1sqqsnENUpqWUxuukQqFFJEq4qlm-ansGY0jtoIk5N275YgBXAKJRa3R5QgKtYGdqub2sUfm1gcB4JE9vBZyheJjuDLJHSQxOBCqeOXoQog7JZntEWiNKu-OelvqziJlYS6vCsWMlZo50wqlJUVezDHihhz0KEY7Tt1o1VpuohEmmwp5uJKgqNsqNRPuRzFdcapUDgpx2w0RCk3B-yQq2EV1jKIAfO2iCQuw2E_kBKYIlnGI_m_7ptXgYUJAEJ1nteNksQ85tiagBwquAgpYKgmSISIMggZjNDA2ZxVaMWPIurPQWK_B7Nq9QAVZFWbwGuDdKSuMYSFBKlfG3e_mEW61DkewuS8oplhbKI0v0ah8vJNAUNbJoZZfaSJPqVSsbVgjqxk6UIoAYyojrR7MVFJcvgrr0lyBnQoVTNzfntKqeeEtMtdOmJP7caUrzIqUteH-6kRZlFwirpOIuPN4LEHEglETGtFWxZyBJs--HaBwifDcTN7ROgph_gJicNCepVRYVSDMsqUPzxRmVF5GAY6QKa79kREaZk60pNsSWRhxrALOZpMGMiY98hMOSNXlHICdLSEtceEe3yUVPhVs5B2NMdJx2KfHkEzWKIIwFtGfAllUTBoIVhgH4eWIQqxHLIlZwaXijqNwYGLUPhwM3gZ6QMqHFQE64o4sNJLsoUJefFD5-MyMiSG1hKWcnSCIQMMR6IK1yiTCqAulQKKRKRb1iB0GPWgjhkGwQKF0IKOETbK28GYA5mz4mGa5nua38YxuBMdBvh7YYCr9IkV-iMNJkwUjnDC5HlKyKMUboCAWiSx-5O1aId8KncO4YpGc2rMEccIsaYNdqFDfBYfoXXE7oM9H9yIUOmBxoRhHAQ4J-K77Ey_e7EDVWdSF0QUx7iluQFbWqc7TXGkydHHTbcaHEoejsAeysN5wSoULnJu90cxDKJLFvI9y6lIfwN_mPAtImKdUHATe4MdzYR9IzOEH1EYyUijyLWJ7_uhO-Aqti1OW-SAWrHhqb33YTqCn93-FobMj2N5tS4&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=mpUz_MeX-dqVcXTcs_bVr9fvyknh0p2E8eUnVRk2WSI&sid=cf0a79e2&type=xhttp&path=64d08053-509c-45f2-8f45-24e3807a047f-xh&mode=auto#vl-xhttp-reality-enc-djg3217
hysteria2://e14a49bf-fe0a-4e04-b67f-200770551901@[2a14:67c4:11::1cb]:63995?sni=www.bing.com&insecure=1&allowInsecure=1#HK-Alice_Networks
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhLLUFsaWNlX05ldHdvcmtzLWNsb25lIiwNCiAgImFkZCI6ICJzYWFzLnNpbi5mYW4iLA0KICAicG9ydCI6ICIyMDg3IiwNCiAgImlkIjogIjI1OTZiN2YzLTZiNWQtNGM1OC1jYjMyLTk3MGMxOTQwOWQ4OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiYWxpY2UuMzIxNzAwLnh5eiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiYWxpY2UuMzIxNzAwLnh5eiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIkhLLUFsaWNlX05ldHdvcmtzIiwNCiAgImFkZCI6ICJjZG5zLmRvb24uZXUub3JnIiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjI1OTZiN2YzLTZiNWQtNGM1OC1jYjMyLTk3MGMxOTQwOWQ4OCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAiYWxpY2UuMzIxNzAwLnh5eiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAiYWxpY2UuMzIxNzAwLnh5eiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiDQp9
vless://6d4f6187-cd77-4eb7-80b1-57f77f6e167f@acck88.321700.xyz:36960?encryption=none&security=tls&sni=acck88.321700.xyz&fp=chrome&insecure=0&allowInsecure=0&type=ws&path=%2F#acck88
vless://6d4f6187-cd77-4eb7-80b1-57f77f6e167f@saas.sin.fan:443?encryption=none&security=tls&sni=acck88.321700.xyz&fp=chrome&insecure=0&allowInsecure=0&type=ws&path=%2F#acck88-clone
vless://6d4f6187-cd77-4eb7-80b1-57f77f6e167f@[2a06:98c1:310b:24af:d213:9f0:6728:175]:443?encryption=none&security=tls&sni=acck88.321700.xyz&fp=chrome&insecure=0&allowInsecure=0&type=ws&path=%2F#acck88-clone
hysteria2://a1511b7b-2baa-4850-bee1-740bc07e369c@2.27.174.240:27362?sni=www.bing.com&insecure=1&allowInsecure=1#TW-LSHIY-acck88
vless://391a2896-2806-4245-8b39-9b95164b2e9c@107.172.97.4:35259?encryption=none&flow=xtls-rprx-vision&security=reality&sni=apple.com&fp=chrome&pbk=vkeXZcIe2DuM5O7VOPngVGtr4aMZZGkd4sWNgdSf5mc&sid=40ae6d58&type=tcp&headerType=none#vl-reality-racknerd-c57f1e9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogInZtLXdzLXJhY2tuZXJkLWM1N2YxZTkiLA0KICAiYWRkIjogIjEwNy4xNzIuOTcuNCIsDQogICJwb3J0IjogIjIwOTUiLA0KICAiaWQiOiAiMzkxYTI4OTYtMjgwNi00MjQ1LThiMzktOWI5NTE2NGIyZTljIiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJ3d3cuYmluZy5jb20iLA0KICAicGF0aCI6ICIzOTFhMjg5Ni0yODA2LTQyNDUtOGIzOS05Yjk1MTY0YjJlOWMtdm0iLA0KICAidGxzIjogIiIsDQogICJzbmkiOiAiIiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiIsDQogICJpbnNlY3VyZSI6ICIwIiwNCiAgInZjbiI6ICIiLA0KICAicGNzIjogIiINCn0=
tuic://391a2896-2806-4245-8b39-9b95164b2e9c%3A391a2896-2806-4245-8b39-9b95164b2e9c@107.172.97.4:63902?sni=www.bing.com&alpn=h3&insecure=1&allowInsecure=1&congestion_control=bbr#tu5-racknerd-c57f1e9
anytls://391a2896-2806-4245-8b39-9b95164b2e9c@107.172.97.4:30728?security=tls&sni=www.bing.com&insecure=1&allowInsecure=1&type=tcp&headerType=none#anytls-racknerd-c57f1e9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzLVZNLWNsb25lIiwNCiAgImFkZCI6ICJjZi44Nzc3NzQueHl6IiwNCiAgInBvcnQiOiAiNDQzIiwNCiAgImlkIjogIjM2NzQyYmQzLTM5MTYtNGI3ZC1jMjIxLWVhMzg3NWUzZDFkNCIsDQogICJhaWQiOiAiMCIsDQogICJzY3kiOiAiYXV0byIsDQogICJuZXQiOiAid3MiLA0KICAidHlwZSI6ICJub25lIiwNCiAgImhvc3QiOiAicm4uMzIxNzAwLnh5eiIsDQogICJwYXRoIjogIi8iLA0KICAidGxzIjogInRscyIsDQogICJzbmkiOiAicm4uMzIxNzAwLnh5eiIsDQogICJhbHBuIjogIiIsDQogICJmcCI6ICIiLA0KICAiaW5zZWN1cmUiOiAiMCIsDQogICJ2Y24iOiAiIiwNCiAgInBjcyI6ICIiDQp9
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzLVZNIiwNCiAgImFkZCI6ICIxMDcuMTcyLjk3LjQiLA0KICAicG9ydCI6ICIyMTc2MCIsDQogICJpZCI6ICIzNjc0MmJkMy0zOTE2LTRiN2QtYzIyMS1lYTM4NzVlM2QxZDQiLA0KICAiYWlkIjogIjAiLA0KICAic2N5IjogImF1dG8iLA0KICAibmV0IjogIndzIiwNCiAgInR5cGUiOiAibm9uZSIsDQogICJob3N0IjogInJuLjMyMTcwMC54eXoiLA0KICAicGF0aCI6ICIvIiwNCiAgInRscyI6ICJ0bHMiLA0KICAic25pIjogInJuLjMyMTcwMC54eXoiLA0KICAiYWxwbiI6ICIiLA0KICAiZnAiOiAiIiwNCiAgImluc2VjdXJlIjogIjAiLA0KICAidmNuIjogIiIsDQogICJwY3MiOiAiIg0KfQ==
vless://7bd180e8-1142-4387-93f5-03e8d750a896@www.shopify.com:443?encryption=none&security=tls&sni=wasmer.jgdong25.ggff.net&fp=chrome&insecure=0&allowInsecure=0&type=ws&host=wasmer.jgdong25.ggff.net&path=%2F7bd180e8#SG-Hetzner_Online-clone
vless://7bd180e8-1142-4387-93f5-03e8d750a896@cdns.doon.eu.org:443?encryption=none&security=tls&sni=wasmer.jgdong25.ggff.net&fp=chrome&insecure=0&allowInsecure=0&type=ws&host=wasmer.jgdong25.ggff.net&path=%2F7bd180e8#SG-Hetzner_Online

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
