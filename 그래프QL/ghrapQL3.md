###### 그래프 QL Study

---

###### Default variables(기본변수)?
~~~
  [Query]  
  query sgmoominAndTistory ($episode: Episode = JEDI){
    tistory(episode: $episode) {
      name
      moomin {
        name
      }
    }
  }
~~~
  - 기본변수는 유형을 선언했을 때 쿼리 변수에 기본값을 할당할 수 있습니다.
  - 모든 변수에 대해서 기본변수가 제공되면 변수를 전달하지 않고 쿼리를 호출이 가능합니다.

###### Directives
~~~
[Query]
query sgmoominAndTistory ($episode: Episode, $withBlogs: tistory(episode: $episode) {
    name
    moomin @include(if: $withBlogs){
      name
    }
  }
}

[Variables]
{
  "episode": "JEDI",
  "withBlogs": false
}

[Result]
{
  "data" : {
    "hero" : {
      "name": "romin_pic"
    }
  }
}

~~~

  - Directives는 변수 사용을 통해 동적쿼리를 사용하도록 만들어 준다.
  - 인수를 이용하여 변수를 전달 시 쿼리의 구조와 모양을 동적으로도 변경이 가능하게 된다


-------------

###### 참고자료

  - https://graphql.org/
  - https://tech.kakao.com/2019/08/01/graphql-basic/
