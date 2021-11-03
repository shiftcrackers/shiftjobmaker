package com.hanbal.shiftcracker.dto;

import com.hanbal.shiftcracker.domain.User;

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
