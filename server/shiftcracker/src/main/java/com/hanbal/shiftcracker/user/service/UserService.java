package com.hanbal.shiftcracker.user.service;

import java.util.List;

import com.hanbal.shiftcracker.global.domain.User;
import com.hanbal.shiftcracker.user.repository.UserRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
  private final UserRepository userRepository;

  public List<User> findUsers() {
    return userRepository.findAll();
  }

  public Long join(User user) {
    userRepository.save(user);
    return user.getId();
  }

}
