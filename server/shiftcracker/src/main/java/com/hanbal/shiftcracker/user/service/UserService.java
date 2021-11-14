package com.hanbal.shiftcracker.user.service;

import java.util.List;
import java.util.Optional;

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

  public User findUser(Long id) {
    return userRepository.getById(id);
  }

  public Long join(User user) {
    userRepository.save(user);
    return user.getId();
  }

  public void update(Long id, String name) {
    Optional<User> result = userRepository.findById(id);
    if (result.isPresent()) {
      User user = result.get();
      user.setName(name);
    }
  }

  public void removeUser(Long id) {
    Optional<User> findUser = userRepository.findById(id);
    if (findUser.isPresent()) {
      User user = findUser.get();

      // 밸리데이션 처리

      userRepository.delete(user);
    }
    userRepository.deleteById(id);
  }

}
