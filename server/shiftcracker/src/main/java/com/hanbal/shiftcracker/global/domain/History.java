package com.hanbal.shiftcracker.global.domain;

import java.time.ZonedDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class History {

  @Id
  @GeneratedValue
  private Long id;

  private String userId;

  private String tableName;

  private String operation;

  private String query;

  private ZonedDateTime creDate;

  private int timeTaken;

}
