-- 新建留言库（本地 / 云端执行一次即可）
CREATE DATABASE IF NOT EXISTS dingli CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 表 contact_messages 由 JPA ddl-auto=update 自动创建，字段：
-- id, name, phone, content, created_at
