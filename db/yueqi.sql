SET NAMES UTF8;
DROP DATABASE IF EXISTS yueqi;
CREATE DATABASE yueqi CHARSET=UTF8;
USE yueqi;
/****首页轮播广告商品****/
CREATE TABLE y_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页轮播广告商品****/
INSERT INTO y_index_carousel VALUES
(NULL, 'img/index/gq_lb1.jpg','古琴1','product-details.html'),
(NULL, 'img/index/gq_lb2.jpg','古琴2','product-details.html'),
(NULL, 'img/index/gq_lb3.jpg','古琴3','product-details.html'),
(NULL, 'img/index/dz_lb1.jpg','笛子1','product-details.html'),
(NULL, 'img/index/dz_lb2.jpg','笛子2','product-details.html');
/*用户注册*/
CREATE TABLE y_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) NOT NULL DEFAULT '',
  upwd VARCHAR(32) NOT NULL DEFAULT '',
  email VARCHAR(64) NOT NULL DEFAULT '',
  phone VARCHAR(16) NOT NULL DEFAULT '',
  expire enum('1','0') NOT NULL DEFAULT '0'
);

INSERT INTO y_user VALUES(
  null,
  'tomtom',
  '123456',
  'tttooommm.@163.com',
  '18765435221',
  '0'
);
/****商品详情****/
CREATE TABLE y_laptop(
  lid INT PRIMARY KEY AUTO_INCREMENT,            #商品ID
  title VARCHAR(128) NOT NULL DEFAULT '',         #title
  shop INT NOT NULL DEFAULT 0,                    #商家
  brand INT NOT NULL DEFAULT 0,                   #品牌
  style INT NOT NULL DEFAULT 0,                   #款式
  place VARCHAR(64) NOT NULL DEFAULT '',          #产地
  ec_num VARCHAR(64) NOT NULL DEFAULT '',        #EC编号
  price DECIMAL(10,0) NOT NULL DEFAULT 0,        #本站价格
  old_price DECIMAL(10,0) NOT NULL DEFAULT 0,    #商店价格
  sold_count INT NOT NULL DEFAULT 0,             #已售
  score INT NOT NULL DEFAULT 0,                  #用户评分
  stock INT NOT NULL DEFAULT 0,                  #库存 
  promise VARCHAR(64) NOT NULL DEFAULT '',       #服务承诺
  details VARCHAR(1024) NOT NULL DEFAULT '',      #产品详细说明
  is_onsale enum('1','0') NOT NULL DEFAULT '0',   #是否促销中
  is_delete enum('1','0') NOT NULL DEFAULT '0'   #是否删除
);

/****商铺****/
CREATE TABLE y_shop(
  shop_id INT PRIMARY KEY AUTO_INCREMENT,           #商铺id
  shop_name VARCHAR(32) NOT NULL DEFAULT '',         #商铺名称
  shop_words VARCHAR(1480) NOT NULL DEFAULT '',      #商铺描述
  shop_pic VARCHAR(128) NOT NULL DEFAULT ''         #商铺大图 
);

