package com.hanbal.shiftcracker.user.repository;

import com.hanbal.shiftcracker.global.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
