-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-12-26 19:19:21
-- 服务器版本： 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
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
-- 表的结构 `y_brand`
--

CREATE TABLE `y_brand` (
  `brand_id` int(11) NOT NULL,
  `brand_name` varchar(32) NOT NULL DEFAULT '',
  `sh1_id` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `y_brand`
--

INSERT INTO `y_brand` (`brand_id`, `brand_name`, `sh1_id`) VALUES
(1, '传习', 1),
(2, '大雅', 1),
(3, '鸣泉', 1),
(4, '啸月', 1),
(5, '清绝', 1),
(6, '松涛', 1),
(7, '夔音', 2),
(8, '鹤鸣', 3),
(9, '梁鸾', 3),
(10, '玲珑', 3),
(11, '普及桐木', 3),
(12, '青桐', 3),
(13, '东篱', 4),
(14, '高渊', 4),
(15, '敦煌', 5),
(16, '桐木L1', 5),
(17, '桐木L2', 5),
(18, '桐木', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `y_brand`
--
ALTER TABLE `y_brand`
  ADD PRIMARY KEY (`brand_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `y_brand`
--
ALTER TABLE `y_brand`
  MODIFY `brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
