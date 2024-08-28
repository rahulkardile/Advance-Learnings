//check ip
//docker setup 

zookeeper setup
docker run -p 2181:2181 zookeeper

kafka setup 
docker run -p 9092:9092 -e KAFKA_ZOOKEEPER_CONNECT=192.168.161.234:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.161.234:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka

// Node Js setup
Admin - Infra setup Topic / partions
Producer - to produce msg
consumer - to consume mgs
