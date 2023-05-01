import category from './category.json';
import {ICategory} from "./types";

console.log(category)

export const findCategoryById = (categoryId: string): ICategory | undefined => {
    return category.find(c => c.id === categoryId)
}
export const getAllCategories = (): ICategory[] => {
    return category;
}
export const getAllCategoriesIds = (): Array<string> => {
    return category.map(c => c.id)
}
export const getAllCategoriesNames = (): Array<string> => {
    return category.map(c => c.name)
}
