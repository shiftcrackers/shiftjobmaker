package com.hanbal.shiftcracker.service;

import java.util.List;

import com.hanbal.shiftcracker.domain.User;
import com.hanbal.shiftcracker.repository.UserRepository;

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
