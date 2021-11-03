package com.hanbal.shiftcracker.domain;

@Getter
@Setter
@Entity
public class User {
  @Id
  private Long id;

  private String name;
}
