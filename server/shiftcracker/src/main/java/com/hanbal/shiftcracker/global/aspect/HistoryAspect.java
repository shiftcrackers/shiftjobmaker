package com.hanbal.shiftcracker.global.aspect;

import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;

import com.hanbal.shiftcracker.global.domain.History;
import com.hanbal.shiftcracker.global.service.HistoryService;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class HistoryAspect {

  @Autowired
  HistoryService historyService;

  private static final Logger logger = LoggerFactory.getLogger(HistoryAspect.class);

  protected SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
  static String className = "";
  static String methodName = "";

  @Around("execution(* com.hanbal.shiftcracker.api.DBRepository*(..))")
  public void doSomethingBefore(JoinPoint jp) {
    logger.info("------------------------------");
    logger.info("---------- START LOG ---------");
    logger.info("target : " + jp.getTarget());
    logger.info("type : " + jp.getKind()); // method
    logger.info("parameter : " + Arrays.toString(jp.getArgs()));
    logger.info("name : " + jp.getSignature().getName());
    logger.info("LOG start time : " + new SimpleDateFormat("HH:mm:ss").format(new Date()));
    logger.info("----------- END LOG ----------");
    logger.info("------------------------------");
  }

  @Around("execution(* com.glv.rocas.plan.service..*.*(..))")
  public Object service(ProceedingJoinPoint joinPoint) throws Throwable {
    long start = System.currentTimeMillis();

    try {
      Signature signature = joinPoint.getSignature();
      className = joinPoint.getTarget().getClass().getName();
      methodName = signature.getName().toString();

      logger.info("[{}] : {}.{}()", formatter.format(Long.valueOf(start)), className, methodName);
      Object result = joinPoint.proceed();

      return result;

    } finally {

      // History history = new History();
      History history = null;

      historyService.save(history);
      long end = System.currentTimeMillis();
      logger.info("[" + formatter.format(Long.valueOf(end)) + "] " + joinPoint.getSignature().toShortString()
          + " runtime : " + (end - start) + "ms");
    }
  }

}