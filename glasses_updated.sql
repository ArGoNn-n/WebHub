-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Час створення: Трв 29 2025 р., 11:50
-- Версія сервера: 8.0.30
-- Версія PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `glasses_db`
--

-- --------------------------------------------------------

--
-- Структура таблиці `glasses_updated`
--

CREATE TABLE `glasses_updated` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп даних таблиці `glasses_updated`
--

INSERT INTO `glasses_updated` (`id`, `name`, `type`, `price`, `quantity`) VALUES
(1, 'Ray-Ban Classic\r\n\r\n', 'Sunglasses\r\n\r\n', 150, 2),
(3, 'Gucci Elegant\r\n\r\n', 'Fashion\r\n\r\n', 300, 1),
(5, 'GUCCI', 'Sport', 500, 12),
(6, 'Oakley Radar', 'Sport', 145, 3),
(7, 'Maui Jim Classic', ' Sunglasses', 180, 36),
(8, 'Ray-Ban Aviator', 'Sunglasses', 500, 2),
(9, 'Prada Luxury', 'Fashion', 400, 15);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `glasses_updated`
--
ALTER TABLE `glasses_updated`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `glasses_updated`
--
ALTER TABLE `glasses_updated`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
