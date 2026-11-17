package com.example.backend.message.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateMessageRequest(
		@NotBlank(message = "请填写姓名") @Size(max = 64, message = "姓名过长") String name,
		@NotBlank(message = "请填写电话") @Size(max = 32, message = "电话过长") String phone,
		@NotBlank(message = "请填写留言内容") @Size(max = 2000, message = "留言内容过长") String content) {
}
