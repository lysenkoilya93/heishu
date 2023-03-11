import banjan from "/src/assets/banchzhan-gu-shu-2006.jpg";
import minhao from "/src/assets/minhao-czinmaj-guntin-2010.jpg";
import ulanshan from "/src/assets/ulanshan_2017.jpg";
import guynhao from "/src/assets/guynhao_2016.jpg";
import unjen from "/src/assets/unjen2.jpg";
import baodin from "/src/assets/Baodin.jpg";
import datsanshan from "/src/assets/datsanshan.jpg";
import huizhi from "/src/assets/huizhi.jpg";
import zenvei from "/src/assets/zenvei.jpg";
import menku from "/src/assets/menku.jpg";
import banjansyao from "/src/assets/banjansyao.jpg";
import sinE from "/src/assets/sinE.jpg";
import zunjunhao from "/src/assets/zunjunhao.jpg";
import guchayuan from "/src/assets/guchayuan.jpg";
import shentai from "/src/assets/shentai.jpg";
import unjensancha from "/src/assets/unjensancha.jpg";
import tzitzai from "/src/assets/tzitzai.jpg";
import syaotcingan from "/src/assets/syaotcingan.jpg";
import huanzin from "/src/assets/huanzin.jpg";
import limin from "/src/assets/limin.jpg";
import dazinya from "/src/assets/dazinya.jpg";

const teaList = [
  {
    id: 0,
    name: "Уляншань Шу 2017",
    about: "Дымно-сухофруктовый в аромате, рассыпчатый во вкусе",
    image: ulanshan,
    feature: "smoky date",
    price: "800"
  },
  {
    id: 1,
    name: "Минхао Цзинмай Гунтин 2010",
    about:
      "Брутальный аромат - подвально-костровые тона, во вкусе больше классического гунтинового",
    image: minhao,
    feature: "specific",
    price: "1000"
  },
  {
    id: 3,
    name: "Банчжан Гу Шу 2006",
    about:
      "Выдержанный шу классического типа. Мускус, древесные тона. Еловые ветки",
    image: banjan,
    feature: "classic",
    price: "900"
  },
  {
    id: 4,
    name: "Гуцзюньхао Баньчжан Да Шу 2016",
    about:
      "Шу новой школы - выраженные ягодные тона, колбасный сыр. Интересное, запоминающееся сочетание",
    image: guynhao,
    feature: "new style",
    price: "750"
  },
  {
    id: 5,
    name: "Юн Чжень Чжуань Ча 2016",
    about:
      "Гунтин начального уровня, без огрехов, с понятный профилем - шоколад, какао. Сильно лучше, чем можно было ждать за его цену",
    image: unjen,
    feature: "good start",
    price: "375"
  },
  {
    id: 6,
    name: "Баодин Жичу (Восход) 2018",
    about: "Будем пробовать",
    image: baodin,
    feature: "unknown",
    price: "600"
  },
  {
    id: 7,
    name: "Дацаншань Чэнь Сян",
    about: "Будем пробовать",
    image: datsanshan,
    feature: "unknown",
    price: "650"
  },
  {
    id: 8,
    name: "Мэнхай Сяншань Хуэйчжи 2018",
    about: "Будем пробовать",
    image: huizhi,
    feature: "unknown",
    price: "650"
  },
  {
    id: 9,
    name: "Мэнхай Чжэн Вэй",
    about: "Будем пробовать",
    image: zenvei,
    feature: "unknown",
    price: "650"
  },
  {
    id: 10,
    name: "Мэнку Му Е Чунь 001 2022",
    about: "Будем пробовать",
    image: menku,
    feature: "unknown",
    price: "700"
  },
  {
    id: 11,
    name: "Сяо Баньчжан 2019",
    about: "Будем пробовать",
    image: banjansyao,
    feature: "unknown",
    price: "750"
  },
  {
    id: 12,
    name: "Мэнхай Син И Чунь Сян 2012",
    about: "Будем пробовать",
    image: sinE,
    feature: "unknown",
    price: "800"
  },
  {
    id: 13,
    name: "Цзюньчжунхао Улян Чжицзун 2015",
    about: "Будем пробовать",
    image: zunjunhao,
    feature: "unknown",
    price: "800"
  },
  {
    id: 14,
    name: "Гучаюань Мицзин Гу Ча 2021",
    about: "Будем пробовать",
    image: guchayuan,
    feature: "unknown",
    price: "850"
  },
  {
    id: 15,
    name: "Баньчжан Шэнтай Бин 2005",
    about: "Будем пробовать",
    image: shentai,
    feature: "unknown",
    price: "1000"
  },
  {
    id: 16,
    name: "Юнь Чжэнь Сянь Ча 2014",
    about: "Будем пробовать",
    image: unjensancha,
    feature: "unknown",
    price: "1000"
  },
  {
    id: 17,
    name: "Юй Сянь Ци Цай 2010",
    about: "Будем пробовать",
    image: tzitzai,
    feature: "unknown",
    price: "1000"
  },
  {
    id: 18,
    name: "Сяоцингань Шу (гунтин в зелёном мандарине)",
    about: "Будем пробовать",
    image: syaotcingan,
    feature: "unknown",
    price: "1300"
  },
  {
    id: 19,
    name: "Хуанцзинь Е 2018",
    about: "Будем пробовать",
    image: huanzin,
    feature: "unknown",
    price: "1300"
  },
  {
    id: 20,
    name: "Лимин Бацзяотин 7590 2010",
    about: "Будем пробовать",
    image: limin,
    feature: "unknown",
    price: "1300"
  },
  {
    id: 21,
    name: "Цзайдэхао Гунтин Да Цзинь Я 2011",
    about: "Будем пробовать",
    image: dazinya,
    feature: "unknown",
    price: "1300"
  }
];

export default teaList;
