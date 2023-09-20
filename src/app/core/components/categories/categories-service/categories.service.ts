import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CategoriesService {
  constructor() {}

  category: BehaviorSubject<string> = new BehaviorSubject<string>('');
  category$: Observable<string> = this.category.asObservable();

  categoriesData: string[] = [
    'Транспорт',
    'Недвижимость',
    'Работа',
    'Услуги',
    'Личные вещи',
    'Для дома и дачи',
    'Автозапчасти и аксессуары',
    'Электроника',
    'Хобби и отдых',
    'Животные',
    'Бизнес и оборудование',
  ]; //mock data

  subCategoriesData: any = {
    Транспорт: [
      'Автомобили',
      'Мотоциклы и мототехника',
      'Грузовики и спецтехника',
      'Водный транспорт',
      'Запчасти и аксессуары',
    ],

    Недвижимость: [
      'Квартира',
      'Комната',
      'Дом, дача, коттедж',
      'Земельный участок',
      'Гараж и машиноместо',
      'Коммерческая недвижимость',
      'Недвижимость за рубежом',
    ],

    Работа: ['Ищу работу', 'Ищу сотрудника'],

    Услуги: [
      'Транспорт, перевозки',
      'Обучение, курсы',
      'Ремонт и отделка',
      'Деловые услуги ',
    ],

    'Личные вещи': [
      'Одежда, обувь, аксессуары',
      'Красота и здоровье',
      'Детская одежда и обувь',
      'Часы и украшения',
      'Товары для детей и игрушки ',
    ],

    'Для дома и дачи': [
      'Ремонт и строительство ',
      'Бытовая техника',
      'Мебель и интерьер',
      'Посуда и товары для кухни',
    ],
    'Автозапчасти и аксессуары': [
      'Запчасти ',
      'Инструменты',
      'Шины, диски и колёса',
      'Прицепы',
    ],

    Электроника: [
      'Телефоны',
      'Настольные компьютеры',
      'Аудио и видео',
      'Фототехника',
    ],

    Животные: [
      'Собаки',
      'Кошки',
      'Птицы',
      'Аквариум',
      'Другие животные',
      'Товары для животных',
    ],
    'Бизнес и оборудование': ['Готовый бизнес', 'Оборудование для бизнеса'],
  }; //mock data

  subCategoriesItems: any = {
    Автомобили: [],
    'Мотоциклы и мототехника': [
      'Вездеходы',
      'Картинг',
      'Квадроциклы и багги',
      'Мопеды и скутеры',
      'Мотоциклы',
      'Снегоходы',
    ],
    'Грузовики и спецтехника': [
      'Автобусы',
      'Автодома',
      'Автокраны',
      'Бульдозеры',
      'Грузовики',
    ],

    'Водный транспорт': [
      'Вёсельные лодки',
      'Гидроциклы',
      'Катера и яхты',
      'Моторные лодки и моторы',
    ],
    'Запчасти и аксессуары': [
      'Запчасти',
      'Шины, диски и колёса',
      'Аудио- и видеотехника',
      'Аксессуары',
      'Тюнинг',
    ],
  }; //mock data

  changeCategory(category: string) {
    this.category.next(category);
  }
}
