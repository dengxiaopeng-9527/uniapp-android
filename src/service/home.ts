import type { EndpointConfig } from "@/pages/types/service";

const home: EndpointConfig[] = [
	{
		url: "/user",
		method: "GET",
		fetchName: "getUserInfo",
		
	},
	{
		url: "/api/updateUserInfo",
		method: "POST",
		fetchName: "updateUserInfo",
		paramsAddUrlSearch: true,
		headers: {
			'Content-Type': 'application/json',
			'Another-Header': 'another-value'
		}
	}
]

export default home