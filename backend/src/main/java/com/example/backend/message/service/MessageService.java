package com.example.backend.message.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backend.message.dto.CreateMessageRequest;
import com.example.backend.message.dto.MessageDto;
import com.example.backend.message.entity.ContactMessageEntity;
import com.example.backend.message.repo.ContactMessageRepository;

@Service
public class MessageService {

	private final ContactMessageRepository repository;

	public MessageService(ContactMessageRepository repository) {
		this.repository = repository;
	}

	@Transactional
	public MessageDto create(CreateMessageRequest request) {
		ContactMessageEntity entity = new ContactMessageEntity();
		entity.setName(request.name().trim());
		entity.setPhone(request.phone().trim());
		entity.setContent(request.content().trim());
		ContactMessageEntity saved = repository.save(entity);
		return toDto(saved);
	}

	@Transactional(readOnly = true)
	public List<MessageDto> listAll() {
		return repository.findAllByOrderByCreatedAtDesc().stream().map(this::toDto).toList();
	}

	private MessageDto toDto(ContactMessageEntity e) {
		return new MessageDto(e.getId(), e.getName(), e.getPhone(), e.getContent(), e.getCreatedAt());
	}
}
