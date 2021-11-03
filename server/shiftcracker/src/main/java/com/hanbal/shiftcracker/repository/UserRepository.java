package com.hanbal.shiftcracker.repository;

import com.hanbal.shiftcracker.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends JpaRepository<User, Long> {

}
