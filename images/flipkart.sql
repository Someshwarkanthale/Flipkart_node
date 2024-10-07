-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2024 at 12:02 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flipkart`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL,
  `cat_name` varchar(100) NOT NULL,
  `menu_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cat_id`, `cat_name`, `menu_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Topwear', 1, '2024-09-29 19:50:32', '2024-09-29 19:50:32'),
(2, 'Bottomwear', 1, '2024-09-29 19:51:49', '2024-09-29 19:51:49'),
(3, 'WinterWear', 1, '2024-09-29 19:52:48', '2024-09-29 19:52:48'),
(4, 'EthnicWear', 1, '2024-09-29 19:53:26', '2024-09-29 19:53:26'),
(5, 'Innerwear', 1, '2024-09-29 19:54:47', '2024-09-29 19:54:47'),
(6, 'Women Western & Maternity Wear', 2, '2024-09-29 19:57:44', '2024-09-29 19:57:44'),
(7, 'Lingerie & Sleepwear', 2, '2024-09-29 19:58:34', '2024-09-29 19:58:34'),
(8, 'Ethnic Wear', 2, '2024-09-29 19:58:58', '2024-09-29 19:58:58'),
(9, 'Ethnic Bottoms', 2, '2024-09-29 19:59:19', '2024-09-29 19:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `color_id` int(11) NOT NULL,
  `color_name` varchar(100) NOT NULL,
  `color_image` varchar(100) DEFAULT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`color_id`, `color_name`, `color_image`, `prod_id`, `createdAt`, `updatedAt`) VALUES
