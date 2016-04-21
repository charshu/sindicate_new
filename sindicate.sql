-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 20, 2016 at 04:52 PM
-- Server version: 5.5.47-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sindicate`
--

-- --------------------------------------------------------

--
-- Table structure for table `b_stu`
--

CREATE TABLE IF NOT EXISTS `b_stu` (
  `sid` varchar(10) NOT NULL,
  `year` year(4) NOT NULL,
  `term` int(1) NOT NULL,
  `gpa` float(3,2) NOT NULL,
  `intern_from` date NOT NULL,
  `intern_to` date NOT NULL,
  `compid` int(4) NOT NULL,
  PRIMARY KEY (`sid`,`year`,`term`),
  KEY `compid` (`compid`),
  KEY `sid` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `b_stu`
--

INSERT INTO `b_stu` (`sid`, `year`, `term`, `gpa`, `intern_from`, `intern_to`, `compid`) VALUES
('5630648621', 2013, 1, 3.14, '2016-05-23', '2016-07-29', 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `b_stu`
--
ALTER TABLE `b_stu`
  ADD CONSTRAINT `compid_bfk` FOREIGN KEY (`compid`) REFERENCES `company` (`compid`),
  ADD CONSTRAINT `sid_bfk` FOREIGN KEY (`sid`) REFERENCES `stuid` (`sid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
