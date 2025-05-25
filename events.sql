-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: chrono_explorer
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `event_date` datetime NOT NULL,
  `location` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image_path` varchar(512) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (6,'Art Exhibition: Renaissance Masters','An exhibition showcasing the masterpieces of Renaissance art, including works from Da Vinci, Michelangelo, and Raphael.','2025-06-15 00:00:00','Louvre Museum, Paris','2025-05-15 23:42:39','2025-05-15 23:42:39','Fontana di Trevi Italy.jpg',NULL),(8,'New York Art Expo','A vibrant art exhibition featuring contemporary artists from New York City, showcasing diverse styles and creative expressions.','2025-09-10 00:00:00','New York City Art Gallery','2025-05-16 00:18:44','2025-05-16 00:18:44','New York.jpg',NULL),(9,'Cultural Festival at Red Square','Experience the rich history and vibrant culture of Moscow with a special festival held at the iconic Red Square.','2025-10-05 00:00:00','Red Square, Moscow','2025-05-16 00:19:45','2025-05-16 00:19:45','Red Square Moscow.jpg',NULL),(10,'Historical Tour: The Lincoln Memorial','Join us for an insightful tour of the Lincoln Memorial, exploring its history, architecture, and significance in American culture.','2025-07-20 00:00:00','Lincoln Memorial, Washington D.C.','2025-05-16 00:20:40','2025-05-16 00:20:40','The Lincoln Memorial.jpg',NULL),(11,'Historical Tour: Statue of Liberty','Explore one of America\'s most iconic landmarks. The tour includes access to Liberty Island and historical exhibitions.','2025-07-04 00:00:00','New York, USA','2025-05-17 00:55:18','2025-05-17 00:55:18','Statue of Liberty.jpg',NULL),(12,'Historical Tour: The Great Pyramids','Visit one of the Seven Wonders of the Ancient World. This tour includes a guided exploration of the Giza pyramid complex and the Sphinx.','2025-09-15 00:00:00','Giza, Egypt','2025-05-17 23:58:13','2025-05-17 23:58:13','The pyramids egypt.jpg',NULL),(13,'Exhibition Tour: The Metropolitan Museum of Art','Discover thousands of years of art and culture at The Met. This exclusive tour highlights iconic works from ancient Egypt, Renaissance Europe, and modern America.','2025-10-21 00:00:00','New York, USA','2025-05-18 00:06:13','2025-05-18 00:06:13','The Metropolitan Museum.jpg',NULL),(14,'Eruption of Mount Vesuvius','In 79 AD, Mount Vesuvius erupted violently, burying the Roman cities of Pompeii and Herculaneum under volcanic ash. The catastrophe preserved buildings, art, and even the bodies of residents, offering a detailed look into Roman life.','0079-08-24 00:00:00','Pompeii, Italy','2025-05-18 00:07:06','2025-05-20 23:27:05','Trevi Fountain Italy.jpg','Catastrophe naturelle'),(15,'The Fall of the Western Roman Empire','The Western Roman Empire officially fell in 476 AD when Emperor Romulus Augustulus was deposed by the Germanic chieftain Odoacer. This marked the end of ancient Rome and the beginning of the Middle Ages in Europe.','0476-09-04 00:00:00','Rome, Italy','2025-05-20 23:20:38','2025-05-20 23:29:07','The Irish envoy.jpg','Histoire'),(16,'Prise de la Bastille','Le 14 juillet 1789, la Bastille est prise d’assaut à Paris, marquant le début symbolique de la Révolution française.','1789-07-14 00:00:00','Paris, France','2025-05-22 16:17:57','2025-05-22 16:17:57','bastille.jpg','Histoire'),(18,'Premiers pas sur la Lune','Le 20 juillet 1969, Neil Armstrong devient le premier homme à marcher sur la Lune durant la mission Apollo 11.','1969-07-20 00:00:00','Lune','2025-05-22 16:22:39','2025-05-22 16:22:39','apollo11.jpg','Science'),(19,'Chute du mur de Berlin','Le 9 novembre 1989, le mur de Berlin tombe, mettant fin à près de 30 ans de séparation entre l\'Est et l\'Ouest.','1989-11-09 00:00:00','Berlin, Allemagne','2025-05-22 16:23:35','2025-05-22 16:23:35','mur-berlin.jpg','Politique'),(20,'Couronnement de Charlemagne','Le 25 décembre 800, Charlemagne est couronné empereur d’Occident par le pape Léon III à Rome.','0800-12-25 00:00:00','Rome, Italie','2025-05-22 23:18:36','2025-05-22 23:18:36','charlemagne.jpg','Moyen Âge'),(21,'Publication de l\'œuvre de Galilée','En 1632, Galilée publie « Dialogue sur les deux grands systèmes du monde », affirmant que la Terre tourne autour du Soleil.','1632-02-22 00:00:00','Florence, Italie','2025-05-22 23:19:33','2025-05-22 23:19:33','galilee.jpg','Renaissance & Temps Modernes'),(22,'Signature de l’armistice de 1918','L’armistice mettant fin à la Première Guerre mondiale est signé le 11 novembre 1918 à Rethondes.','1918-11-11 00:00:00','Rethondes, France','2025-05-22 23:20:38','2025-05-22 23:20:38','armistice1918.jpg','Époque contemporaine'),(23,'Construction du Parthénon','Le Parthénon est construit au Ve siècle av. J.-C. sur l’Acropole d’Athènes, dédié à la déesse Athéna.','0447-06-01 00:00:00','Athènes, Grèce antique','2025-05-22 23:22:38','2025-05-22 23:22:38','parthenon.jpg','L\'Antiquité');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-24 15:24:52
