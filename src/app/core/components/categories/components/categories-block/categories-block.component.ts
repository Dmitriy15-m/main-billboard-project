import { Component } from '@angular/core';

@Component({
  selector: 'app-categories-block',
  templateUrl: './categories-block.component.html',
  styleUrls: ['./categories-block.component.scss'],
})
export class CategoriesBlockComponent {
  categoriesData: string [] = [
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
  ];
}
