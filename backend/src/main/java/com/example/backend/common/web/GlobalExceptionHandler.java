package com.example.backend.common.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice(basePackages = "com.example.backend")
public class GlobalExceptionHandler {

	@ExceptionHandler(IllegalArgumentException.class)
	public ResponseEntity<ApiResult<Void>> badRequest(IllegalArgumentException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResult.fail(400, ex.getMessage()));
	}

	@ExceptionHandler(SecurityException.class)
	public ResponseEntity<ApiResult<Void>> forbidden(SecurityException ex) {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(ApiResult.fail(401, ex.getMessage()));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<ApiResult<Void>> validation(MethodArgumentNotValidException ex) {
		FieldError fe = ex.getBindingResult().getFieldError();
		String msg = fe != null && fe.getDefaultMessage() != null ? fe.getDefaultMessage() : "参数无效";
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ApiResult.fail(400, msg));
	}
}
