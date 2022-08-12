CREATE DATABASE  IF NOT EXISTS `database_movie` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `database_movie`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: database_movie
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mail` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` text NOT NULL,
  `tinhtp` text NOT NULL,
  `sothich` text NOT NULL,
  `mota` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','admin','nguyen van','anh','nguyenanhvhit@yahoo.com','2012-12-06','nam','Da  Nang','dulich,khac','thang than, trung thuc, it noi');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cinemas`
--

DROP TABLE IF EXISTS `cinemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cinemas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `cineplexId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cineplexId` (`cineplexId`),
  CONSTRAINT `cinemas_ibfk_1` FOREIGN KEY (`cineplexId`) REFERENCES `cineplexes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cinemas`
--

LOCK TABLES `cinemas` WRITE;
/*!40000 ALTER TABLE `cinemas` DISABLE KEYS */;
INSERT INTO `cinemas` VALUES (1,'BHD 3/2','150 đường 3/2 quận 10 thành phố hồ chí minh',' link hình  BHD 3/2',1,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(2,'BHD Hai Bà Trưng','150 đường 3/2 quận 10 thành phố hồ chí minh',' link hình  BHD 3/2',1,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(3,'DDC Nguyễn Trãi','150 đường 3/2 quận 10 thành phố hồ chí minh',' link hình  BHD 3/2',2,'2021-06-10 21:30:35','2021-06-10 21:30:35');
/*!40000 ALTER TABLE `cinemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cineplexes`
--

DROP TABLE IF EXISTS `cineplexes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cineplexes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cineplexes`
--

LOCK TABLES `cineplexes` WRITE;
/*!40000 ALTER TABLE `cineplexes` DISABLE KEYS */;
INSERT INTO `cineplexes` VALUES (1,'BHD','link hinh BHD','2021-06-10 21:30:35','2021-06-10 21:30:35'),(2,'DDC','link hinh DDC','2021-06-10 21:30:35','2021-06-10 21:30:35'),(3,'MegaSG','link hinh MegaSG','2021-06-10 21:30:35','2021-06-10 21:30:35');
/*!40000 ALTER TABLE `cineplexes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dangkythongtin`
--

DROP TABLE IF EXISTS `dangkythongtin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dangkythongtin` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `mail` text NOT NULL,
  `ngaysinh` date NOT NULL,
  `gioitinh` text NOT NULL,
  `tinhtp` text NOT NULL,
  `sothich` text NOT NULL,
  `mota` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dangkythongtin`
--

