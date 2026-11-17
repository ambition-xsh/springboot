package com.example.backend.message.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.message.dto.CreateMessageRequest;
import com.example.backend.message.dto.MessageDto;
import com.example.backend.message.service.MessageService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/messages")
@Validated
public class MessageController {

	private final MessageService messageService;
	private final String adminKey;

	public MessageController(MessageService messageService,
			@Value("${app.admin-key:dingli-admin}") String adminKey) {
		this.messageService = messageService;
		this.adminKey = adminKey;
	}

	/** 公开：提交在线留言 */
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public MessageDto create(@Valid @RequestBody CreateMessageRequest body) {
		return messageService.create(body);
	}

	/** 需管理密钥：查看全部留言。请求头 X-Admin-Key */
	@GetMapping
	public List<MessageDto> list(@RequestHeader(value = "X-Admin-Key", required = false) String key) {
		if (key == null || !key.equals(adminKey)) {
			throw new SecurityException("无权查看留言，请提供正确的管理密钥");
		}
		return messageService.listAll();
	}
}