(1, 'multicolor', 'imgcolor-1727645890872.jpeg', 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(2, 'blue', 'imgcolor-1727646057990.jpg', 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(3, 'lightblue', 'imgcolor-1727646314395.jpeg', 2, '2024-09-29 21:45:14', '2024-09-29 21:45:14'),
(4, 'red', 'imgcolor-1727646593047.jpeg', 2, '2024-09-29 21:49:53', '2024-09-29 21:49:53');

-- --------------------------------------------------------

--
-- Table structure for table `imgcolor`
--

CREATE TABLE `imgcolor` (
  `imgcolor_id` int(11) NOT NULL,
  `color_image` varchar(100) DEFAULT NULL,
  `color_id` int(11) DEFAULT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `imgcolor`
--

INSERT INTO `imgcolor` (`imgcolor_id`, `color_image`, `color_id`, `prod_id`, `createdAt`, `updatedAt`) VALUES
(1, 'imgcolor-1727645890872.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(2, 'imgcolor-1727645890887.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(3, 'imgcolor-1727645890888.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(4, 'imgcolor-1727645890891.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(5, 'imgcolor-1727645890889.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(6, 'imgcolor-1727645890890.jpeg', 1, 1, '2024-09-29 21:38:10', '2024-09-29 21:38:10'),
(7, 'imgcolor-1727646057990.jpg', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(8, 'imgcolor-1727646057990.jpeg', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(9, 'imgcolor-1727646057993.jpeg', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(10, 'imgcolor-1727646057995.jpg', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(11, 'imgcolor-1727646057994.jpeg', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(12, 'imgcolor-1727646058089.webp', 2, 2, '2024-09-29 21:40:58', '2024-09-29 21:40:58'),
(13, 'imgcolor-1727646314395.jpeg', 3, 2, '2024-09-29 21:45:14', '2024-09-29 21:45:14'),
(14, 'imgcolor-1727646314408.jpeg', 3, 2, '2024-09-29 21:45:14', '2024-09-29 21:45:14'),
(15, 'imgcolor-1727646314408.jpeg', 3, 2, '2024-09-29 21:45:14', '2024-09-29 21:45:14'),
(16, 'imgcolor-1727646314409.jpeg', 3, 2, '2024-09-29 21:45:14', '2024-09-29 21:45:14'),
(17, 'imgcolor-1727646593047.jpeg', 4, 2, '2024-09-29 21:49:53', '2024-09-29 21:49:53'),
(18, 'imgcolor-1727646593047.png', 4, 2, '2024-09-29 21:49:53', '2024-09-29 21:49:53');

-- --------------------------------------------------------

--
-- Table structure for table `master`
--

CREATE TABLE `master` (
  `master_id` int(11) NOT NULL,
  `master_name` varchar(100) NOT NULL,
  `master_description` varchar(100) DEFAULT NULL,
  `master_image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `master`
--

INSERT INTO `master` (`master_id`, `master_name`, `master_description`, `master_image`, `createdAt`, `updatedAt`) VALUES
(1, 'Fashion', 'Fashion is a term used interchangeably to describe the creation of clothing, footwear, accessories, ', 'master_image-1727643083974.webp', '2024-09-29 19:34:49', '2024-09-29 20:51:23');

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `menu_name` varchar(100) NOT NULL,
  `master_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `menu_name`, `master_id`, `createdAt`, `updatedAt`) VALUES
(1, 'men', 1, '2024-09-29 19:36:03', '2024-09-29 19:36:03'),
(2, 'women', 1, '2024-09-29 19:36:11', '2024-09-29 19:36:11');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL,
  `prod_name` varchar(100) NOT NULL,
  `prod_description` varchar(100) DEFAULT NULL,
  `prod_price` int(11) NOT NULL,
  `prod_discount` int(11) DEFAULT NULL,
  `prod_image` varchar(255) DEFAULT NULL,
  `createdBy` varchar(100) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `sub_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`prod_id`, `prod_name`, `prod_description`, `prod_price`, `prod_discount`, `prod_image`, `createdBy`, `isActive`, `sub_id`, `createdAt`, `updatedAt`) VALUES
(1, 'Round Neck Polyester Multicolor T-Shirt', 'Made in soft and natural fabric which is comfortable to the skin.', 1200, 60, 'prod_image-1727642758267.jpg', 'Domyos', 1, 1, '2024-09-29 20:45:58', '2024-09-29 20:45:58'),
(2, ' T-shirt', 'Made in soft and natural fabric which is comfortable to the skin.', 200, 60, 'prod_image-1727643009807.jpg', 'Domyos', 1, 1, '2024-09-29 20:50:09', '2024-09-29 20:50:09'),
(3, 'formal Shirt line', 'Made in soft and natural fabric which is comfortable to the skin.', 2000, 60, 'prod_image-1727643518076.jpg', 'raymond', 1, 2, '2024-09-29 20:58:38', '2024-09-29 20:58:38'),
(4, 'formal Shirt plane', 'Made in soft and natural fabric which is comfortable to the skin.', 2200, 60, 'prod_image-1727643614653.jpeg', 'raymond', 1, 2, '2024-09-29 21:00:14', '2024-09-29 21:00:14'),
(5, 'casualShirt ', 'Made in soft and natural fabric which is comfortable to the skin.', 2600, 60, 'prod_image-1727643757065.jpeg', 'nike', 1, 3, '2024-09-29 21:02:37', '2024-09-29 21:02:37'),
(6, 'casualShirt blue', 'Made in soft and natural fabric which is comfortable to the skin.', 1800, 60, 'prod_image-1727643797718.jpeg', 'nike', 1, 3, '2024-09-29 21:03:17', '2024-09-29 21:03:17'),
(7, 'jeans black', 'Made in soft and natural fabric which is comfortable to the skin.', 1800, 55, 'prod_image-1727644236140.webp', 'puma', 1, 4, '2024-09-29 21:10:36', '2024-09-29 21:10:36'),
(8, 'jeans gray', 'Made in soft and natural fabric which is comfortable to the skin.', 1860, 58, 'prod_image-1727644285647.jpeg', 'puma', 1, 4, '2024-09-29 21:11:25', '2024-09-29 21:11:25'),
(9, 'trouser white', 'Made in soft and natural fabric which is comfortable to the skin.', 1300, 60, 'prod_image-1727644428064.webp', 'puma', 1, 5, '2024-09-29 21:13:48', '2024-09-29 21:13:48'),
(10, 'trouser red', 'Made in soft and natural fabric which is comfortable to the skin.', 1300, 60, 'prod_image-1727644454967.webp', 'puma', 1, 5, '2024-09-29 21:14:14', '2024-09-29 21:14:14'),
(11, 'track pant', 'Made in soft and natural fabric which is comfortable to the skin.', 300, 60, 'prod_image-1727644680941.jpg', 'puma', 1, 6, '2024-09-29 21:18:00', '2024-09-29 21:18:00'),
(12, 'track pant grey', 'Made in soft and natural fabric which is comfortable to the skin.', 300, 80, 'prod_image-1727644733223.jpeg', 'puma', 1, 6, '2024-09-29 21:18:53', '2024-09-29 21:18:53'),
(13, 'shorts', 'Made in soft and natural fabric which is comfortable to the skin.', 300, 80, 'prod_image-1727644880962.jpeg', 'nike', 1, 7, '2024-09-29 21:21:20', '2024-09-29 21:21:20'),
(14, 'shorts for men', 'Made in soft and natural fabric which is comfortable to the skin.', 300, 80, 'prod_image-1727644944293.jpeg', 'nike', 1, 7, '2024-09-29 21:22:24', '2024-09-29 21:22:24'),
(15, 'sweatshirts for men', 'Made in soft and natural fabric which is comfortable to the skin.', 700, 40, 'prod_image-1727645179244.jpeg', 'nike', 1, 8, '2024-09-29 21:26:19', '2024-09-29 21:26:19'),
(16, 'sweatshirts ', 'Made in soft and natural fabric which is comfortable to the skin.', 700, 40, 'prod_image-1727645201173.jpeg', 'nike', 1, 8, '2024-09-29 21:26:41', '2024-09-29 21:26:41'),
(17, 'spanish jacket', 'Made in soft and natural fabric which is comfortable to the skin.', 7000, 40, 'prod_image-1727685702298.jpeg', 'nike', 1, 9, '2024-09-30 08:41:42', '2024-09-30 08:41:42');

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `sub_id` int(11) NOT NULL,
  `sub_name` varchar(100) NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sub_category`
--

INSERT INTO `sub_category` (`sub_id`, `sub_name`, `cat_id`, `createdAt`, `updatedAt`) VALUES
(1, 'T-Shirts', 1, '2024-09-29 20:03:05', '2024-09-29 20:03:05'),
(2, 'Formal Shirts', 1, '2024-09-29 20:03:54', '2024-09-29 20:03:54'),
(3, 'Casual Shirts', 1, '2024-09-29 20:04:07', '2024-09-29 20:04:07'),
(4, 'Jeans', 2, '2024-09-29 20:05:32', '2024-09-29 20:05:32'),
(5, 'Casual Trousers', 2, '2024-09-29 20:08:10', '2024-09-29 20:08:10'),
(6, 'Track pants', 2, '2024-09-29 20:08:42', '2024-09-29 20:08:42'),
(7, 'Shorts', 2, '2024-09-29 20:10:15', '2024-09-29 20:10:15'),
(8, 'Sweatshirts', 3, '2024-09-29 20:10:46', '2024-09-29 20:10:46'),
(9, 'Jackets', 3, '2024-09-29 20:11:08', '2024-09-29 20:11:08'),
(10, 'Sweater', 3, '2024-09-29 20:11:26', '2024-09-29 20:11:26'),
(11, 'Kurta', 4, '2024-09-29 20:11:54', '2024-09-29 20:11:54'),
(12, 'Sherwanis', 4, '2024-09-29 20:12:25', '2024-09-29 20:12:25'),
(13, 'Ethnic Pyjama', 4, '2024-09-29 20:12:50', '2024-09-29 20:12:50'),
(14, 'Dhoti', 4, '2024-09-29 20:13:10', '2024-09-29 20:13:10'),
(15, 'lungi', 4, '2024-09-29 20:13:25', '2024-09-29 20:13:25'),
(16, 'Briefs & Trunks', 5, '2024-09-29 20:13:54', '2024-09-29 20:13:54'),
(17, 'Boxers', 5, '2024-09-29 20:14:32', '2024-09-29 20:14:32'),
(18, 'Topwear', 6, '2024-09-29 20:16:26', '2024-09-29 20:16:26'),
(19, 'Dresses', 6, '2024-09-29 20:16:48', '2024-09-29 20:16:48'),
(22, 'Female Jeans ', 6, '2024-09-29 20:18:19', '2024-09-29 20:18:19'),
(23, 'Skirts', 6, '2024-09-29 20:18:39', '2024-09-29 20:18:39'),
(24, 'Bras', 7, '2024-09-29 20:19:12', '2024-09-29 20:19:12'),
(25, 'Panties', 7, '2024-09-29 20:19:26', '2024-09-29 20:19:26'),
(26, 'Night Dresses & Nighties', 7, '2024-09-29 20:19:43', '2024-09-29 20:19:43'),
(27, 'Sarees', 8, '2024-09-29 20:20:08', '2024-09-29 20:20:08'),
(28, 'Kurtas & Kurtis', 8, '2024-09-29 20:20:23', '2024-09-29 20:20:23'),
(29, 'Dress Material', 8, '2024-09-29 20:20:40', '2024-09-29 20:20:40'),
(30, 'Lehenga Choli', 8, '2024-09-29 20:20:53', '2024-09-29 20:20:53'),
(31, 'Blouse', 8, '2024-09-29 20:21:12', '2024-09-29 20:21:12'),
(32, 'Kurta Sets & Salwar Suits', 8, '2024-09-29 20:21:23', '2024-09-29 20:21:23'),
(33, 'Dupattas', 8, '2024-09-29 20:21:37', '2024-09-29 20:21:37'),
(34, 'Gowns', 8, '2024-09-29 20:21:50', '2024-09-29 20:21:50'),
(35, 'Leggings & Churidars', 9, '2024-09-29 20:22:06', '2024-09-29 20:22:06'),
(36, 'Palazzos', 9, '2024-09-29 20:22:18', '2024-09-29 20:22:18'),
(37, 'Salwars & Patiala', 9, '2024-09-29 20:22:33', '2024-09-29 20:22:33'),
(38, 'Saree Shapewear & Petticoats', 9, '2024-09-29 20:22:53', '2024-09-29 20:22:53');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) DEFAULT NULL,
  `user_pass` int(11) NOT NULL,
  `user_mob` int(11) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_email`, `user_pass`, `user_mob`, `user_address`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(1, 'Someshwar Kanthale', 'kanthalesomeshwar43.@gmail.com', 1234, 2147483647, 'pune', 1, '2024-09-29 21:59:40', '2024-09-29 21:59:40'),
(2, 'Someshwar Kanthale', 'kanthalesomeshwar43@gmail.com', 1234, 2147483647, 'pune', 1, '2024-09-29 22:01:20', '2024-09-29 22:01:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cat_id`),
  ADD UNIQUE KEY `cat_name` (`cat_name`),
  ADD KEY `menu_id` (`menu_id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`color_id`),
  ADD UNIQUE KEY `color_name` (`color_name`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `imgcolor`
--
ALTER TABLE `imgcolor`
  ADD PRIMARY KEY (`imgcolor_id`),
  ADD KEY `color_id` (`color_id`),
  ADD KEY `prod_id` (`prod_id`);

--
-- Indexes for table `master`
--
ALTER TABLE `master`
  ADD PRIMARY KEY (`master_id`),
  ADD UNIQUE KEY `master_name` (`master_name`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`),
  ADD UNIQUE KEY `menu_name` (`menu_name`),
  ADD KEY `master_id` (`master_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`prod_id`),
  ADD UNIQUE KEY `prod_name` (`prod_name`),
  ADD KEY `sub_id` (`sub_id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`sub_id`),
  ADD UNIQUE KEY `sub_name` (`sub_name`),
  ADD KEY `cat_id` (`cat_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `color`
--
ALTER TABLE `color`
  MODIFY `color_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `imgcolor`
--
ALTER TABLE `imgcolor`
  MODIFY `imgcolor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `master`
--
ALTER TABLE `master`
  MODIFY `master_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `sub_category`
--
ALTER TABLE `sub_category`
  MODIFY `sub_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `color`
--
ALTER TABLE `color`
  ADD CONSTRAINT `color_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `imgcolor`
--
ALTER TABLE `imgcolor`
  ADD CONSTRAINT `imgcolor_ibfk_1` FOREIGN KEY (`color_id`) REFERENCES `color` (`color_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `imgcolor_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `menu`
--
ALTER TABLE `menu`
  ADD CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`master_id`) REFERENCES `master` (`master_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`sub_id`) REFERENCES `sub_category` (`sub_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