LOCK TABLES `dangkythongtin` WRITE;
/*!40000 ALTER TABLE `dangkythongtin` DISABLE KEYS */;
INSERT INTO `dangkythongtin` VALUES (4,'nguyenanh','*23AE809DDACAF96AF0FD78ED04B6A265E05AA257','nguyen','anh','nguyenanh@gmail,com','1991-01-01','nam','da nang  ','thethao,nghenhac,dulich','vip pro'),(5,'truckhue','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','truc','khue','truckhue@gmail.com','1112-01-18','nam','GN','thethao,khac','hay noi'),(6,'quyquyen','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','quy','quyen','quyquyenvhit@gmail.com','1992-01-12','nam','Da Nang','thethao,muasam','Cao to'),(7,'vandanh','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','Nguyen Van','Danh','nguyendanh@gmail.com','1990-02-02','nam','Da Nang  ','thethao,nghenhac','Bá»‹ cáº­n thá»‹'),(8,'ngochai','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','hoang','Hai','ngochai@gmail.com','1990-03-03','nam','Da nang','thethao,nghenhac','ham the thao'),(9,'giahuy','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','gia','Huy','giahuy@gmail.com','1991-01-18','nam','Da Nang','thethao,dulich','nghiá»n game'),(10,'huuqua','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','Nguyen','Quy','huuqua@gmail.com','1990-04-03','nam','Da Nang','thethao,khac','ham choi'),(11,'quocchi','*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9','Le','Chi','quocchi@gmail.com','1991-05-04','nam','Da Nang','thethao,dulich','hoi beo, toc xoan, '),(12,'jfsldk','*D7385806600D281221E9553892A492ECF42824DE','slfjsl','lfj','slfjsldk','1990-02-01','nam',' jiohj','thethao','q sÃ¬hosaihj');
/*!40000 ALTER TABLE `dangkythongtin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datves`
--

DROP TABLE IF EXISTS `datves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `datves` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soluong` int DEFAULT NULL,
  `tenphim` varchar(255) DEFAULT NULL,
  `giochieu` varchar(255) DEFAULT NULL,
  `ngaychieu` varchar(255) DEFAULT NULL,
  `rapchieu` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `giave` int NOT NULL,
  `soghe` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `datves_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datves`
--

LOCK TABLES `datves` WRITE;
/*!40000 ALTER TABLE `datves` DISABLE KEYS */;
INSERT INTO `datves` VALUES (120,2,'Doctor change 3','7:30','15/12/2021',6,2,'2022-01-12 03:55:16','2022-01-12 03:55:16',40000,4),(121,2,'Doctor Strange 3','7:30','15/12/2021',6,5,'2022-01-13 08:10:03','2022-01-13 08:10:03',80000,10),(122,1,'Doctor Strange 3','7:30','15/12/2021',6,5,'2022-01-13 13:45:19','2022-01-13 13:45:19',40000,1),(123,1,'Doctor Strange 3','7:30','15/12/2021',6,5,'2022-01-13 14:13:28','2022-01-13 14:13:28',40000,7),(124,1,'Doctor Strange 3','7:30','15/12/2021',6,5,'2022-03-08 06:54:52','2022-03-08 06:54:52',40000,2),(125,1,'Dế mèn phiêu lưu kí','7:00','28/3/2022',1,5,'2022-03-09 14:48:42','2022-03-09 14:48:42',40000,8);
/*!40000 ALTER TABLE `datves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ghes`
--

DROP TABLE IF EXISTS `ghes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ghes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `soghe` int DEFAULT NULL,
  `trangthai` varchar(255) DEFAULT NULL,
  `lichChieuId` int DEFAULT NULL,
  `datVeId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `lichChieuId` (`lichChieuId`),
  KEY `datVeId` (`datVeId`),
  CONSTRAINT `ghes_ibfk_1` FOREIGN KEY (`lichChieuId`) REFERENCES `lichchieus` (`id`),
  CONSTRAINT `ghes_ibfk_2` FOREIGN KEY (`datVeId`) REFERENCES `datves` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ghes`
--

LOCK TABLES `ghes` WRITE;
/*!40000 ALTER TABLE `ghes` DISABLE KEYS */;
INSERT INTO `ghes` VALUES (1,1,'dadat',1,122,'2021-06-10 21:30:35','2022-01-13 13:45:19'),(2,2,'dadat',1,124,'2021-06-10 21:30:35','2022-03-08 06:54:53'),(3,3,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(4,4,'dadat',1,120,'2021-06-10 21:30:35','2022-01-12 03:55:16'),(5,5,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(6,6,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(7,7,'dadat',1,123,'2021-06-10 21:30:35','2022-01-13 14:13:28'),(8,8,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(9,9,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(10,10,'dadat',1,121,'2021-06-10 21:30:35','2022-01-13 08:10:03'),(11,11,'chuadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(12,12,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(13,13,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(14,14,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(15,15,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(16,16,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(17,17,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(18,18,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(19,19,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(20,20,'dadat',1,NULL,'2021-06-10 21:30:35','2021-06-10 21:30:35'),(21,1,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(22,2,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(23,3,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(24,4,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(25,5,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(26,6,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(27,7,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(28,8,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(29,9,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(30,10,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(31,11,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(32,12,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(33,13,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(34,14,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(35,15,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(36,16,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(37,17,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(38,18,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(39,19,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(40,20,'chuadat',38,NULL,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(41,1,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(42,2,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(43,3,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(44,4,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(45,5,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(46,6,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(47,7,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(48,8,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(49,9,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(50,10,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(51,11,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(52,12,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(53,13,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(54,14,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(55,15,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(56,16,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(57,17,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(58,18,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(59,19,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(60,20,'chuadat',42,NULL,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(61,1,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(62,2,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(63,3,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(64,4,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(65,5,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(66,6,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(67,7,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(68,8,'dadat',43,125,'2022-03-09 14:43:42','2022-03-09 14:48:42'),(69,9,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(70,10,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(71,11,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(72,12,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(73,13,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(74,14,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(75,15,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(76,16,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(77,17,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(78,18,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(79,19,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(80,20,'chuadat',43,NULL,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(81,1,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(82,2,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(83,3,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(84,4,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(85,5,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(86,6,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(87,7,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(88,8,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(89,9,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(90,10,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(91,11,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(92,12,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(93,13,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(94,14,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(95,15,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(96,16,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(97,17,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(98,18,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(99,19,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(100,20,'chuadat',44,NULL,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(101,1,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(102,2,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(103,3,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(104,4,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(105,5,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(106,6,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(107,7,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(108,8,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(109,9,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(110,10,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(111,11,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(112,12,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(113,13,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(114,14,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(115,15,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(116,16,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(117,17,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(118,18,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(119,19,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(120,20,'chuadat',45,NULL,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(121,1,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(122,2,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(123,3,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(124,4,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(125,5,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(126,6,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(127,7,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(128,8,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(129,9,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(130,10,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(131,11,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(132,12,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(133,13,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(134,14,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(135,15,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(136,16,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(137,17,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(138,18,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(139,19,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(140,20,'chuadat',46,NULL,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(141,1,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(142,2,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(143,3,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(144,4,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(145,5,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(146,6,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(147,7,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(148,8,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(149,9,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(150,10,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(151,11,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(152,12,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(153,13,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(154,14,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(155,15,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(156,16,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(157,17,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(158,18,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(159,19,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(160,20,'chuadat',47,NULL,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(161,1,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(162,2,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(163,3,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(164,4,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(165,5,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(166,6,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(167,7,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(168,8,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(169,9,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(170,10,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(171,11,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(172,12,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(173,13,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(174,14,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(175,15,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(176,16,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(177,17,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(178,18,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(179,19,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(180,20,'chuadat',48,NULL,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(181,1,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(182,2,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(183,3,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(184,4,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(185,5,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(186,6,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(187,7,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(188,8,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(189,9,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(190,10,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(191,11,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(192,12,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(193,13,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(194,14,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(195,15,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(196,16,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(197,17,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(198,18,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(199,19,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(200,20,'chuadat',49,NULL,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(201,1,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(202,2,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(203,3,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(204,4,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(205,5,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(206,6,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(207,7,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(208,8,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(209,9,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(210,10,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(211,11,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(212,12,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(213,13,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(214,14,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(215,15,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(216,16,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(217,17,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(218,18,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(219,19,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(220,20,'chuadat',50,NULL,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(221,1,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(222,2,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(223,3,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(224,4,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(225,5,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(226,6,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(227,7,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(228,8,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(229,9,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(230,10,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(231,11,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(232,12,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(233,13,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(234,14,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(235,15,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(236,16,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(237,17,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(238,18,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(239,19,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(240,20,'chuadat',51,NULL,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(241,1,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(242,2,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(243,3,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(244,4,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(245,5,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(246,6,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(247,7,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(248,8,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(249,9,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(250,10,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(251,11,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(252,12,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(253,13,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(254,14,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(255,15,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(256,16,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(257,17,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(258,18,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(259,19,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(260,20,'chuadat',52,NULL,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(261,1,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(262,2,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(263,3,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(264,4,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(265,5,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(266,6,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(267,7,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(268,8,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(269,9,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(270,10,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(271,11,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(272,12,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(273,13,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(274,14,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(275,15,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(276,16,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(277,17,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(278,18,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(279,19,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(280,20,'chuadat',53,NULL,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(281,1,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(282,2,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(283,3,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(284,4,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(285,5,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(286,6,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(287,7,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(288,8,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(289,9,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(290,10,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(291,11,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(292,12,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(293,13,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(294,14,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(295,15,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(296,16,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(297,17,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(298,18,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(299,19,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28'),(300,20,'chuadat',54,NULL,'2022-03-09 14:48:28','2022-03-09 14:48:28');
/*!40000 ALTER TABLE `ghes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichchieus`
--

DROP TABLE IF EXISTS `lichchieus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichchieus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `giochieu` varchar(255) DEFAULT NULL,
  `ngaychieu` varchar(255) DEFAULT NULL,
  `rapchieu` int DEFAULT NULL,
  `movieId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movieId` (`movieId`),
  CONSTRAINT `lichchieus_ibfk_1` FOREIGN KEY (`movieId`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichchieus`
--

LOCK TABLES `lichchieus` WRITE;
/*!40000 ALTER TABLE `lichchieus` DISABLE KEYS */;
INSERT INTO `lichchieus` VALUES (1,'7:30','15/12/2021',6,1,'2021-06-10 21:30:35','2021-12-17 09:25:08'),(38,'11:30','16/12/2021',7,5,'2022-01-11 10:29:29','2022-01-11 10:29:29'),(42,'11:30','16/12/2021',7,2,'2022-03-09 14:42:28','2022-03-09 14:42:28'),(43,'7:00','28/3/2022',1,2,'2022-03-09 14:43:42','2022-03-09 14:43:42'),(44,'11:30','19/12/2021',2,1,'2022-03-09 14:44:07','2022-03-09 14:44:07'),(45,'14:00','26/32022',2,3,'2022-03-09 14:44:39','2022-03-09 14:44:39'),(46,'23:00','10/1/2021',3,3,'2022-03-09 14:44:57','2022-03-09 14:44:57'),(47,'10:30','1/3/2022',4,4,'2022-03-09 14:45:27','2022-03-09 14:45:27'),(48,'11:30','2/3/2022',5,5,'2022-03-09 14:45:56','2022-03-09 14:45:56'),(49,'10:30','8/3/2021',2,6,'2022-03-09 14:46:35','2022-03-09 14:46:35'),(50,'12:00','8/3/2021',6,7,'2022-03-09 14:46:57','2022-03-09 14:46:57'),(51,'11:30','9/3/2021',4,8,'2022-03-09 14:47:15','2022-03-09 14:47:15'),(52,'11:30','19/12/2021',6,9,'2022-03-09 14:47:32','2022-03-09 14:47:32'),(53,'10:30','19/12/2021',2,10,'2022-03-09 14:48:05','2022-03-09 14:48:05'),(54,'15:00','10/3/2022',7,26,'2022-03-09 14:48:28','2022-03-09 14:48:28');
/*!40000 ALTER TABLE `lichchieus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenphim` varchar(255) DEFAULT NULL,
  `mota` varchar(255) DEFAULT NULL,
  `theloai` varchar(255) DEFAULT NULL,
  `hinhanh` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Doctor Strange 3','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','xemnhieu','https://kenh14cdn.com/thumb_w/600/2016/doctor-strange-movie-composer-cumberbatch-1477887793397-0-184-750-1384-crop-1477889820454.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(2,'Dế mèn phiêu lưu kí','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','xemnhieu','http://localhost:7000/public\\images\\hinhanh\\1640420325568_demen.jpg','2021-06-10 21:30:35','2021-12-25 08:18:45'),(3,'La la land','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','xemnhieu','http://localhost:7000/public\\images\\hinhanh\\1640613227031_lalaLand.jpg','2021-06-10 21:30:35','2021-12-27 13:53:47'),(4,'Trạng Tí Phiêu Lưu Ký ','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','xemnhieu','https://upload.wikimedia.org/wikipedia/vi/thumb/c/cc/Tr%E1%BA%A1ng_T%C3%AD_2020.jpg/220px-Tr%E1%BA%A1ng_T%C3%AD_2020.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(5,'What If','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','http://movie0706.cybersoft.edu.vn/hinhanh/what-if_gp01.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(6,'Minion','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','https://kenh14cdn.com/k:thumb_w/600/Y6xSVsPhUekB0tIwzb6M3gO6C4zrfP/Image/2014/11/1stWeek/Minions_Online_1_Sheet_Grouping_INTL-page1-18f56-ff2fc/he-lo-hinh-anh-dau-tien-ve-cac-minion-trong-phim-rieng.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(7,'Spider-Man: No Way Home','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','https://gamek.mediacdn.vn/133514250583805952/2021/11/17/photo-1-1637118381839432740223.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(8,'Homie','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','http://movie0706.cybersoft.edu.vn/hinhanh/home.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(9,'Batman v Superman: Dawn of Justice 1','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','http://movie0706.cybersoft.edu.vn/hinhanh/batman-v-superman-dawn-of-justice_gp02.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(10,'Ant-Man','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','http://movie0706.cybersoft.edu.vn/hinhanh/antman.jpg','2021-06-10 21:30:35','2021-06-10 21:30:35'),(11,'Mắt Biếc','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','phimle','http://localhost:7000/public\\images\\hinhanh\\1640329291695_macbiet.jpg','2021-06-10 21:30:35','2021-12-24 07:01:31'),(12,'Fantastic Four','Half-human, half-Atlantean Arthur is born with the ability to communicate with marine creatures','kinh dị','http://movie0706.cybersoft.edu.vn/hinhanh/fantasticfour.jpg','2021-12-06 12:57:51','2021-12-06 12:57:51'),(26,'Bố già','phim chieu rap viet nam','xemnhieu','http://localhost:7000/public\\images\\hinhanh\\1640663928030_bogia.jpg','2021-12-28 03:58:48','2021-12-28 03:58:48');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20210618132026-create-user.js'),('20210628121048-create-cineplex.js'),('20210628121113-create-cinema.js'),('20210718084202-create-movie.js'),('20211206082339-create-tenphim.js'),('20211206095718-create-movies.js'),('20211216071543-create-lichchieu.js'),('20211216134414-create-datve.js'),('20220108084748-create-ghe.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tenphims`
--

DROP TABLE IF EXISTS `tenphims`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tenphims` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenphim` text NOT NULL,
  `mota` text,
  `theloai` text NOT NULL,
  `hinhanh` text NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tenphims`
--

LOCK TABLES `tenphims` WRITE;
/*!40000 ALTER TABLE `tenphims` DISABLE KEYS */;
INSERT INTO `tenphims` VALUES (8,'hoang-cung','hoang cung','phimbo','hoang-cung.jpeg',NULL,NULL),(10,'cuoc-chien-sinh-tu','cuá»™c chiáº¿n sinh tá»­','xemnhieu','cuoc-chien-sinh-tu.jpg',NULL,NULL),(11,'nang-cong-chua-bi-an','nÃ ng cÃ´ng chÃºa bÃ­ áº©n','xemnhieu','nang-cong-chua-bi-an.jpg',NULL,NULL),(13,'nhiem-vu-cuoi','nhiá»‡m vá»¥ cuá»‘i','phimbo','nhiem-vu-cuoi.jpg',NULL,NULL),(14,'mui-ten-xanh','mÅ©i tÃªn xanh','phimle','mui-ten-xanh.jpg',NULL,NULL),(15,'nguoi-nhen-3','ngÆ°á»i nhá»‡n 3','xemnhieu','nguoi-nhen-3.jpg',NULL,NULL),(16,'nhac-kich-2012','nháº¡c ká»‹ch 2012','phimbo','nhac-kich-2012.jpg',NULL,NULL),(17,'phep-thuat','phÃ©p thuáº­t','phimbo','phep-thuat.jpg',NULL,NULL),(19,'phuong-an-b','phÆ°Æ¡ng Ã¡n b','xemnhieu','phuong-an-B.jpg',NULL,NULL),(31,'quai-thu-vo-hinh','quÃ¡i thÃº vÃ´ hÃ¬nh','phimbo','quai-thu-vo-hinh.jpg',NULL,NULL),(32,'sat-thu-nikita3','sÃ¡t thá»§ nikita 3','phimle','sat-thu-nikita3.jpeg',NULL,NULL),(35,'Cáº£nh sÃ¡t giáº¿t ngÆ°á»i 7','Cáº£nh sÃ¡t giáº¿t ngÆ°á»i 7','phimbo','canh-sat-giet-nguoi-7.jpg',NULL,NULL),(36,'há»™i phÃ¡p sÆ°','Há»™i phÃ¡p sÆ°','phimle','hoi-phap-su.jpg',NULL,NULL),(37,'Há»«ng Ä‘Ã´ng pháº§n 2','há»«ng Ä‘Ã´ng pháº§n 2','phimbo','hung-dong-phan-2.jpg',NULL,NULL),(38,'Máº¯t báº¡c','máº¯t báº¡c','xemnhieu','mat-bac.jpg',NULL,NULL),(39,'NgÆ°á»i dÆ¡i 3','ngÆ°á»i dÆ¡i 3','phimbo','nguoi-doi-3.jpg',NULL,NULL),(40,'Ã”ng hoang truyá»n hÃ¬nh Poster','Ã”ng hoÃ ng truyá»n hÃ¬nh poster','phimle','onghoangtruyenhinhposte.jpg',NULL,NULL),(41,'tay sai mÃ¡u láº¡nh','Tay sai mÃ¡u láº¡nh','phimle','tai-sai-mau-lanh.jpg',NULL,NULL),(42,'Táº¡o hÃ¬nh khuÃ´n máº·t','Táº¡o hÃ¬nh khuÃ´n máº·t','phimle','tao-hinh khuon mat.jpg',NULL,NULL),(43,'ThiÃªn tháº§n khoe dÃ¡ng ngá»c','thiá»n tháº§n khoe dÃ¡ng ngá»c','xemnhieu','thien-than-khoe-dang-ngoc.jpg',NULL,NULL),(44,'thiáº¿t quyá»n thá»§','Thiáº¿t quyá»n thá»§- Quá»‘c gia: Trung Quá»‘c. Thá»ƒ loáº¡i Kiáº¿m hiá»‡p','phimbo','thiet-quyen-thu.jpg',NULL,NULL),(45,'tá»‘c Ä‘á»™ kinh hoÃ ng','tá»‘c Ä‘á»™ kinh hoÃ ng','phimle','toc-do-kinh-hoang.jpg',NULL,NULL),(46,'tá»­ chiáº¿n liÃªn hÃ nh tinh','ÄÃ¢y lÃ  má»™t seriel phim trong bá»™ phim cá»§a Holywwod cÃ³ tÃªn lÃ  : cuá»™c chiáº¿n giá»¯a cÃ¡c vÃ¬ sao.','xemnhieu','tu-chien-lien-hanh-tinh.jpg',NULL,NULL),(47,'Tuá»•i má»›i lá»›n','NÃ³i vá» nhá»¯ng ngÆ°á»i á»Ÿ Ä‘á»™ tuá»•i má»›i lá»›n á»Ÿ Má»¹','phimle','tuoi-moi-lon.jpg',NULL,NULL),(48,'vÃ¹ng Ä‘áº¥t quá»· dá»¯','Tiáº¿p ná»‘i pháº§n trÆ°á»›c, pháº§n nÃ y nÃ³i vá» sá»± tráº£ thÃ¹ cá»§a Alice.','phimbo','vung-dat-quy-du.jpg',NULL,NULL);
/*!40000 ALTER TABLE `tenphims` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `theloai`
--

DROP TABLE IF EXISTS `theloai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `theloai` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `theloai` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `theloai`
--

LOCK TABLES `theloai` WRITE;
/*!40000 ALTER TABLE `theloai` DISABLE KEYS */;
INSERT INTO `theloai` VALUES (1,'phimbo'),(2,'phimle'),(3,'xemnhieu'),(5,'kinhdi');
/*!40000 ALTER TABLE `theloai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Hong Quoc An','QuocAn@GMAIL','$2a$10$2m1aZBGIYGjd4mVO33xCee0.QXU5sMPIdNC9AN8GsYUfxY2Of2iJO','134124',16,NULL,'CLIENT','2021-07-14 07:53:41','2021-12-27 12:52:24'),(2,'Hong Quoc Binh','QuocBinh@GMAIL','$2a$10$8AtuuSQabljCoRv5lnD9rOjNTcT6oDT5rD8I7WyCG/N0EsXQPeLiW','123',20,NULL,'ADMIN','2021-07-14 07:54:35','2021-07-14 07:54:35'),(3,'Hong Vuong','Vuong@GMAIL','$2a$10$LtLHungw6sh1GU/zqdJI5OcYdu2V0bcKPH11c3LZHG4O.bsDw3W0W','123',18,NULL,'ADMIN','2021-07-14 07:55:36','2021-07-14 07:55:36'),(5,'Binh Quoc','BinhQuoc@GMAIL','$2a$10$9ta60HH.DKrLxDvOUdm/v.ZmTyBIm8yaKNsnwKweyIcyWbXRhNlZG','000996',20,'http://localhost:7000/public\\images\\avatar\\1638782355844_CSDL-WebxemPhim-base.png','ADMIN','2021-10-05 14:22:16','2021-12-06 09:19:15'),(7,'Boi Nghi','BoiNghi@GMAIL','$2a$10$EjkgWjnLC7wD0C1dwsv9q.9VDetaH04ldgOzx.aR0ogdBxzrp1ssK','780996',21,NULL,'CLIENT','2021-10-06 03:31:37','2021-10-06 03:31:37'),(8,'Boi Nghi','Nghi@gmail','123','09078',20,'link image','Admin','2021-10-06 12:33:07','2021-10-06 12:33:07'),(9,'Bo','Bo@GMAIL','$2a$10$MO.N6y5u7JGBjE1zMQ1Wh.AXiZl99PLKYOt8Ei7mfudhQWErYk4mC','134124',15,NULL,'ADMIN','2021-11-01 13:27:42','2021-11-01 13:27:42'),(10,'Huyen','Huyen@GMAIL','$2a$10$zajYClIvZ9ZOZ8SkjycrLOS.IlED/D3GGMyu944.hz6M1x7/j5bFi','867',30,NULL,'ADMIN','2021-11-01 13:35:38','2021-11-30 02:59:23'),(12,'Tong','tong@gmail.com','','123',20,NULL,'CLIENT','2021-12-07 08:48:16','2021-12-10 09:49:41'),(13,'Trương Tấn Khải','Khai@gmail.com','$2a$10$orMpzf7iAuQm2fmUkE7uzOeGIUAhSIDPCDkXmsePF8Wjd64HVuVAi','090902',30,NULL,'CLIENT','2021-12-09 15:12:40','2021-12-09 15:12:40'),(29,'Ngoc Trung','NgocTrung@gmail.com','$2a$10$OAPGoxus8V6eSJnhylU8iOtGUoCFbqyDvxHTzxj.5faUpGJ47W1mO','123',23,NULL,'ADMIN','2021-12-12 03:03:18','2021-12-12 03:03:18'),(30,'Hong Quoc','HongQuoc@gmail.com','$2a$10$zneTv.hIlsorFcogvMkT..XOBuFveeNKVXMZn35XzgK5f2p539Tue','123',23,NULL,'ADMIN','2021-12-12 03:22:56','2021-12-12 03:22:56'),(51,'amin hun','amin@gmail.com','$2a$10$MUoFh0HzO6aF1fxqCBm3OeAkCq.HAmPq3btJHqES36sDnR8J2sW36','456789',23,NULL,'CLIENT','2021-12-28 03:56:17','2021-12-28 03:56:17'),(52,'Thanh Phong ','admin@gmail.com','$2a$10$ZPSswUArsVFv2MEm.n7K.ebx181KuWLvZ9bOtxjRtX39MUiixmGAu','123456',18,NULL,'CLIENT','2022-07-27 13:32:02','2022-07-27 13:32:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-02 10:58:28
