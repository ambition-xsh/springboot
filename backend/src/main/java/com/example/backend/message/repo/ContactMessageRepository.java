package com.example.backend.message.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.message.entity.ContactMessageEntity;

public interface ContactMessageRepository extends JpaRepository<ContactMessageEntity, Long> {

	List<ContactMessageEntity> findAllByOrderByCreatedAtDesc();
}
