import { useState } from 'react'
import { MultiSelect } from '@mantine/core'

import * as items from './items.js'

export default function Main() {
    const [category, setCategory] = useState([]);
    const [labelCategory1, setLabelsCategory1] = useState([]);
    const [category1, setCategory1] = useState([]);
    const [labelCategory2, setLabelsCategory2] = useState([]);
    const [category2, setCategory2] = useState([]);

    const onChangeCategory = (value) => {
      setCategory(value)
      let data = [];
      if (value != [])
        for (let i=0; i < value.length; i++) {
          switch (value[i]) {
            case 'Черные металлы':
              data.push(...items.darkMet);
              break;
            case 'Цветные металлы':
              data.push(...items.colorMet);
              break;
          }
        }
        setLabelsCategory1(data);
        setCategory1([]);
        setLabelsCategory2([]);
        setCategory2([]);
    }

    const onChangeCategory1 = (value) => {
      setCategory1(value)
      let data = [];
      if (value != []) {
        for (let i = 0; i < value.length; i++) {
          switch (value[i]) {
            case 'Сталь':
              data.push(...items.steelItems.map(function (item) {
                return { label: item.label + ' (сталь)', value: item.value }
              }));
              break;
            case 'Нержавейка':
              data.push(...items.stainlessSteelItems.map(function (item) {
                return { label: item.label + ' (нержавейка)', value: item.value }
              }));
              break;
            case 'Алюминий':
              data.push(...items.aluminumItems.map(function (item) {
                return { label: item.label + ' (алюминий)', value: item.value }
              }));
              break;
            case 'Медь':
              data.push(...items.copperItems.map(function (item) {
                return { label: item.label + ' (медь)', value: item.value }
              }));
              break;
            case 'Латунь':
              data.push(...items.brassItems.map(function (item) {
                return { label: item.label + ' (латунь)', value: item.value }
              }));
              break;
            case 'Бронза':
              data.push(...items.bronzeItems.map(function (item) {
                return { label: item.label + ' (бронза)', value: item.value }
              }));
              break;
            case 'Титан':
              data.push(...items.titanItems.map(function (item) {
                return { label: item.label + ' (титан)', value: item.value }
              }));
              break;
          }
        }
      }
        setLabelsCategory2(data);
        setCategory2([]);
    }

    return (
        <div>
            <MultiSelect
              data={items.categories}
              value={category}
              onChange={onChangeCategory}
              label="Категории"
              placeholder="Выберите категорию"
            />
            <MultiSelect
              data={labelCategory1}
              value={category1}
              onChange={onChangeCategory1}
              label="Категории"
              placeholder="Выберите категорию"
            />
            <MultiSelect
              data={labelCategory2}
              value={category2}
              onChange={setCategory2}
              label="Категории"
              placeholder="Выберите категорию"
            />
        </div>
    );
}