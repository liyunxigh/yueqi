-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-26 14:38:31
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yueqi`
--

-- --------------------------------------------------------

--
-- 表的结构 `y_br_list`
--

CREATE TABLE `y_br_list` (
  `sh1_id` int(11) NOT NULL DEFAULT '0',
  `br_id` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `y_br_list`
--

INSERT INTO `y_br_list` (`sh1_id`, `br_id`) VALUES
(5, 18),
(5, 17),
(5, 16),
(5, 15),
(4, 14),
(4, 13),
(3, 12),
(3, 11),
(3, 10),
(3, 9),
(3, 8),
(2, 7),
(1, 6),
(1, 5),
(1, 4),
(1, 3),
(1, 2),
(1, 1);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
