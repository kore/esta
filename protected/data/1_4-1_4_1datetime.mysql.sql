SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

ALTER TABLE `dateAndTime` ADD `duration` int(11) NOT NULL AFTER `date_id`;

/* UPDATE `dateAndTime` a INNER JOIN ( SELECT `id`, `date` FROM `date` GROUP BY `id`) b ON a.date_id = b.id SET a.`datetime` = CONCAT(b.`date`,' ',a.time) */
UPDATE `dateAndTime` a INNER JOIN ( SELECT `id`, `durationPerAppointment` FROM `date` GROUP BY `id`) b ON a.date_id = b.id SET a.`duration` = b.`durationPerAppointment`;

ALTER TABLE `date` DROP `durationPerAppointment`;
/* ALTER TABLE dateAndTime DROP INDEX idx_dateAndTime_date_id_time;
 ALTER TABLE `dateAndTime` DROP `time`;
 ALTER TABLE `dateAndTime` ADD UNIQUE KEY `idx_dateAndTime_date_id_time` (`datetime`,`date_id`) */
COMMIT;