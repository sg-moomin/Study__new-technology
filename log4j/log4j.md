## Log4j 오류

---
###### 1.  Log4j
  - log4j는 Java/Kotlin/Scala/Groovy 코딩 도중에 프로그램의 로그를 기록해주는 라이브러리로, 이클립스, IntelliJ IDEA, 안드로이드 스튜디오 등에 추가해서 프로그램 실행 시 자동으로 지정한 경로에 로그를 저장해주는 기능을 한다.

###### 2.  Log4j 취약점 원리
  - 이번에 가장 이슈가 되었던 취약점은 LDAP이다.
  - JAVA 프로그램들은 JNDI(java naming and directory interface)로 디렉토리를 찾기 쉽게 서비스가 제공되는데 이 중 하나가 LDAP이다.
  - 예를 들면 http://sg-moomin/key=JNDI44120772 에 접속한다고 하면 LDAP서버에서 JNDI44120772 라는 객체를 찾을 수 있는 원리이다.
  - 여기서 log4j의 취약점은 ${prefix:name} 형식으로 Java 객체를 볼 수 있다는 부분에서 취약점이 나타난다.
  - 이런 문법에서 해커가 로그 기록을 찾아서 취약점을 이용할 수 있다는 부분에서 큰 이슈가 생겼다.

###### 3.  Log4j 취약점 대응 방안
  - 결국에는 JNDI 파싱이 안되도록 막는것이 가장 중요한데 이는 비활성화 하는게 가장 좋다.
  - 그렇지만 비활성화가 어렵다면 버전업을 진행하는 걸 추천한다.
  - 대부분 log4j.2.7 버전을 사용하는데 추천하는 버전은 2.15 이상의 버전을 추천한다.
  - log4j 이외의 logback과 같이 다른 모듈을 사용하는 것도 하나의 방법이다.


###### 4.  ref
  - https://namu.wiki/w/Log4j%20%EB%B3%B4%EC%95%88%20%EC%B7%A8%EC%95%BD%EC%A0%90%20%EC%82%AC%ED%83%9C?from=Log4j#fn-20
  - https://www.youtube.com/watch?v=SU9twPc0qxo
