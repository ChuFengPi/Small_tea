#设置客户端连接服务器使用UTF8字符集；
SET NAMES UTF8;
#丢弃数据库xz1如果存在的话
DROP DATABASE IF EXISTS Tea;
#创建数据库xz使用UTF8字符集
CREATE DATABASE Tea CHARSET=UTF8;
#进入数据库xz
USE  Tea;
/***产品模块相关的表***/
#笔记本型号表
#笔记本表
#笔记本图片表
/***用户模块相关的表***/
#用户表
CREATE TABLE tea_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(32)  UNIQUE,
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16) ,
  avatar VARCHAR(128),
  user_name VARCHAR(32),
  gender INT
);
INSERT INTO tea_user VALUES
(NULL,'dingding','123456','ding@tedu.cn','13501111111','img/1.jpg','丁然','1'),
(NULL,'dangdang','123456','dang@tedu.cn','12461111111','img/2.jpg','当当','1'),
(NULL,'doudou','123456','dou@tedu.cn','15861111111','img/3.jpg','窦涛','1'),
(NULL,'yaya','123456','yaya@tedu.cn','14361111111','img/4.jpg','王小丫','0');

CREATE TABLE tea_store_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
#在线商城轮播
INSERT INTO `tea_store_carousel` VALUES ('1', 'img/home/banner1.jpg', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `tea_store_carousel` VALUES ('2', 'img/home/banner2.jpg', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `tea_store_carousel` VALUES ('3', 'img/home/banner3.jpg', '轮播广告商品3', 'lookforward.html');
INSERT INTO `tea_store_carousel` VALUES ('4', 'img/home/banner4.jpg', '轮播广告商品4', 'lookforward.html');
#在线商城上广告
CREATE TABLE tea_store_on(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128)
);
INSERT INTO `tea_store_on` VALUES ('1', 'img/home/on1.jpg');
INSERT INTO `tea_store_on` VALUES ('2', 'img/home/on2.jpg');
INSERT INTO `tea_store_on` VALUES ('3', 'img/home/on3.jpg');
INSERT INTO `tea_store_on` VALUES ('4', 'img/home/on4.jpg');
#在线商城下广告
CREATE TABLE tea_store_under(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128)
);
INSERT INTO `tea_store_under` VALUES ('1', 'img/home/un1.png');
INSERT INTO `tea_store_under` VALUES ('2', 'img/home/un2.png');
INSERT INTO `tea_store_under` VALUES ('3', 'img/home/un3.png');
INSERT INTO `tea_store_under` VALUES ('4', 'img/home/un4.png');
#首页热销单品
CREATE TABLE `tea_store_product` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) default NULL,
  `author` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `tea_store_product` VALUES (NULL, '小罐茶【龙井茶】2.0金罐10罐装', '戚国伟大师作', 'img/home/Selllikehotcakes1.jpg', '500.00', 'productInfo?id=106');
INSERT INTO `tea_store_product` VALUES (NULL, '小罐茶【黄山毛峰】2.0金罐10罐装', '谢四十大师作', 'img/home/Selllikehotcakes2.jpg', '500.00', 'productInfo?id=108');
INSERT INTO `tea_store_product` VALUES (NULL, '小罐茶【茉莉花茶】2.0金罐10罐装', '林乃荣大师作', 'img/home/Selllikehotcakes3.jpg', '500.00', 'productInfo?id=66');
INSERT INTO `tea_store_product` VALUES (NULL, '小罐茶【滇江】2.0金罐10罐装', '张成仁', 'img/home/Selllikehotcakes4.jpg', '500.00', 'productInfo?id=101');
#首页平拍精选
CREATE TABLE `tea_store_select` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) default NULL,
  `author` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `tea_store_select` VALUES (NULL, '小罐茶【大红袍】2.0金罐10罐装', '王顺明大师作', 'img/home/select1.jpg', '500.00', 'productInfo?id=62');
