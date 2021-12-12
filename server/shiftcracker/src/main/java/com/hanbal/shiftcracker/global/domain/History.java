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

  public History(String userId, String tableName, String operation, String query, ZonedDateTime creDate,
      int timeTaken) {
    this.userId = userId;
    this.tableName = tableName;
    this.operation = operation;
    this.query = query;
    this.creDate = creDate;
    this.timeTaken = timeTaken;
  }
}
