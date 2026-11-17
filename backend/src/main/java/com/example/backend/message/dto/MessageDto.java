package com.example.backend.message.dto;

import java.time.Instant;

public record MessageDto(Long id, String name, String phone, String content, Instant createdAt) {
}