INSERT INTO y_shop VALUES(
  null,
  '扬州天音坊',
  "'淮左名都，竹西佳处，正是“中国运河第一城”的扬州所在地，一九九六年，卢荣先生取“天籁之音”，在此创立天音琴坊，以赤忱之心得龚一先生厚爱，担任顾问，常驻指导，并赠予自己珍藏刻章为琴名（大雅与留与子孙耕）。',
  '绿竹深巷，管弦悠扬。自其初斫琴已近三十年，期间，他遍访名家，参研古籍，逢闻良材，必悉取之，视若珍宝。凡材，经百多道工序，少则两年，多则三年，琴方成。',
  '2014年，卢荣先生前往清华美院高级漆艺研修班学习，将传统与现代相融合，形成了天音独有的琴韵风格。'
  ",
  'img/gq/ty1.jpg' 
);
INSERT INTO y_shop VALUES(
  null,
  '夔音堂',
  "'北京夔音堂为当代著名古琴演奏家、斫琴家、非物质文化遗产古琴制作传承人李一凡先生所创，位于素有“京城最美乡村”之称的古文化聚集地高碑店。师从中国音乐学院博士生导师、古琴界泰斗吴文光先生',
  '而今能操者众，善斫者稀，两者皆精之人当属“文琴”李一凡。为斫好琴，遍寻良材，尝忘己身，他所制的琴，音色纯净优雅，散音奇古如钟鼓，泛音清亮如映月，按音圆润如玉珠',
  '夔，与天地同生，其光如日月，其声如雷，黄帝以其皮为鼓，声闻五百里，音动九天。以夔音为名，正是李一凡先生对古乐的无限崇敬与追求'
  ",
  'img/gq/kyt1.jpg'
);
INSERT INTO y_shop VALUES(
  null,
  '木乙琴坊',
  "'木乙琴坊，是集斫琴、维修以及弘扬传统文化为一体的古琴文化传习基地，初取木乙之名，实因琴圈混乱难抒愤懑，遂欲借东方红阳跃动之气，以木之灵，革世时之敝，斫匠心之良琴。',
  '自成立至今，一直秉承着“传承九州神韵，专业古法斫琴”的理念，为了保证琴的质量，每一张古琴从选材到成型均在北方，采用蒙布髹漆、面底整漆等创新工艺，有效地防止了琴身易裂，并保存了木材的天然品质和音色。'
  ",
  'img/gq/my1.jpg'
);
INSERT INTO y_shop VALUES(
  null,
  '东篱琴坊',
  "'东篱琴坊处关中之腹地，终南山下，八方滋养，为著名青年古琴演奏家和斫琴师高渊所立。初时，他同几位好友立志以善斫立身， 以妙指传道，继正声，开风气，遂得东篱。',
  '高渊师承有“陕西古琴文化之根”、“古琴活化石”誉名的李仲唐老先生。十多年来，其遵循古法，通过不断与各地斫琴名家的交流，潜心研析斫琴技术，又自创越王式、吴王式、流水式等，所斫之琴周期长，工艺精，不仅音色清灵松透、底韵绵远，形制比同类琴更古朴淳厚、圆润饱满，这在当今众多名家中甚是少见。'
  ",
  'img/gq/dl1.jpg'
);
INSERT INTO y_shop VALUES(
  null,
  '敦煌古琴',
  "'敦煌牌古琴产自于上海民乐一厂。1958年上海民族乐器一厂成立，坐落于上海市千年古镇七宝，建筑面积14181平方米。',
  '敦煌是中国民族乐器规模最大的生产基地，拥有多名国家级乐器制作大师，在行业业内拥有相当好的口碑，也是业界的领军企业。',
  '良好的业界信誉，强大的技术研发和经验积淀，让敦煌古琴品质一经问世，便凭借其超高性价比受到了很多琴友们的钟爱，琴界新星正冉冉升起。'
  ",
  'img/gq/dh1.jpg'
);
/****品牌****/
CREATE TABLE y_brand(
  brand_id INT PRIMARY KEY AUTO_INCREMENT,           #品牌id
  brand_name VARCHAR(32) NOT NULL DEFAULT ''         #品牌名称
);

INSERT INTO y_brand VALUES(null,'传习');
INSERT INTO y_brand VALUES(null,'大雅');
INSERT INTO y_brand VALUES(null,'鸣泉');
INSERT INTO y_brand VALUES(null,'啸月');
INSERT INTO y_brand VALUES(null,'清绝');
INSERT INTO y_brand VALUES(null,'松涛');
INSERT INTO y_brand VALUES(null,'夔音');
INSERT INTO y_brand VALUES(null,'鹤鸣');
INSERT INTO y_brand VALUES(null,'梁鸾');
INSERT INTO y_brand VALUES(null,'玲珑');
INSERT INTO y_brand VALUES(null,'普及桐木');
INSERT INTO y_brand VALUES(null,'青桐');
INSERT INTO y_brand VALUES(null,'东篱');
INSERT INTO y_brand VALUES(null,'高渊');
INSERT INTO y_brand VALUES(null,'敦煌');
INSERT INTO y_brand VALUES(null,'桐木L1');
INSERT INTO y_brand VALUES(null,'桐木L2');
INSERT INTO y_brand VALUES(null,'桐木');
/****款式****/
CREATE TABLE y_style(
  style_id INT PRIMARY KEY AUTO_INCREMENT,           #款式id
  style_name VARCHAR(32) NOT NULL DEFAULT ''          #款式名称
);

