
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'ysd1'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时

//节点链接 + 订阅链接
let MainData = `
vless://9ee388da-2b1a-4609-85f8-d62548fbe891@hdyjp.321700.xyz:25750?encryption=none&security=reality&sni=www.oracle.com&fp=chrome&pbk=kTLSOeqKAGo0G7ahpBgBFCH5jJT06bvSdbKnDjV_Gx4&sid=7d4a8367&spx=%2F&pqv=BUKB4iBFO9456QQNrRDgBqXZpblX9ysBaomKL6kL-Iv_pFFSck4aEbrQduBIMpbBQLKoEmFper_q9pDNxvTS4xcuRgMXqpqEIcVU914I5D08hgPDN5GVTqIhB3bAs2PC5_mwh5hXDHJyhu2eOZtdbvqunrVp7yaV0KTswf9g1A4dPQkGp-1yUXe0QEWeTo5bo1JLaIof517hCJNq6KgpU3JSthwoWuZUY3qKnK9geLZJ0GPqAQW7-_tkJUVGtreMukhmkcZcZ9CSCJuTuxs3Hb7_xSUvAALtUoCgQF55ZDh8NE809deTy2Y4nGvt6zXMfk6-JxsU3WIJvD26DI-X_Scz9oMUQp-VpIf78VxSGlAgms5m-z0xvAbLQtusG71CdZlpjmgyWoHjGo4KmuwTxLF3PXi-ROm5Y7Nla_lOEBTyabZp3vq20bsUS9Kr5HoUxWbghlrb3W0HPbVRazfGPPMpSVLb1qvQv-yrry4MC8zwob6kvb_OCkQ0hPwIj7jnWp3QLF9uTW9AbZonqMmlF7J0VED_tFTbwsOzk9LpIH9mhdU6FvAK3z8YB65Klb1pI7rKRuobbyltfdTDyKHViVHfkKW0ykzaw3r3BWiGnW_miYS-Yp2vzqcOhAu9Mjs32dOw_yc5qoSWbMbd5GtrIJAMvkIUt22nkpWFOqcUJV0eeY3_xecAj-WY7VrT9L9hE3E3B-PtrZhQT3cn8G9PahUlZ661SXuQFshkOXhuVu2vvv7tXKzJu20hQ38ZB3pkh69H1LAxmvfigej1yrwTFWpMylKXVY9Xb4FEoK-qmMtHgpjfEQYCduFM9Aq81kdqySzU5r3cjcXlJMvG6ws9O3lvROwvjCEIJdBYp84G4ns9gi-XwRXxx4ikvwvBQyy8rfaPq1t9C_E77p9R3i41m3-7JbXQetrpgD0c4UNnEbCYZxoeeYJc8GejonEljizajbPgv-5ftHQfsVEOdTz24xfVG41y8QxFTWIzDPvXA4H-_L4KI053FRbQMj32XWupISeDPEZ2aH7XWIg15Yw1FMH2Y2Yzm7KLqVTyuAlanAZ1OERjKKe61ZV1cc6NV3dW9N_iosXJDS46vbPlcXf4Hk3ki3rIDNmBLiBhKx6h4GxP8Tba-qrQAM3JBxVrcIXnkz7fnM-0veix54j4uE-ty4TzFSkAWvejjqDwePrXsKd_M5uG6KSS_Yhy7_VRf6tg0P1W3NwZZPJRX5yJOEMSZbnrB_zD3kCEVxCerZKldhhf671m2yWdN5rCR3Nm8LNfd6fmagdxRQ06iAu6dTFs6wAyHbKcxMKYKnhHR62CEwtXdRwvMe6UneqXW1TntVZfM4xas9gVErJ_jzzdzGu3YgmdQ4uT3ZvInu7Hn8-C3jTEQDWycqYj8oWU85KcXmTTjnN2UOPxRPSD2l0uaiTl9-O_AfRWtpxXlHsyvxQDIVXqumWFTVd9qm8NfCUmaT6BjEBb6oIp2_GVnUxwK6y1NHvIRtT_8Z3cT2XqTNsSpITcPGGpCQEG-uSbxn6i89MI5Q7WFFmlyNAv3cqGiXUHyExhJ-WxIeVOl5-IdNhz7xY6JHkyLoM3ywRmKdMGyiooEr523NpJIfDRaouGvFKHfZv8lDiDOCgNA2sQPFKznigRfz5F8zvEsPgf_URJYy5tqdd4X6dSkkvmcCVlLeGQaCHEtCz-SxEqel1AZ_rDp1MM3X3UUjEHj_6aHF8GHypNfoSlwYhptWX0x4xUq0KsI7W8HEE40YdMzkiSVvz8vZq4K_XmE18-rjhjREfH-RbMgUWVzbKFzGsZzPXK9zjhvSceXnzvsAKI-YMbXnfpqdBMVet0H6mtPrwigY2Rr3tBuSmqeyYp34UFthenEE3NzCIfSu6JCsnrtLgUgS_1NMxPnhlOfRixK-7xKOYq_mR2df_GoG4Jp2g-Z7metlkBlR0f41vyu2hikfmUaQ71ReuRBGAKLadufWrMI4v1l44SJuCxkgS6SmPicOinqsxRUn_c1q-vP-x_wWUSClxg_qj6y2oSs94bwapvlATvfUFRIzHO41VzxT4zjTHUDQo5ZrhaILjW7WBsF6MFsTYF8S_eN-T2t061cVDJK6uFsvHImtyuNLgBl7Z7QSuwxWfPKskR9kTbsr4FFCIp-fSwKLIma8UrMDFpxM-T8KDvizS9kx3mpZ38kpZQFVoVJqqrkMrV1pfwxcxTcInj-U2zi0x_r2vNv0AXwiYqz762BAXcNQC78vuItSRfoxoDFCJuaAhLnTnO5HM7fBvmk_DV3FUYinTM01icZNxHAc8RghoJR7Ct1_Fwkr7Uco5UEC2TLoXe6NbGHmSoFuMqtflQasQUwdl0ncsdN8E4J67C02U4SV01pQct_sUY28-B_Xb2mVoOGGnNnKjC9yQdkkS9DER4XYW93pNCRFuTFDKeWT0ZpgzP3DL8myxGzBHSD-nTBa89U_8oWj1bcPxH-Xm6tD4R4-Hx2LXjSognCjtXQFmi0SqL6QmOjDFD2kJnjqy3lrfwEgOr1tIH63thxQxgDd79KTqrBnTcl3ewGSNXmZTvNgcX5JlVZork9GS8PCQpUuaMAJypNzTFZzogdcrI8zE&type=tcp&headerType=none#acck-tw-JP%E4%B8%AD%E8%BD%AC
vless://9ee388da-2b1a-4609-85f8-d62548fbe891@accktw.321700.xyz:35174?encryption=none&security=reality&sni=www.oracle.com&fp=chrome&pbk=kTLSOeqKAGo0G7ahpBgBFCH5jJT06bvSdbKnDjV_Gx4&sid=7d4a8367&spx=%2F&pqv=BUKB4iBFO9456QQNrRDgBqXZpblX9ysBaomKL6kL-Iv_pFFSck4aEbrQduBIMpbBQLKoEmFper_q9pDNxvTS4xcuRgMXqpqEIcVU914I5D08hgPDN5GVTqIhB3bAs2PC5_mwh5hXDHJyhu2eOZtdbvqunrVp7yaV0KTswf9g1A4dPQkGp-1yUXe0QEWeTo5bo1JLaIof517hCJNq6KgpU3JSthwoWuZUY3qKnK9geLZJ0GPqAQW7-_tkJUVGtreMukhmkcZcZ9CSCJuTuxs3Hb7_xSUvAALtUoCgQF55ZDh8NE809deTy2Y4nGvt6zXMfk6-JxsU3WIJvD26DI-X_Scz9oMUQp-VpIf78VxSGlAgms5m-z0xvAbLQtusG71CdZlpjmgyWoHjGo4KmuwTxLF3PXi-ROm5Y7Nla_lOEBTyabZp3vq20bsUS9Kr5HoUxWbghlrb3W0HPbVRazfGPPMpSVLb1qvQv-yrry4MC8zwob6kvb_OCkQ0hPwIj7jnWp3QLF9uTW9AbZonqMmlF7J0VED_tFTbwsOzk9LpIH9mhdU6FvAK3z8YB65Klb1pI7rKRuobbyltfdTDyKHViVHfkKW0ykzaw3r3BWiGnW_miYS-Yp2vzqcOhAu9Mjs32dOw_yc5qoSWbMbd5GtrIJAMvkIUt22nkpWFOqcUJV0eeY3_xecAj-WY7VrT9L9hE3E3B-PtrZhQT3cn8G9PahUlZ661SXuQFshkOXhuVu2vvv7tXKzJu20hQ38ZB3pkh69H1LAxmvfigej1yrwTFWpMylKXVY9Xb4FEoK-qmMtHgpjfEQYCduFM9Aq81kdqySzU5r3cjcXlJMvG6ws9O3lvROwvjCEIJdBYp84G4ns9gi-XwRXxx4ikvwvBQyy8rfaPq1t9C_E77p9R3i41m3-7JbXQetrpgD0c4UNnEbCYZxoeeYJc8GejonEljizajbPgv-5ftHQfsVEOdTz24xfVG41y8QxFTWIzDPvXA4H-_L4KI053FRbQMj32XWupISeDPEZ2aH7XWIg15Yw1FMH2Y2Yzm7KLqVTyuAlanAZ1OERjKKe61ZV1cc6NV3dW9N_iosXJDS46vbPlcXf4Hk3ki3rIDNmBLiBhKx6h4GxP8Tba-qrQAM3JBxVrcIXnkz7fnM-0veix54j4uE-ty4TzFSkAWvejjqDwePrXsKd_M5uG6KSS_Yhy7_VRf6tg0P1W3NwZZPJRX5yJOEMSZbnrB_zD3kCEVxCerZKldhhf671m2yWdN5rCR3Nm8LNfd6fmagdxRQ06iAu6dTFs6wAyHbKcxMKYKnhHR62CEwtXdRwvMe6UneqXW1TntVZfM4xas9gVErJ_jzzdzGu3YgmdQ4uT3ZvInu7Hn8-C3jTEQDWycqYj8oWU85KcXmTTjnN2UOPxRPSD2l0uaiTl9-O_AfRWtpxXlHsyvxQDIVXqumWFTVd9qm8NfCUmaT6BjEBb6oIp2_GVnUxwK6y1NHvIRtT_8Z3cT2XqTNsSpITcPGGpCQEG-uSbxn6i89MI5Q7WFFmlyNAv3cqGiXUHyExhJ-WxIeVOl5-IdNhz7xY6JHkyLoM3ywRmKdMGyiooEr523NpJIfDRaouGvFKHfZv8lDiDOCgNA2sQPFKznigRfz5F8zvEsPgf_URJYy5tqdd4X6dSkkvmcCVlLeGQaCHEtCz-SxEqel1AZ_rDp1MM3X3UUjEHj_6aHF8GHypNfoSlwYhptWX0x4xUq0KsI7W8HEE40YdMzkiSVvz8vZq4K_XmE18-rjhjREfH-RbMgUWVzbKFzGsZzPXK9zjhvSceXnzvsAKI-YMbXnfpqdBMVet0H6mtPrwigY2Rr3tBuSmqeyYp34UFthenEE3NzCIfSu6JCsnrtLgUgS_1NMxPnhlOfRixK-7xKOYq_mR2df_GoG4Jp2g-Z7metlkBlR0f41vyu2hikfmUaQ71ReuRBGAKLadufWrMI4v1l44SJuCxkgS6SmPicOinqsxRUn_c1q-vP-x_wWUSClxg_qj6y2oSs94bwapvlATvfUFRIzHO41VzxT4zjTHUDQo5ZrhaILjW7WBsF6MFsTYF8S_eN-T2t061cVDJK6uFsvHImtyuNLgBl7Z7QSuwxWfPKskR9kTbsr4FFCIp-fSwKLIma8UrMDFpxM-T8KDvizS9kx3mpZ38kpZQFVoVJqqrkMrV1pfwxcxTcInj-U2zi0x_r2vNv0AXwiYqz762BAXcNQC78vuItSRfoxoDFCJuaAhLnTnO5HM7fBvmk_DV3FUYinTM01icZNxHAc8RghoJR7Ct1_Fwkr7Uco5UEC2TLoXe6NbGHmSoFuMqtflQasQUwdl0ncsdN8E4J67C02U4SV01pQct_sUY28-B_Xb2mVoOGGnNnKjC9yQdkkS9DER4XYW93pNCRFuTFDKeWT0ZpgzP3DL8myxGzBHSD-nTBa89U_8oWj1bcPxH-Xm6tD4R4-Hx2LXjSognCjtXQFmi0SqL6QmOjDFD2kJnjqy3lrfwEgOr1tIH63thxQxgDd79KTqrBnTcl3ewGSNXmZTvNgcX5JlVZork9GS8PCQpUuaMAJypNzTFZzogdcrI8zE&type=tcp&headerType=none#accktw
hysteria2://10acfcb1-9fcc-4ec1-8707-f05e34e7e1d4@45.196.238.77:26001?sni=www.bing.com&alpn=h3&insecure=1&allowInsecure=1#accktw-hy2
hysteria2://511020ec-8379-45a9-8f85-a72616281304@64.81.114.126:29456?sni=www.bing.com&alpn=h3&insecure=1&allowInsecure=1#JP-%E8%83%A1%E8%92%82%E4%BA%91
vmess://ew0KICAidiI6ICIyIiwNCiAgInBzIjogIlJOLXVzLVZNIiwNCiAgImFkZCI6ICJybi4zMjE3MDAueHl6IiwNCiAgInBvcnQiOiAiMjE3NjAiLA0KICAiaWQiOiAiMzY3NDJiZDMtMzkxNi00YjdkLWMyMjEtZWEzODc1ZTNkMWQ0IiwNCiAgImFpZCI6ICIwIiwNCiAgInNjeSI6ICJhdXRvIiwNCiAgIm5ldCI6ICJ3cyIsDQogICJ0eXBlIjogIm5vbmUiLA0KICAiaG9zdCI6ICJybi4zMjE3MDAueHl6IiwNCiAgInBhdGgiOiAiLyIsDQogICJ0bHMiOiAidGxzIiwNCiAgInNuaSI6ICJybi4zMjE3MDAueHl6IiwNCiAgImFscG4iOiAiIiwNCiAgImZwIjogIiIsDQogICJpbnNlY3VyZSI6ICIwIg0KfQ==
vless://11ad7730-13b4-48c6-d40a-810085d20e87@107.172.97.4:48029?encryption=none&security=reality&sni=www.icloud.com&fp=chrome&pbk=UK7qxWWGfRQcQfwaGpHnqmmqqJBut4jxve8AeDDJ2UI&type=tcp&headerType=none#RN-us%7Cvl
vless://7bd180e8-1142-4387-93f5-03e8d750a896@sub.danfeng.eu.org:443?encryption=none&security=tls&sni=wasmer.jgdong25.ggff.net&fp=chrome&insecure=0&allowInsecure=0&type=ws&host=wasmer.jgdong25.ggff.net&path=%2F7bd180e8#SG-Hetzner_Online-clone
vless://aa3e44ea-24db-4539-9387-c1488615e652@156.238.251.95:59941?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=cGnAzSnCWRhPjhPOrsz1rdm93mHdDHLYmXRPNNojAAk&type=tcp&headerType=none#US-%E8%83%A1%E8%92%82%E4%BA%91
vless://aa3e44ea-24db-4539-9387-c1488615e652@64.81.114.126:25446?encryption=none&flow=xtls-rprx-vision&security=reality&sni=www.iij.ad.jp&fp=firefox&pbk=cGnAzSnCWRhPjhPOrsz1rdm93mHdDHLYmXRPNNojAAk&type=tcp&headerType=none#US-%E8%83%A1%E8%92%82%E4%BA%91-JP%E4%B8%AD%E8%BD%AC


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
