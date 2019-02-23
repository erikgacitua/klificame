/*
Navicat MySQL Data Transfer

Source Server         : klificame
Source Server Version : 50560
Source Host           : localhost:3306
Source Database       : klificame

Target Server Type    : MYSQL
Target Server Version : 50560
File Encoding         : 65001

Date: 2019-02-22 13:18:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for common
-- ----------------------------
DROP TABLE IF EXISTS `common`;
CREATE TABLE `common` (
  `id_commune` int(11) NOT NULL AUTO_INCREMENT,
  `
commune_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_commune`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of common
-- ----------------------------
