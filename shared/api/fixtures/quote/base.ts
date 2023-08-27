import axios from "axios";

import { API_URL, API_KEY } from "../../../config";

export const apiInstance = axios.create({
	baseURL: API_URL,
	headers: {
		"X-Api-Key": API_KEY
	}
});
