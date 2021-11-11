package com.hanbal.shiftcracker.global.dto;

import com.hanbal.shiftcracker.global.domain.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
  private Long id;
  private String name;

  public UserDto(User user) {
    this.id = user.getId();
    this.name = user.getName();
  }

}
