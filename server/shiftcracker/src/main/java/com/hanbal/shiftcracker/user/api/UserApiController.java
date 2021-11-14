package com.hanbal.shiftcracker.user.api;

import java.util.List;
import java.util.stream.Collectors;

import com.hanbal.shiftcracker.global.domain.User;
import com.hanbal.shiftcracker.global.dto.UserDto;
import com.hanbal.shiftcracker.user.service.UserService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class UserApiController {
  private final UserService userService;

  @GetMapping("api/v1/users")
  public Result<UserDto> getUsers() {
    List<User> users = userService.findUsers();
    List<UserDto> userDtos = users.stream().map(user -> new UserDto(user)).collect(Collectors.toList());

    return new Result<UserDto>(userDtos);
  }

  @PostMapping("api/v1/users")
  public CreateUserResponse saveUser(@RequestBody CreateMemberRequest request) {
    User user = new User(request.getName());

    Long id = userService.join(user);
    return new CreateUserResponse(id);
  }

  @PutMapping("api/v1/users/{id}")
  public UpdateUserResponse updateUser(@PathVariable("id") Long id, @RequestBody UpdateUserRequest request) {
    userService.update(id, request.getName());
    User user = userService.findUser(id);
    return new UpdateUserResponse(user.getId(), user.getName());
  }

  @DeleteMapping("api/v1/users/{id}")
  public void deleteUser(@PathVariable("id") Long id) {
    userService.removeUser(id);
  }

  // #region Request & Response
  @Data
  @AllArgsConstructor
  static class Result<T> {
    private List<T> data;
  }

  @Data
  static class CreateMemberRequest {
    private String name;
  }

  @Data
  static class CreateUserResponse {
    private Long id;

    public CreateUserResponse(Long id) {
      this.id = id;
    }
  }

  @Data
  static class UpdateUserRequest {
    private String name;
  }

  @Data
  static class UpdateUserResponse {
    private Long id;
    private String name;

    public UpdateUserResponse(Long id, String name) {
      this.id = id;
      this.name = name;
    }

  }
  // #endregion
}
