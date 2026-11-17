package com.example.backend.common.web;

/**
 * 统一 API 响应：code == 0 且 success == true 表示成功，业务数据在 data。
 */
public record ApiResult<T>(int code, boolean success, T data, String message) {

	public static <T> ApiResult<T> ok(T data) {
		return new ApiResult<>(0, true, data, "ok");
	}

	public static <T> ApiResult<T> fail(int code, String message) {
		return new ApiResult<>(code, false, null, message);
	}
}
