import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-selected-sub-categories',
  templateUrl: './selected-sub-categories.component.html',
  styleUrls: ['./selected-sub-categories.component.scss']
})
export class SelectedSubCategoriesComponent implements OnInit, OnDestroy {
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
  };

  subCategoriesItems: any = {
    'Автомобили' : [ 'Audi', 'BMW', 'Chery', 'ВАЗ (LADA)', 'ГАЗ', 'ЗАЗ'],
    'Мотоциклы и мототехника': []
  }

  title!: string;
  private subscription!: Subscription;

  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.activateRoute.params.subscribe(
      (params) => (this.title = params['id'])
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
