FROM java:8

VOLUME /tmp

#CMD java -jar simple_bo-0.0.1-SNAPSHOT.jar

ADD build/libs/simple_bo-0.0.1-SNAPSHOT.jar simple_bo.jar

RUN sh -c 'touch /simple_bo.jar'
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/simple_bo.jar"]
