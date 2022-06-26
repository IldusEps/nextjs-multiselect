import {useState} from 'react'
import {MultiSelect} from '@mantine/core'

import * as items from './items.js'

export default function Main() {
    const [category, setCategory] = useState([]);
    const [labelCategory1, setLabelsCategory1] = useState([]);
    const [category1, setCategory1] = useState([]);
    const [labelCategory2, setLabelsCategory2] = useState([]);
    const [category2, setCategory2] = useState([]);

    const onChangeCategory = (value) => {
        setCategory(value);
        let data = [];
        if (value != [])
            for (let i = 0; i < value.length; i++) {
                if (value[i] == 'Черные металлы')
                    data.push(...items.darkMet)
                else if (value[i] == 'Цветные металлы')
                    data.push(...items.colorMet);
            }

        setLabelsCategory1(data);
        if (category1.length != 0) {
            const catg1 = category1.filter((item) => {
                for (let i = 0; i < data.length; i++) {
                    if (item == data[i].value)
                        return true;
                }
            })
            setCategory1(catg1);

            if (category2.length != 0)
                onChangeCategory1(catg1);
        }
    }

    function materialAdd(array, line) {
        return array.map(function (item) {
            return {label: item.label + ` (${line})`, value: item.value + ` (${line})`}
        })
    }

    const onChangeCategory1 = (value) => {
        setCategory1(value)
        let data = [];
        if (value != []) {
            for (let i = 0; i < value.length; i++) {
                if (value[i] == 'Сталь')
                    data.push(...materialAdd(items.steelItems, 'Сталь'))
                else if (value[i] == 'Нержавейка')
                    data.push(...materialAdd(items.stainlessSteelItems, 'Нержавейка'))
                else if (value[i] == 'Алюминий')
                    data.push(...materialAdd(items.aluminumItems, 'Алюминий'))
                else if (value[i] == 'Медь')
                    data.push(...materialAdd(items.copperItems, 'Медь'))
                else if (value[i] == 'Латунь')
                    data.push(...materialAdd(items.brassItems, 'Латунь'))
                else if (value[i] == 'Бронза')
                    data.push(...materialAdd(items.bronzeItems, 'Бронза'))
                else if (value[i] == 'Титан')
                    data.push(...materialAdd(items.titanItems, 'Титан'));
            }
        }

        setLabelsCategory2(data);
        if (category2.length != 0)
            setCategory2(category2.filter((item) => {
                for (let i = 0; i < data.length; i++) {
                    if (item == data[i].value)
                        return true;
                }
            }));
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