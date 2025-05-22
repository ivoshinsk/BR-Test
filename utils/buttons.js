// Массив кнопок для каждой социальной сети
const socialNetworks = [
  {
    name: "HeadHunter",
    url: "https://hh.ru/employer/2588380?hhtmFrom=vacancy",
    type: "social",
  },
  { name: "Telegram", url: "https://t.me/BRVacancy", type: "social" },
  {
    name: "Сайт Рейтинг Букмекеров",
    url: "https://bookmaker-ratings.ru/",
    type: "social",
  },
  // { name: 'ДЗЕН', url: 'https://dzen.ru/filimonov-blog.ru', type: 'social' },
  // { name: 'TikTok', url: 'https://www.tiktok.com/@texno_maniak', type: 'social' },
  // { name: 'X', url: 'https://twitter.com/F1L_zZz', type: 'social' },
  // { name: 'Instagram', url: 'https://www.instagram.com/tehnomaniak_blog/', type: 'social' },
  // { name: 'Boosty', url: 'https://boosty.to/tehnomaniak', type: 'social' },
  // { name: 'GitHub', url: 'https://github.com/FilimonovAlexey', type: 'social' },
];

// Массив кнопок для каждой категории промокодов и скидок
const promoCodes = [
  {
    name: "Откликнуться на вакансию",
    url: "https://docs.google.com/forms/d/16cj2a0xDAe2YsEqYPpbx_S7pNLjo845rl4j0eeqt1i4/edit",
    code: "tehnomaniak",
    description: "Форма для заплнения данных",
    type: "promo",
  },
  // {
  //   name: "Хостинг сервера, 3 месяца в подарок",
  //   url: "https://timeweb.cloud/?i=108133",
  //   code: "super",
  //   description: "3 месяца в подарок при оплате сервера на 2 года",
  //   type: "promo",
  // },
  // {
  //   name: "Яндекс практикум, 7%",
  //   url: "https://practicum.yandex.ru/referrals/?ref_code=gAAAAABizGZbt_yK2rqrrwUrDO021HiKFOH4wJIJfdzZnf3KotvnQc7T_hpUXAJkbLMg2AVWCK5eFIT0bbxV1_w_RhqJ3GQmNw%3D%3D",
  //   code: "Не нужен, скидка предоставляет при переходе по ссылке",
  //   description: "Скидка 7% на курсы Яндекс Практикум",
  //   type: "promo",
  // },
];

module.exports = { socialNetworks, promoCodes };
