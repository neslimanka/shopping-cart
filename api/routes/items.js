const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  let cart = req.session.cart ? req.session.cart : [];
  let totalPrice = 0.0;
  cart.forEach((i) => {
    totalPrice += i.totalPrice;
  });

  res.status(200).json({
    totalPrice,
    cart,
    items: [
      {
        id: 1,
        name: "Nisan Yağmuru",
        price: 64,
        author: "Emine Işınsu",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0001913433001-1.jpg",
      },
      {
        id: 2,
        name: "Kuyucaklı Yusuf",
        price: 17,
        author: "Sabahattin Ali",
        src: "https://i.dr.com.tr/cache/500x400-0/originals/0001851635001-1.jpg",
      },
      {
        id: 3,
        name: "Simyacı",
        price: 45,
        author: "Paulo Coelho",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064552-1.jpg",
      },
      {
        id: 4,
        name: "Gece Yarısı Kütüphanesi",
        price: 58,
        author: "Matt Haig",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0001922926001-1.jpg",
      },
      {
        id: 5,
        name: "Atomik Alışkanlıklar",
        price: 55,
        author: "James Clear",
        src: "https://cdn.dsmcdn.com/ty11/product/media/images/20201019/14/17344532/70464975/1/1_org_zoom.jpg",
      },
      {
        id: 6,
        name: "Stoacı'nın Günlüğü",
        price: 50,
        author: "Ryan Holiday ",
        src: "https://cdn.akakce.com/z/-/pegasus-yayinlari-stoacinin-gunlugu-kendine-hakim-olma-sabir-ve-bilgelik-uzerine-366-dusunce.jpg",
      },
      {
        id: 7,
        name: "Var mısın?",
        price: 35,
        author: "Doğan Cüceloğlu",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0001903548001-1.jpg",
      },
      {
        id: 8,
        name: "Düş Dokumacısı",
        price: 52,
        author: "Douwe Draaisma",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0000000672088-1.jpg",
      },
      {
        id: 9,
        name: "Bilinçaltının Gücü",
        price: 35,
        author: "Joseph Murphy",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0001831154001-1.jpg",
      },
      {
        id: 10,
        name: "Walden-Ormanda Yaşam",
        price: 40,
        author: "Henry David Thoreau",
        src: "https://i.dr.com.tr/cache/600x600-0/originals/0001850300001-1.jpg",
      },
    ],
  });
});

module.exports = router;
