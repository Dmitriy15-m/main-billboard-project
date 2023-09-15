import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  subCategories: any = [];

  categoriesData: any = [
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
  ]; // mock data

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
  }; // mock data

  myForm: FormGroup = new FormGroup({
    categories: new FormControl('', [Validators.required]),
    subCategory: new FormControl(''),
  });

  onChangeCategories() {
    console.log(this.myForm);
    let category = this.myForm.get('categories')?.value;
    this.subCategories = this.getSubCategory(category);
  }

  onChangeSubCategory() {}
  getSubCategory(category: string) {
    return this.subCategoriesData[category];
  }
}
