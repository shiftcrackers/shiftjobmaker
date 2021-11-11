package com.hanbal.shiftcracker.global.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class User {
  @Id
  @GeneratedValue
  private Long id;

  private String name;

  public User(String name) {
    this.name = name;
  }
}