INSERT INTO y_style VALUES(null,'仲尼');
INSERT INTO y_style VALUES(null,'伏羲');
INSERT INTO y_style VALUES(null,'宣和');
INSERT INTO y_style VALUES(null,'混沌');
INSERT INTO y_style VALUES(null,'灵机');
INSERT INTO y_style VALUES(null,'竹节');
INSERT INTO y_style VALUES(null,'绿绮');
INSERT INTO y_style VALUES(null,'落霞');
INSERT INTO y_style VALUES(null,'蕉叶');
INSERT INTO y_style VALUES(null,'连珠');
INSERT INTO y_style VALUES(null,'神农');
INSERT INTO y_style VALUES(null,'连珠D1');
INSERT INTO y_style VALUES(null,'连珠D2');
INSERT INTO y_style VALUES(null,'霹雳');


CREATE TABLE y_br_list(
  sh_id INT NOT NULL DEFAULT 0,                 #商铺id
  br_id INT NOT NULL DEFAULT 0                  #品牌id
);

INSERT INTO y_br_list VALUES(1,1);
INSERT INTO y_br_list VALUES(1,2);
INSERT INTO y_br_list VALUES(1,3);
INSERT INTO y_br_list VALUES(1,4);
INSERT INTO y_br_list VALUES(1,5);
INSERT INTO y_br_list VALUES(1,6);
INSERT INTO y_br_list VALUES(2,7);
INSERT INTO y_br_list VALUES(3,8);
INSERT INTO y_br_list VALUES(3,9);
INSERT INTO y_br_list VALUES(3,10);
INSERT INTO y_br_list VALUES(3,11);
INSERT INTO y_br_list VALUES(3,12);
INSERT INTO y_br_list VALUES(4,13);
INSERT INTO y_br_list VALUES(4,14);
INSERT INTO y_br_list VALUES(5,15);
INSERT INTO y_br_list VALUES(5,16);
INSERT INTO y_br_list VALUES(5,17);
INSERT INTO y_br_list VALUES(5,18);



CREATE TABLE y_st_list(
  sh_id INT NOT NULL DEFAULT 0,                 #商铺id
  st_id INT NOT NULL DEFAULT 0                #款式id 
);

INSERT INTO y_st_list VALUES(1,1);
INSERT INTO y_st_list VALUES(1,2);
INSERT INTO y_st_list VALUES(1,3);
INSERT INTO y_st_list VALUES(1,4);
INSERT INTO y_st_list VALUES(1,5);
INSERT INTO y_st_list VALUES(1,6);
INSERT INTO y_st_list VALUES(1,7);
INSERT INTO y_st_list VALUES(1,8);
INSERT INTO y_st_list VALUES(1,9);
INSERT INTO y_st_list VALUES(1,10);
INSERT INTO y_st_list VALUES(1,11);
INSERT INTO y_st_list VALUES(2,1);
INSERT INTO y_st_list VALUES(2,2);
INSERT INTO y_st_list VALUES(2,3);
INSERT INTO y_st_list VALUES(2,5);
INSERT INTO y_st_list VALUES(2,9);
INSERT INTO y_st_list VALUES(3,1);
INSERT INTO y_st_list VALUES(3,2);
INSERT INTO y_st_list VALUES(3,4);
INSERT INTO y_st_list VALUES(3,5);
INSERT INTO y_st_list VALUES(3,9);
INSERT INTO y_st_list VALUES(4,2);
INSERT INTO y_st_list VALUES(4,4);
INSERT INTO y_st_list VALUES(4,7);
INSERT INTO y_st_list VALUES(4,12);
INSERT INTO y_st_list VALUES(4,13);
INSERT INTO y_st_list VALUES(4,14);
INSERT INTO y_st_list VALUES(5,1);
INSERT INTO y_st_list VALUES(5,2);



alter table y_laptop add tu1 VARCHAR(64) NOT NULL DEFAULT '';
alter table y_laptop add tu2 VARCHAR(64) NOT NULL DEFAULT '';
alter table y_laptop add tu3 VARCHAR(64) NOT NULL DEFAULT '';
alter table y_laptop add tu4 VARCHAR(64) NOT NULL DEFAULT '';

