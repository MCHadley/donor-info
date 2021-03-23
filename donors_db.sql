# Dump of table donors
# ------------------------------------------------------------

DROP TABLE IF EXISTS `donors`;

CREATE TABLE `donors` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) NOT NULL DEFAULT '',
  `firstname` varchar(100) NOT NULL DEFAULT '',
  `street_address` varchar(500) NOT NULL DEFAULT '',
  `city` varchar(100) NOT NULL DEFAULT '',
  `state_region` varchar(100) NOT NULL DEFAULT '',
  `country` varchar(100) NOT NULL,
  `postal_code` varchar(100) NOT NULL DEFAULT '',
  `phone` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `contact_pref` varchar(10) NOT NULL DEFAULT '',
  `amount` varchar(10) NOT NULL,
  `pay_pref` varchar(10) NOT NULL DEFAULT '',
  `pay_freq` varchar(10) NOT NULL DEFAULT '',
  `comments` blob,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `donors` WRITE;
/*!40000 ALTER TABLE `donors` DISABLE KEYS */;

INSERT INTO `donors` (`id`, `lastname`, `firstname`, `street_address`, `city`, `state_region`, `country`, `postal_code`, `phone`, `email`, `contact_pref`, `amount`, `pay_pref`, `pay_freq`, `comments`)
VALUES
	(2,'Doe','Jane','123 South St','Anywhere','NY','United States','12345','1234567890','jane@me.com','phone','1000','usd','monthly',X'68656C6C6F20746865726521'),
	(3,'Doe','Jon','123 Main St','Anywhere','NC','United States','28801','1234567890','me@me.com','phone','100','usd','monthly',X'68656C6C6F20746865726521');

/*!40000 ALTER TABLE `donors` ENABLE KEYS */;
UNLOCK TABLES;
