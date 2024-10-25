import { http } from 'uview-plus';

export function getUserInfo(paylod: IUserParams): Promise<IUserInfo> {
	return http.get("/user", {
		params: paylod,
	});
}

export function updateInfo(paylod: IUserInfo): Promise<IUserInfo> {
	return http.post("/user/info", {
		data: paylod
	});
}