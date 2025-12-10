const translations = {
    ru: {
        home: "Главная",
        catalog: "Каталог",
        cart: "Корзина",
        popular: "Популярные товары",
        addToCart: "В корзину",
        price: "Цена",
        currency: "₸",
        heroTitle: "Элегантность в каждой детали",
        heroSubtitle: "Новая коллекция женской одежды для твоего неповторимого стиля",
        shopNow: "Смотреть каталог",
        cartTitle: "Ваша корзина",
        emptyCart: "Корзина пуста",
        total: "Итого",
        checkout: "Оформить заказ",
        footerText: "© 2024 Магазин женской одежды. Все права защищены."
    },
    kk: {
        home: "Басты бет",
        catalog: "Каталог",
        cart: "Себет",
        popular: "Танымал тауарлар",
        addToCart: "Себетке қосу",
        price: "Бағасы",
        currency: "₸",
        heroTitle: "Әр бөлшектегі талғампаздық",
        heroSubtitle: "Сіздің қайталанбас стиліңіз үшін жаңа әйелдер киім топтамасы",
        shopNow: "Каталогты көру",
        cartTitle: "Сіздің себетіңіз",
        emptyCart: "Себет бос",
        total: "Барлығы",
        checkout: "Тапсырыс беру",
        footerText: "© 2024 Әйелдер киім дүкені. Барлық құқықтар қорғалған."
    },
    en: {
        home: "Home",
        catalog: "Catalog",
        cart: "Cart",
        popular: "Popular Products",
        addToCart: "Add to Cart",
        price: "Price",
        currency: "₸",
        heroTitle: "Elegance in Every Detail",
        heroSubtitle: "New collection of women's clothing for your unique style",
        shopNow: "Shop Now",
        cartTitle: "Your Cart",
        emptyCart: "Cart is empty",
        total: "Total",
        checkout: "Checkout",
        footerText: "© 2024 Women's Clothing Store. All rights reserved."
    }
};

const products = [
    {
        id: 1,
        name: {
            ru: "Платье 'Нежность'",
            kk: "'Нәзіктік' көйлегі",
            en: "'Tenderness' Dress"
        },
        price: 15000,
        image: "images/dress.png",
        category: "dresses",
        popular: true
    },
    {
        id: 2,
        name: {
            ru: "Блузка 'Офис'",
            kk: "'Офис' блузкасы",
            en: "'Office' Blouse"
        },
        price: 8500,
        image: "images/blouse.png",
        category: "tops",
        popular: true
    },
    {
        id: 3,
        name: {
            ru: "Юбка Миди",
            kk: "Миди белдемшесі",
            en: "Midi Skirt"
        },
        price: 12000,
        image: "images/skirt.png",
        category: "bottoms",
        popular: true
    },
    {
        id: 4,
        name: {
            ru: "Кардиган Вязаный",
            kk: "Тоқылған кардиган",
            en: "Knitted Cardigan"
        },
        price: 18000,
        image: "images/cardigan.png",
        category: "outerwear",
        popular: true
    },
    {
        id: 5,
        name: {
            ru: "Брюки Палаццо",
            kk: "Палаццо шалбары",
            en: "Palazzo Pants"
        },
        price: 14500,
        image: "images/pants.png",
        category: "bottoms",
        popular: false
    },
    {
        id: 6,
        name: {
            ru: "Топ Шелковый",
            kk: "Жібек топ",
            en: "Silk Top"
        },
        price: 6000,
        image: "https://placehold.co/400x500/C7CEEA/333333?text=Top",
        category: "tops",
        popular: true
    }
];