UPDATE y_laptop set tu2='img/gq_index/ty/ty_l51/2.jpg' WHERE lid>=1 AND lid<=9;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_l51/3.jpg' WHERE lid>=1 AND lid<=9;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_l51/4.jpg' WHERE lid>=1 AND lid<=9;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_110/2.jpg' WHERE lid>=10 AND lid<=19;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_110/3.jpg' WHERE lid>=10 AND lid<=19;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_110/4.jpg' WHERE lid>=10 AND lid<=19;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_119/2.jpg' WHERE lid>=20 AND lid<=29;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_119/3.jpg' WHERE lid>=20 AND lid<=29;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_119/4.jpg' WHERE lid>=20 AND lid<=29;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_132/2.jpg' WHERE lid>=30 AND lid<=34;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_132/3.jpg' WHERE lid>=30 AND lid<=34;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_132/4.jpg' WHERE lid>=30 AND lid<=34;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_144/2.jpg' WHERE lid>=35 AND lid<=39;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_144/3.jpg' WHERE lid>=35 AND lid<=39;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_144/4.jpg' WHERE lid>=35 AND lid<=39;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_148/2.jpg' WHERE lid>=40 AND lid<=49;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_148/3.jpg' WHERE lid>=40 AND lid<=49;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_148/4.jpg' WHERE lid>=40 AND lid<=49;

UPDATE y_laptop set tu2='img/gq_index/ty/ty_1511/2.jpg' WHERE lid>=50 AND lid<=54;
UPDATE y_laptop set tu3='img/gq_index/ty/ty_1511/3.jpg' WHERE lid>=50 AND lid<=54;
UPDATE y_laptop set tu4='img/gq_index/ty/ty_1511/4.jpg' WHERE lid>=50 AND lid<=54;

UPDATE y_laptop set tu2='img/gq_index/ky/ky_271/2.jpg' WHERE lid>=55 AND lid<=60;
UPDATE y_laptop set tu3='img/gq_index/ky/ky_271/3.jpg' WHERE lid>=55 AND lid<=60;
UPDATE y_laptop set tu4='img/gq_index/ky/ky_271/4.jpg' WHERE lid>=55 AND lid<=60;

UPDATE y_laptop set tu2='img/gq_index/ky/ky_273/2.jpg' WHERE lid>=61 AND lid<=70;
UPDATE y_laptop set tu3='img/gq_index/ky/ky_273/3.jpg' WHERE lid>=61 AND lid<=70;
UPDATE y_laptop set tu4='img/gq_index/ky/ky_273/4.jpg' WHERE lid>=61 AND lid<=70;

UPDATE y_laptop set tu2='img/gq_index/ky/ky_279/2.jpg' WHERE lid>=71 AND lid<=78;
UPDATE y_laptop set tu3='img/gq_index/ky/ky_279/3.jpg' WHERE lid>=71 AND lid<=78;
UPDATE y_laptop set tu4='img/gq_index/ky/ky_279/4.jpg' WHERE lid>=71 AND lid<=78;

UPDATE y_laptop set tu2='img/gq_index/my/my_381/2.jpg' WHERE lid>=79 AND lid<=89;
UPDATE y_laptop set tu3='img/gq_index/my/my_381/3.jpg' WHERE lid>=79 AND lid<=89;
UPDATE y_laptop set tu4='img/gq_index/my/my_381/4.jpg' WHERE lid>=79 AND lid<=89;

UPDATE y_laptop set tu2='img/gq_index/my/my_384/2.jpg' WHERE lid>=90 AND lid<=99;
UPDATE y_laptop set tu3='img/gq_index/my/my_384/3.jpg' WHERE lid>=90 AND lid<=99;
UPDATE y_laptop set tu4='img/gq_index/my/my_384/4.jpg' WHERE lid>=90 AND lid<=99;

UPDATE y_laptop set tu2='img/gq_index/my/my_399/2.jpg' WHERE lid>=100 AND lid<=109;
UPDATE y_laptop set tu3='img/gq_index/my/my_399/3.jpg' WHERE lid>=100 AND lid<=109;
UPDATE y_laptop set tu4='img/gq_index/my/my_399/4.jpg' WHERE lid>=100 AND lid<=109;

UPDATE y_laptop set tu2='img/gq_index/my/my_3102/2.jpg' WHERE lid>=110 AND lid<=119;
UPDATE y_laptop set tu3='img/gq_index/my/my_3102/3.jpg' WHERE lid>=110 AND lid<=119;
UPDATE y_laptop set tu4='img/gq_index/my/my_3102/4.jpg' WHERE lid>=110 AND lid<=119;

