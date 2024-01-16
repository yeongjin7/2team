-- MariaDB dump 10.19-11.4.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: travel
-- ------------------------------------------------------
-- Server version	11.4.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `board`
--

DROP TABLE IF EXISTS `board`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board` (
  `boardNo` int(6) NOT NULL AUTO_INCREMENT,
  `userNo` int(4) NOT NULL DEFAULT 0,
  `title` varchar(50) NOT NULL DEFAULT '0',
  `content` varchar(1000) NOT NULL DEFAULT '0',
  `boardDate` date NOT NULL,
  PRIMARY KEY (`boardNo`),
  KEY `userNo` (`userNo`),
  CONSTRAINT `userNo` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=100003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board`
--

LOCK TABLES `board` WRITE;
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` VALUES
(100001,1001,'강릉이에요','강릉이에요강릉이에요강릉이에요강릉이에요강릉이에요강릉이에요강릉이에요강릉이에요','2024-01-03'),
(100002,1002,'서울이에오','서울이에오서울이에오서울이에오서울이에오서울이에오서울이에오서울이에오서울이에오','2024-01-04');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boardreply`
--

DROP TABLE IF EXISTS `boardreply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boardreply` (
  `bdReplyNo` int(6) NOT NULL AUTO_INCREMENT,
  `boardNo` int(6) NOT NULL DEFAULT 0,
  `userNo` int(4) NOT NULL DEFAULT 0,
  `bdReplyCon` varchar(1000) NOT NULL DEFAULT '0',
  `bdReplyDate` date NOT NULL,
  PRIMARY KEY (`bdReplyNo`),
  KEY `boardNo2` (`boardNo`),
  KEY `userNo4` (`userNo`),
  CONSTRAINT `boardNo2` FOREIGN KEY (`boardNo`) REFERENCES `board` (`boardNo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userNo4` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=800005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardreply`
--

LOCK TABLES `boardreply` WRITE;
/*!40000 ALTER TABLE `boardreply` DISABLE KEYS */;
INSERT INTO `boardreply` VALUES
(800001,100001,1001,'좋네요','2024-01-04'),
(800002,100002,1001,'별로네요','2024-01-04'),
(800003,100001,1002,'굿굿','2024-01-04'),
(800004,100002,1002,'오오','2024-01-04');
/*!40000 ALTER TABLE `boardreply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom`
--

DROP TABLE IF EXISTS `custom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custom` (
  `slideNo` int(6) NOT NULL,
  `ctScheduleDate` date NOT NULL,
  KEY `slideNo` (`slideNo`),
  CONSTRAINT `slideNo` FOREIGN KEY (`slideNo`) REFERENCES `slide` (`sildeNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom`
--

LOCK TABLES `custom` WRITE;
/*!40000 ALTER TABLE `custom` DISABLE KEYS */;
INSERT INTO `custom` VALUES
(200001,'2024-01-04'),
(200003,'2024-01-04');
/*!40000 ALTER TABLE `custom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `freeboard`
--

DROP TABLE IF EXISTS `freeboard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `freeboard` (
  `freeNo` int(6) NOT NULL AUTO_INCREMENT,
  `userNo` int(4) NOT NULL,
  `freeTitle` varchar(50) NOT NULL DEFAULT '0',
  `freeContent` varchar(1000) NOT NULL DEFAULT '0',
  `freeDate` date NOT NULL,
  PRIMARY KEY (`freeNo`),
  KEY `userNo2` (`userNo`),
  CONSTRAINT `userNo2` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=300005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `freeboard`
--

LOCK TABLES `freeboard` WRITE;
/*!40000 ALTER TABLE `freeboard` DISABLE KEYS */;
INSERT INTO `freeboard` VALUES
(300001,1001,'이거 뭐임?','이거 뭐임?이거 뭐임?이거 뭐임?이거 뭐임?','2024-01-03'),
(300002,1002,'얼마에요','얼마일까요 알려줘요','2024-01-03'),
(300003,1002,'안녕하세요','안녕하세요안녕하세요','2024-01-04'),
(300004,1001,'언제 갈까요','언제언제언제','2024-01-04');
/*!40000 ALTER TABLE `freeboard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `freereply`
--

DROP TABLE IF EXISTS `freereply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `freereply` (
  `frReplyNo` int(6) NOT NULL AUTO_INCREMENT,
  `freeNo` int(6) NOT NULL DEFAULT 0,
  `userNo` int(4) NOT NULL DEFAULT 0,
  `frReplyCon` varchar(1000) NOT NULL DEFAULT '0',
  `frReplyDate` date NOT NULL,
  PRIMARY KEY (`frReplyNo`),
  KEY `freeNo` (`freeNo`),
  KEY `userNo5` (`userNo`),
  CONSTRAINT `freeNo` FOREIGN KEY (`freeNo`) REFERENCES `freeboard` (`freeNo`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `userNo5` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=900005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `freereply`
--

LOCK TABLES `freereply` WRITE;
/*!40000 ALTER TABLE `freereply` DISABLE KEYS */;
INSERT INTO `freereply` VALUES
(900001,300001,1001,'네네','2024-01-04'),
(900002,300002,1001,'굳굳','2024-01-04'),
(900003,300003,1002,'하하하','2024-01-04'),
(900004,300004,1002,'오오','2024-01-04');
/*!40000 ALTER TABLE `freereply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leaveuser`
--

DROP TABLE IF EXISTS `leaveuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `leaveuser` (
  `leaveUserNo` int(4) NOT NULL AUTO_INCREMENT,
  `leaveName` varchar(10) NOT NULL DEFAULT '0',
  `leaveId` varchar(20) NOT NULL DEFAULT '0',
  `leavePw` varchar(20) NOT NULL DEFAULT '0',
  `email` varchar(20) NOT NULL DEFAULT '0',
  `phone` char(13) NOT NULL DEFAULT '0',
  `joinDay` date NOT NULL,
  `dieDay` date NOT NULL,
  PRIMARY KEY (`leaveUserNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leaveuser`
--

LOCK TABLES `leaveuser` WRITE;
/*!40000 ALTER TABLE `leaveuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `leaveuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `log`
--

DROP TABLE IF EXISTS `log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `log` (
  `ipLog` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`ipLog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `log`
--

LOCK TABLES `log` WRITE;
/*!40000 ALTER TABLE `log` DISABLE KEYS */;
INSERT INTO `log` VALUES
('192.168.0.14'),
('192.168.0.15'),
('192.168.0.16'),
('192.168.0.17');
/*!40000 ALTER TABLE `log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `singleqna`
--

DROP TABLE IF EXISTS `singleqna`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `singleqna` (
  `sqNo` int(6) NOT NULL AUTO_INCREMENT,
  `userNo` int(4) NOT NULL DEFAULT 0,
  `sqTitle` varchar(50) NOT NULL DEFAULT '0',
  `sqContent` varchar(1000) NOT NULL DEFAULT '0',
  `sqDate` date NOT NULL,
  `sqAnswer` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`sqNo`),
  KEY `userNo3` (`userNo`),
  CONSTRAINT `userNo3` FOREIGN KEY (`userNo`) REFERENCES `user` (`userNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=400004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `singleqna`
--

LOCK TABLES `singleqna` WRITE;
/*!40000 ALTER TABLE `singleqna` DISABLE KEYS */;
INSERT INTO `singleqna` VALUES
(400001,1001,'리워드','리워드 줘요 빨리','2024-01-03','싫어요'),
(400002,1001,'사이트가 좋아요','왜이리 좋아요','2024-01-04','감사'),
(400003,1002,'으아아악','아아아악','2024-01-04','아아아');
/*!40000 ALTER TABLE `singleqna` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slide`
--

DROP TABLE IF EXISTS `slide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slide` (
  `sildeNo` int(6) NOT NULL AUTO_INCREMENT,
  `boardNo` int(6) NOT NULL DEFAULT 0,
  `scheduleDate` varchar(6) NOT NULL DEFAULT '',
  `bsName` varchar(20) NOT NULL DEFAULT '',
  `lacation` varchar(20) NOT NULL DEFAULT '',
  `cate` varchar(20) NOT NULL DEFAULT '',
  `tag` varchar(60) NOT NULL DEFAULT '',
  `acStar` int(1) NOT NULL DEFAULT 0,
  `svStar` int(1) NOT NULL DEFAULT 0,
  `prStar` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`sildeNo`),
  KEY `boardNo` (`boardNo`),
  CONSTRAINT `boardNo` FOREIGN KEY (`boardNo`) REFERENCES `board` (`boardNo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=200005 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slide`
--

LOCK TABLES `slide` WRITE;
/*!40000 ALTER TABLE `slide` DISABLE KEYS */;
INSERT INTO `slide` VALUES
(200001,100001,'day1','강릉궁','강원도 강릉','관광지','강원도, 문화재, 관광, 역사',5,4,2),
(200002,100002,'day1','경복궁','서울시 종로구','관광지','경복궁, 문화재, 종로, 역사',4,3,4),
(200003,100001,'day2','서울식당','강원도 강릉','식당','음식, 맛집, 식당, 강원도, 강릉',3,5,1),
(200004,100002,'day2','강릉식당','서울시 종로구','식당','음식, 맛집, 식당, 서울',3,4,5);
/*!40000 ALTER TABLE `slide` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userNo` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL DEFAULT '0',
  `id` varchar(20) NOT NULL DEFAULT '0',
  `password` varchar(20) NOT NULL DEFAULT '0',
  `email` varchar(20) NOT NULL DEFAULT '0',
  `phone` char(13) NOT NULL DEFAULT '0',
  `joinDay` date NOT NULL,
  PRIMARY KEY (`userNo`)
) ENGINE=InnoDB AUTO_INCREMENT=1003 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
(1001,'김철수','asd112','1234123aA!','asd112@gmail.com','010-1111-1234','2024-01-03'),
(1002,'정철소','qwe114','1434343aA!','qwe114@gmail.com','010-1133-1244','2024-01-04');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-16 14:48:44
