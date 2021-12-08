package com.hanbal.shiftcracker.global.service;

import java.util.List;

import com.hanbal.shiftcracker.global.annotation.NoHistory;
import com.hanbal.shiftcracker.global.domain.History;
import com.hanbal.shiftcracker.global.repository.HistoryRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@NoHistory
@RequiredArgsConstructor
public class HistoryService {

  private final HistoryRepository historyRepository;

  public List<History> findHistory() {
    return historyRepository.findAll();
  }

  public Long save(History history) {
    historyRepository.save(history);
    return history.getId();
  }

}