UPDATE y_laptop set tu2='img/gq_index/my/my_3109/2.jpg' WHERE lid>=120 AND lid<=129;
UPDATE y_laptop set tu3='img/gq_index/my/my_3109/3.jpg' WHERE lid>=120 AND lid<=129;
UPDATE y_laptop set tu4='img/gq_index/my/my_3109/4.jpg' WHERE lid>=120 AND lid<=129;

UPDATE y_laptop set tu2='img/gq_index/my/my_3125/2.jpg' WHERE lid>=130 AND lid<=139;
UPDATE y_laptop set tu3='img/gq_index/my/my_3125/3.jpg' WHERE lid>=130 AND lid<=139;
UPDATE y_laptop set tu4='img/gq_index/my/my_3125/4.jpg' WHERE lid>=130 AND lid<=139;

UPDATE y_laptop set tu2='img/gq_index/my/my_399/2.jpg' WHERE lid>=140 AND lid<=153;
UPDATE y_laptop set tu3='img/gq_index/my/my_399/3.jpg' WHERE lid>=140 AND lid<=153;
UPDATE y_laptop set tu4='img/gq_index/my/my_399/4.jpg' WHERE lid>=140 AND lid<=153;

UPDATE y_laptop set tu2='img/gq_index/dl/dl_4144/2.jpg' WHERE lid>=154 AND lid<=155;
UPDATE y_laptop set tu3='img/gq_index/dl/dl_4144/3.jpg' WHERE lid>=154 AND lid<=155;
UPDATE y_laptop set tu4='img/gq_index/dl/dl_4144/4.jpg' WHERE lid>=154 AND lid<=155;

UPDATE y_laptop set tu2='img/gq_index/dl/dl_4147/2.jpg' WHERE lid>=156 AND lid<=157;
UPDATE y_laptop set tu3='img/gq_index/dl/dl_4147/3.jpg' WHERE lid>=156 AND lid<=157;
UPDATE y_laptop set tu4='img/gq_index/dl/dl_4147/4.jpg' WHERE lid>=156 AND lid<=157;

UPDATE y_laptop set tu2='img/gq_index/dl/dl_41412/2.jpg' WHERE lid>=158 AND lid<=159;
UPDATE y_laptop set tu3='img/gq_index/dl/dl_41412/3.jpg' WHERE lid>=158 AND lid<=159;
UPDATE y_laptop set tu4='img/gq_index/dl/dl_41412/4.jpg' WHERE lid>=158 AND lid<=159;

UPDATE y_laptop set tu2='img/gq_index/dl/dl_41413/2.jpg' WHERE lid>=160 AND lid<=162;
UPDATE y_laptop set tu3='img/gq_index/dl/dl_41413/3.jpg' WHERE lid>=160 AND lid<=162;
UPDATE y_laptop set tu4='img/gq_index/dl/dl_41413/4.jpg' WHERE lid>=160 AND lid<=162;

UPDATE y_laptop set tu2='img/gq_index/dl/dl_41414/2.jpg' WHERE lid>=163 AND lid<=168;
UPDATE y_laptop set tu3='img/gq_index/dl/dl_41414/3.jpg' WHERE lid>=163 AND lid<=168;
UPDATE y_laptop set tu4='img/gq_index/dl/dl_41414/4.jpg' WHERE lid>=163 AND lid<=168;

UPDATE y_laptop set tu2='img/gq_index/dh/dh_5161/2.jpg' WHERE lid>=169 AND lid<=177;
UPDATE y_laptop set tu3='img/gq_index/dh/dh_5161/3.jpg' WHERE lid>=169 AND lid<=177;
UPDATE y_laptop set tu4='img/gq_index/dh/dh_5161/4.jpg' WHERE lid>=169 AND lid<=177;


/****购物车****/
CREATE TABLE y_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT NOT NULL DEFAULT 0,                           #用户编号
  lid INT NOT NULL DEFAULT 0,                           #商品编号
  count INT NOT NULL DEFAULT 0,                         #购买数量
  is_checked enum('1','0') NOT NULL DEFAULT '0'    #是否已勾选，确定购买
);