INSERT INTO `tea_store_select` VALUES (NULL, '小罐茶【普洱熟茶】2.0金罐10罐装', '邹炳良大师作', 'img/home/select2.jpg', '500.00', 'productInfo?id=59');
INSERT INTO `tea_store_select` VALUES (NULL, '小罐茶【龙井茶】2.0金罐10罐装', '戚国伟大师作', 'img/home/select3.jpg', '500.00', 'productInfo?id=107');
INSERT INTO `tea_store_select` VALUES (NULL, '小罐茶【黄山毛峰】2.0金罐10罐装', '张成仁', 'img/home/select4.jpg', '500.00', 'productInfo?id=109');
INSERT INTO `tea_store_select` VALUES (NULL, '金罐经典拼装版 20罐礼盒装', '【进店必买】金罐经典拼装版 20罐礼盒装', 'img/home/select5.jpg', '1000.00', 'productInfo?id=94');
#商品列表分页
CREATE TABLE `tea_store_goodslist` (
  `pid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(64) default NULL,
  `author` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `price` decimal(10,2) default NULL,
  `href` varchar(128) default NULL,
  `tta`  varchar(32) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【滇江】24罐装', '张成仁大师作', 'img/goodslist/20170113141500_867.jpg', '1200.00', 'productInfo?id=79','红茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【滇江】2.0金罐10罐装', '张成仁大师作', 'img/goodslist/20180409154337_914.jpg', '500.00', 'productInfo?id=101','红茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【黄山毛峰】2.0金罐10罐装', '谢四十大师作', 'img/goodslist/20180408175219_425.jpg', '500.00', 'productInfo?id=108','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【狮峰龙井】2.0金罐20罐装', '戚国伟大师作', 'img/goodslist/20180409170655_371.jpg', '3000.00', 'productInfo?id=113','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【迎春套组】2.0金罐拼装20罐装', '春茶礼盒拼装', 'img/goodslist/20180409172642_172.jpg', '2000.00', 'productInfo?id=116','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【茉莉花茶】2.0银罐10罐装', '林乃荣大师作', 'img/goodslist/20180425114753_885.jpg', '248.00', 'productInfo?id=118','再加工');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【普洱熟茶】2.0银罐10罐装', '邹炳良大师作', 'img/goodslist/20180425141337_976.jpg', '248.00', 'productInfo?id=120','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【长官杯】2.0香槟色', '商务茶具', 'img/goodslist/20180524144157_266.jpg', '1280.00', 'productInfo?id=128','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【行政套】2.0香槟色', '商务茶具', 'img/goodslist/20180524144555_131.jpg', '2480.00', 'productInfo?id=129','绿茶');

INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【白毫银针】10罐装', '林振传大师作', 'img/goodslist/20180409150330_388.jpg', '500.00', 'productInfo?id=63','白茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【台湾冻顶】10罐装', '茆聪富大师作', 'img/goodslist/20180314113640_654.jpg', '500.00', 'productInfo?id=96','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【台湾高山】10罐装', '杜西铨大师作', 'img/goodslist/20180314113656_561.jpg', '500.00', 'productInfo?id=98','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【龙井茶】2.0金罐10罐装', '戚国伟大师作', 'img/goodslist/20180408175248_543.jpg', '500.00', 'productInfo?id=106','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【龙井茶】2.0金罐20罐装', '戚国伟大师作', 'img/goodslist/20180408172245_832.jpg', '1000.00', 'productInfo?id=107','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【黄山毛峰】2.0黑罐10罐装', '谢四十大师作', 'img/goodslist/20180409164749_325.jpg', '1500.00', 'productInfo?id=111','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【狮峰龙井】2.0黑罐10罐装', '戚国伟大师作', 'img/goodslist/20180409170124_639.jpg', '1500.00', 'productInfo?id=112','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【小罐绿茶】2.0金罐10罐装', '许万富大师作', 'img/goodslist/20180409171410_472.jpg', '500.00', 'productInfo?id=114','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【小罐绿茶】2.0金罐20罐装', '许万富大师作', 'img/goodslist/20180409172201_738.jpg', '1000.00', 'productInfo?id=115','绿茶');

INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【大红袍】2.0金罐10罐装', '王顺明大师作', 'img/goodslist/20180409141726_379.jpg', '500.00', 'productInfo?id=62','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '金罐经典拼装版 20罐礼盒装', '【进店必买】金罐经典拼装版 20罐礼盒装', 'img/goodslist/20180314113605_863.jpg', '1000.00', 'productInfo?id=94','再加工');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【清香铁观音】2.0金罐 10罐装', '高碰来大师作', 'img/goodslist/20180213142243_982.jpg', '500.00', 'productInfo?id=99','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【浓香铁观音】2.0金罐 10罐装', '高碰来大师作', 'img/goodslist/20180213143233_314.jpg', '500.00', 'productInfo?id=100','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【白毫银针】2.0金罐 10罐装', '林振传大师作', 'img/goodslist/20180224114721_979.jpg', '500.00', 'productInfo?id=102','白茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【普洱熟茶】2.0黑罐 10罐装', '邹炳良大师作', 'img/goodslist/20180316141032_618.jpg', '1500.00', 'productInfo?id=103','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【滇江茶】2.0黑罐 10罐装', '张成仁大师作', 'img/goodslist/20180316141653_130.jpg', '1500.00', 'productInfo?id=104','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【东方美人】2.0黑罐 10罐装', '中国台湾乌龙茶', 'img/goodslist/20180316142008_994.jpg', '1500.00', 'productInfo?id=105','绿茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【黄山毛峰】2.0黑罐 20罐装', '谢四十大师作', 'img/goodslist/20180408172302_545.jpg', '1000.00', 'productInfo?id=109','绿茶');

INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【浓香铁观音】20罐装', '高碰来大师作', 'img/goodslist/20180105182216_265.jpg', '1000.00', 'productInfo?id=67','乌龙茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【白毫银针】20罐装', '林振传大师作', 'img/goodslist/20180105181138_497.jpg', '1000.00', 'productInfo?id=74','白茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【茉莉花茶】20罐装', '林乃荣大师作', 'img/goodslist/20180105182147_771.jpg', '1000.00', 'productInfo?id=75','再加工');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【福鼎白茶】24罐装', '林振传大师作', 'img/goodslist/20170113140901_310.jpg', '1200.00', 'productInfo?id=77','白茶');
INSERT INTO `tea_store_goodslist` VALUES (NULL, '小罐茶【茉莉花茶】24罐装', '林乃荣大师作', 'img/goodslist/20170113141242_776.jpg', '1200.00', 'productInfo?id=78','再加工');

use Tea;
#商品详情
DROP TABLE IF EXISTS `tea_laptop`;
CREATE TABLE `tea_laptop` (
   `tid` INT PRIMARY KEY AUTO_INCREMENT,
   `id` int(11),  #id       
   `family_id` int(11) default NULL,      #家id     
   `title` varchar(128) default NULL,     #头部
   `price` decimal(10,2) default NULL,    #价格
   `spec` varchar(64) default NULL,       #规格
   `number` varchar(32) default NULL,     #商编
   `ingredients` varchar(32) default NULL,#配料
   `content` varchar(32) default NULL,    #净含量
   `level` varchar(32) default NULL,      #等级
   `ensure` varchar(32) default NULL,     #保质期
   `origin` varchar(32) default NULL,     #产地
   `production` varchar(32) default NULL, #生产日期
   `img1` varchar(128) default NULL,      #商品展示图片1
   `img2` varchar(128) default NULL,      #商品展示图片2
   `img3` varchar(128) default NULL,      #商品展示图片3
   `img4` varchar(128) default NULL,      #商品展示图片4
   `img5` varchar(128) default NULL,      #商品展示图片5
   `details` varchar(128) default NULL      #商品展示图
 ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- -- ----------------------------
-- -- Records of tea_laptop
-- -- ----------------------------
INSERT INTO `tea_laptop` VALUES (null,113, '1', '小罐茶【龙井茶】2.0黑罐20罐装  戚国伟大师作','3000.00','20罐装','03.02.03.01.01','茶鲜叶','80g','特级','540天','狮峰','见包装盒喷码标识','img/Goodsdetails/20180409170655_371.jpg','img/Goodsdetails/20180409170657_788.jpg','img/Goodsdetails/20180409170659_268.jpg','img/Goodsdetails/20180409170701_670.jpg','img/Goodsdetails/20180409170702_213.jpg','img/Goodsdetails/longjing1.jpg');
INSERT INTO `tea_laptop` VALUES (null,106, '1', '小罐茶【龙井茶】2.0金罐10罐装  戚国伟大师作','500.00','10罐装','03.02.01.02.09','绿茶','40g','特级','12个月','钱塘产区','见包装盒喷码标识','img/Goodsdetails/20180408175248_543.jpg','img/Goodsdetails/20180408153617_673.jpg','img/Goodsdetails/20180408153620_660.jpg','img/Goodsdetails/20180408153625_908.jpg','img/Goodsdetails/20180408153627_616.jpg','img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,107, '1', '小罐茶【龙井茶】2.0金罐20罐装  戚国伟大师作','500.00','20罐装','03.02.01.01.07','绿茶','80g','特级','12个月','钱塘产区','见包装盒喷码标识','img/Goodsdetails/20180408172245_832.jpg','img/Goodsdetails/20180408154036_447.jpg','img/Goodsdetails/20180408154038_254.jpg','img/Goodsdetails/20180408154043_975.jpg','img/Goodsdetails/20180408154042_571.jpg','img/Goodsdetails/longjing1.jpg');
INSERT INTO `tea_laptop` VALUES (null,65, '2', '小罐茶【黄山毛峰】10罐装  谢四十大师作', '500.00', '10罐装', '03.03.02', '茶鲜叶', '40g', '特级', '540天', '安徽黄山', '见包装盒喷码标识', 'img/Goodsdetails/20180409155018_251.jpg', 'img/Goodsdetails/20180307110143_398.jpg', 'img/Goodsdetails/20170113113937_380.jpg', 'img/Goodsdetails/20170113113938_241.jpg', 'img/Goodsdetails/20170113122710_664.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,70, '2', '小罐茶【黄山毛峰】20罐装  谢四十大师作', '1000.00', '20罐装', '03.02.02', '茶鲜叶', '80g', '特级', '540天', '安徽黄山', '见包装盒喷码标识', 'img/Goodsdetails/20180408172603_162.jpg', 'img/Goodsdetails/20170113120120_600.jpg', 'img/Goodsdetails/20170113120122_330.jpg', 'img/Goodsdetails/20170113120123_579.jpg', 'img/Goodsdetails/20170113122346_729.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,108, '2', '小罐茶【黄山毛峰】2.0金罐10罐装  谢四十大师作', '500.00', '10罐装', '03.02.01.02.10', '绿茶', '40g', '特级', '18个月', '安徽省黄山市', '见包装盒喷码标识', 'img/Goodsdetails/20180408175219_425.jpg', 'img/Goodsdetails/20180408154447_411.jpg', 'img/Goodsdetails/20180408154450_839.jpg', 'img/Goodsdetails/20180408154451_476.jpg', 'img/Goodsdetails/20180408154453_884.jpg', 'img/Goodsdetails/longjing1.jpg');
INSERT INTO `tea_laptop` VALUES (null,109, '2', '小罐茶【黄山毛峰】2.0金罐20罐装  谢四十大师作', '1000.00', '20罐装', '03.02.01.01.06', '茶鲜叶', '80g', '特级', '18个月', '安徽省黄山市', '见包装盒喷码标识', 'img/Goodsdetails/20180408172302_545.jpg', 'img/Goodsdetails/20180408154729_390.jpg', 'img/Goodsdetails/20180408154732_556.jpg', 'img/Goodsdetails/20180408154735_510.jpg', 'img/Goodsdetails/20180408154736_648.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,111, '2', '小罐茶【黄山毛峰】2.0黑罐10罐装  谢四十大师作', '1500.00', '10罐装', '03.02.03.02.04', '茶鲜叶', '40g', '特级', '18个月', '安徽省黄山市', '见包装盒喷码标识', 'img/Goodsdetails/20180409164749_325.jpg', 'img/Goodsdetails/20180409164750_122.jpg', 'img/Goodsdetails/20180409164752_569.jpg', 'img/Goodsdetails/20180409164754_943.jpg', 'img/Goodsdetails/20180409164756_106.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,66, '3', '小罐茶【茉莉花茶】10罐装  林乃荣大师作', '500.00', '10罐装', '03.03.09', '精选茉莉花', '40g', '特级', '1095天', '福建宁德', '见包装盒喷码标识', 'img/Goodsdetails/20180409134738_902.jpg', 'img/Goodsdetails/20170113114204_671.jpg', 'img/Goodsdetails/20170113114206_535.jpg', 'img/Goodsdetails/20170113114207_400.jpg', 'img/Goodsdetails/20170113122654_471.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,75, '3', '小罐茶【茉莉花茶】20罐装  林乃荣大师作', '1000.00', '20罐装', '03.02.09', '精选茉莉花', '80g', '特级', '540天', '福建福州', '见包装盒喷码标识', 'img/Goodsdetails/20180105182147_771.jpg', 'img/Goodsdetails/20170113121528_746.jpg', 'img/Goodsdetails/20170113121529_913.jpg', 'img/Goodsdetails/20170113121531_644.jpg', 'img/Goodsdetails/20170113122517_742.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,118, '3', '小罐茶【茉莉花茶】2.0银罐10罐装  林乃荣大师作', '248.00', '10罐装', '03.02.02.02.05', '烘青绿茶 茉莉花', '40g', '特级', '540天', '福建福州', '见包装盒喷码标识', 'img/Goodsdetails/20180425114753_885.jpg', 'img/Goodsdetails/20180425114755_146.jpg', 'img/Goodsdetails/20180425114757_633.jpg', 'img/Goodsdetails/20180425114759_105.jpg', 'img/Goodsdetails/20180425114800_644.jpg', 'img/Goodsdetails/longjing2.jpg');
INSERT INTO `tea_laptop` VALUES (null,101, '4', '小罐茶【滇红】2.0金罐 10罐装  张成仁大师作', '500.00', '10罐装', '03.02.01.02.05', '凤庆大叶种春茶', '40g', '特级', '720天', '云南省临沧', '见包装盒喷码标识', 'img/Goodsdetails/20180409154337_914.jpg', 'img/Goodsdetails/20180213144436_503.jpg', 'img/Goodsdetails/20180213144439_774.jpg', 'img/Goodsdetails/20180213144441_716.jpg', 'img/Goodsdetails/20180213144443_944.jpg', 'img/Goodsdetails/longjing3.jpg');
INSERT INTO `tea_laptop` VALUES (null,104, '4', '小罐茶【滇红】2.0黑罐10罐装  张成仁大师作', '1500.00', '10罐装', '03.02.03.02.03', '功夫红茶', '40g', '特级', '24个月', '云南省临沧市', '见包装盒喷码标识', 'img/Goodsdetails/20180316141653_130.jpg', 'img/Goodsdetails/20180316141655_944.jpg', 'img/Goodsdetails/20180316141658_639.jpg', 'img/Goodsdetails/20180316141700_354.jpg', 'img/Goodsdetails/20180316141701_538.jpg', 'img/Goodsdetails/longjing3.jpg');
INSERT INTO `tea_laptop` VALUES (null,62, '5', '小罐茶【大红袍】2.0金罐10罐装  王顺明大师作', '500.00', '10罐装', '03.02.01.02.01', '武夷岩茶', '40g', '特级', '1095天', '福建南平', '见包装盒喷码标识', 'img/Goodsdetails/20180409141726_379.jpg', 'img/Goodsdetails/20180213115028_193.jpg', 'img/Goodsdetails/20180213115035_554.jpg', 'img/Goodsdetails/20180213115037_899.jpg', 'img/Goodsdetails/20180213115038_722.jpg', 'img/Goodsdetails/longjing4.jpg');
INSERT INTO `tea_laptop` VALUES (null,69, '5', '小罐茶【大红袍】20罐装  王顺明大师作', '1000.00', '20罐装', '03.02.05', '武夷岩茶', '80g', '特级', '1095天', '福建南平', '见包装盒喷码标识', 'img/Goodsdetails/20180105180923_927.jpg', 'img/Goodsdetails/20170113115601_539.jpg', 'img/Goodsdetails/20170113115603_660.jpg', 'img/Goodsdetails/20170113115604_777.jpg', 'img/Goodsdetails/20170113122328_742.jpg', 'img/Goodsdetails/longjing5.jpg');
INSERT INTO `tea_laptop` VALUES (null,119, '5', '小罐茶【大红袍】2.0银罐10罐装  王顺明大师作', '248.00', '10罐装', '03.02.02.02.03', '乌龙茶', '40g', '特级', '1080天', '福建南平', '见包装盒喷码标识', 'img/Goodsdetails/20180425125800_328.jpg', 'img/Goodsdetails/20180425125801_375.jpg', 'img/Goodsdetails/20180425125803_903.jpg', 'img/Goodsdetails/20180425125805_910.jpg', 'img/Goodsdetails/20180425125807_513.jpg', 'img/Goodsdetails/longjing6.jpg');
INSERT INTO `tea_laptop` VALUES (null,59, '6', '小罐茶【普洱熟茶】10罐装  邹炳良大师作', '500.00', '10罐装', '03.03.08', '云南大叶种晒青毛茶', '40g', '特级', '540天', '云南安宁', '见包装盒喷码标识', 'img/Goodsdetails/20180409140149_685.jpg', 'img/Goodsdetails/20170113111823_219.jpg', 'img/Goodsdetails/20170113111825_175.jpg', 'img/Goodsdetails/20170113111827_742.jpg', 'img/Goodsdetails/20170113122555_340.jpg', 'img/Goodsdetails/longjing7.jpg');
INSERT INTO `tea_laptop` VALUES (null,73, '6', '小罐茶【普洱熟茶】20罐装  邹炳良大师作', '1000.00', '20罐装', '03.02.08', '云南大叶种晒青毛茶', '80g', '特级', '540天', '云南安宁', '见包装盒喷码标识', 'img/Goodsdetails/20180105181115_992.jpg', 'img/Goodsdetails/20170113121039_710.jpg', 'img/Goodsdetails/20170113121040_686.jpg', 'img/Goodsdetails/20170113121041_143.jpg', 'img/Goodsdetails/20170113122441_642.jpg', 'img/Goodsdetails/longjing7.jpg');
INSERT INTO `tea_laptop` VALUES (null,120, '6', '小罐茶【普洱熟茶】2.0银罐10罐装  邹炳良大师作', '248.00', '10罐装', '03.02.02.02.04', '云南大叶种晒青毛茶', '40g', '特级', '可长期保存', '云南省', '见包装盒喷码标识', 'img/Goodsdetails/20180425141337_976.jpg', 'img/Goodsdetails/20180425141338_160.jpg', 'img/Goodsdetails/20180425141340_934.jpg', 'img/Goodsdetails/20180425141342_872.jpg', 'img/Goodsdetails/20180425141344_377.jpg', 'img/Goodsdetails/longjing8.jpg');
INSERT INTO `tea_laptop` VALUES (null,128, '7', '小罐茶【长官杯】2.0香槟色  商务茶具', '1280.00', '', '', '', '', '', '', '江苏南京', '见包装盒喷码标识', 'img/Goodsdetails/20180524144157_266.jpg', 'img/Goodsdetails/20180524144202_691.jpg', 'img/Goodsdetails/20180524144203_518.jpg', 'img/Goodsdetails/20180524144205_153.jpg', 'img/Goodsdetails/20180524144207_841.jpg', 'img/Goodsdetails/longjing9.jpg');
INSERT INTO `tea_laptop` VALUES (null,129, '7', '小罐茶【行政套】2.0香槟色  商务茶具', '2480.00', '', '03.02.05.02', '骨瓷、铝合金等', '', '', '', '江苏省南京市', '见包装盒喷码标识', 'img/Goodsdetails/20180524144555_131.jpg', 'img/Goodsdetails/20180524144557_480.jpg', 'img/Goodsdetails/20180524144600_804.jpg', 'img/Goodsdetails/20180524144602_332.jpg', 'img/Goodsdetails/20180524144603_739.jpg', 'img/Goodsdetails/longjing9.jpg');
INSERT INTO `tea_laptop` VALUES (null,63, '8', '小罐茶【白毫银针】10罐装  林振传大师作', '500.00', '10罐装', '03.03.10', '白毫银针', '40g', '特级', '1095天', '福建宁德', '见包装盒喷码标识', 'img/Goodsdetails/20180409150330_388.jpg', 'img/Goodsdetails/20180314113718_346.jpg', 'img/Goodsdetails/20170928181618_574.jpg', 'img/Goodsdetails/20170928181620_666.jpg', 'img/Goodsdetails/20170928181622_291.jpg', 'img/Goodsdetails/longjing10.jpg');
INSERT INTO `tea_laptop` VALUES (null,74, '8', '小罐茶【白毫银针】20罐装  林振传大师作', '1000.00', '20罐装', '03.02.10', '白毫银针', '80g', '特级', '1095天', '福建宁德', '见包装盒喷码标识', 'img/Goodsdetails/20180105181138_497.jpg', 'img/Goodsdetails/20170113121245_112.jpg', 'img/Goodsdetails/20170113121247_113.jpg', 'img/Goodsdetails/20170113121249_222.jpg', 'img/Goodsdetails/20170113122500_457.jpg', 'img/Goodsdetails/longjing10.jpg');
INSERT INTO `tea_laptop` VALUES (null,77, '8', '小罐茶【白毫银针】24罐装  林振传大师作', '1200.00', '24罐装', '03.01.10', '白毫银针', '96g', '特级', '540天', '福建宁德', '见包装盒喷码标识', 'img/Goodsdetails/20170113140901_310.jpg', 'img/Goodsdetails/20170113140905_599.jpg', 'img/Goodsdetails/20170113140906_410.jpg', 'img/Goodsdetails/20170113140908_256.jpg', 'img/Goodsdetails/20170113140909_823.jpg', 'img/Goodsdetails/longjing10.jpg');
INSERT INTO `tea_laptop` VALUES (null,96, '9', '小罐茶【台湾冻顶】10罐装  茆聪富大师作', '500.00', '10罐装', '03.03.12', '乌龙茶', '40g', '特级', '540天', '中国台湾', '见包装盒喷码标识', 'img/Goodsdetails/20180314113640_654.jpg', 'img/Goodsdetails/20180314113641_275.jpg', 'img/Goodsdetails/20171010124129_133.jpg', 'img/Goodsdetails/20171010124131_801.jpg', 'img/Goodsdetails/20171010124134_786.jpg', 'img/Goodsdetails/longjing11.jpg');
INSERT INTO `tea_laptop` VALUES (null,98, '10', '小罐茶【台湾高山】10罐装  杜西铨大师作', '500.00', '10罐装', '03.03.13', '青心乌龙', '40g', '特级', '540天', '中国台湾', '见包装盒喷码标识', 'img/Goodsdetails/20180314113656_561.jpg', 'img/Goodsdetails/20180314113657_516.jpg', 'img/Goodsdetails/20171010124227_390.jpg', 'img/Goodsdetails/20171010124229_745.jpg', 'img/Goodsdetails/20171010124231_962.jpg', 'img/Goodsdetails/longjing11.jpg');
INSERT INTO `tea_laptop` VALUES (null,114, '11', '小罐茶【小罐绿茶】2.0金罐10罐装  许万富大师作', '500.00', '10罐装', '03.02.01.02.13', '绿茶', '40g', '特级', '540天', '', '见包装盒喷码标识', 'img/Goodsdetails/20180409171410_472.jpg', 'img/Goodsdetails/20180409171412_804.jpg', 'img/Goodsdetails/20180409171414_239.jpg', 'img/Goodsdetails/20180409171416_753.jpg', 'img/Goodsdetails/20180409171418_358.jpg', 'img/Goodsdetails/longjing1.jpg');
INSERT INTO `tea_laptop` VALUES (null,115, '11', '小罐茶【小罐绿茶】2.0金罐20罐装  许万富大师作', '1000.00', '20罐装', '03.02.01.01.08', '绿茶', '80g', '特级', '540天', '', '见包装盒喷码标识', 'img/Goodsdetails/20180409172201_738.jpg', 'img/Goodsdetails/20180409172203_264.jpg', 'img/Goodsdetails/20180409172205_600.jpg', 'img/Goodsdetails/20180409172207_117.jpg', 'img/Goodsdetails/20180409172208_826.jpg', 'img/Goodsdetails/longjing1.jpg');
INSERT INTO `tea_laptop` VALUES (null,67, '12', '小罐茶【浓香铁观音】20罐装  高碰来大师作', '1000.00', '20罐装', '03.02.04', '安溪铁观音', '80g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20180105182216_265.jpg', 'img/Goodsdetails/20171012172412_420.jpg', 'img/Goodsdetails/20170113114936_106.jpg', 'img/Goodsdetails/20171012172426_531.jpg', 'img/Goodsdetails/20171012172429_463.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,60, '12', '小罐茶【浓香铁观音】10罐装  高碰来大师作', '500.00', '10罐装', '03.03.04', '安溪铁观音', '40g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20180409154707_503.jpg', 'img/Goodsdetails/20171012172321_976.jpg', 'img/Goodsdetails/20171012172323_876.jpg', 'img/Goodsdetails/20171012172325_764.jpg', 'img/Goodsdetails/20171012172326_312.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,100, '12', '小罐茶【浓香铁观音】2.0金罐 10罐装  高碰来大师作', '500.00', '10罐装', '03.02.01.02.03', '青茶/乌龙茶', '40g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20180213143233_314.jpg', 'img/Goodsdetails/20180213143234_172.jpg', 'img/Goodsdetails/20180213143236_489.jpg', 'img/Goodsdetails/20180213143238_444.jpg', 'img/Goodsdetails/20180213143239_751.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,99, '13', '小罐茶【清香铁观音】2.0金罐 10罐装  高碰来大师作', '500.00', '10罐装', '03.02.01.02.02', '青茶/乌龙茶', '40g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20180213142243_982.jpg', 'img/Goodsdetails/20180213142245_576.jpg', 'img/Goodsdetails/20180213142247_296.jpg', 'img/Goodsdetails/20180213142249_298.jpg', 'img/Goodsdetails/20180213142251_849.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,64, '13', '小罐茶【清香铁观音】10罐装  高碰来大师作', '500.00', '10罐装', '03.03.03', '安溪铁观音', '40g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20171012171819_281.jpg', 'img/Goodsdetails/20171012171821_737.jpg', 'img/Goodsdetails/20171012171824_763.jpg', 'img/Goodsdetails/20171012171826_162.jpg', 'img/Goodsdetails/20171012171828_101.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,68, '13', '小罐茶【清香铁观音】20罐装  高碰来大师作', '1000.00', '20罐装', '03.02.03', '安溪铁观音', '80g', '特级', '540天', '福建泉州', '见包装盒喷码标识', 'img/Goodsdetails/20180105182235_946.jpg', 'img/Goodsdetails/20171012172006_470.jpg', 'img/Goodsdetails/20171012172008_605.jpg', 'img/Goodsdetails/20171012172011_688.jpg', 'img/Goodsdetails/20171012172013_736.jpg', 'img/Goodsdetails/longjing12.jpg');
INSERT INTO `tea_laptop` VALUES (null,94, '14', '金罐经典拼装版 20罐礼盒装  【进店必买】金罐经典拼装版 20罐礼盒装', '1000.00', '组合套装', '03.02.01.01.01', '', '80g', '特级', '540天', '', '见包装盒喷码标识', 'img/Goodsdetails/20180314113605_863.jpg', 'img/Goodsdetails/20180314113607_958.jpg', 'img/Goodsdetails/20180105120447_827.jpg', 'img/Goodsdetails/20180105120448_652.jpg', 'img/Goodsdetails/20180105120450_524.jpg', 'img/Goodsdetails/longjing13.jpg');
INSERT INTO `tea_laptop` VALUES (null,105, '15', '小罐茶【东方美人】2.0黑罐10罐装  中国台湾乌龙茶', '1500.00', '10罐装', '03.02.03.02.01', '乌龙茶', '40g', '特级', '24个月', '中国台湾', '见包装盒喷码标识', 'img/Goodsdetails/20180316142008_994.jpg', 'img/Goodsdetails/20180316142009_980.jpg', 'img/Goodsdetails/20180316142010_581.jpg', 'img/Goodsdetails/20180316142012_483.jpg', 'img/Goodsdetails/20180316142013_419.jpg', 'img/Goodsdetails/longjing14.jpg');
INSERT INTO `tea_laptop` VALUES (null,103, '16', '小罐茶【普洱熟茶】2.0黑罐10罐装  邹炳良大师作', '1500.00', '10罐装', '03.02.03.02.02', '云南大叶种晒青茶', '40g', '特级', '长期保存', '云南省昆明市', '见包装盒喷码标识', 'img/Goodsdetails/20180316141032_618.jpg', 'img/Goodsdetails/20180316141035_799.jpg', 'img/Goodsdetails/20180316141037_815.jpg', 'img/Goodsdetails/20180316141040_778.jpg', 'img/Goodsdetails/20180316141042_553.jpg', 'img/Goodsdetails/longjing7.jpg');

#商品统归
DROP TABLE IF EXISTS `tea_laptop_family`;
CREATE TABLE `tea_laptop_family` (
  `fid` int(11) NOT NULL auto_increment,
  `fname` varchar(32) default NULL,
  PRIMARY KEY  (`fid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tea_laptop_family
-- ----------------------------
INSERT INTO `tea_laptop_family` VALUES ('1', '小罐茶【龙井茶】');
INSERT INTO `tea_laptop_family` VALUES ('2', '小罐茶【黄山毛峰】');
INSERT INTO `tea_laptop_family` VALUES ('3', '小罐茶【茉莉花茶】');
INSERT INTO `tea_laptop_family` VALUES ('4', '小罐茶【滇红】');
INSERT INTO `tea_laptop_family` VALUES ('5', '小罐茶【大红袍】');
INSERT INTO `tea_laptop_family` VALUES ('6', '小罐茶【普洱熟茶】');
INSERT INTO `tea_laptop_family` VALUES ('7', '商务茶具');
INSERT INTO `tea_laptop_family` VALUES ('8', '小罐茶【白毫银针】');
INSERT INTO `tea_laptop_family` VALUES ('9', '小罐茶【台湾冻顶】');
INSERT INTO `tea_laptop_family` VALUES ('10', '小罐茶【台湾高山】');
INSERT INTO `tea_laptop_family` VALUES ('11', '小罐茶【小罐绿茶】');
INSERT INTO `tea_laptop_family` VALUES ('12', '小罐茶【浓香铁观音】');
INSERT INTO `tea_laptop_family` VALUES ('13', '小罐茶【清香铁观音】');
INSERT INTO `tea_laptop_family` VALUES ('14', '金罐经典拼装版');
INSERT INTO `tea_laptop_family` VALUES ('15', '小罐茶【东方美人】');
INSERT INTO `tea_laptop_family` VALUES ('16', '小罐茶【普洱熟茶】');
#购物车
DROP TABLE IF EXISTS `tea_shoppingcart_item`;
CREATE TABLE `tea_shoppingcart_item` (
  `id` int(11) NOT NULL auto_increment,
  `user_id` int(11) default NULL,
  `product_id` int(11) default NULL,
  `count` int(11) default NULL,
  `is_checked` tinyint(1) default NULL,
  PRIMARY KEY  (`iid`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xz_shoppingcart_item
-- ----------------------------
INSERT INTO `tea_shoppingcart_item` VALUES ('1', '1', '113', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('2', '1', '106', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('3', '1', '107', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('4', '1', '65', '9', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('5', '1', '109', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('13', '2', '120', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('14', '2', '103', '11', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('15', '2', '105', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('16', '2', '100', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('17', '3', '60', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('18', '3', '96', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('19', '3', '77', '97', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('20', '3', '119', '1', '1');
INSERT INTO `tea_shoppingcart_item` VALUES ('25', '3', '120', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('26', '4', '128', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('27', '4', '101', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('28', '4', '104', '1', '0');
INSERT INTO `tea_shoppingcart_item` VALUES ('29', '4', '73', '1', '0');
