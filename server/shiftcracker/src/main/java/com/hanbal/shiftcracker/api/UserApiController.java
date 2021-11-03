package com.hanbal.shiftcracker.api;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import com.hanbal.shiftcracker.domain.User;
import com.hanbal.shiftcracker.dto.UserDto;
import com.hanbal.shiftcracker.service.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RestController
@RequiredArgsConstructor
public class UserApiController {
  private final UserService userService;

  @GetMapping("api/v1/users")
  public List<UserDto> getUsers() {
    List<User> users = userService.findUsers();
    return users.stream().map(user -> new UserDto(user)).collect(Collectors.toList());
  }

  @PostMapping("api/v1/users")
  public CreateUserResponse saveUser(@RequestBody User user) {
    Long id = userService.join(user);
    return new CreateUserResponse(id);
  }

  @Data
  static class CreateUserResponse {
    private Long id;

    public CreateUserResponse(Long id) {
      this.id = id;
    }
  }
}
