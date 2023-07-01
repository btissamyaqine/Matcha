-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2023 at 04:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `matcha`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `username`, `email`, `password`) VALUES
(1, '', '', '', '', ''),
(2, '', '', '', '', ''),
(3, '', '', '', '', ''),
(4, '', '', '', '', ''),
(5, '', '', '', '', ''),
(6, '', '', '', '', ''),
(7, '', '', '', '', ''),
(8, '', '', '', '', ''),
(9, '', '', '', 'btissam1234@gmail.com', ''),
(10, '', '', '', '', ''),
(11, '', '', '', 'btissam1234@gmail.com', '12345'),
(12, '', '', '', 'rachida123@gmail.com', '12345'),
(13, '', '', '', 'hasna@gmail.com', '12345'),
(14, 'Btissam', 'Yaqine', 'btissamyaqine', 'btissamyaqine123@gmail.com', '12345'),
(15, '', 'hhhh', 'hahahahah', 'btissam1234@gmail.com', '12345'),
(16, '', 'test1', 'test1', 'salma@gmail.com', '123456'),
(17, '', 'test2', 'test2', 'salma@gmail.com', '1234'),
(18, '', 'test3', 'tes3', 'btissam123@gmail.com', '1234'),
(19, '', 'test3', 'tes3', 'btissam123@gmail.com', '1234'),
(20, '', 'test3', 'tes3', 'btissam123@gmail.com', '1234'),
(21, '', 'dfgrth', 'rthj57u', 'saliha123@gmail.com', 'saliha'),
(22, '', 'dfgrth', 'rthj57u', 'saliha123@gmail.com', 'saliha'),
(23, '', 'dfgrth', 'rthj57u', 'saliha123@gmail.com', 'saliha'),
(24, '', 'hahahahha1', 'hahahahah1', 'btissam123@gmail.com', '12345'),
(25, '', 'yaqine', 'btissamyaqine', 'btissam123@gmail.com', '1234'),
(26, '', 'yaqine', 'btissamyaqine', 'btissam123@gmail.com', '1234'),
(27, '', 'yaqine', 'btissamyaqine', 'btissam123@gmail.com', '1234'),
(28, '', 'yaqine', 'btissamyaqine', 'btissam123@gmail.com', '1234'),
(29, '', 'yaqine', 'btissamyaqine', 'btissam123@gmail.com', '1234'),
(30, '', 'gdgt', '', '', ''),
(31, '', 'gdgt', '', '', ''),
(32, '', '', '', '', ''),
(33, 'Btissam', 'yaqine', 'Btissam YAQINE', 'btissamyaqine123@gmail.com', '12345'),
(34, '', '', '', '', ''),
(35, 'Btissam', 'yaqine', 'Btissam YAQINE', 'rachida123@gmail.com', 'rachida123'),
(36, 'Btissam', 'yaqine', 'Btissam YAQINE', 'rachida123@gmail.com', 'rachida123'),
(37, 'Btissam', 'yaqine', 'Btissam YAQINE', 'rachida123@gmail.com', 'rachida123'),
(38, 'Btissam', 'yaqine', 'Btissam YAQINE', 'rachida123@gmail.com', 'rachida123'),
(39, 'tst', 'test', 'Btissam YAQINE', 'test@test.com', '12345'),
(40, 'fregfkjrg', 'etyrh', 'Btissam YAQINE', 'btissam123@gmail.com', 'btissam'),
(41, 'Btissam', 'grhy', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(42, 'Btissam', 'grhy', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(43, 'Btissam', 'rg4ty', 'Btissam YAQINE', 'rachida123@gmail.com', 'rachida123'),
(44, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(45, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(46, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(47, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(48, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(49, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(50, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(51, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(52, 'Btissam', 'fef', 'Btissam YAQINE', 'saliha123@gmail.com', 'saliha'),
(53, '', '', '', '', ''),
(54, '', '', '', '', ''),
(55, '', '', '', '', ''),
(56, 'u5e6iu', '', '', '', ''),
(57, 'yj5y4e6', '', '', '', ''),
(58, '', '', '', '', ''),
(59, 'fgtrgh', '', '', '', ''),
(60, 'fgtrgh', '', '', '', ''),
(61, 'gthyh', '', '', '', ''),
(62, 'gthyh', '', '', '', ''),
(63, 'ferg', 'thyh', 'thjuj', 'test@test.com', 'rt');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
