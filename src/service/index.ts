import type { EndpointConfig } from "@/pages/types/service.js";
import home from "./home.js";

const service = ([] as EndpointConfig[]).concat(
	home,
);

export default service;